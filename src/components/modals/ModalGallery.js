/*
 * Modal.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
import { Modal, Header, Image } from 'semantic-ui-react'

class ModalGallery extends Component {
  render() {
    const {
      image, contentText,
    } = this.props
    const triggerContent = image !== undefined
      ? (<Image
        className="gallery-image"
        src={image}
        target="_blank"
      />)
      : <p>{contentText}</p>
    return (
      <div>
        <Modal
          closeIcon
          size="large"
          trigger={triggerContent}
        >
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Image size="medium" src="https://react.semantic-ui.com/images/avatar/large/rachel.png" wrapped />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>We've found the following gravatar image associated with your e-mail address.</p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}
export default ModalGallery
