import React, {Component} from 'react';

class Header extends Component{
  render(){
    return <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">{this.props.titolo}</a>
      </div>
    </nav>
  }
}

export default Header
