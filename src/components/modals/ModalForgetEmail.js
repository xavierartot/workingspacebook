/*
 * Modal.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
import { Icon, Modal, Button } from 'semantic-ui-react'
import ForgotPassword from '../auth/ForgotPassword'

class ModalForgetEmail extends Component {
  render() {
    const {
      contentLogin,
    } = this.props
    return (
      <div>
        <Modal
          closeIcon
          size="large"
          trigger={
            <Button
              active={false}
              circular
              className="buttonForgetEmail"
              color="teal"
              content={contentLogin}
              labelPosition="left"
              loading={false}
              required
              size="large"
              type="button"
            > <Icon name="sitemap" /> Forget!
            </Button>
          }
        >
          <Modal.Header className="header-form">{this.props.children}</Modal.Header>
          <Modal.Content>
            <ForgotPassword />
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}
export default ModalForgetEmail
