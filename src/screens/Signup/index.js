import React from 'react'
import { signUp } from '../../actions/AccountActions'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

const Signup = (props) => {
  const { account, signUp } = props

  const submitHandler = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    // console.log('*** submiteHandler.data', data)
    
    signUp(data)
  }

  if (account) {
    return <Redirect to="/manage/links" />
  }

  return (
    <div className="container h-100 pt-5">
      <h1>Sign up</h1>
      <div className="d-flex flex-column h-100">
        <form onSubmit={submitHandler}>
        <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="text" name="email" className="form-control"/>
          </div>
          <div className="form-group">
            <label htmlFor="senha">Password</label>
            <input type="password" name="password" className="form-control"/>
          </div>
          <div className="form-group">
            <label htmlFor="senha">Password Confirmation</label>
            <input type="password" name="password_confirmation" className="form-control"/>
          </div>
          <div>
            <button className="btn btn-primary btn-round">Submit</button>
          </div>
        </form>
        <div className="container text-center fixed-bottom pb-5">
          <div className="text-muted">Already have an account?</div>
          <Link to="/sign-in">Sign-in</Link>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    account: state.account.account
  }
}

export default connect(mapStateToProps, {signUp})(Signup)
