import SubtractExample from "./ArrowFunctions";
import MyComponent from "./ES5Functions";
import FunctionParenthesisAndParameters from "./FunctionParenthesisAndParameters";
import ImpliedReturn from "./ImpliedReturn";

function WorkingWithFunctions() {
  
    return (
      <div>
        <h2>Working With Functions</h2>
        <p>Result of adding 2 and 4: <MyComponent/></p>
        <p>Arrow function example<SubtractExample/></p>
        <p><ImpliedReturn/></p>
        <p><FunctionParenthesisAndParameters/></p>
      </div>
    );
  }
  
  export default WorkingWithFunctions;