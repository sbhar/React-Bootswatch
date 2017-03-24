import React, { Component } from 'react';
//import ReactDOM from 'react-dom'; 
import '../../footer.css';



class Footer extends Component {

   constructor(props){
        super(props);
        this.state = {stylePath: '4-alpha/default/bootstrap.css', theme:'Dark', showResults: false};

    }



    handleButtonClick(){
      if(this.state.stylePath === '4-alpha/default/bootstrap.css'){
        this.setState({stylePath: '4-alpha/slate/bootstrap.css', theme :'Light'});
      }else{
        this.setState({stylePath: '4-alpha/default/bootstrap.css', theme:'Dark'});
      }
       //ReactDOM.findDOMNode(this.refs.themer).innerHTML = 'case';
    }





    componentDidMount() {
      //componentDidMount=document ready
    }


  render() {
    return (
      <footer>
        <div className="container"><hr />
          <div className="row">
            <div className="col-md-6">
              &copy; Company 2017
            </div>
            <div className="col-md-6 text-right">
              <link rel="stylesheet" type="text/css" href={this.state.stylePath} ref="styleurl"/>
              <span onClick={this.handleButtonClick.bind(this)} className="themename" ref="themer">{this.state.theme} theme</span>
            </div>
          </div>
        </div>

        {/*<input type="text" ref="focused" />*/}



      </footer>
    )
  }

  

}


export default Footer;