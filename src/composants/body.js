import Countdown from "./Countdown";
import {AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import {BsFillPlayFill} from 'react-icons/bs';
import {GrPowerCycle} from 'react-icons/gr';
import { useState } from 'react';


function Body() {

  const [pause, updatePause] = useState(5)
  const [session, updateSession]= useState(25);
    return (
  
      <div className="Body">
        <section className="commande">
            <div className="nav" id="break-label">
                <h2>Break Length</h2>
                <p> <AiOutlineArrowDown id="break-decrement" onClick={() => updatePause(pause === 0 ? pause : pause-1)}/> <span id="break-length">{pause} </span> <AiOutlineArrowUp id="break-increment" onClick={() => updatePause(pause +1)}/> </p>

            </div>
            <div className="nav" id="session-label">
                <h2>Session Length</h2>
                <p> <AiOutlineArrowDown id="session-decrement" onClick={() => updateSession(session === 0 ? session : session-1)}/> <span id="session-length">{session} </span> <AiOutlineArrowUp id="session-increment" onClick={() => updateSession(session+1)}/> </p>

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