import React, {useState} from 'react';

function AddNumber () {
  const [equal, setEqual] = useState ([]);
  const[numOne,setNumOne]=useState()
   const[numTwo,setNumTwo]=useState()
   const[equalMathOne,setEqualMathOne]=useState('')

   let inputNumOne =numOne
   let inputNumTwo =numTwo
   let numberOne 
   let numberTwo
   let addNum;
  let remainderNum = [];
  let addExcess = [0];
  let equalMath 
  let addNumTwo
let addExcessTwo=[0]
let endAdd=[]



    const AddNumberTo = () => {
      numberOne =(inputNumOne.split('')).reverse()
      numberTwo =(inputNumTwo.split('')).reverse()
      
// (inputNumOne.length- inputNumTwo.length)>=0 ? `${numberTwo=inputNumTwo} ${numberOne=inputNumOne}`:0
    
    console.log(inputNumOne)
    console.log(inputNumTwo)
    for (let i = 0; i < numberOne.length; i++) {
      for (let j = 0; j < numberOne.length - numberTwo.length; j++) {
        numberTwo.push ('0');
      }
      addNum = Number (numberOne[i]) + Number (numberTwo[i]);
      remainderNum.push (addNum % 10);
      addExcess.push (addNum >= 10 ? (addNum-(addNum%10))/10 : 0);
  
      addNumTwo=remainderNum[i] + addExcess[i]
      addExcessTwo.push(addNumTwo>= 10 ? (addNumTwo-(addNumTwo%10))/10 : 0)

      endAdd.push ((remainderNum[i] + addExcess[i] === 10)?0 :remainderNum[i] + addExcess[i]);
      equal.push(endAdd[i]+addExcessTwo[i])
   
         }
     
       
      equal.push (addExcess[addExcess.length - 1] === 1 ? 1 : equal.pop ());
      equalMath=equal
     
     setEqualMathOne(equalMathOne+((equalMath.length)))
               setEqual (equal.reverse ().join (''));
        
          
             

    };
    const onSubmit= ( )=>{
      setNumOne()
      setNumTwo()
      setEqual([])
      setEqualMathOne('')

    }
    
   
  return (
    <div>
      <form onSubmit={onSubmit} >
     <input type="text" value={numOne} onChange={(e)=>{setNumOne(e.target.value)}}/>
     <h3>{numOne}</h3>
     <input type="text" value={numTwo} onChange={(e)=>{setNumTwo(e.target.value)}}/>
    <h3>{numTwo}</h3> 
    <h1>  {`equal = ${equal}`}</h1>
    <h1>{`equal math = ${equal} * 10 `} <sup>{equalMathOne}</sup>   </h1>
      <button type="button" onClick={AddNumberTo}>
        ADD NUMBER
      </button>
      <button type='submit'>Clear</button>
      </form>
    
    </div>
  );
}
export default AddNumber;
