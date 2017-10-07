import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function PostCard({post, deletePost}) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
           <Link to={`/post/details/${post.id}`}  className="ui basic button green">  {post.title}</Link>
        </Card.Header>
        <Card.Description>
          <p>{post.body}</p>
          <p>{post.voteScore}</p>
          <p>{(new Date(post.timestamp)).toString()}</p>
        </Card.Description>
      </Card.Content>
       <Card.Content extra>
          {/* <Link to={``} ><Icon name='comment outline'/>Comment(10)</Link> 
          <Link to={`/post/edit/${post.id}`}> <Icon name='edit outline'/> </Link> 
          <Link to={``} ><Icon name='delete outline'/> </Link>*/}
      </Card.Content> 
    </Card>
  )
}


PostCard.propTypes = {
  post: React.PropTypes.object.isRequired
}