import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function PostCard({post, deletePost}) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
           <Link to={`/posts/${post.id}`}  className="ui basic button green">  {post.title}</Link>
        </Card.Header>
        <Card.Description>
          <p>{post.body}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
          Comment  <Link to={``} ><Icon name='comment outline'/> </Link>
          Edit <Link to={`/posts/edit/${post.id}`}> <Icon name='edit outline'/>  </Link>
          Delete <Link to={``} ><Icon name='delete outline'/> </Link>
      </Card.Content>
    </Card>
  )
}


PostCard.propTypes = {
  post: React.PropTypes.object.isRequired
}