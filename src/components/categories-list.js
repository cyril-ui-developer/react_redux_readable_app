import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import CategoryCard from './category-card';

export default function CategoriesList({categories}){
console.log(categories)
  const categoriesList = () => {
    return categories.map(cat => {
      return (
           <CategoryCard key={cat.name} category={cat}/>
      )
    })
  }

  return (
    <Card.Group>
      { categoriesList() }
    </Card.Group>
  )
}