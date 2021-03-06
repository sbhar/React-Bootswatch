import { Component } from 'react';
//import ReactDOM from 'react-dom';
//import logo from './logo.svg';
//import defaultcss from './bootstrap.css';
//import slate from './slate.css';
//import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './font-awesome.css';
import Tabs from './components/Tabs/tabs.js';
import Header from './components/Header/header.js';
import Footer from './components/Footer/footer.js';
import * as React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DisplayContainer from './components/Dropdown/dropdown.js';




class App extends Component {

constructor(props) {
    super(props);
    this.state = {
      modal: true,
      value: 'default',
      displayValue: 'Most Recent',
      active: false,
      light: 'slate'
    };

    this.toggle = this.toggle.bind(this);

    this.change = this.change.bind(this);

    this.cancelit = this.cancelit.bind(this);

    this.toggleDrop = this.toggleDrop.bind(this);

    this.themestr = 'default';
}



change(event){
         this.setState({value: event.target.value});
         //this.refs.foot.refs.themer.click();
        // console.log('theme :' + event.target.value);
         //var themename= event.target.value;
         var themestr = (event.target.value).toLowerCase()
         this.refs.foot.refs.styleurl.href = '4-alpha/' + themestr + '/bootstrap.css';
         /*if(  themestr==='cerulean'){
            this._child.changenavtheme('cerulean');
         }else if(  themestr==='lux'){
            this._child.changenavtheme('lux');
         }else if(themestr==='slate' || 'darkly' || 'cyborg'){
            this._child.changenavtheme('dark');
         }else if(themestr==='default'){
            this._child.changenavtheme('default');
         }*/

}

toggle() {
    this.setState({
      modal: !this.state.modal
    });
}

cancelit() {
    this.setState({
      modal: !this.state.modal
    });
  //console.log('test :' + ReactDOM.findDOMNode(this.refs.foot));
  this.refs.foot.refs.styleurl.href = '4-alpha/default/bootstrap.css';
  this.refs.foot.refs.themer.style.display = 'block';
}

componentDidMount(){
  //console.log('Child value:', this.refs.foot.refs.themer);//accessed footer element 'themer'
  //this.setState({value : 'default'});
  //this._child.changenavtheme(); // Prints 'bar'

}

toggleDrop() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

render() {
    return ( 
      
      <div> 
        <Header ref={(child) => { this._child = child; }}/>
          {/*<Tabs />*/}




          <div className="container" ref="pageme">
            {this.props.children}   

<DisplayContainer/>



<Tabs />
           
          </div>
        <Footer  ref="foot"/>
        <div>
        
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Theme Selection</ModalHeader>
          <ModalBody>
            Please select theme{' '} 
            <select className="" onChange={this.change} value={this.state.value}>
              <option value="select">Please Select</option>
              <option value="cerulean">Cerulean</option>
              <option value="cyborg">Cyborg</option>
              <option value="darkly">Darkly</option>
              <option value="default">Default</option>
              <option value="flatly">Flatly</option>
              <option value="journal">Journal</option>
              <option value="litera">Litera</option>
              <option value="lumen">Lumen</option>
              <option value="lux">Lux</option>
              <option value="materia">Materia</option>
              <option value="sandstone">Sandstone</option>
              <option value="simplex">Simplex</option>
              <option value="slate">Slate</option>
              <option value="solar">Solar</option>
              <option value="spacelab">Spacelab</option>
              <option value="superhero">Superhero</option>
              <option value="united">United</option>
              <option value="yeti">Yeti</option>
            </select>
            {/*<p>{this.state.value}</p>*/}


             


          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle} ref="confirm" id="xx">Confirm</Button>{' '}
            <Button color="secondary" onClick={this.cancelit} ref="cancel">Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
      </div>
    );
  }
}


export default App;
