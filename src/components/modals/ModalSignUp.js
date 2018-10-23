/*
 * Modal.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
import { Modal, Column, Grid, Button, Segment, Divider } from 'semantic-ui-react'
import SignUp from '../auth/SignUp'

class ModalSignIn extends Component {
  render() {
    const {
      login,
      contentLogin,
    } = this.props
    return (
      <div>
        <Modal
          closeIcon
          size="large"
          trigger={<Button circular>{contentLogin}</Button>}
        >
          <Modal.Header className="header-form">{this.props.children}</Modal.Header>
          <Modal.Content>
            <div className="centerButtons">
              <Button circular className="twitterButtons">Log in with Twitter</Button>
              <Button circular >Log in with Facebook</Button>
            </div>
            <Divider />
            <SignUp />
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}
export default ModalSignIn
