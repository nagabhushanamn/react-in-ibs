import React from 'react';
import './App.css';
import Greeting from './components/Greeting'

import PropTypes from 'prop-types'
import ActionBox from './components/ActionBox';

class App extends React.Component {
  // state = {
  //   message: 'greetings'
  // }
  constructor(props) {
    super();
    // console.log(props)
    this.state = {
      message: 'greetings'
    }
    // console.log("App :: constructor()")
  }
  changeMessage(message) {
    this.setState({ message })
  }
  render() {
    // console.log("App :: render()")
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
        {/*         
        <button onClick={e => this.changeMessage('good morning')} className="btn btn-primary">GM</button>&nbsp;
        <button onClick={e => this.changeMessage('good noon')} className="btn btn-primary">GN</button>&nbsp;
        <button onClick={e => this.changeMessage('good evening')} className="btn btn-primary">GE</button>&nbsp;
        <button onClick={e => this.changeMessage('')} className="btn btn-danger">REMOVE</button>&nbsp;
        <hr />
        {message ? <Greeting message={message} /> : null} 
        */}

        <ActionBox />


      </div>
    )
  }
  componentDidMount() {
    // console.log("App :: componentDidMount()")
    // n/w call
    // setTimeout(() => {
    //   let response = "hey react, hope u r rocking t client-side"
    //   this.setState({ message: response })
    // }, 3000);
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log("App :: componentDidUpdate()")
  // }
  // componentDidCatch() {
  //   //
  //   console.log("App :: componentDidCatch()")
  // }

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
