/*
 * CollectionsDisplay.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 * Parent: <ModalCollections />
 */
import React, { Component } from 'react'
import { Grid, Label, Icon, Header, Image } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { compose } from 'redux'// add to use Higher Order Component
import { firestoreConnect } from 'react-redux-firebase'// add firebase Redux

class CollectionsDisplay extends Component {
  render() {
    const { collection } = this.props
    //console.log(this.props)
    return (
      <Header
        as="h1"
        className="box-ui-collection"
        onClick={null}
      >
        <Grid columns="equal" stackable>
          <Grid.Column verticalAlign="middle" width={5}>
            <div className="center box-cat-name">
              <Icon as="i" link name="plus circle" />
              <div className="cat-name">{collection.name}</div>
              <Label basic color="grey" content="1" />
            </div>
          </Grid.Column>
          <Grid.Column className="pic-sizes" width={2}>
            <Image circular size="tiny" src="https://react.semantic-ui.com/images/avatar/large/rachel.png" />
          </Grid.Column>
          <Grid.Column className="pic-sizes" width={2}>
            <Image circular size="tiny" src="https://react.semantic-ui.com/images/avatar/large/molly.png" />
          </Grid.Column>
          <Grid.Column className="pic-sizes" width={2}>
            <Image circular size="tiny" src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
          </Grid.Column>
        </Grid>
      </Header>
    )
  }
}
function mapStateToProps(state, props) {
  //console.log(state)
  return {
    products: state.firestore.ordered.collections,
    state,
  }
}
export default compose(// HOC -  add
  connect(mapStateToProps),
  firestoreConnect([// arr
    { collection: 'products' }, // which collection we want connected
    { collection: 'auths' },
  ]),
)(CollectionsDisplay)
