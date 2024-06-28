import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerRunning = false,
    timeElapsedInSeconds:0,  
}

componentWillUnmount() {
  clearInterval(this.timeInterval)  
}

onResetTimer = () => {
  clearInterval(this.timeInterval)
  this.setState({isTimerRunning: false, timeElapsedInSeconds: 0})  
}

onStopTimer = () => {
  clearInterval(this.timeInterval)
  this.setState({isTimerRunning= false})  
}

updateTime = () => {
  this.setState(prevState => ({
    timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
  })    
}

onStartTimer = () => {
  this.timeInterval = setInterval(this.updateTime, 1000)  
}

renderSeconds = () + {
  const {timeElapsedInSeconds} = this.state
  const seconds = Math.floor(timeElapsedInSeconds % 60)

  if (seconds < 10) {
    return `0${seconds}`
  }  
  return seconds
}

renderMinutes = () => {
  const {timeElapsedInSeconds} = this.state
  const minutes = Math.floor(timeElapsedInSeconds / 60)

  if (minutes < 10) {
    return `0${minutes}`
  }
  retur minutes
}

return (
  <div className="app-container">
   <div className="stopwatch-container">
    <h1 className="stopwatch">Stopwatch</h1>
     <div className="timer-container">
      <div className="timer">
       <img
         className="timer-image"
         src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
         alt="stopwatch"
       />  
      </div>
      <h1 className="stopwatch-timer">{time}</h1>
      <div className="timer-button">
       <button
         type="button"
         className="start-button button"
         onClick={this.onStartTimer}
         disabled={isTimerRunning}
       >
         Start
       </button>  
       <button
         type="button"
         className="stop-button button"
         onClick={this.onStopTimer}
       >
       </button>
       <button
         type="button"
         className="reset-button button"
         onClick={this.onResetTimer}
       >
         Reset
       </button>    
      </div>
     </div>
    </div>
   </div> 
  )
 }
}

export default Stopwatch



     
     