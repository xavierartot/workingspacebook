/*
 * InputCreate.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 * parent ModalCollection
 */
import React, { Component } from 'react'
import { Button, Icon, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'

class InputCreate extends Component {
  state = {
    createContent: '',
  }
  handleCreate = (event) => {
    event.preventDefault()
    console.log(event)
    // add the Collections created to an action
  }
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }
  render() {
    const { eventCreateLibrary } = this.props
    return (
      <div className="InputCreate">
        <Input>
          <input
            id="createContent"
            onChange={this.handleChange}
            placeholder="Library Name"
            type="text"
            value={this.state.createContent}
          />
          <Button
            onClick={this.handleCreate}
            type="submit"
          >Create
          </Button>
        </Input>
        <Icon
          circular
          className="icon-close"
          color="gray"
          name="close"
          onClick={eventCreateLibrary}
          size="small"
        />
      </div>
    )
  }
}
function mapStateToProps({ state }, props) {
  return {
    state,
  }
}
export default connect(mapStateToProps)(InputCreate)
