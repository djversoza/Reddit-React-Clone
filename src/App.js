import React, { Component } from 'react';
import PostForm from './components/postForm'

class App extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand">Reddit Clone</a>
            </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            </div>
          </div>
      </nav>
        <PostForm></PostForm>
    </div>
    );
  }
}

export default App;
