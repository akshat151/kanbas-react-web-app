
const ForLoops = () => {
    let stringArray1 = ['string1', 'string3'];
    let stringArray2 = [];
  
    // Iterate over stringArray1 and transform values
    for (let i = 0; i < stringArray1.length; i++) {
      const string1 = stringArray1[i];
      stringArray2.push(string1.toUpperCase());
    }
  
    return (
      <div>
        <h2>Looping through arrays</h2>
        <p>stringArray2 = {stringArray2}</p>
      </div>
    );
  };
  
  export default ForLoops;