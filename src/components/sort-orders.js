import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Component} from 'react';
import sortBy from 'sort-by';

class SortOrders extends Component {

 handlSsortOrderChange = (e) => {
   let sortedData  =this.props.unSortData.sort(sortBy(e.target.value));
   console.log(e.target.value)
   e.preventDefault()
    
   if (this.props.onSortData){
       this.props.onSortData(sortedData);
    }
    this.forceUpdate()
   return sortedData;
  }


 render() {
   let sortedData = this.props.unSortData;
   console.log(sortedData)
    const cards = () => {

      return (
        <div>
        <form>
        <label>
          Select Sorting Order:
          <select onChange={this.handlSsortOrderChange}>
            <option value="voteScore" selected>Vote - Asc</option>
            <option value="-voteScore">Vote - Desc</option>
            <option value="timestamp">Timestamp - Asc</option>
            <option value="-timestamp">Timestamp - Desc</option>
          </select>
          </label>
          </form>
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