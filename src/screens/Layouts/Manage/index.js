import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {signOut} from '../../../actions/AccountActions'

const Layout = ({children, signOut, account}) => {

  if (!account) {
    return <Redirect to="/sign-in" />
  }

  const signOutHandler = (e) => {
    e.preventDefault()
    signOut()
  }
  return (
    <div className="layout">
      <nav className="navbar navbar-expand-lg bg-primary text-light">
        <div className="container d-flex w-100 justify-content-between">
          <div>
            <span>BACK</span>
          </div>
          <div className="text-center">
            <strong>LINKS</strong>
          </div>
          <div>
            <button onClick={signOutHandler} className="btn btn-clear">EXIT</button>
          </div>
        </div>
      </nav>
      <div className="container">
        { children }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    account: state.account.account
  }
}

export default connect(mapStateToProps, {signOut})(Layout)