import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function PostCard({post, deletePost}) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <Icon/> {post.title}
        </Card.Header>
        <Card.Description>
          <p><Icon/> {post.body}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
           <Link to={`/posts/edit/${post.id}`} className="ui basic button green">Edit</Link>
          <Button basic color="red">Delete</Button>
        </div>
      </Card.Content>
    </Card>
  )
}

PostCard.propTypes = {
  post: React.PropTypes.object.isRequired
}