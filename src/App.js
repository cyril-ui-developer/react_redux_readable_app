import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import RootPage from './pages/root-page';
import PostFormPage from './pages/post-form-page';
import  CategoryPostPage  from './pages/category-posts-page';
import  PostDetailsPage  from './pages/post-details-page';

class App extends Component {
  render() {
    return (
      <Container>
        <div className="ui two item menu">
          <NavLink className="item" activeClassName="active" exact to="/">
            Default (Root)
          </NavLink>
          <NavLink className="item" activeClassName="active" exact to="/posts/new">
            Add New Post
          </NavLink>
        </div>
        <Route exact path="/" component={RootPage}/>
        <Route path="/posts/new" component={PostFormPage}/>
        <Route path="/posts/edit/:id" component={PostFormPage}/>
        <Route path="/:name/posts" component={CategoryPostPage}/>
        <Route path="/posts/details/:id" component={PostDetailsPage}/>
      </Container>
    );
  }
}

export default App;