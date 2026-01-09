import * as Plugin from 'iitcpluginkit'

// NOTE: The following files in the build folder don't exist in the repository.
// They are generated using the scripts in the `/scripts` folder.

// @ts-expect-error we don't want to import JSON files :(
import theme from '../build/theme.json'

// @ts-expect-error we don't want to import JSON files :(
import changelog from '../build/changelog.json'

// @ts-expect-error we don't want to import JSON files :(
import plugin from '../plugin.json'

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const PLUGIN_NAME = plugin.name.replace('IITC plugin: ', '') as string

import {Changelog, Theme} from '../types/Types'

class Main implements Plugin.Class {

    init() {
        console.log(`${PLUGIN_NAME} ${VERSION}`)
    }

    public getTheme(): Theme {
        return theme as Theme
    }

    public getChangelog(): Changelog {
        return changelog as Changelog
    }
}

Plugin.Register(new Main, PLUGIN_NAME)
