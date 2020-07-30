import React from 'react';
import MediaQuery from 'react-responsive';
import styled from "styled-components";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './i18n'
import Mobile from './page/Mobile'
import Nav from './page/nav/Nav'
import Bottom from './page/Bottom'
import Home from './page/home/Home'
import About from './page/about/About'
import Specialty from './page/specialty/Specialty'
import Contact from './page/contact/Contact'
import TTC from './page/ttc/TTC'
import {ContextProvider} from './page/reducer'


const Header = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  overflow: hidden;
  min-height: 680px;
`

Header.Top = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
`


function App() {

  return (
      <ContextProvider>
        <MediaQuery query='(min-device-width:1224px)'>
            <Router>
              <Nav/>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/specialty" component={Specialty}/>
              <Route path="/TTC" component={TTC}/>
              <Route path="/contact" component={Contact}/>
              <Bottom/>
            </Router>
        </MediaQuery>
        <MediaQuery query='(max-device-width:750px)'>
          <Mobile/>
        </MediaQuery>
      </ContextProvider>
  );
}

export default App;
