import React, {Component} from 'react'
import {Icon, Menu} from 'semantic-ui-react'
import './TopMenu.css';

export default class TopMenu extends Component {
  state = {activeItem: 'home'}

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  render() {
    const {activeItem} = this.state

    return (
      <Menu inverted>
        <Menu.Item name='patata fea' content={<div><Icon name='users' circular/><Icon name='users' circular/></div>}
                   active={activeItem === 'patata fea'} onClick={this.handleItemClick}/>
        <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick}/>
        <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick}/>
      </Menu>
    )
  }
}