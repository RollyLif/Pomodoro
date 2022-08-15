import Countdown from "./Countdown";
import {AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import {BsFillPlayFill} from 'react-icons/bs'
import {GrPowerCycle} from 'react-icons/gr'

function Body() {
    return (
      <div className="Body">
        <section className="commande">
            <div className="nav">
                <h2>Break Length</h2>
                <p> <AiOutlineArrowDown/> 5 <AiOutlineArrowUp/> </p>

            </div>
            <div className="nav">
                <h2>Session Length</h2>
                <p> <AiOutlineArrowDown/> 25 <AiOutlineArrowUp/> </p>

            </div>
            <div>

            </div>

        </section>
        <Countdown />
        <section className="Marche">
          <BsFillPlayFill/>
          <GrPowerCycle/>
        </section>
      </div>
    );
  }
  
  export default Body;