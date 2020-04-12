import React, {Component} from 'react';

class Footer extends Component{
  render(){
    return <footer className="page-footer">
     <div className="container">
       <div className="row">
         <div className="col l6 s12">
           <h5 className="white-text">MyPlaces</h5>
           <p className="grey-text text-lighten-4">Salva i tuoi posti preferiti</p>
         </div>
       </div>
     </div>
     <div className="footer-copyright">
       <div className="container">
       © 2019 Copyright - Amedeo Pro
       </div>
     </div>
   </footer>
  }
}

export default Footer
