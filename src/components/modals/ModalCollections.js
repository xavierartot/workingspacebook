/*
 * ModalCollections
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
import { Input, Icon, Modal, Header, Image, Transition } from 'semantic-ui-react'
import InputCreate from '../InputCreate'

class ModalCollections extends Component {
  state = {
    visible: true,
    addProduct: null,
  }
  handleCreateLibrary = () => {
    this.setState(() => ({
      visible: !this.state.visible,
    }))
  }
  toggleVisibility = () => this.setState({ visible: !this.state.visible })
  render() {
    const { visible, addProduct } = this.state
    const {
      image, contentText,
    } = this.props
    let bgc = ''
    if (!visible) {
      bgc = 'text-create-library'
    }
    return (
      <div className="">
        <Modal
          className="ModalCollections "
          closeIcon
          size="large"
          trigger={
            <Icon as="i" link name="plus circle" />
          }
        >
          <Modal.Header>Your Library</Modal.Header>
          <Modal.Content className="modal-content">
            <Modal.Description>
              <h1 className="headerContent">
                <span>Add this to a Library</span>
                <img src="https://react.semantic-ui.com/images/avatar/large/rachel.png" />
              </h1>
              <Header
                as="h1"
                className={`box-ui-library-new ${bgc}`}
                onClick={bgc && this.handleCreateLibrary || null}
              >
                {
                visible
                ? <InputCreate eventCreateLibrary={this.handleCreateLibrary} />
                : <span>Create a new Library</span>
                }
              </Header>
              <div>
                <Icon as="i" link name="plus circle" />
              </div>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}
export default ModalCollections
