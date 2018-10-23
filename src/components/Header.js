/*
 * Header.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 *
 */
import React, { Component, Fragment } from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Dropdown, Responsive, Segment, Icon, Input, Menu, Button } from 'semantic-ui-react'
// import '../css/helpers.css'


import SignedOutLinks from './layouts/SignedOutLinks'
// import SignedOutLinkMobile from './layouts/SignedOutLinkMobile'
import SignedInLinks from './layouts/SignedInLinks'
// import SignedInLinksMobile from './layouts/SignedInLinksMobile'


class Header extends Component {
  state = {
    isActive: false,
  }
  state = { activeItem: 'gamepad' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const { auth, profile } = this.props
    const links = false ? <SignedInLinks profile /> : <SignedOutLinks />
    // const linksMobile = true ? <SignedInLinks profile /> : <SignedOutLinks />

    // console.log(auth);//firebase
    // const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
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
                <Responsive as={Segment} minWidth={1000}>
                  <div className="menu-logo">
                    <span>
                      Logo
                    </span>
                  </div>
                </Responsive>
                {links}
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
            {links}
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

