/*
 * PopupModalGallery.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 * Parent <ModalGallery/>
 */
import React, { Component } from 'react'
import { Popup, Label, Button, Icon, Grid, Modal, Header, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const style = {
  borderRadius: 0,
  opacity: 0.7,
  padding: '2em',
}
class PopupModalGallery extends Component {
  render() {
    return (
      <div className="">
        <Popup
          className="PopupModalGallery"
          hoverable
          position="top center"
          trigger={<Image size="small" src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />}
          wide
        >
          <Grid centered className="" columns={1} divided stackable>
            <Grid.Column textAlign="center">
              <div className="box-perso">
                <Image
                  circular
                  size="tiny"
                  src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                />
              </div>
              <Button as={Link} className="follow" color="orange" to="/name">Choose</Button>
              <div className="box-name">
                <Header as="h2">name author</Header>
                <Link className="link" to="/name">@name</Link>
              </div>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <div className="box-image">
                <div className="image-square">
                  <Image
                    size="small"
                    src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                  />
                </div>
                <div className="image-square">
                  <Image
                    size="small"
                    src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                  />
                </div>
                <div className="image-square">
                  <Image
                    size="small"
                    src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                  />
                </div>
              </div>
            </Grid.Column>
          </Grid>
        </Popup>
      </div>
    )
  }
}
export default PopupModalGallery
