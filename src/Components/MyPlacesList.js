import React, {Component} from 'react';


class MyPlaceList extends Component{
  render(){
    return <ol>
          {this.props.myplaces.map((attraction,index) => (
            <li key={index}>
              <p>{attraction.name}</p>
              <p>{attraction.type}</p>
            </li>))}
        </ol>
  }
}

export default MyPlaceList
