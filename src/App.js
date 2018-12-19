import React, { Component } from 'react';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl'
import Main from './components/main'
import {Link} from 'react-router-dom'
import Service from './components/services';
import Project from './components/projects';
import Contact from './components/contactus';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header title="Title" scroll>
            <Navigation>
                <Link to="/services">Services</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contactus">Contact Us </Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/services">Services</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contactus">Contact Us </Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
