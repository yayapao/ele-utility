export function thsplite(number: string | number, seperator = ',') {
  let value = number
  if (typeof value === 'number') {
    value = String(value)
  }
  // [0] origin value [1] +/- [2] int [3] .decimal [4] decimal value
  const cells = value.match(/^(-?)(\d*)(\.(\d+))?$/)
  if (!cells || value === '-') {
    return value
  }
  const negative = cells[1]
  let int = cells[2] || '0'
  const decimal = cells[4] || ''
  int = int.replace(/\B(?=(\d{3})+(?!\d))/g, seperator)
  return `${negative}${int}.${decimal}`
}