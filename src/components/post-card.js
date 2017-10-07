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
    </Card>
  )
}


PostCard.propTypes = {
  post: React.PropTypes.object.isRequired
}