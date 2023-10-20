

const MapFunction = () => {
    let numberArray1 = [1, 2, 3, 4, 5, 6];
    
    // Function to calculate squares
    const square = a => a * a;
    
    // Function to calculate cubes
    const cube = a => a * a * a;
    
    // Using map to calculate squares and cubes
    const squares = numberArray1.map(square);
    const cubes = numberArray1.map(cube);
  
    return (
      <div>
        <h2>Map</h2>
        <p>Squares = {squares}</p>
        <p>Cubes = {cubes}</p>
      </div>
    );
  };
  
  export default MapFunction;