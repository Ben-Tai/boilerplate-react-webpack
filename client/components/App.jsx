import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)

    let messages = [
      'Hello',
      'Howdy',
      'Hi',
      'Happy Birthday this!'
    ]

    this.state = {
      messages: messages,
      message: messages[0],
      feedback: ''
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    console.log(event.target.name)

    this.setState({
      feedback: event.target.value
    })
  }

  handleClick() {
    this.setState({
      message: this.state.messages[Math.floor(Math.random() * this.state.messages.length)]
    })
  }

  render() {
    return (
      <div>
        <h1>React development has begun! State says: {this.state.message}</h1>
        <button onClick={this.handleClick}>Change message</button>

        <br/>
        <br/>

        <p>you said: {this.state.feedback}</p>

        <form>
          <input name="feedback" type="text" onChange={this.handleChange}/>
          <input name="feedback2" type="text" onChange={this.handleChange}/>
        </form>
      </div>
    )
  }
}

export default App
