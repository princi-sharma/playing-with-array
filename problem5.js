let arr = [2,4,5,3,8,7,5,4,2,3,7,9,8,5,6]
for(let i=0; i<arr.length; i++)
  {
    for(let j=i+1; j<arr.length; j++)
      {
        if(arr[i]===arr[j])
        {
          for(let k=j; k<arr.length-1; k++)
            {
              arr[k] = arr[k+1]
            }
          arr.length--
          j--
        }
      }
  }
var uniqueArr = [];
for (var i = 0; i < arr.length; i++) {
    uniqueArr.push(arr[i]);
}
console.log("Array after removing duplicates:", uniqueArr);