/*
 * ModalAddProduct
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 * Parent: <Profil/>
 */
import React, { Component } from 'react'
import { Modal, Button, Divider } from 'semantic-ui-react'
import AddProduct from '../admin/AddProduct'

class ModalAddProduct extends Component {
  state = {
    something: '',
    showModal: false,
  }

  closeModal = () => { // use to close modal
    this.setState({ showModal: false })
  }

  render() {
    const {
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
            <AddProduct handleClose={this.closeModal} />
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}
export default ModalAddProduct
