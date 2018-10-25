/*
 * MenuHome.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react'

class MenuHome extends Component {
  state = {
    isActive: false,
  }
  state = { activeItem: 'gamepad' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
      <div className="ui vertical center aligned segment home">
        <Container>
          <div className="ui secondary menu huge greyb-home font-europa-normal ">
            <div className="left item">
              <Menu.Item
                active={activeItem === 'trending'}
                as={Link}
                name="trending"
                onClick={this.handleItemClick}
                to="/"
              >
              Trending
              </Menu.Item>
              <Menu.Item
                active={activeItem === 'New'}
                as={Link}
                name="New"
                onClick={this.handleItemClick}
                to="/explore/new"
              >
              New
              </Menu.Item>
              <Menu.Item
                active={activeItem === 'popular'}
                as={Link}
                name="popular"
                onClick={this.handleItemClick}
                to="/explore/popular"
              >
              Popular
              </Menu.Item>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}
export default MenuHome
