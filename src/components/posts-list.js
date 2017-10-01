import React from 'react';
import { Card } from 'semantic-ui-react';
import PostCard from './post-card';

export default function PostList({posts}){

  const cards = () => {
    return posts.map(post => {
      return (
        <PostCard key={post.title} post={post}/>
      )
    })
  }

  return (
    <Card.Group>
      { cards() }
    </Card.Group>
  )
}