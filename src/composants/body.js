import Countdown from "./Countdown";
import {AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import {BsFillPlayFill} from 'react-icons/bs';
import {GrPowerCycle} from 'react-icons/gr';
import { useState } from 'react';

let pause = 6;
let session= 27;

function incrementer(value){
  return value++;
}

function decrementer(value){
  if(value>0){
    return value--;
  }
}

function Body() {
    return (
  
      <div className="Body">
        <section className="commande">
            <div className="nav" id="break-label">
                <h2>Break Length</h2>
                <p> <AiOutlineArrowDown id="break-decrement" onClick={decrementer(pause)}/> <span id="break-length">{pause} </span> <AiOutlineArrowUp id="break-increment" onClick={incrementer(pause)}/> </p>

            </div>
            <div className="nav" id="session-label">
                <h2>Session Length</h2>
                <p> <AiOutlineArrowDown id="session-decrement" onClick={decrementer(session)}/> <span id="session-length">{session} </span> <AiOutlineArrowUp id="session-increment" onClick={incrementer(session)}/> </p>

            </div>
            <div>

            </div>

        </section>
        <Countdown sess={session} paus={pause}/>
        <section className="Marche">
          <BsFillPlayFill id="start_stop"/>
          <GrPowerCycle id="reset"/>
        </section>
      </div>
    );
  }
  
  export default Body;