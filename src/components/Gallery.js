/*
 * Gallery.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
import { Divider, Segment, Label, Image, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Gallery extends Component {
  render() {
    return (
      <div className="column gallery-col ">
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
              <span className="text-underline">
                Skull Tidy, Jewellery Box &amp; Accessories Container in White
              </span>
            </div>
            <div className="product-details-brand">
              <span>
                <span>by </span> Artot
              </span>
            </div>
          </div>

          <Divider className="divider" fitted={false} />

          <footer className="footer ui double two column grid">
            <div className="column tal">
              <Link className="trending-link" to="/">
                <Icon as="i" link name="bullhorn" />
                <span className="trending">Trending</span>
              </Link>
            </div>
            <div className="column tar">
              <span className="mr1">
                <Icon as="i" link name="heart" />
                <span className="number-like">5</span>
              </span>
              <Icon as="i" link name="plus circle" />
            </div>
          </footer>
        </Segment>
      </div>
    )
  }
}
export default Gallery
