import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signIn } from './SigninActions'


const Signin = (props) => {
  const { signIn } = props

  const submitHandler = (e) => {
    e.preventDefault()

    signIn({ email: 'teste1@123.com', password: '1234'})
  }

  return (
    <div className="container h-100 pt-5">
      <h1>Sign in</h1>
      <div className="d-flex flex-column h-100">
        <form onSubmit={submitHandler}>
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
const mapStateToProps = (state) => {
  return {
    account: state.signIn.account
  }
}

export default connect(mapStateToProps, {signIn})(Signin)
