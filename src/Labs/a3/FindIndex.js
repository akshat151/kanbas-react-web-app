const FindIndexFunction = () => {
    let numberArray1 = [1, 2, 4, 5, 6];
    let stringArray1 = ['string1', 'string3'];
  
    // Using findIndex() to find the index of specific elements
    const fourIndex = numberArray1.findIndex(a => a === 4);
    const string3Index = stringArray1.findIndex(a => a === 'string3');
  
    return (
      <div>
        <h2>FindIndex Function</h2>
        <p>fourIndex = {fourIndex}</p>
        <p>string3Index = {string3Index}</p>
      </div>
    );
  };
  
  export default FindIndexFunction;