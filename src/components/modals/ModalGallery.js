/*
 * Modal.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
import { Label, Button, Icon, Grid, Modal, Header, Image } from 'semantic-ui-react'
import ModalCollections from './ModalCollections'

class ModalGallery extends Component {
  handleLike = (event) => {
    console.log(1)
  }
  handleCollectCategorie = (event) => {
    console.log(2)
  }
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
          open
          size="large"
          trigger={triggerContent}
        >
          <Modal.Content className="ModalGallery">
            <Grid stackable>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <div className="pic-gallery">
                    <Image
                      size="medium"
                      src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                    />
                    <div className="box-link">
                      <div className="box-like" onClick={this.handleLike} >
                        <Icon as="i" link name="heart" />
                        <span className="like-text">LIKE</span>
                      </div>
                      <div className="box-collect" onClick={this.handleCollectCategorie} >
                        <ModalCollections>COLLECT</ModalCollections>
                      </div>
                    </div>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <Modal.Description>
                    <Header as="h1">
                      Name of Product
                    </Header>
                    <Header className="author-box">
                      <span className="by">BY</span>
                      <span className="author">NOW DESIGNS</span>
                    </Header>
                    <Button animated>
                      <Button.Content visible>$15 on Amazon Prime</Button.Content>
                      <Button.Content hidden>
                        <a href="http://amazon.com/1" target="_blank">
                          <Icon name="arrow right" />
                        </a>
                      </Button.Content>
                    </Button>
                    <Image.Group size="mini">
                      <Image
                        href="http://amazon.com"
                        src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                      />
                      <Image src="https://react.semantic-ui.com/images/avatar/large/helen.jpg" />
                      <Image src="https://react.semantic-ui.com/images/avatar/large/molly.png" />
                      <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
                    </Image.Group>
                  </Modal.Description>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}
export default ModalGallery
