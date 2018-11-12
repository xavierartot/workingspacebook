/*
 * InputCreate.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 * parent <ModalCollections/>
 */
import React, { Component } from 'react'

import { connect } from 'react-redux'
import { compose } from 'redux'// add to use Higher Order Component
import { firestoreConnect } from 'react-redux-firebase'// add firebase Redux

import { Button, Icon, Input } from 'semantic-ui-react'
import { handleAddCollection } from '../store/actions/shared'
// import { addCollection } from '../store/actions/collections'

class InputCreate extends Component {
  state = {
    createContent: '',
  }
  handleCreate = (event) => {
    event.preventDefault()
    // this.props.dispatch(addCollection(this.state.createContent))
    this.props.dispatch(handleAddCollection(this.state.createContent))
  }
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }
  render() {
    const { eventCreateLibrary } = this.props
    // console.log(collections)
    return (
      <form onSubmit={this.handleCreate}>
        <div className="InputCreate" >
          <Input>
            <input
              id="createContent"
              onChange={this.handleChange}
              placeholder="Library Name"
              type="text"
              value={this.state.createContent}
            />
            <Button
              type="submit"
            >Create
            </Button>
          </Input>
          <Icon
            circular
            className="icon-close"
            color="grey"
            name="close"
            onClick={eventCreateLibrary}
            size="small"
          />
        </div>
      </form>
    )
  }
}
function mapStateToProps(state, props) {
  // console.log(state)
  return {
    collections: state.firestore.ordered.collections,
    state,
  }
}
export default compose(// HOC -  add
  connect(mapStateToProps),
  firestoreConnect([// arr
    {
      collection: 'collections',
      auths: 'auths',
    }, // which collection we want connected
  ]),
)(InputCreate)
