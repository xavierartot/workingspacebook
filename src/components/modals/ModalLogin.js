/*
 * Modal.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
import { Modal, Column, Grid, Button, Segment, Divider } from 'semantic-ui-react'
import Login from '../forms/Login'

class ModalLogin extends Component {
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
          trigger={<Button>{contentLogin}</Button>}
        >
          <Modal.Header className="header-form">{this.props.children}</Modal.Header>
          <Modal.Content>
            <Grid vertical>
              <Grid.Column>
                <Grid.Row>
                  <Button>Log in with Twitter</Button>
                  <Button>Log in with Facebook</Button>
                </Grid.Row>
              </Grid.Column>
            </Grid>
            <Divider />
            <Login />
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}
export default ModalLogin
