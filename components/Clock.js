import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        //This declared the state of time at the very beginning
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }

    //This happens when the component mount and the setInterval function get called with a call back function updateClock()
    componentDidMount() {
        this.intervalID = setInterval(() =>
            this.updateClock(),
            1000
        );
    }

    //This section clears setInterval by calling intervalID so as to optimise memory
    componentWillUnmount() {
        clearInterval(this.intervalID)
    }

    //This function set the state of the time to a new time
    updateClock() {
        this.setState({
            time: new Date().toLocaleTimeString()
        });
    }
    render() {
        return (
            <div className="Time">
                <p> {this.state.time}</p>
            </div>
        );
    }
}
export default Clock;