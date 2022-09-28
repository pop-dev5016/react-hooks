import React, { Component } from 'react'

export class Incorrentdependencyex extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }


    componentDidMount(){
        this.interval = setInterval(this.thick,1000)
    }
    
     componentWillUnmount(){
        clearInterval(this.interval)
     }


     thick = ()=>{
        this.setState({
            count:this.state.count+1
        })
     }



  render() {
    return (
      <div>{this.state.count}</div>
    )
  }
}

export default Incorrentdependencyex