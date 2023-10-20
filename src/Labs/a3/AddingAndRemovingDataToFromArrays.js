
const AddingAndRemovingDataToFromArrays = () => {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];
  
    // Adding new items
    numberArray1.push(6);
    stringArray1.push('string3');
  
    // Removing items
    numberArray1.splice(2, 1); // remove 1 item starting at index 2
    stringArray1.splice(1, 1); // remove 1 item starting at index 1
  
    return (
      <div>
        <h2>Adding and Removing Data from Arrays Example</h2>
        <p>numberArray1 = {numberArray1}</p>
        <p>stringArray1 = {stringArray1}</p>
      </div>
    );
  };
  
  export default AddingAndRemovingDataToFromArrays;