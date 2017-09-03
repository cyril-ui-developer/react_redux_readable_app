import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react'
import { Link , Route} from 'react-router-dom';
import  CategoryPostList  from './category-posts-list';

export default function CategoryCard({category}) {
  return (
    <Card>
      <Link to={`/${category.name}/posts`}  className="ui basic button green">{category.name}</Link>
    </Card>
  )
}

CategoryCard.propTypes = {
  category: React.PropTypes.object.isRequired
}