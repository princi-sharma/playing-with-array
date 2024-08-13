arr = [1,2,3,4,5,6,7,8,9,11,13,17,12,14,16,19]
let primeArr = []

for(let i=0; i<arr.length; i++)
  {
    let isPrime = true
    if(arr[i]<2)
    {
      isPrime = false
    }
    else
    {
      for(j=2; j*j<=arr[i]; j++)
        {
          if(arr[i]%j===0)
            {
              isPrime = false
              break
            }
        }
    }
    if(isPrime)
    {
      primeArr.push(arr[i])
    }
  }
     
  console.log("prime number",primeArr)