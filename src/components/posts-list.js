import React from 'react';
import { Card } from 'semantic-ui-react';
import PostCard from './post-card';
import sortBy from 'sort-by';
import { Component} from 'react';

//export default function PostList({posts}){
  class PostList extends Component {

  componentDidMount(){
    let sortedData
    sortedData = this.props.posts.sort(sortBy('-voteScore'))
    
  }
  


 render() {
     
  const cards = () => {
    return this.props.posts.map(post => {
      return (
        <PostCard key={post.title} post={post} votePost={this.props.votePost} deletePost={this.props.deletePost}/>
      )
    })
  }

  return (
    <Card.Group>
      { cards() }
    </Card.Group>
  )
}
  }


export default PostList ;