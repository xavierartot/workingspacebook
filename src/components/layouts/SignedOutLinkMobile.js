/*
 * SignedOutLinkMobile.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
import { Menu, Button } from 'semantic-ui-react'
import ModalSignIn from '../modals/ModalSignIn'

class SignedOutLinkMobile extends Component {
  render() {
    return (
      <div className="right item">
        <Menu.Item className="fz-normal" >
          <Button.Group size="small">
            <ModalSignIn contentLogin="Log In">
                    Login
            </ModalSignIn>
            <Button toggle>Join</Button>
          </Button.Group>
        </Menu.Item>
      </div>
    )
  }
}
export default SignedOutLinkMobile
