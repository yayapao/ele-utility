// 数组千分
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
  if (decimal === '') {
    return `${negative}${int}` 
  }
  return `${negative}${int}.${decimal}`
}

// 整数保留，小数保留对应位数，非数字返回相应字符串
export function hdNumber(value: any, digits: number = 2) {
  // 整数直接返回
  if (Number.isInteger(value)) return value
  if (!value) return '-'
  return Number(value).toFixed(digits)
}
