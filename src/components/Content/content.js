import React, { Component } from 'react';
import '../../content.css'

class Content extends Component {
  render() {
     var names = ['Heading1', 'Heading2', 'Heading3'];
    return (
        <div className="container">
        <div className="row">

           {names.map(function(name, index){
                    return <div key={ index } className="col-md-4">
                        <h2>{name}</h2>
                        <p className="font-size-15">Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                        <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                    </div>;
                  })}

         
        </div>
        
        </div>
    )
  }
}

export default Content;