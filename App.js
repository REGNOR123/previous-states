import React,{useState} from 'react';
import './App.css'

function App()
{
    const[count,setcount]=useState(1)

    function fun()
    {
    let currnt=Math.floor(Math.random()*10)

    setcount((prev)=>{
            console.info(prev)
            return currnt
        })
    
    }
    return(
        <>
        <h1>This is Functional Component</h1>
        <h3>CURRENT STATE: {count}</h3>
        <button onClick={fun}>UPDATE</button>
        </>
    );
}
export default App