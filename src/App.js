import React, { useRef, useState } from 'react';
import Github from './component/Github';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import style from "../src/component/Github.module.css"
function App() {
const [inputValue , SetInputValue]= useState("")

const inputget = useRef()

  const inputHandler =(e)=>{
    e.preventDefault()
    const searchVal = inputget.current.value
    SetInputValue(searchVal)    
  }


  return (
    <>
   <div>
      <form className={style.inputContainer} onSubmit={inputHandler}>
      <input 
      style={{textAlign:"center"}}
      type="search"
      ref={inputget}
      placeholder='Enter User Name'/>
      </form>
    </div>
    <Github inputValue={inputValue}/>
    </>
  );
}

export default App;
