import * as Plugin from 'iitcpluginkit'

// NOTE: The `themes.json` file does not exist in the repository.
// It is generated using the `scripts/create-theme-file.js` script
// @ts-expect-error we don't want to import JSON files :(
import theme from '../build/theme.json'

// @ts-expect-error we don't want to import any files :(
import changelog from '../build/changelog.txt'

// @ts-expect-error we don't want to import JSON files :(
import config from '../plugin.json'

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const PLUGIN_NAME = config.name.replace('IITC plugin: ', '') as string

import {Theme} from '../types/Types'

class Main implements Plugin.Class {

    init() {
        console.log(`${PLUGIN_NAME} ${VERSION}`)
    }

    public getTheme(): Theme {
        return theme as Theme
    }

    public getChangelog(): string {
        return changelog as string
    }
}

Plugin.Register(new Main, PLUGIN_NAME)
