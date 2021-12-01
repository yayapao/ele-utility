// import { thsplite, hdNumber } from '../npm/lib/index'
import { thsplite, hdNumber, shuffle } from 'ele-utility'
const a = thsplite('111111')
const b = hdNumber(25.1)

const arr = ['hello', 'a', 'b', 'c', 'd', 'e']
const res = shuffle(arr)

console.log('Run this script success!')
console.log(res)