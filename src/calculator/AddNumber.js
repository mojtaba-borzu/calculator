import React, {useState} from 'react';


function AddNumber () {
  const [equal, setEqual] = useState ([]);
  const[numOne,setNumOne]=useState()
   const[numTwo,setNumTwo]=useState()
   const[equalMathOne,setEqualMathOne]=useState('')
   const[toClear,setToClear]=useState(1)

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

      inputNumOne =(inputNumOne.split('')).reverse()
      inputNumTwo =(inputNumTwo.split('')).reverse()
   const   inputField=()=>{
        numberOne=inputNumOne
        numberTwo=inputNumTwo
        return (numberOne , numberTwo)

      }
      const changeInput=()=>{
        numberOne=inputNumTwo
        numberTwo=inputNumOne
        return (numberOne , numberTwo)

      }
  ((inputNumOne.length >= inputNumTwo.length)? inputField():changeInput())   



    
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
        
          
 setToClear (0)
           

    };

    const refresh = ( )=>{
     
      setNumOne('')
      setNumTwo('')
      setEqual([])
      equalMath=''
      setEqualMathOne('')
     
    setToClear(1)
  

    }

    
  return (
    <div className="" >
      <form  >
     <input type="text"  value={numOne} onChange={(e)=>{setNumOne(e.target.value)}}/>
     <h3>{numOne}</h3>
     <input type="text" value={numTwo} onChange={(e)=>{setNumTwo(e.target.value)}}/>
    <h3>{numTwo}</h3> 
    <h1>  {`equal = ${equal}`}</h1>
     {toClear ===0? <h1>{`scientific format = ${equal} * 10 `} <sup>{equalMathOne}</sup>   </h1>: <h1> scientific format = </h1>}
  <div>
  {toClear ===1? 
       <button className="bg-red-500 hover:bg-red-800" type="button" onClick={AddNumberTo} >
        Addition
      </button>: <button className="bg-green-400 hover:bg-green-700" type='button' onClick={refresh}>Clear</button> }
    
    </div>  
     
      </form>
    
    </div>
  );
}
export default AddNumber;
