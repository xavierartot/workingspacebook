/*
 * Gallery.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
import { Divider, Segment, Label, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import ModalGallery from './modals/ModalGallery'

class ProductGallery extends Component {
  render() {
    return (
      <div className="column gallery-col">
        <Segment
          className="gallery"
        >
          <Label
            as="a"
            className="gallery-ribbon"
            color="orange"
            href="http://amazon..."
            ribbon="right"
            size="big"
          >
              $50
          </Label>
          <div className="gallery-image-container">
            <ModalGallery
              description
              header
              image="http://place-hold.it/226x210"
              productId
              userId
            />
          </div>
          <div className="product-gallery-details">
            <div className="product-details-name">
              <span className="text-underline">
                <ModalGallery
                  contentText="Skull Tidy, Jewellery Box &amp; Accessories Container in White"
                  description
                  header
                  productId
                  userId
                />
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
              <Link className="mr1" to="/">
                <Icon as="i" link name="heart" />
                <span className="number-like">5</span>
              </Link>
              <Link className="" to="/">
                <Icon as="i" link name="plus circle" />
              </Link>
            </div>
          </footer>
        </Segment>
      </div>
    )
  }
}
export default ProductGallery
