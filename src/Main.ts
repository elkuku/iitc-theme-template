import * as Plugin from 'iitcpluginkit'

// NOTE: The following files in the build folder don't exist in the repository.
// They are generated using the scripts in the `/scripts` folder.
// @ts-expect-error we don't want to import JSON files :(
import theme from '../build/theme.json'

// @ts-expect-error we don't want to import JSON files :(
import changelog from '../build/changelog.json'

// @ts-expect-error we don't want to import JSON files :(
import plugin from '../plugin.json'
import {Changelog, Info, Theme, ThemeInfo} from '../types/Types'

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const PLUGIN_NAME = plugin.name.replace('IITC plugin: ', '') as string

class Main implements Plugin.Class {

    init() {
        console.log(`${PLUGIN_NAME} ${VERSION}`)
    }

    public getTheme(): Theme {
        return theme as Theme
    }

    public getThemeInfo(): ThemeInfo {
        const variants = theme.variants ? Object.keys(theme.variants as object) : {}
        const options = theme.options ? Object.keys(theme.options as object) : {}
        return {
            name: theme.name,
            preview: theme.preview,
            variants: variants,
            options: options,
        } as ThemeInfo
    }

    public getChangelog(): Changelog[] {
        return changelog as Changelog[]
    }

    public getInfo(): Info {
        return {
            name: plugin.displayName,
            author: plugin.author,
            version: VERSION,
        }
    }
}

Plugin.Register(new Main, PLUGIN_NAME)
