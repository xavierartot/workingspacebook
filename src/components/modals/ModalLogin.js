/*
 * Modal.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
import { Modal, Header, Button, Image } from 'semantic-ui-react'
import Login from '../forms/Login'

class ModalLogin extends Component {
  render() {
    const {
      login,
    } = this.props
    return (
      <div>
        <Modal
          closeIcon
          size="mini"
          trigger={<Button>Log In</Button>}
        >
          <Modal.Header>Login</Modal.Header>
          <Modal.Content>
            <Login />
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}
export default ModalLogin
