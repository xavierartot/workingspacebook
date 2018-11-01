/*
 * Modal.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
import { Form, Segment, Divider, Popup, Label, Button, Icon, Grid, Modal, Header, Image } from 'semantic-ui-react'
import ModalCollections from './ModalCollections'
import PopupModalGallery from '../PopupModalGallery'
import { Link } from 'react-router-dom'

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
        rel="noopener noreferrer"
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
                <Grid.Column className="right-col">
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
                        <a href="http://amazon.com/1" rel="noopener noreferrer" target="_blank">
                          <Icon name="arrow right" />
                        </a>
                      </Button.Content>
                    </Button>
                    <div className="box-modal-gallery">
                      <PopupModalGallery />
                      <PopupModalGallery />
                      <PopupModalGallery />
                      <PopupModalGallery />
                      <PopupModalGallery />
                    </div>
                    <div className="box-founded" >
                      <div className="by">
                        Found by
                      </div>
                      <Link className="autho" to="/author">
                        @freshexchange
                      </Link>

                    </div>
                    <div className="box-social">
                      <Icon className="social" link name="facebook f" />
                      <Icon className="social" link name="twitter" />
                      <Icon className="social" link name="instagram" />
                      <Icon className="social" link name="pinterest" />
                      <Icon className="social" link name="mail" />
                      <span className="comment social">
                        <Link className="wc" to="/">
                          <Icon className="" link name="comment" />
                          write a comment
                        </Link>
                      </span>
                    </div>
                  </Modal.Description>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row className="section-related" columns={1}>
                <Grid.Column className="section-related">
                  <div className="label-related tac">
                    <Link className="link-brand" to="/">
                      <Header as="h2" className="tac">
                        More from Brand<Icon name="linkify" />
                      </Header>
                    </Link>
                  </div>
                </Grid.Column>
                <Grid.Column className="divider">
                  <Segment basic>
                    <Divider horizontal>Related</Divider>
                  </Segment>
                </Grid.Column>
                <Grid.Column className="gallery-related">
                  <div className="gallery-related_box">
                    <Link className="pic" to="/product/:id">
                      <Image size="small" src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
                    </Link>
                    <Link className="pic" to="/product/:id">
                      <Image size="small" src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
                    </Link>
                    <Link className="pic" to="/product/:id">
                      <Image size="small" src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
                    </Link>
                    <Link className="pic" to="/product/:id">
                      <Image size="small" src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
                    </Link>
                    <Link className="pic" to="/product/:id">
                      <Image size="small" src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
                    </Link>
                  </div>

                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={1}>
                <Grid.Column className="comment-section">
                  <Header as="h2" className="tac">
                    write your first comment<Icon name="linkify" />
                  </Header>
                  <div className="box-comment-form">
                    <div className="pic-author">
                      <Image circular size="tiny" src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
                    </div>
                    <Form onSubmit={this.handleSubmit}>
                      <textarea className="comment-textarea" cols="3" placeholder="Comment on this product. Use @ to mention mention so" rows="5" />
                      <Form.Button>Submit</Form.Button>
                      <div className="display-comment" />
                    </Form>
                  </div>
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
