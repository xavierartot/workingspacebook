/*
 * SignedInLinks.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 */
import React, { Component } from 'react'
import { Label, Dropdown, Icon, Menu, Button, Input } from 'semantic-ui-react'
// import ModalSignIn from '../modals/ModalSignIn'
// import ModalSignUp from '../modals/ModalSignUp'
import { Link } from 'react-router-dom'


class SignedInLinks extends Component {
  render() {
    return (
      <div className="right item signedIn">
        <Menu.Item className="fz-normal" position="right">
          <Input
            className="sign-btn "
            icon="search plus"
            iconPosition="left"
            placeholder="Search..."
          />
        </Menu.Item>
        <Dropdown
          basic
          className="medium"
          compact
          icon="star outline"
          pointing="top right"
        >
          <Dropdown.Menu className="dropdownSize">
            <Dropdown.Item
              as={Link}
              className="dropdownImage"
              content="Max Art sdfs fd sf sdf ds fsdf sdf  w"
              image="http://place-hold.it/50x50"
              to="/pseudo/likes"
            />
            <Dropdown.Item
              as={Link}
              content="View Profile"
              icon="paper plane outline"
              to="/pseudo/likes"
            />
            <Dropdown.Divider className="m0" />
            <Dropdown.Item
              as={Link}
              content="Edit Profile"
              icon="edit outline"
              to="/"
            />
            <Dropdown.Divider className="m0" />
            <Dropdown.Item
              as={Link}
              content="Log Out"
              icon="window close outline"
              to="/"
            />
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item>
          <Label as={Link} circular color="teal" to="/">
          2
          </Label>
        </Menu.Item>
      </div>
    )
  }
}
export default SignedInLinks
