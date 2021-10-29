import logo from './logo.svg';
import './App.css';
import React from 'react'
import Users from './components/Users'
import Comments from './components/Comments'
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'


function App() {
  return (

    <BrowserRouter>
    <div className="App">
        <h1>This is the routing page</h1>
        <ul>
          <li>
            <Link to="/users" >Users</Link>
          </li>
          <li>
          <Link to="/comments" >Comments</Link>
          </li>
        </ul>

    </div>

    <Route path="/users" exact= {true}>

      <Users/>
      
    </Route>

    <Route path="/comments" exact= {true}>

      <Comments/>

    </Route>
    
    </BrowserRouter>

  );
}

export default App;
