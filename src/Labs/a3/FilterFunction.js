

const FilterFunction = () => {
    let numberArray1 = [1, 2, 4, 5, 6];
  
    // Using filter() to find elements based on certain criteria
    const numbersGreaterThan2 = numberArray1.filter(a => a > 2);
    const evenNumbers = numberArray1.filter(a => a % 2 === 0);
    const oddNumbers = numberArray1.filter(a => a % 2 !== 0);
  
    return (
      <div>
        <h2>Filter function</h2>
        <p>numbersGreaterThan2 = {numbersGreaterThan2}</p>
        <p>evenNumbers = {evenNumbers}</p>
        <p>oddNumbers = {oddNumbers}</p>
      </div>
    );
  };
  
  export default FilterFunction;