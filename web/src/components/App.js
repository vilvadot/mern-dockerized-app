import React, {Component} from 'react'
import './app.css'
import Title from './Title'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      message: 'Pietro rules'
    }
  }

  getMessageFromApi(){
    fetch(process.env.API_URI)
    .then(res => res.json())
    .then(data => {
      this.setState({
        message: data.message,
      })
    })
  }

  render(){
    return(
      <div>
        <Title title={this.state.message}/>
        <button onClick={() => this.getMessageFromApi()}>Get data</button>
      </div>
    )
  }
}

export default App