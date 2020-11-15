export function loadscript(src: string): Promise<any> {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script')
    script.src = src
    script.onload = () => resolve(script)
    script.onerror = () => reject(new Error(`${src} fail to load`))
    document.head.appendChild(script)
  })
}