import React, { Component } from 'react';
import './App.css';
import Header from './Home/Header';
import Body from './Home/Body';
import Footer from './Home/Footer';

class App extends Component {
  
  // componentDidMount() {
  //   $.ajax({
  //     type: 'GET',
  //     url: 'https://food-sharing-api-antonxuanquang.c9users.io/meals',
  //     success: function(data) {
  //       this.setState({
  //         hello: data
  //       });
  //     }.bind(this),
  //     error: function(xhr, status, err) {
  //       console.log('why error???')
  //     }
  //   })
  //   $.ajax({
  //     type: 'POST',
  //     url: 'https://food-sharing-api-antonxuanquang.c9users.io/meals/',
  //     data: {
  //       data: "hihi"
  //     },
  //     success: function(data) {
  //       this.setState({
  //         post: data
  //       });
  //     }.bind(this),
  //     error: function(xhr, status, err) {
  //       console.log('why error in POST???')
  //     }
  //   })
  // }
  
  render() {
    return (
    	<div>
    		<Header />
    		<Body />
    		<Footer />
    	</div>
    );
  }
}

export default App;
