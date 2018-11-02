/*
 * ModalCollections
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 * Parent <ProductGallery/>, <shop/>
 */
import React, { Component } from 'react'
// redux and firestore
import { connect } from 'react-redux'
import { compose } from 'redux'// add to use Higher Order Component
import { firestoreConnect } from 'react-redux-firebase'// add firebase Redux


import { Grid, Segment, Label, Input, Icon, Modal, Header, Image, Transition } from 'semantic-ui-react'
import InputCreate from '../InputCreate'
import CollectionsDisplay from '../CollectionsDisplay'

class ModalCollections extends Component {
  state = {
    visible: true,
    addProduct: null,
  }
  handleNewCollection = (e) => {
    console.log(e)
  }
  handleCreateLibrary = () => {
    this.setState(() => ({
      visible: !this.state.visible,
    }))
  }
  toggleVisibility = () => this.setState({ visible: !this.state.visible })
  render() {
    const { visible, addProduct } = this.state
    const {
      image, contentText, children, collections, products,
    } = this.props
    let bgc = ''
    if (!visible) {
      bgc = 'text-create-library'
    }
    // console.log(products, collections)
    let child
    if (children && children !== '') { child = <span className="collect-text">{children}</span> }
    return (
      <div className="">
        <Modal
          className="ModalCollections"
          closeIcon
          open
          size="large"
          trigger={
            <div>
              <Icon as="i" name="plus circle" />
              { child }
            </div>
          }
        >
          <Modal.Header>Your Library</Modal.Header>
          <Modal.Content className="modal-content">
            <Modal.Description>
              <h1 className="headerContent">
                <span>Add this to a Library</span>
                <img src="https://react.semantic-ui.com/images/avatar/large/rachel.png" />
              </h1>
              <div className={visible ? 'containerInput container-both' : 'containerText container-both'} >
                <Header
                  as="h1"
                  className={`box-ui-library-new ${bgc}`}
                  onClick={bgc && this.handleCreateLibrary || null}
                >
                  {
                  visible
                  ? <InputCreate eventCreateLibrary={this.handleCreateLibrary} newCollection={() => this.handleNewCollection()} />
                  : <span>Create a new Library</span>
                  }
                </Header>
              </div>
              { collections && collections.map(collection => (
                <CollectionsDisplay
                  key={collection.id}
                  collection={collection}
                  newCollection={this.handleNewCollection}
                  token={this.nameCollection}
                />
                ))
                }
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}
function mapStateToProps(state, props) {
  // console.log(state)
  return {
    collections: state.firestore.ordered.collections,
    products: state.firestore.ordered.products,
    state,
  }
}
export default compose(// HOC -  add
  connect(mapStateToProps),
  firestoreConnect([// arr
    {
      products: 'products',
      collection: 'collections',
      auths: 'auths',
    }, // which collection we want connected
  ]),
)(ModalCollections)
