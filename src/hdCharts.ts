// 用来定制 bizcharts 的 Y 轴展示
export function geAxis(unit: string, digits: number = 2) {
  if (unit === '%') {
    return {
      label: {
        formatter(value: any) {
          if (Number.isNaN(Number(value))) return value
          const crt = Number(value)
          if (Number.isInteger(crt)) return crt
          return crt.toFixed(digits)
        },
      },
    }
  }
  return {}
}