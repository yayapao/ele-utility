// array
export function shuffle<X extends Array<any>>(array: X): X

// browser
export function excopy(data: string, callback: () => void): void
export function geuuid(): void
export function loadscript(src: string): Promise<any>

// hdCharts
export function geAxis(unit: string, digits?: number): {[index: string]: any}

// number
export function thsplite(value: string | number, seperator?: string): string
export function hdNumber(value: any, digits?: number): string | number

// validate
export function inDevelopment(): boolean
export function onServer(): boolean