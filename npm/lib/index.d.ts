export function excopy(data: string, callback: () => void): void
export function geuuid(): void
export function thsplite(value: string | number, seperator?: string): string
export function hdNumber(value: any, digits?: number): string | number
export function loadscript(src: string): Promise<any>
// hdcharts
export function geAxis(unit: string, digits?: number): {[index: string]: any}

// support for rollup
export default {
  excopy,
  geuuid,
  thsplite,
  hdNumber,
  loadscript,
  geAxis
}