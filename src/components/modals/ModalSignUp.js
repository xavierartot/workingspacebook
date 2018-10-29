/*
 * Modal.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 *
 */
import React, { Component } from 'react'
import { Modal, Button, Divider } from 'semantic-ui-react'
import SignUp from '../auth/SignUp'

class ModalSignIn extends Component {
  state = { isOpen: false }

  handleOpen = () => {
    this.setState({ isOpen: true })
  }

  handleClose = () => {
    this.setState({ isOpen: false })
  }
  render() {
    const {
      contentLogin,
    } = this.props
    return (
      <div>

        <Modal
          closeIcon
          onClose={this.handleClose}
          onOpen={this.handleOpen}
          open={this.state.isOpen}
          size="large"
          trigger={<Button circular className="headerButtonCircle">{contentLogin}</Button>}
        >
          <Modal.Header className="header-form">{this.props.children}</Modal.Header>
          <Modal.Content>
            <div className="centerButtons">
              <Button circular className="twitterButtons">Log in with Twitter</Button>
              <Button circular >Log in with Facebook</Button>
            </div>
            <Divider />
            <SignUp onClosePopup={this.handleClose} />
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}
export default ModalSignIn
