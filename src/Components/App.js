import React,{Fragment} from 'react';
import '../App.css';
import Login from './Login'
//import Dashboard from './Dashboard';
//import Learderboard from './Leaderboard';
import handleInitialData from "../Actions/shared"
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends React.Component{
  componentDidMount() {
    this.props.dispatch(handleInitialData())
}
render(){
  return (
    <Router>
        <Fragment> 
            {this.props.loading === true
                ? null
                : <div>
                    <Route path="/login" component={Login}/>
                </div>}
        </Fragment>
    </Router>
);
}
}

function mapStateToProps({authedUser}) {
  return {
      authedUser,
   loading: authedUser === null
 }
}
export default connect(mapStateToProps)(App);
