export default function geuuid() {
  try {
    let d = Number(new Date())
    if (window.performance && typeof window.performance.now === 'function') {
      d += performance.now()
    }
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      (c) => {
        const r = (d + Math.random() * 16) % 16 | 0
        d = Math.floor(d / 16)
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
      }
    )
    return uuid
  } catch (error) {
    throw new Error(error)
  }
}
