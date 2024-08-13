let sum = 0
let newArr = []
let newArrIndex = 0
let arr1 = [14,5,7,8,9,5,2,3,7,8,4]
let arr2 = [4,6,8,4,3,2,90,6,5,3,2]
for(let i=0; i<arr1.length; i++)
  {
    for(let j=0; j<arr2.length; j++)
      {
        sum = arr1[i] + arr2[i]
        
      }
    newArr[newArrIndex++] = sum
  }
console.log("Sum of arrays : ",newArr)