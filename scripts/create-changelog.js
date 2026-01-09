#!/usr/bin/env node

import {execSync} from 'node:child_process'
import {writeFileSync} from 'node:fs'
import {resolve} from 'node:path'

function getTags() {

    const gitCommand = [
        'git for-each-ref refs/tags',
        '--sort=-creatordate',
        '--format="%(refname:strip=2)%00%(contents)%00"',
    ].join(' ')

    const output = execSync(gitCommand, {
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'ignore'],
    })

    if (!output) {
        return []
    }

    const fields = output.split('\0').filter(Boolean)
    const tags = []

    for (let i = 0; i < fields.length; i += 2) {
        const name = fields[i].trim()
        const message = fields[i + 1]?.trim() ?? ''

        if (name) tags.push({name, message})
    }

    return tags
}

function writeJsonFile(data, filename = 'build/changelog.json') {
    const filePath = resolve(process.cwd(), filename)
    writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8')
    console.log(`changelog written to ${filePath}`)
}

try {
    const tags = getTags()
    writeJsonFile(tags)
} catch (err) {
    console.error('Failed to read tags:', err.message)
    process.exit(1)
}
