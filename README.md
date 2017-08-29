# React-Bootswatch

Demo: https://react-bootswatch.firebaseapp.com/

1. Start with Pentacode (github)
https://github.com/yongzhihuang/PentaCode/tree/master/CreatReactAppRouter

2. Adding bootstrap4 and reactstrap
npm install bootstrap@4.0.0-alpha.6 --save
npm install --save reactstrap react-addons-transition-group react-addons-css-transition-group

3. Usage
Add the line below to index.js
import 'bootstrap/dist/css/bootstrap.css';

Add the line below to App.js
import { Button } from 'reactstrap';

e.g.
then add in code
<Button color="danger">Danger!</Button>

4. Carousel
http://react-responsive-carousel.js.org/
npm install react-responsive-carousel --save

5.Pentacode (need to clone https://github.com/yongzhihuang/PentaCode.git)
https://github.com/yongzhihuang/PentaCode/tree/master/CreatReactAppRouter

react-router 3.0.0 (React Router 4 does not work with available tuts)

IndexRoute of react-router for /home 

6. Used google-map-react and NOT google-maps-react
https://github.com/istarkov/google-map-react

7. Add scss support to create react app

npm install create-react-app-sass --save-dev

Usage

Replace your start and build scripts in your package.json

"scripts": {
  "start": "react-scripts-with-sass start",
  "build": "react-scripts-with-sass build",
  "test": "react-scripts test --env=jsdom",
  "eject": "react-scripts eject"
},

Your src directory will automatically re-compile any .scss file into a .css file with the same name in the same location. Then you can import the .css file in your components the same way as before using create-react-app. You will also need to add *.css to your .gitignore file as they are now just a build artifact and your .scss is the true source.

8. Using refs and onchange on select

constructor(props) {
	this.state = {
      value: 'Light'
    };

    this.change = this.change.bind(this)
}

change(event){
	 this.setState({value: event.target.value});
	 this.refs.foot.refs.themer.click();
}

<select className="" onChange={this.change} value={this.state.value}>
  <option value="Dark">Dark</option>
  <option value="Light">Light</option>
</select>

9. Get the Bootswatch 4-alpha folder from
https://github.com/thomaspark/bootswatch/tree/gh-pages/4-alpha
