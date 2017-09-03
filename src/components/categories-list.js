import React from 'react';

export default function CategoriesList({categories}){
console.log(categories)
  const list = () => {
    return categories.map(cat => {
      return (
        <li key={cat.name}>{cat.name}</li>
      )
    })
  }

  return (
    <div>
      <ul>
        { list() }
      </ul>
    </div>
  )
}