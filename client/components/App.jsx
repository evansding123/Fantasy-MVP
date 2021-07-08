import React from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Teams from './Teams.jsx';
import Overview from './Overview.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loaded: false
    }

    this.renderPage = this.renderPage.bind(this);
  }

  componentDidMount() {
    axios.get('/players/leaders' , {
      params: {
        year: '2020'
      }
    })
    .then((response) => {
      console.log(response);
      this.setState({
        data: response.data,
        loaded: true
      });
    })
    .catch((err) => {
      console.log(err);
    })
  }


  renderPage() {
    return (
      <div>
      <Router>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/teams'>Teams</Link>
          {/* <Link to='/players'>Players</Link> */}
        </div>
        <Switch>
          <Route path="/teams">
            <Teams />
          </Route>
          <Route path="/">
            <Overview data = {this.state.data}/>
          </Route>
        </Switch>
      </Router>
      </div>
    )
  }

  render() {
    if(!this.state.loaded) {
      return (
        <div>LOADING...</div>
      )
    }
    return (
      <div>
        {this.renderPage()}
      </div>
    )
  }

}


export default App;