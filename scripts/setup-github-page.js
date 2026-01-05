import fs from 'fs'

console.log('Generating GitHub page...')

const now = new Date()

const day = String(now.getDate()).padStart(2, '0')
const month = new Intl.DateTimeFormat('en', {month: 'long'}).format(now)
const year = now.getFullYear()
const formattedDate = `${day}-${month}-${year}`

fs.rmSync('gh_page', {recursive: true, force: true})
fs.mkdirSync('gh_page', {recursive: true})

fs.cpSync('github_page', 'gh_page', {recursive: true})
fs.cpSync('dist', 'gh_page/files', {recursive: true})

const fileNames = fs
    .readdirSync('dist', {withFileTypes: true})
    .filter(entry => entry.isFile())
    .map(entry => entry.name)

const metaFile = fileNames.filter(fileName => fileName.endsWith('.meta.js'))[0]
let version = 'n/a'
if (metaFile) {
    const meta = fs.readFileSync(`dist/${metaFile}`, 'utf8')
    const match = meta.match(/^\s*\/\/\s*@version\s+(.+)$/m)
    version = match ? match[1].trim() : 'n/a'
}

const pluginData = JSON.parse(
    fs.readFileSync('plugin.json', 'utf8'),
)

const links = fileNames
    .filter(name => !name.endsWith('meta.js'))
    .map(name => `<li><a href="files/${name}">${name}</a></li>`)
    .join('\n')

let template = fs.readFileSync('gh_page/index.html', 'utf8')

const projectName = pluginData.name.replace('IITC plugin: ', '')

template = template.replace('{{FILE_LINKS}}', links)
template = template.replaceAll('{{PROJECT_NAME}}', projectName)
template = template.replaceAll('{{PROJECT_VERSION}}', version)
template = template.replaceAll('{{LAST_UPDATED}}', formattedDate)
template = template.replace('{{PROJECT_DESCRIPTION}}', pluginData.description)

fs.writeFileSync('gh_page/index.html', template, 'utf8')

console.log('Finished =;)')
