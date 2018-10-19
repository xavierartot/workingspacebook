/*
 * Header.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component, Fragment } from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Responsive, Icon, Input, Menu, Button } from 'semantic-ui-react'
// import '../css/helpers.css'

class Header extends Component {
  state = {
    isActive: false,
  }
  state = { activeItem: 'gamepad' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Fragment>
        <Responsive maxWidth={10559} minWidth={768}>
          <div className="ui vertical center aligned segment header raised">
            <div className="ui container">
              <div className="ui secondary menu huge greyb font-europa-normal ">
                <div className="left item">
                  <Menu.Item
                    active={activeItem === 'home'}
                    as={NavLink}
                    name="home"
                    onClick={this.handleItemClick}
                    to="/"
                  >
                    <Icon name="home" />
                    Home
                  </Menu.Item>
                  <Menu.Item
                    active={activeItem === 'shop'}
                    as={NavLink}
                    name="shop"
                    onClick={this.handleItemClick}
                    to="/shop/categories"
                  >
                    <Icon name="shop" />
                    Shop
                  </Menu.Item>
                  <Menu.Item
                    active={activeItem === 'featured'}
                    as={NavLink}
                    name="featured"
                    onClick={this.handleItemClick}
                    to="/featured"
                  >
                    <Icon name="certificate" />
                    Featured
                  </Menu.Item>
                </div>
                <div className="menu-logo">
                  <span>logo</span>
                </div>
                <div className="right item">
                  <Menu.Item className="fz-normal" position="right">
                    <Input
                      className="sign-btn "
                      icon="search"
                      iconPosition="left"
                      placeholder="Search..."
                    />
                  </Menu.Item>
                  <Menu.Item className="fz-normal" >
                    <Button.Group size="small">
                      <Button toggle >Log in</Button>
                      <Button.Or />
                      <Button color="green" toggle>Join</Button>
                    </Button.Group>
                  </Menu.Item>
                </div>
              </div>
            </div>
          </div>
        </Responsive>
      </Fragment>
    )
  }
}
function mapStateToProps({ categories }, props) {
  return {
    categories: categories.categories,
  }
}
export default withRouter(connect(mapStateToProps)(Header))

