function Countdown({sess, paus}) {
  const session = sess;
  const pause= paus;
    return (
      <div className="Countdown">
        <h4 id="timer-label" className="title_session">session</h4>
        <p id="time-left" className="timer"> {session} : {pause}</p>
        
      </div>
    );
  }
  
  export default Countdown;