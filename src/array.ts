// 对数组内元素进行洗牌
export function shuffle<X extends Array<any>>(array: X): X {
  let currentIndex = array.length
  let temporaryValue = null
  let randomIndex = 0

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}
