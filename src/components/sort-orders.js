import React from 'react';
import { Card} from 'semantic-ui-react';
import { Component} from 'react';
import sortBy from 'sort-by';

class SortOrders extends Component {

 handlSsortOrderChange = (e) => {
   let sortedData  =this.props.unSortData.sort(sortBy(e.target.value));
   e.preventDefault()
    
   if (this.props.onSortData){
       this.props.onSortData(sortedData);
    }
    this.forceUpdate()
   return sortedData;
  }


 render() {
   let sortedData = this.props.unSortData;
   
    const cards = () => {
      return (
        <div>        
        <form >
        <label>
          <br />
          <select defaultValue="-voteScore" disabled={sortedData.length <= 1} onChange={this.handlSsortOrderChange}>
            <option value="voteScore">Vote - Asc</option>
            <option value="-voteScore" >Vote - Desc</option>
            <option value="timestamp">Timestamp - Asc</option>
            <option value="-timestamp">Timestamp - Desc</option>
          </select>
          </label>
          </form>
          <br />
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