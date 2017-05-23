import React, { Component } from 'react';
import PostList from './postList'


class PostForm extends Component {

  render() {
    return (
      <div className="container">

        <div className="pull-right">
          <p><a className="btn btn-info">New Post</a></p>
        </div>

        <ul className="nav nav-pills">
          <li role="presentation" className="active">
            <input type="search" className="form-control input-sm search-form" placeholder="Filter"/>
          </li>
          <div className="form-inline">
            <select className="form-control" id="sort">
              <option>Some text</option>
              <option>Some text</option>
            </select>
          </div>
        </ul>

        <div className="row">
          <div className="col-md-8">
            <form>
              <div>
                <label for="title">Title</label>
                <input id="title" className="form-control"/>
              </div>
              <div>
                <label for="body">Body</label>
                <textarea id="body" className="form-control"></textarea>
              </div>
              <div>
                <label for="author">Author</label>
                <input id="author" className="form-control"/>
              </div>
              <div>
                <label for="image-url">Image URL</label>
                <input id="image-url" className="form-control"/>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Create Post
                </button>
              </div>
            </form>
        </div>
      </div>

      <PostList></PostList>
    </div>
    );
  }
}

export default PostForm;
