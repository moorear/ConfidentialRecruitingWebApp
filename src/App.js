import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Positions from './Components/Positions';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      websiteContent: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'/websiteContent.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({websiteContent: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.websiteContent.main}/>
        <About data={this.state.websiteContent.main}/>
        {/* <Resume data={this.state.websiteContent.resume}/> */}
        <Positions data={this.state.websiteContent.positions}/>
        <Testimonials data={this.state.websiteContent.testimonials}/>
        <Contact data={this.state.websiteContent.main}/>
        <Footer data={this.state.websiteContent.main}/>
      </div>
    );
  }
}

export default App;
