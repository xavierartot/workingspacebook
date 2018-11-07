/*
 * Modal.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 * Parent:
 */
import React, { Component } from 'react'
import { Modal, Column, Grid, Button, Segment, Divider } from 'semantic-ui-react'
import SignIn from '../auth/SignIn'

class ModalSignIn extends Component {
  state = {
    something: '',
    showModal: false,
  }

  closeModal = () => { // use to close modal
    this.setState({ showModal: false })
  }

  render() {
    const {
      login,
      contentLogin,
    } = this.props
    return (
      <div>
        <Modal
          closeIcon
          onClose={this.closeModal}
          open={this.state.showModal}
          size="large"
          trigger={<Button circular onClick={() => this.setState({ showModal: true })}>{contentLogin}</Button>}
        >
          <Modal.Header className="header-form">{this.props.children}</Modal.Header>
          <Modal.Content>
            <div className="centerButtons">
              <Button circular className="twitterButtons">Log in with Twitter</Button>
              <Button circular>Log in with Facebook</Button>
            </div>
            <Divider />
            <SignIn handleClose={this.closeModal} />
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}
export default ModalSignIn
