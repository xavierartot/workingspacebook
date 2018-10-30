/*
 * Shop.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import ShopGallery from './ShopGallery'
import ShopHeader from './ShopHeader'
import ModuleFilter from './ModuleFilter'
import ProductGallery from './ProductGallery'

import SignedInShopNav from './menus/SignedInShopNav'
import SignedOutShopNav from './menus/SignedOutShopNav'

class Shop extends Component {
  render() {
    const { subNav } = this.props
    if (subNav) {
      // the user clicked on the shop navigation
      return (
        <div className="Shop">
          <SignedOutShopNav />
          <ShopGallery />
        </div>
      )
    }
    return (
      <div className="Shop">
        <ShopHeader />
        <div className="shopBoxGallery">
          <Container>
            <ModuleFilter />
          </Container>

          <Container>
            <div className="ui three column grid stackable">
              {
              [1, 2, 3, 4, 5, 6, 7]
              .map(item =>
                <ProductGallery key={item}>{item}</ProductGallery>)}
            </div>
          </Container>
        </div>
      </div>
    )
  }
}
function mapStateToProps({ state }, props) {
// expect 3 routes from links and many others categories: /shop/id
// for sure shop/categories;

  const RouteId = props.match.params.id
  // console.log(RouteId)
  // console.log(props)
  const secondNav = [
    'brands',
    'categories',
    'gifts',
    'popular',
    'new',
    'trending',
  ]
  const navContent = secondNav.filter(e => RouteId === e)
  return {
    subNav: navContent.includes(RouteId),
    state,
  }
}
export default connect(mapStateToProps)(Shop)
