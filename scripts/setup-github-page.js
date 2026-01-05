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
fs.cpSync('build', 'gh_page/files', {recursive: true})

let releaseFiles = []

if (fs.existsSync('build/release')) {
    releaseFiles = fs
        .readdirSync('build/release', {withFileTypes: true})
        .filter(entry => entry.isFile())
        .map(entry => entry.name)
}

const devFiles = fs
    .readdirSync('build/dev', {withFileTypes: true})
    .filter(entry => entry.isFile())
    .map(entry => entry.name)

const metaFile = releaseFiles.filter(fileName => fileName.endsWith('.meta.js'))[0]
let version = 'n/a'
if (metaFile) {
    const meta = fs.readFileSync(`build/release/${metaFile}`, 'utf8')
    const match = meta.match(/^\s*\/\/\s*@version\s+(.+)$/m)
    version = match ? match[1].trim() : 'n/a'
}

const pluginData = JSON.parse(
    fs.readFileSync('plugin.json', 'utf8'),
)

let releaseLinks = []
if (releaseFiles.length > 0) {
    releaseLinks = releaseFiles
        .filter(name => !name.endsWith('meta.js'))
        .map(name => `<li><a href="files/release/${name}">${name}</a></li>`)
        .join('\n')

} else {
    releaseLinks = '<li>No release yet</li>'
}

const devLinks = devFiles
    .filter(name => !name.endsWith('meta.js'))
    .map(name => `<li><a href="files/dev/${name}">${name}</a></li>`)
    .join('\n')

let template = fs.readFileSync('gh_page/index.html', 'utf8')

const projectName = pluginData.name.replace('IITC plugin: ', '')

template = template.replace('{{DEV_LINKS}}', devLinks)
    .replace('{{RELEASE_LINKS}}', releaseLinks)
    .replaceAll('{{PROJECT_NAME}}', projectName)
    .replaceAll('{{PROJECT_VERSION}}', version)
    .replaceAll('{{LAST_UPDATED}}', formattedDate)
    .replace('{{PROJECT_DESCRIPTION}}', pluginData.description)

fs.writeFileSync('gh_page/index.html', template, 'utf8')

console.log('Finished =;)')
