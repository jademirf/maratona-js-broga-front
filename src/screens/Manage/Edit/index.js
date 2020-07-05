import React from 'react'

import Layout from '../../Layouts/Manage'


const Edit = () => {
  return (
    <Layout>
      <h1>Edit</h1>
      <div>
        <form>
        <div className="form-group">
            <label htmlFor="label">Label</label>
            <input type="text" name="label" className="form-control"/>
          </div>
          <div className="form-group">
            <label htmlFor="url">Url</label>
            <input type="text" name="url" className="form-control"/>
          </div>
          <div className="form-group">
            <label className="form-check-label">
              <input type="checkbox" name="isSocial" />
              <span className="form-check-sign"></span>
              Is Social?
            </label>
          </div>
          <div>
            <button className="btn btn-primary btn-round">Submit</button>
          </div>
        </form>
        </div>
    </Layout>
  )
}

export default Edit
