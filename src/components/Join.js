/*
 * Join.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
import { Message, Form, Divider, Button, Segment, Label, Image, Icon } from 'semantic-ui-react'
import ModalLogin from './modals/ModalLogin '

class Join extends Component {
  render() {
    return (
      <div className="Join">
        <Button>Log in with Twitter</Button>
        <Button>Log in with Facebook</Button>
        <Divider>or</Divider>
        login form
        <ModalLogin contentLogin="Log In">
          login and get your collection
        </ModalLogin>
      </div>
    )
  }
}
export default Join
