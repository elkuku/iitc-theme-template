export interface Theme {
    name: string,
    css: string,
    preview: string,
    variants?: Record<string, string>,
    options?: Record<string, string>,
}

export interface ThemeInfo {
    name: string,
    preview: string,
    variants?: string[],
    options?: string[],
}

export interface Changelog {
    name: string,
    message: string,
}

export interface Info {
    name: string,
    author: string,
    version: string,
}

