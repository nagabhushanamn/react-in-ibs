import React from 'react';
import './App.css';
import Greeting from './components/Greeting'

import PropTypes from 'prop-types'

class App extends React.Component {
  state = {
    message: 'greetings'
  }
  constructor(props) {
    super();
    // console.log(props)
    console.log("App :: constructor()")
  }
  changeMessage(message) {
    this.setState({ message })
  }
  render() {
    console.log("App :: render()")
    // this.props.title = "Nil" // illegal, bcoz props always readony
    // let title = this.props.title;
    // let trainer = this.props.trainer;
    // or
    let { title: appTitle, trainer } = this.props; // de-structuring ( es6 )
    let { message } = this.state;
    return (
      <div className="container">
        <hr />
        <h1>
          {appTitle} -
          <small className="badge badge-info">{trainer}</small>
        </h1>
        <hr />
        <button onClick={e => this.changeMessage('good morning')} className="btn btn-primary">GM</button>&nbsp;
        <button onClick={e => this.changeMessage('good noon')} className="btn btn-primary">GN</button>&nbsp;
        <button onClick={e => this.changeMessage('good evening')} className="btn btn-primary">GE</button>&nbsp;
        <hr />
        <Greeting message={message} />


      </div>
    )
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  trainer: PropTypes.string
}
App.defaultProps = {
  // title: 'Unknown',
  trainer: 'Anonymous'
}


export default App;
