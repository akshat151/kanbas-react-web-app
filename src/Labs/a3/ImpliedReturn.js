const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

const ImpliedReturn = () => (
  <div>
    <h2>Implied return</h2>
    <p>fourTimesFive = {fourTimesFive}</p>
    <p>multiply(4,5) = {fourTimesFive}</p>
  </div>
);

export default ImpliedReturn;
