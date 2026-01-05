export interface Theme {
    name: string,
    css: string,
    preview: string,
    variants?: Record<string, string>,
    options?: Record<string, string>,
}

export interface Settings {
    theme: string
    variant: string
    options: string[]
}

