import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

let divStyle = {
  margin: '3px'
};

let truncate  = { 
  width: '270px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}
//  function filterComments(){
//    allPostsComments.filter(c => c.parentId === post.id)
//  }
export default function PostCard({post, deletePost, votePost, allPostsComments}) {
  let postComments = [];
  postComments = allPostsComments.filter(c => c.parentId === post.id)
  return (
    <div style={divStyle}>
      { !post.deleted? 
          <Card>
            <Card.Content>
              <Card.Header>
                <Link style={truncate} to={`/${post.category}/${post.id}`}  className="ui basic button green">  {post.title}</Link>
              </Card.Header>
              <Card.Description>
                <p style={truncate}>{post.body}</p>
                <p>{(new Date(post.timestamp)).toString()}</p>
                <p>Author: {post.author}</p>
                <button onClick={()=>{ votePost(post.id, "upVote")}}>+</button>
                  <span> {post.voteScore} </span>
                  <button onClick={()=>{ votePost(post.id, "downVote") }}>-</button>
                    Comment({postComments.length})
                  <Link to={`/post/edit/${post.id}`} onClick={() => {  this.forceUpdate()}}> <Icon name='edit outline'/> </Link>
                  <Link to={`/`} ><Icon name='delete outline' onClick={() => {deletePost(post.id)}}/> </Link>
              </Card.Description>
            </Card.Content>
          </Card>
    : null }
  </div>
  )
}


PostCard.propTypes = {
  post: React.PropTypes.object.isRequired
}