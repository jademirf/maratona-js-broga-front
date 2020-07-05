import React from 'react'

import { Link } from 'react-router-dom'


const Signin = () => {
  return (
    <div className="container h-100 pt-5">
      <h1>Sign in</h1>
      <div className="d-flex flex-column h-100">
        <form>
        <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="text" name="email" className="form-control"/>
          </div>
          <div className="form-group">
            <label htmlFor="senha">Password</label>
            <input type="password" name="senha" className="form-control"/>
          </div>
          <div>
            <button className="btn btn-primary btn-round">Submit</button>
          </div>
        </form>
        <div className="container text-center fixed-bottom pb-5">
          <div className="text-muted">Don't have an account?</div>
          <Link to="/sign-up">Sign-up</Link>
        </div>
      </div>
    </div>
  )
}

export default Signin
