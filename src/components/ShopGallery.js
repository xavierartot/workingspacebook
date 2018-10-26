/*
 * ShopGallery.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Label, Container, Image, Grid, Segment } from 'semantic-ui-react'

class ShopGallery extends Component {
  render() {
    return (
      <Container className="ShopGallery">
        <Grid columns={4} container stackable>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(item =>
          (
            <Grid.Column key={item}>
              <Segment>
                <Link to={`/shop/${item}`}>
                  <div className="centerShopGallery">
                    <Image src="https://place-hold.it/150x150" />
                    <Label>title Categorie Shop</Label>
                  </div>
                </Link>
              </Segment>
            </Grid.Column>
          ))}
        </Grid>
      </Container>
    )
  }
}
function mapStateToProps({ state }, props) {
  return {
    state,
  }
}
export default connect(mapStateToProps)(ShopGallery)
