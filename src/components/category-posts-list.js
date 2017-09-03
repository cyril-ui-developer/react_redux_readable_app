import React from 'react';
import { Card } from 'semantic-ui-react';
import CategoryCard from './category-card';
import PostCard from './post-card';

export default function CategoryPostList({catPosts}){
console.log(catPosts)
  const cards = () => {
    return catPosts.map(cat => {
      return (
         <PostCard key={cat.title} post={cat}/>
      )
    })
  }

  return (
      <Card.Group>
      { cards() }
    </Card.Group>
  )
}