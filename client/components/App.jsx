import React from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Teams from './Teams.jsx';
import Overview from './Overview.jsx';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loaded: false,
      stat: 'points',
      team: [],
      teamCollection: [],
      id: ''
    }

    this.renderPage = this.renderPage.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleClick = this.handleClick.bind(this);
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


  handleAdd(obj) {
    this.state.team.push(obj);
    this.setState({team: [...this.state.team]})
  }

  handleClick() {
    axios.post('/teams/post', {
      data: this.state.team
    })
    .then((response) => {
      console.log(response);
      this.setState({id: response.data.id});
    })
    .catch((err) => {
      console.log(err);
    })
  }


  renderPage() {
    return (
      <div>
      <Router>
        <AppBar position = 'static' className = 'homeLink'>
          <Toolbar variant = 'dense'>
            <MenuIcon className = 'menu'/>
            <Typography variant="h6" color="inherit">
              <IconButton edge="start" ><Link to='/'>Home</Link></IconButton>
              <IconButton edge ='start'><Link to='/teams'>Teams</Link></IconButton>
            </Typography>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/teams">
            <Teams team = {this.state.team} id = {this.state.id}/>
            <Button variant = 'outlined' color = 'primary' onClick = {this.handleClick}>Add</Button>
          </Route>
          <Route path="/">
            <Overview data = {this.state.data} callback = {this.handleAdd}/>
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