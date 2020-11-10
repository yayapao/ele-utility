// copy content to clipboard
export default function exCopy(data: string, callback: () => void) {
  if (document.execCommand('copy')) {
    try {
      const input = document.createElement('input')
      input.setAttribute('value', String(data))
      document.body.appendChild(input)
      input.select()
      const c = document.execCommand('copy')
      input.remove()
      if (c) {
        console.log('copy successed')
        callback && callback()
      } else {
        console.error('copy failed')
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}
