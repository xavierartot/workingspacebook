/*
 * ShopHeader.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
import { Label, Header, Button, Container, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class ShopHeader extends Component {
  render() {
    return (
      <div className="ShopHeader">
        <Container>
          <Label as="Link">
            <Icon name="arrow left" />
            Back
          </Label>
          <Header as="h1">Category Nave</Header>
          <Button>Share</Button>
          <Button>Follow</Button>
        </Container>
      </div>
    )
  }
}
export default ShopHeader
