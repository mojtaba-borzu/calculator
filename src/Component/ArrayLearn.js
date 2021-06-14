import React from 'react'

function ArrayLearn() {
   let arr =""
  let arr0 =""
  const arr1 =["ali", "hasan" , "hosein" , "mojtaba","reza"]
  const arr2 =["davod" , "taghi", "naghi"]
  const arr3 =["goli" , "saiid"]
  const arr4 =[1,2,3,4,5,6]
  const arr5 =[7,8,9,10]

  // arr.concat(arr1 , arr2) ...
  // console.log(arr0.concat(arr1,arr2,arr3))
  // console.log(arr0.concat(arr1,1,[2,3]))

  // copywithin (index,start copy , end copy)...
  // console.log(arr4.copyWithin(1,3,5))

  // entries() ...
  // let arr =arr1.entries()
  // let x
  // for (x of arr){
  //   console.log(x)
  // }

  // every (function<array) ....
  // console.log(arr4.every((element,x) => {
  //   return element < 2
  // }))

  // fill(value,start,end) ... for create a matrix
  // console.log(arr1.fill("mojtaba" , 1 ,3))
  
  // filter(function <=> element) ....
  // console.log(arr4.filter((num)=>{
  //   return num >2
  // }))
  //console.log(arr1.filter(word => word.length>4))

  //find(function <=>) ...
  // console.log(arr4.find(x=>x>2))
  // console.log(arr1.find(name=> {return name=="mojtaba"}))

  //findIndex(function <=>) ...
  // console.log(arr4.findIndex(x=> x>2))
  // console.log(arr1.findIndex(y=> y == "hasan"))

  //forEach(function (item , index)) ...
  //arr1.forEach((item,index) =>{console.log(item,index)})
  
  //from("value") ...
  // Array.from('mojtaba')
  // console.log(arr)

  //includes("value",index) ...
  // console.log(arr1.includes("hasan"))

  //indexOf("value" , index)
  // console.log(arr1.indexOf("mojtaba"))

  //lastIndex("value" , index)
  // console.log(arr1.lastIndexOf("mojtaba"))

  //Array.isArray(Array)
  // console.log(Array.isArray(arr1))

  //join(separator)
  // console.log(arr1.join("-"))

  //keys()
  // arr0 = arr1.keys()
  // for (arr of arr0){
  //   console.log(arr)
  // }

  //lenght
  // console.log(arr1.length)

  //map(value,index)
  // console.log(arr4.map((num )=>{ return num *2 }))

  //pop() ... delete from last arguments
  // console.log(arr1)
  // console.log(arr1.pop())

  //push(value)
  // console.log(arr1.push("ghasem"))

  //Shift 
  // console.log(arr1.shift())

  //unshift
  // console.log(arr1.unshift("hesam"))
 
  //reverse 
  // console.log(arr1.reverse())

  //valueof()
  // console.log(arr1.valueOf())

  //sort ()
  // console.log(arr1.sort())

  //some(function <=>)
  // console.log(arr4.some((a)=>{
  //   return a>2
  // }))

  //slice(start,end)
  // console.log(arr1.slice(1,3))

  //splice(start,every,'value') ... cut and add
  // console.log(arr1.splice(1,0,'ghasem'))


  return (
    <div>
      {arr1}
    </div>
  )
}

export default ApArrayLearnp
