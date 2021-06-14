import React, {useState} from 'react';

function AddNumber () {
  const [equal, setEqual] = useState ([]);
  let numOne = '923456789';
  let numTwo = '9923478';
  let addNum;
  let remainderNum = [];
  let addExcess = [0];

  const AddNumberTo = () => {
    numOne = numOne.split ('').reverse ();
    numTwo = numTwo.split ('').reverse ();

    for (let i = 0; i < numOne.length; i++) {
      for (let j = 0; j < numOne.length - numTwo.length; j++) {
        numTwo.push ('0');
      }
      addNum = Number (numOne[i]) + Number (numTwo[i]);
      remainderNum.push (addNum % 10);
      addExcess.push (addNum >= 10 ? 1 : 0);

      equal.push (remainderNum[i] + addExcess[i]);
    }
    equal[equal.indexOf (10) + 1] = equal[equal.indexOf (10) + 1] + 1;
    equal[equal.indexOf (10)] = 0;

    equal.push (addExcess[addExcess.length - 1] === 1 ? 1 : equal.pop ());
    setEqual (equal.reverse ().join (''));
    console.log (numOne.reverse ());
    console.log (numTwo.reverse ());
    console.log (equal);
  };
  return (
    <div>
      <h1>{numOne}</h1>
      <h1> {numTwo}</h1>
      <h1>{`equal = ${equal}`}</h1>
      <button type="button" onClick={AddNumberTo}>
        ADD NUMBER
      </button>

    </div>
  );
}

export default AddNumber;
