import { useState, useEffect  } from "react";

function Counter(props){
    const [count, setCount] = useState(props.initialValue);
    const [count2, setCount2] = useState(props.initialValue);

    const handlerUp = ()=> {
        setCount(s => s+1);
    }
    const handlerDown = ()=> {
        setCount2(s => s-1);
    }



    useEffect(()=>{
        console.log("componentDidMount");
    },[]);

    useEffect(()=>{
        console.log("componentDidUpdate1");
    },[count]);

    useEffect(()=>{
        return () => console.log("cleanUp1");
    },[count]);

    useEffect(()=>{
        console.log("componentDidUpdate2");
    },[count2]);

    useEffect(()=>{
        return () => console.log("cleanUp2");
    },[count2]);





    return(
        <>
            <button onClick={handlerUp}>UP</button>
            <span>{count}</span>
            <button onClick={handlerDown}>Down</button>
            <span>{count2}</span>
        </>

    );
}

export default Counter;