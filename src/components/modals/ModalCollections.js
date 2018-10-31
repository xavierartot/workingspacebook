/*
 * ModalCollections
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 * Parent ProductGallery, shop
 */
import React, { Component } from 'react'
import { Grid, Segment, Label, Input, Icon, Modal, Header, Image, Transition } from 'semantic-ui-react'
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
      image, contentText, children,
    } = this.props
    let bgc = ''
    if (!visible) {
      bgc = 'text-create-library'
    }
    console.log(children)
    let child
    if (children && children !== '') { child = <span className="collect-text">{children}</span> }
    return (
      <div className="">
        <Modal
          className="ModalCollections "
          closeIcon
          size="large"
          trigger={
            <div>
              <Icon as="i" name="plus circle" />
              { child }
            </div>
          }
        >
          <Modal.Header>Your Library</Modal.Header>
          <Modal.Content className="modal-content">
            <Modal.Description>
              <h1 className="headerContent">
                <span>Add this to a Library</span>
                <img src="https://react.semantic-ui.com/images/avatar/large/rachel.png" />
              </h1>
              <div className={visible ? 'containerInput container-both' : 'containerText container-both'} >
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
              </div>

              <Header
                as="h1"
                className="box-ui-collection"
                onClick={null}
              >
                <Grid columns="equal" stackable>
                  <Grid.Column verticalAlign="middle" width={5}>
                    <div className="center box-cat-name">
                      <Icon as="i" link name="plus circle" />
                      <div className="cat-name">name</div>
                      <Label basic color="grey" content="1" />
                    </div>
                  </Grid.Column>
                  <Grid.Column className="pic-sizes" width={2}>
                    <Image
                      bordered
                      circular
                      size="tiny"
                      src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
                    />
                  </Grid.Column>
                  <Grid.Column className="pic-sizes" width={2}>
                    <Image circular size="tiny" src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
                  </Grid.Column>
                  <Grid.Column className="pic-sizes" width={2}>
                    <Image circular size="tiny" src="https://react.semantic-ui.com/images/avatar/large/molly.png" />
                  </Grid.Column>
                </Grid>
              </Header>
              <Header
                as="h1"
                className="box-ui-collection"
                onClick={null}
              >
                <Grid columns="equal" stackable>
                  <Grid.Column verticalAlign="middle" width={5}>
                    <div className="center box-cat-name">
                      <Icon as="i" link name="plus circle" />
                      <div className="cat-name">name</div>
                      <Label basic color="grey" content="1" />
                    </div>
                  </Grid.Column>
                  <Grid.Column className="pic-sizes" width={2}>
                    <Image
                      bordered
                      circular
                      size="tiny"
                      src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
                    />
                  </Grid.Column>
                  <Grid.Column className="pic-sizes" width={2}>
                    <Image circular size="tiny" src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
                  </Grid.Column>
                  <Grid.Column className="pic-sizes" width={2}>
                    <Image circular size="tiny" src="https://react.semantic-ui.com/images/avatar/large/molly.png" />
                  </Grid.Column>
                </Grid>
              </Header>


            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}
export default ModalCollections
