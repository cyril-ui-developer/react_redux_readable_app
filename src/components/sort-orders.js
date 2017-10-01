import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';
//import PostCard from './post-card';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { Component} from 'react';
import sortBy from 'sort-by';

class SortOrders extends Component {
  //export default function CommentDetails({commentDetails}){
 voteDescOrder = (e) => {
  let sortedData =  this.props.unSortData.sort(sortBy('-voteScore'))
    e.preventDefault()
    console.log(sortedData)
   if (this.props.onSortData){
       this.props.onSortData(sortedData);
    }
    this.forceUpdate()
   return sortedData;
  }
 voteAscOrder= (e) => {
   let sortedData = this.props.unSortData.sort(sortBy('voteScore'))
   e.preventDefault()
    
   if (this.props.onSortData){
       this.props.onSortData(sortedData);
    }
      this.forceUpdate()
    return sortedData;
  }

 timestampDescOrder = (e) => {
   let sortedData  =this.props.unSortData.sort(sortBy('-timestamp'));
   e.preventDefault()
    
   if (this.props.onSortData){
       this.props.onSortData(sortedData);
    }
    this.forceUpdate()
   return sortedData;
  }
 timestampAscOrder= (e) => {
     let sortedData = this.props.unSortData.sort(sortBy('timestamp'));
     e.preventDefault()
    
   if (this.props.onSortData){
       this.props.onSortData(sortedData);
    }
      this.forceUpdate()
    return sortedData;
  }

  handleSelectChange = (comment, e) => {
    e.preventDefault()
    
   if (this.props.onBookShelf){
       this.props.onBookShelf(comment);
    }
}
 render() {
   let sortedData = this.props.unSortData;
console.log(sortedData)
  const cards = () => {

      return (
        <div>
       <button onClick={this.voteAscOrder}>Vote(ASC)</button>
       <button onClick={this.voteDescOrder}>Vote(DESC)</button>
       <span> | </span>
       <button onClick={this.timestampAscOrder}>Timestamp(ASC)</button>
       <button onClick={this.timestampDescOrder}>Timestamp(DESC)</button>
       

    
         </div>
      )
  }

  return (
    <Card.Group>
      { cards() }
    </Card.Group>
  )
}
}

export default SortOrders;