function excopy(data: string, callback: () => void): void
function geuuid(): void

declare module eleUtility {
  excopy, geuuid
}

export { excopy, geuuid }
export default eleUtility
