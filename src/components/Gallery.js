/*
 * Gallery.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
import { Segment, Label, Container, Image, Icon } from 'semantic-ui-react'

class Gallery extends Component {
  render() {
    return (
      <div className="column gallery-col">
        <Segment
          className="gallery"
        >
          <Label
            as="a"
            className="gallery-ribbon"
            color="teal"
            ribbon="right"
            size="big"
          >
              $50
          </Label>
          <div className="gallery-image">
            <Image
              as="a"
              href="http://google.com"
              src="http://place-hold.it/226x210"
              target="_blank"
            />
          </div>

          <div className="product-gallery-details">
            <div className="product-details-name">
              <span className="text-underline">Skull Tidy, Jewellery Box &amp; Accessories Container in White - Perfect for Storing Keys, Jewellery, Stationary, Spare Coins, Cosmetics or Accessories</span>
            </div>
            <div className="product-details-brand">
              <span>
                <span>by </span>
              </span>
            </div>
          </div>
        </Segment>
      </div>
    )
  }
}
export default Gallery
