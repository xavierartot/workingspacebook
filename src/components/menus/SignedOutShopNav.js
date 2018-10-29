/*
 * MenuShop.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 *
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react'

class MenuShop extends Component {
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
                active={activeItem === 'Trending'}
                as={Link}
                name="trending"
                onClick={this.handleItemClick}
                to="/shop/trending"
              >
              Trending
              </Menu.Item>
              <Menu.Item
                active={activeItem === 'New'}
                as={Link}
                name="new"
                onClick={this.handleItemClick}
                to="/shop/new"
              >
              New
              </Menu.Item>
              <Menu.Item
                active={activeItem === 'popular'}
                as={Link}
                name="popular"
                onClick={this.handleItemClick}
                to="/shop/popular"
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
export default MenuShop
