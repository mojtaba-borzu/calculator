import React, {useState} from 'react';

function AddNumber () {
  const [equal, setEqual] = useState ([]);
  const[numOne,setNumOne]=useState()
   const[numTwo,setNumTwo]=useState()
   let numberOne =numOne
   let numberTwo =numTwo
  let addNum;
  let remainderNum = [];
  let addExcess = [0];

    const AddNumberTo = () => {
    numberOne =(numberOne.split('')).reverse()
    numberTwo =(numberTwo.split('')).reverse()
    console.log(numberOne)
    console.log(numberTwo)
    for (let i = 0; i < numberOne.length; i++) {
      for (let j = 0; j < numberOne.length - numberTwo.length; j++) {
        numberTwo.push ('0');
      }
      addNum = Number (numberOne[i]) + Number (numberTwo[i]);
      remainderNum.push (addNum % 10);
      addExcess.push (addNum >= 10 ? (addNum-(addNum%10))/10 : 0);
      console.log((addNum-(addNum%10))/10 );
    equal.push ((remainderNum[i] + addExcess[i] === 10)?`${0} ${(remainderNum[i] + addExcess[i]).unshift((addNum-(addNum%10))/10)}` :remainderNum[i] + addExcess[i]);
         }
      equal.push (addExcess[addExcess.length - 1] === 1 ? 1 : equal.pop ());
    setEqual (equal.reverse ().join (''));
    };
  return (
    <div>
     <input type="text" value={numOne} onChange={(e)=>{setNumOne(e.target.value)}}/>
     <h3>{numOne}</h3>
     <input type="text" value={numTwo} onChange={(e)=>{setNumTwo(e.target.value)}}/>
    <h3>{numTwo}</h3> 
    <h1>  {`equal = ${equal}`}</h1>
      <button type="button" onClick={AddNumberTo}>
        ADD NUMBER
      </button>
    </div>
  );
}
export default AddNumber;
