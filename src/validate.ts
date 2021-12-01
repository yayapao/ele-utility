export function inDevelopment(): boolean {
  return !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
}

export function onServer(): boolean {
  return (
    typeof window === 'undefined' ||
    typeof window.document === 'undefined' ||
    typeof window.document.createElement === 'undefined'
  )
}
