/*
 * Header.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component, Fragment } from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Dropdown, Responsive, Icon, Input, Menu, Button } from 'semantic-ui-react'
// import '../css/helpers.css'

import ModalLogin from './modals/ModalLogin'

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
                  <span>
                    <ModalLogin contentLogin="Log In">
                      login and get your collection
                    </ModalLogin>
                  </span>
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
                      <ModalLogin contentLogin="Log In">
                        login and get your collection
                      </ModalLogin>
                      <Button toggle>Join</Button>
                    </Button.Group>
                  </Menu.Item>
                </div>
              </div>
            </div>
          </div>
        </Responsive>
        <Responsive className="menu-mobile" maxWidth={768}>
          <Menu>
            <Dropdown item text="Menu" >
              <Dropdown.Menu>
                <Dropdown.Item>
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
                </Dropdown.Item>
                <Dropdown.Item>
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
                </Dropdown.Item>
                <Dropdown.Item>
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
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="right item">
              <Menu.Item className="fz-normal" >
                <Button.Group size="small">
                  <ModalLogin contentLogin="Log In">
                        login and get your collection
                  </ModalLogin>
                  <Button toggle>Join</Button>
                </Button.Group>
              </Menu.Item>
            </div>
          </Menu>
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

