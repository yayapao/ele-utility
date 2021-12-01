import { onServer } from './validate'

// copy content to clipboard
export function excopy(data: string, callback: () => void) {
  if (onServer()) {
    throw new Error('can only use in browser runtime!')
  }
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
      throw error
    }
  }
}

// 生成 uuid
export function geuuid() {
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
    throw error
  }
}

// 动态创建 script
export function loadscript(src: string): Promise<any> {
  if (onServer()) {
    throw new Error('can only use in browser runtime!')
  }
  return new Promise(function (resolve, reject) {
    let script = document.createElement('script')
    script.src = src
    script.onload = () => resolve(script)
    script.onerror = () => reject(new Error(`${src} fail to load`))
    document.head.appendChild(script)
  })
}
