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
                active={activeItem === 'Categories'}
                as={Link}
                name="categories"
                onClick={this.handleItemClick}
                to="/shop/categories"
              >
              Categories
              </Menu.Item>
              <Menu.Item
                active={activeItem === 'Gifts'}
                as={Link}
                name="gifts"
                onClick={this.handleItemClick}
                to="/shop/gifts"
              >
              Gifts
              </Menu.Item>
              <Menu.Item
                active={activeItem === 'Popular'}
                as={Link}
                name="Popular"
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
