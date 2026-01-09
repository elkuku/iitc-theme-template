#!/usr/bin/env node

import fs from 'fs'

if (!fs.existsSync('build')) fs.mkdirSync('build')

const variants = {}
const options = {}

const config = JSON.parse(fs.readFileSync('plugin.json'))
let cssString = fs.readFileSync('theme/main.css', 'utf8') + '\n'

const additionalCssFiles = fs.readdirSync('theme')
    .filter(file => file.endsWith('.css'))
    .filter(file => !file.startsWith('main.css'))

if (fs.existsSync('theme/variants')) {
    const variantFiles = fs.readdirSync('theme/variants')
        .filter(file => !file.startsWith('.git'))
    variantFiles.forEach(file => {
        variants[file.replace('.css', '')] = fs.readFileSync('theme/variants/' + file, 'utf8') + '\n'
    })
}

if (fs.existsSync('theme/options')) {
    const optionFiles = fs.readdirSync('theme/options')
        .filter(file => !file.startsWith('.git'))
    optionFiles.forEach(file => {
        options[file.replace('.css', '')] = fs.readFileSync('theme/options/' + file, 'utf8') + '\n'
    })
}

additionalCssFiles.forEach(file => {
    cssString += fs.readFileSync('theme/' + file, 'utf8') + '\n'
})

const theme = {
    name: config.displayName,
    css: cssString,//.replace(/ {4}|[\r\n\t]/g, ''),
    variants: variants,
    options: options,
    preview: config.previewUrl,
}

fs.writeFileSync(
    'build/theme.json',
    JSON.stringify(theme, null, 2),
)
