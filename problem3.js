let newArr = []
let newArrIndex = 0
let intersection
let arr1 = [1,2,3,4,5,6,7,8,9,10,13,67,]
let arr2 = [2,4,6,8,9,10,45,32,68,47,21]
for(let i=0; i<arr1.length; i++)
  {
    for(let j=0; j<arr2.length; j++)
      {
        if(arr1[i] === arr2[j])
        {
          newArr[newArrIndex++] = arr1[i]
        }
      }
  }
console.log(newArr)