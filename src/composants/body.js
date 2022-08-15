import Countdown from "./Countdown";
import {AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import {BsFillPlayFill} from 'react-icons/bs';
import {GrPowerCycle} from 'react-icons/gr';

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
            <div className="nav">
                <h2>Break Length</h2>
                <p> <AiOutlineArrowDown onClick={decrementer(pause)}/> {pause} <AiOutlineArrowUp onClick={incrementer(pause)}/> </p>

            </div>
            <div className="nav">
                <h2>Session Length</h2>
                <p> <AiOutlineArrowDown onClick={decrementer(session)}/> {session} <AiOutlineArrowUp onClick={incrementer(session)}/> </p>

            </div>
            <div>

            </div>

        </section>
        <Countdown sess={session} paus={pause}/>
        <section className="Marche">
          <BsFillPlayFill/>
          <GrPowerCycle/>
        </section>
      </div>
    );
  }
  
  export default Body;