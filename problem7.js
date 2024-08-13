let arr = ["java","python","javaScript","React","Angular","Express","Bootstrap","MongoDB"]
let newArr = []
let newArrIndex = 0
for(let i=0; i<arr.length; i++)
  {
    if(arr[i].length>6)
    {
      newArr[newArrIndex++] = arr[i]
    }
  }
console.log(newArr)
