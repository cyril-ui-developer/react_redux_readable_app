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
          <p>{post.body}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
          Comment  <Link to={``} ><Icon name='comment outline'/> </Link>
           {/* <Link to={`/posts/edit/${post.id}`} className="ui basic button help icon blue">Edit</Link> */}
          Edit <Link to={`/posts/edit/${post.id}`} className=""><Icon name='edit outline'/>  </Link>
          Delete <Link to={``} ><Icon name='delete outline'/> </Link>
      </Card.Content>
    </Card>
  )
}


PostCard.propTypes = {
  post: React.PropTypes.object.isRequired
}