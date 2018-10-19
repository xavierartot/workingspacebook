/*
 * Modal.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
import { Modal, Header, Button, Image } from 'semantic-ui-react'

class ModalGallery extends Component {
  render() {
    return (
      <div>
        <Modal
          closeIcon
          dimmer="blurring"
          size="large"
          trigger={<Image
            src="http://place-hold.it/226x210"
            target="_blank"
          />}
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
