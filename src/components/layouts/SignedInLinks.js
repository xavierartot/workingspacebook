/*
 * SignedInLinks.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 */
import React, { Component } from 'react'
import { Label, Dropdown, Icon, Menu, Button, Input } from 'semantic-ui-react'
import ModalSignIn from '../modals/ModalSignIn'
import ModalSignUp from '../modals/ModalSignUp'
import { NavLink } from 'react-router-dom'


const Test = ({ props }) => (
  <div>
    <Button as="div" labelPosition="right">
      <Button color="red">
        <Icon name="heart" />
        Like
      </Button>
    </Button>
  </div>
)
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
        {/* <Icon name="user circle"/> */}
        <Dropdown
          basic
          className="medium"
          compact
          icon="user circle"
          pointing="top right"
          text="user"
        >
          <Dropdown.Menu className="dropdownSize">
            <Dropdown.Item
              as={NavLink}
              className="dropdownImage"
              content="Max Art sdfs fd sf sdf ds fsdf sdf  w"
              image="http://place-hold.it/50x50"
              to="/pseudo/likes"
            />
            <Dropdown.Item
              as={NavLink}
              content="View Profile"
              icon="paper plane outline"
              to="/pseudo/likes"
            />
            <Dropdown.Divider className="m0" />
            <Dropdown.Item
              as={NavLink}
              content="Edit Profile"
              icon="edit outline"
              to="/"
            />
            <Dropdown.Divider className="m0" />
            <Dropdown.Item
              as={NavLink}
              content="Log Out"
              icon="window close outline"
              to="/"
            />
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item>
          <Label circular color="teal">
          2
          </Label>
        </Menu.Item>
      </div>
    )
  }
}
export default SignedInLinks
