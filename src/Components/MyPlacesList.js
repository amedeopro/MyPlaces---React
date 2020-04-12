import React, {Component} from 'react';


class MyPlaceList extends Component{
  render(){
    return <ol className='place-list'>
          {this.props.myplaces.map((myplace,index) => (
            <li key={index} className='place-list-item'>
              <div className='place-avatar' style={{
                  background:`url(${myplace.img})`
                }}>
              </div>
                <div className='place-details'>
                  <p className='place-title'>{myplace.name}</p>
                  <p>{myplace.type}</p>
                </div>
                <button className='place-remove'>Remove</button>
            </li>))}
        </ol>
  }
}

export default MyPlaceList
