import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import Signin from './screens/Signin'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/sign-in">Sign-in</Link></li>
            <li><Link to="/sign-up">Sign-up</Link></li>
            <li><Link to="/manage/links/create">Create link</Link></li>
            <li><Link to="/manage/links/edit">Edit link</Link></li>
            <li><Link to="/manage/links">Links</Link></li>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path='/sign-in' component={ Signin }/>
          <Route path='/sign-up'><h1>Sign-up</h1></Route>
          <Route path='/manage/links/create'><h1>create</h1></Route>
          <Route path='/manage/links/edit'><h1>edit</h1></Route>
          <Route path='/manage/links'><h1>Links</h1></Route>
          <Route path='/'><h1>Home</h1></Route>
          
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App