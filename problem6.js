let evenArr = []
let evenArrIndex = 0
let oddArr = []
let oddArrIndex = 0
arr = [1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,18]
for(let i=0; i<arr.length; i++)
  {
    if(arr[i]%2===0)
    {
      evenArr[evenArrIndex++] = arr[i]
    }
    else
    {
      oddArr[oddArrIndex++] = arr[i]
    }
  }
console.log(evenArr)
console.log(oddArr)