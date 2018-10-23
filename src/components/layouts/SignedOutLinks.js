/*
 * SignedOutLinks.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 */
import React, { Component } from 'react'
import { Input, Menu, Button } from 'semantic-ui-react'
import ModalSignUp from '../modals/ModalSignUp'
import ModalSignIn from '../modals/ModalSignIn'

class SignedOutLinks extends Component {
  render() {
    return (
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
            <ModalSignIn contentLogin="Log In">
              login and get your collection
            </ModalSignIn>
            <ModalSignUp contentLogin="Sign Up">
              Join Us
            </ModalSignUp>
          </Button.Group>
        </Menu.Item>
      </div>
    )
  }
}
export default SignedOutLinks
