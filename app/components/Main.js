import React from 'react';

const Main = React.createClass({
   render(){
       return (
           <div>Hello from Main!
               {this.props.children}
           </div>
       )
   }
});

export default Main;