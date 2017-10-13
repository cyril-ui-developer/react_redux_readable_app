import React, { Component } from 'react';
import { NavLink, Route ,Switch} from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import RootPage from './pages/root-page';
import PostFormPage from './pages/post-form-page';
import  CategoryPostPage  from './pages/category-posts-page';
import  PostDetailsPage  from './pages/post-details-page';
import CommentFormPage from './pages/comment-form-page';
import Page404 from './pages/page-404';
import { Redirect } from 'react-router';

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
        <Switch>
          <Route exact path="/" component={RootPage}/>
          <Route exact  path="/posts/new" component={PostFormPage}/>
          <Route  exact  path="/post/edit/:id" component={PostFormPage}/>
          {/* <Route  exact path="/:name" component={CategoryPostPage}/> */}
          <Route  exact path="/:category/:id" component={PostDetailsPage}/>
          <Route  exact path="/commentnew" component={CommentFormPage}/> 
          <Route  exact  path="/:category/comments/:id" component={CommentFormPage}/> 
          <Route  exact path="/page-404" component={Page404}/> 
          <Redirect from='*' to='/page-404' component={Page404} />
        </Switch>
      </Container>
    );
  }
}

export default App;