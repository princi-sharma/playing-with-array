let arr = [23,45,34,76,54,12,98,43,0,35,31,67]
let smallestNumber = arr[0]
let largestNumber = arr[0]
for(let i=1; i<arr.length; i++)
  {
    if(arr[i]<smallestNumber)
    {
      smallestNumber = arr[i]
    }
    if(arr[i]>largestNumber)
    {
      largestNumber = arr[i]
    }
  }
console.log("Smallest number : ",smallestNumber)
console.log("Largest number : ",largestNumber)
