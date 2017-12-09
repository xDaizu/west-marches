import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import {Container, Header, Icon, Menu} from "semantic-ui-react";
import TopMenu from "./TopMenu/TopMenu";
import LetsMeetCalendar from "./LetsMeetCalendar/LetsMeetCalendar";

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer


class App extends Component {
  render() {
    return (
      <div>
        <TopMenu/>
        <Container>
          <div className="App">
            <Header as='h2' icon textAlign='center'>
              <Icon name='users' circular/>
              <Header.Content>
                Friends
              </Header.Content>
            </Header>

            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <LetsMeetCalendar/>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;

