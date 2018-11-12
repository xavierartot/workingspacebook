/*
 * ModalSignIn
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 * Parent: <Header/>; <ModalSignUp/>
 */
import React, { Component } from 'react'
import { Modal, Button, Divider } from 'semantic-ui-react'
import SignIn from '../auth/SignIn'

class ModalSignIn extends Component {
  state = {
    showModal: false,
  }

  closeModal = () => { // use to close modal
    this.setState({ showModal: false })
  }

  render() {
    const {
      contentLogin,
      fromSignUp,
    } = this.props
    let trigger = ''
    if (fromSignUp) {
      trigger = (<Button
        circular
        color="orange"
        fluid
        onClick={() => this.setState({ showModal: true })}
        size="large"
      >
        {contentLogin}
                 </Button>)
    } else {
      trigger = <Button circular onClick={() => this.setState({ showModal: true })}>{contentLogin}</Button>
    }
    return (
      <div>
        <Modal
          closeIcon
          onClose={this.closeModal}
          open={this.state.showModal}
          size="large"
          trigger={trigger}
        >
          <Modal.Header className="header-form">{this.props.children}</Modal.Header>
          <Modal.Content>
            <SignIn handleClose={this.closeModal} />
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}
export default ModalSignIn
