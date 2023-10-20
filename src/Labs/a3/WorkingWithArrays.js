import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import FilterFunction from "./FilterFunction";
import FindFunction from "./FindFunction";
import FindIndexFunction from "./FindIndex";
import ForLoops from "./ForLoops";
import JsonStringify from "./JsonStringify";
import MapFunction from "./MapFunctions";
import TemplateLiterals from "./TemplateLiterals";

var functionScoped = 2;
let blockScoped = 5;
const constant1 = functionScoped - blockScoped;
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];

let variableArray1 = [
   functionScoped,   blockScoped,
   constant1,        numberArray1,   stringArray1
];

function WorkingWithArrays() {
  
    return (
      <div>
        <h2>Working With Arrays</h2>
        <p>numberArray1 = {numberArray1}</p>
        <p>stringArray1 = {stringArray1}</p>
        <p>variableArray1 = {variableArray1}</p>
        <ArrayIndexAndLength/>
        <AddingAndRemovingDataToFromArrays/>
        <ForLoops/>
        <MapFunction/>
        <JsonStringify/>
        <FindFunction/>
        <FindIndexFunction/>
        <FilterFunction/>
        <TemplateLiterals/>
      </div>
    );
  }
  
  export default WorkingWithArrays;