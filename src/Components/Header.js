import React, {Component} from 'react';


class Title extends Component{
  render(){
    return <h1>{this.props.titolo}</h1>
  }
}

class SubTitle extends Component{
  render(){
    return <h2>{this.props.sottoTitolo}</h2>
  }
}

class Header extends Component{
  render(){
    return <div>
      <Title titolo = 'MyPlaces'/>
      <SubTitle sottoTitolo = 'I miei posti preferiti'/>
    </div>
  }
}

export default Header
