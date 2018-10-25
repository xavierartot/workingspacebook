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
                active={activeItem === 'trending'}
                as={Link}
                name="categories"
                onClick={this.handleItemClick}
                to="/shop/categories"
              >
              Trending
              </Menu.Item>
              <Menu.Item
                active={activeItem === 'New'}
                as={Link}
                name="Gifts"
                onClick={this.handleItemClick}
                to="/shop/gifts"
              >
              New
              </Menu.Item>
              <Menu.Item
                active={activeItem === 'popular'}
                as={Link}
                name="Brands"
                onClick={this.handleItemClick}
                to="/shop/brands"
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
