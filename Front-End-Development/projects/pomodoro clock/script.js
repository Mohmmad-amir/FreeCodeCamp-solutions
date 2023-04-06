function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}let countDown;
class PomodoroClock extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "incrementBreakTime",



    () => {
      if (this.state.breakTime < 60 && this.state.timerIsOn === false) {
        this.setState({
          breakTime: this.state.breakTime + 1 });

      }
    });_defineProperty(this, "decrementBreakTime",


    () => {
      if (this.state.breakTime > 1 && this.state.timerIsOn === false) {
        this.setState({
          breakTime: this.state.breakTime - 1 });

      }
    });_defineProperty(this, "incrementSession",


    () => {
      if (
      this.state.sessionTime < 60 &&
      this.state.timerIsOn === false &&
      this.state.sessionTime < 9)
      {
        this.setState({
          sessionTime: this.state.sessionTime + 1,
          sessionMinutes: "0" + (parseInt(this.state.sessionTime) + 1),
          sessionSeconds: "00" });

      } else if (
      this.state.sessionTime < 60 &&
      this.state.timerIsOn === false &&
      parseInt(this.state.sessionTime) >= 9)
      {
        this.setState({
          sessionTime: this.state.sessionTime + 1,
          sessionMinutes: parseInt(this.state.sessionTime) + 1,
          sessionSeconds: "00" });

      }
    });_defineProperty(this, "decrementSession",


    () => {
      if (
      this.state.sessionTime > 1 &&
      this.state.sessionTime > 10 &&
      this.state.timerIsOn === false)
      {
        this.setState({
          sessionTime: this.state.sessionTime - 1,
          sessionMinutes: this.state.sessionMinutes - 1,
          sessionSeconds: "00" });

      } else if (this.state.sessionTime > 1 && this.state.sessionTime <= 10) {
        this.setState({
          sessionTime: this.state.sessionTime - 1,
          sessionMinutes: "0" + (this.state.sessionMinutes - 1),
          sessionSeconds: "00" });

      }
    });_defineProperty(this, "timer",


    () => {
      if (this.state.timerIsOn === false) {
        this.setState({
          timerIsOn: true });

        let seconds =
        this.state.sessionMinutes * 60 + parseInt(this.state.sessionSeconds);

        const now = Date.now();
        const then = now + seconds * 1000;

        countDown = setInterval(() => {
          const secondsLeft = Math.round((then - Date.now()) / 1000);
          if (this.state.sessionMinutes === "00" && this.state.sessionSeconds === "00") {
            document.getElementById("beep").play();
          }
          // check if we should stop it!
          if (secondsLeft < 0) {
            clearInterval(countDown);
            this.break();
            return;
          }
          //display it
          this.displayTimeLeft(secondsLeft);
        }, 1000);
      } else {
        clearInterval(countDown);
        let minuteToPause = this.state.sessionMinutes;
        let secondsToPause = this.state.sessionSeconds;
        this.setState({
          timerIsOn: false,
          sessionMinutes: minuteToPause,
          sessionSeconds: secondsToPause });

      }
    });_defineProperty(this, "displayTimeLeft",


    seconds => {
      const minutes = Math.floor(seconds / 60);
      const remainderSeconds = seconds % 60;
      if (remainderSeconds >= 10 && minutes >= 10) {
        this.setState({
          sessionMinutes: minutes,
          sessionSeconds: remainderSeconds });

      } else if (remainderSeconds <= 9) {
        this.setState({
          sessionMinutes: "0" + minutes,
          sessionSeconds: "0" + remainderSeconds });

      } else {
        this.setState({
          sessionMinutes: "0" + minutes,
          sessionSeconds: remainderSeconds });

      }
    });_defineProperty(this, "break",


    () => {
      if (this.state.pause === false) {
        if (this.state.breakTime > 9) {
          this.setState({
            session: "Break",
            sessionMinutes: this.state.breakTime,
            sessionSeconds: "00",
            timerIsOn: false,
            pause: true });

          this.timer();
        } else {
          this.setState({
            session: "Break",
            sessionMinutes: "0" + this.state.breakTime,
            sessionSeconds: "00",
            timerIsOn: false,
            pause: true });

          this.timer();
        }
      } else {
        if (this.state.sessionTime > 9) {
          this.setState({
            session: "Session",
            sessionMinutes: this.state.sessionTime,
            sessionSeconds: "00",
            timerIsOn: false,
            pause: false });

          this.timer();
        } else {
          this.setState({
            session: "Session",
            sessionMinutes: "0" + this.state.sessionTime,
            sessionSeconds: "00",
            timerIsOn: false,
            pause: false });

          this.timer();
        }
      }
    });_defineProperty(this, "resetTime",


    () => {
      clearInterval(countDown);
      this.setState({
        session: "Session",
        breakTime: 5,
        sessionTime: 25,
        sessionMinutes: 25,
        sessionSeconds: "00",
        timerIsOn: false,
        pause: false });

      document.getElementById("beep").currentTime = 0;
      document.getElementById("beep").pause();
    });this.state = { breakTime: 5, sessionTime: 25, sessionMinutes: 25, sessionSeconds: "00", timerIsOn: false, pause: false, session: "Session" };} //increment Break Time

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "container" }, /*#__PURE__*/
      React.createElement("div", { id: "clock" }, /*#__PURE__*/
      React.createElement("div", { id: "title" }, /*#__PURE__*/
      React.createElement("h4", null, "POMODORO CLOCK")), /*#__PURE__*/

      React.createElement("div", { id: "buttons" }, /*#__PURE__*/
      React.createElement("div", { id: "break-label" }, "BREAK LENGTH", /*#__PURE__*/

      React.createElement("div", { id: "break" }, /*#__PURE__*/
      React.createElement("div", {
        id: "break-decrement",
        className: "material-icons",
        onClick: () => this.decrementBreakTime() }, "remove_circle"), /*#__PURE__*/



      React.createElement("div", { id: "break-length" }, this.state.breakTime), /*#__PURE__*/
      React.createElement("div", {
        id: "break-increment",
        className: "material-icons",
        onClick: () => this.incrementBreakTime() }, "add_circle"))), /*#__PURE__*/





      React.createElement("div", { id: "session-label" }, "SESSION LENGTH", /*#__PURE__*/

      React.createElement("div", { id: "session" }, /*#__PURE__*/
      React.createElement("div", {
        id: "session-decrement",
        className: "material-icons",
        onClick: () => this.decrementSession() }, "remove_circle"), /*#__PURE__*/



      React.createElement("div", { id: "session-length" }, this.state.sessionTime), /*#__PURE__*/
      React.createElement("div", {
        id: "session-increment",
        className: "material-icons",
        onClick: () => this.incrementSession() }, "add_circle")))), /*#__PURE__*/






      React.createElement("div", { id: "timer-label" }, /*#__PURE__*/
      React.createElement("h3", null, this.state.session), /*#__PURE__*/
      React.createElement("div", { id: "time-left" }, /*#__PURE__*/
      React.createElement("audio", { id: "beep", src: "https://www.pacdv.com/sounds/interface_sound_effects/sound10.mp3", type: "audio/mp3" }),
      this.state.sessionMinutes, ":", this.state.sessionSeconds), /*#__PURE__*/

      React.createElement("div", { id: "button-timer" }, /*#__PURE__*/
      React.createElement("div", {
        id: "start_stop",
        className: "material-icons",
        onClick: () => this.timer() }, "play_circle_filled"), /*#__PURE__*/



      React.createElement("div", {
        id: "reset",
        className: "material-icons",
        onClick: () => this.resetTime() }, "replay"))))));








  }}


ReactDOM.render( /*#__PURE__*/React.createElement(PomodoroClock, null), document.getElementById("root"));
//ReactDOM.render(<PomodoroClock />, document.getElementById("root"));