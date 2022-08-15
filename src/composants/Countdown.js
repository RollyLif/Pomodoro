function Countdown({sess, paus}) {
  const session = sess;
  const pause= paus;
    return (
      <div className="Countdown">
        <h4 className="title_session">session</h4>
        <p className="timer"> {session} : {pause}</p>
        
      </div>
    );
  }
  
  export default Countdown;