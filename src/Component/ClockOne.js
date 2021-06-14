import React, { Component } from 'react'


class ClockOne extends Component {
     constructor(props){
         super(props);
         this.state={date:new Date()}
     }
     componentDidMount(){
         this.timeOne=setInterval(()=>this.tick(),1000)
     }
     componentWillUnmount (){
         clearInterval(this.timeOne)
     }
     tick(){
         this.setState({
             date:new Date()
         })
     }
    render() {
        return (
            <div>
                <h2> {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default ClockOne
