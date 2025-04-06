import { useState } from "react";

function Counter(){
    
    var [count, setCount] = useState(0)  // setCount can be anything however , should be appropriate to understand the name. useState is inbuilt function
    function inc(){
        //++count;
        //console.log(count);
        setCount(++count);  // to show the value on browser , we need to use this method .
    }
    function reset(){
        //count = 0;
        //console.log(count);
        setCount((count = 0));
    }
    function dec(){
        //--count;
        //console.log(count);
        setCount(--count);
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=> inc()}> Increament </button>
            <button onClick={()=> reset()}> Reset </button>
            <button onClick={()=> dec()}> Decreament </button>
        </div>
    );
}
export default Counter;

// State variable

