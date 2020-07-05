import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import Home from './screens/Home'
import Signin from './screens/Signin'
import Signup from './screens/Signup'
import ManageLinks from './screens/Manage/Links'
import ManageLinksCreate from './screens/Manage/Create'
import ManageLinksEdit from './screens/Manage/Edit'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item"><Link to="/sign-in">Sign-in</Link></li>
            <li className="list-group-item"><Link to="/sign-up">Sign-up</Link></li>
            <li className="list-group-item"><Link to="/manage/links/create">Create link</Link></li>
            <li className="list-group-item"><Link to="/manage/links/edit">Edit link</Link></li>
            <li className="list-group-item"><Link to="/manage/links">Links</Link></li>
            <li className="list-group-item"><Link to="/">Home</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path='/sign-in' component={ Signin }/>
          <Route path='/sign-up' component={ Signup }/>
          <Route path='/manage/links/create' component={ ManageLinksCreate }/>
          <Route path='/manage/links/edit' component={ ManageLinksEdit }/>
          <Route path='/manage/links' component={ ManageLinks } />
          <Route path='/' component={ Home } />
          
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App