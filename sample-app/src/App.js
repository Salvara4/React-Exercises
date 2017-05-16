import React, { Component } from 'react';
import Header from './Header'
import Contents from './Content'
import Footer from './Footer'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      Heros: [
        {name: 'Superman'},
        {name: 'Batman'},
        {name: 'Wonder Woman'}
      ]
    }
  }
  render(){
    return(
        <div>
          <Header name="Top Superhero List"/>
        <div>
         <Contents content={this.state.Heros}/>
       </div>
       <div>
        <Footer/>
      </div>
    </div>

    );
  }
}

export default App;
//import logo from './logo.svg';
//import './App.css';
//import {Navbar, Jumbotron, Grid, Button} from 'react-bootstrap';
//   <div>
//   <div className= "App">
//   <h1>React Exercise!</h1>
//   <div className= "App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h2> It Just Keeps Spinning!!!</h2>
//    </div>
//    <p className="App-intro">
//      To get started, edit <code>src/App.js</code> and save to reload.
//    </p>
//    </div>
//    <div>
//    <Jumbotron>
//      <Grid>
//        <h1>Welcome to React</h1>
//        <p>
//          <Button
//            bsStyle="success"
//            bsSize="large"
//            href="http://react-bootstrap.github.io/components.html"
//            target="_blank">
//            View React Bootstrap Docs
//          </Button>
//        </p>
//      </Grid>
//    </Jumbotron>
//  </div>
//  </div>
