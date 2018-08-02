import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage'
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={}
  }

  // this is for when both servers are runnning concurrently
  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.express }))
  //     .catch(err => console.log(err));
  // }

  // callApi = async () => {
  //   const response = await fetch('/api/hello');
  //   const body = await response.json();
  //
  //   if (response.status !== 200) throw Error(body.message);
  //
  //   return body;
  // };

  // to change components
  // this.props.history.push(`/calendar`)

  // this goes above the / path
  // <Route exact path='/calendar' component={Calendar} />

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={LandingPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
