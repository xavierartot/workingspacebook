/*
 * Shop.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import MenuShop from './menus/MenuShop'
import ShopGallery from './ShopGallery'
import ShopHeader from './ShopHeader'
import ModuleFilter from './ModuleFilter'

class Shop extends Component {
  render() {
    // categoryShop come from router params
    const { categoryShop } = this.props
    const shopCategory = categoryShop === 'gifts'
      ? <Fragment><ShopHeader /><ModuleFilter /></Fragment>
      : ''
    return (
      <div className="Shop">
        <MenuShop />
        {shopCategory }
        <ShopGallery />
        Shop
      </div>
    )
  }
}
function mapStateToProps({ state }, props) {
  // expect 3 routes from links and many others categories: /shop/id
  // for sure shop/categories; /shop/gifts; /shop/brands;
  // params
  return {
    state,
  }
}
export default connect(mapStateToProps)(Shop)
