import React from 'react';
import '../App.css';
import Login from './Login'
import Dashboard from './Dashboard';
import Learderboard from './Leaderboard';

function App() {
  return (
    <div className="App">
      
      <Login />
      <Dashboard />
      <Learderboard />
    </div>
  );
}

export default App;
