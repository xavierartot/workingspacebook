/*
 * ModalSignUp
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 * Parent: <ProductGallery/>; <SignedOutLinks/>
 * style: ...
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon, Modal, Button } from 'semantic-ui-react'
import SignUp from '../auth/SignUp'
// import has from 'lodash/has'

class ModalSignUp extends Component {
  state = { isOpen: false }

  handleOpen = () => {
    this.setState({ isOpen: true })
  }

  handleClose = () => {
    this.setState({ isOpen: false })
  }
  render() {
    let trigger = null
    const {
      contentLogin, plusIcon,
    } = this.props
    // console.log(auth)
    if (plusIcon) {
      trigger = <Icon as="i" name="plus circle" />
    } else {
      trigger = <Button circular className="headerButtonCircle">{contentLogin}</Button>
    }
    // console.log(trigger)
    return (
      <div>
        <Modal
          closeIcon
          onClose={this.handleClose}
          onOpen={this.handleOpen}
          open={this.state.isOpen}
          size="large"
          trigger={trigger}
        >
          <Modal.Header className="header-form">{this.props.children}</Modal.Header>
          <Modal.Content>
            <SignUp onClosePopup={this.handleClose} />
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}
function mapStateToProps(state, props) {
  // console.log(state)
  // console.log(state.firebase.auth)
  return {
    state: state.firebase.auth,
  }
}
export default connect(mapStateToProps)(ModalSignUp)
