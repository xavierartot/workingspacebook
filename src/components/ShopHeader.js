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
          <div className="wrapperShopHeader">
            <Header as="h1" className="tac">Category</Header>
            <div className="box-btn">
              <Button className="btn-radius">Share</Button>
              <Button className="btn-radius ml1">Follow</Button>
            </div>
            <Label as={Link} basic className="navigationContainer" to="shop/categories">
              <Icon name="arrow left" />
              Back
            </Label>
          </div>
        </Container>
      </div>
    )
  }
}
export default ShopHeader
