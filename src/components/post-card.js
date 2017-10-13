import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function PostCard({post, deletePost, votePost,postCommentsCount}) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
           <Link to={`/${post.category}/${post.id}`}  className="ui basic button green">  {post.title}</Link>
        </Card.Header>
        <Card.Description>
          <p>{post.body}</p>
          <p>{(new Date(post.timestamp)).toString()}</p>
          <p>Author: {post.author}</p>
           <button onClick={()=>{ votePost(post.id, "upVote")}}>+</button>
            <span> {post.voteScore} </span>
            <button onClick={()=>{ votePost(post.id, "downVote") }}>-</button>
               Comment({postCommentsCount.length})
            <Link to={`/post/edit/${post.id}`} > <Icon name='edit outline'/> </Link>
            <Link to={`/`} ><Icon name='delete outline' onClick={() => deletePost(post.id)}/> </Link>
        </Card.Description>
      </Card.Content>
    </Card>
  )
}


PostCard.propTypes = {
  post: React.PropTypes.object.isRequired
}