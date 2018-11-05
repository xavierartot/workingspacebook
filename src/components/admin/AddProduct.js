/*
 * AddProduct.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 */
import React, { Component } from 'react'
import { Select, Message, Form, Input, Button, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

class AddProduct extends Component {
  state = {
    author: '',
    title: '',
    description: '',
    createAt: '',
    productLink: '',
    picture: ['https://placeimg.com/640/480/tech'],
    deleted: false,
    likeAuthorProduct: [], // collections of product liked  by author
    followerIdUser: [],
    followingIdUser: [],
    amazonStore: 'amazon.com/stores/14511840011',
    amazonLink: 'amazon.com/stores/14511840011',
    walmartLink: 'amazon.com/stores/14511840011',
    collections: ['894toq4zt84uz8v4t8wunvox'],

    errorForm: false,
    errorField: false,
    submitActive: false,
    pictures: [],
    content: {
    },
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    // placholder images: https://placeimg.com/640/480/tech
    this.setState(() => ({
      submitActive: true,
    }))
    console.log(this.state.submitActive)

    this.props.history.push('/')
    setTimeout(() => this.closePopup(), 2000)

    // this.props.dispatch(handleAddProduct(this.state))
  }
  render() {
    console.log(this.state)
    return (
      <div className="AddProduct">
        <Form>

          <Form.Field
            control={Input}
            error={false}
            icon=""
            iconPosition="left"
            id="author"
            onChange={this.handleChange}
            placeholder="author"
            required
            type="text"
            value={this.state.author}
          />
          <Form.Field
            control={Input}
            error={false}
            icon=""
            iconPosition="left"
            id="title"
            onChange={this.handleChange}
            placeholder="Title"
            required
            type="text"
            value={this.state.title}
          />
          <Form.Field
            control={Input}
            error={false}
            icon=""
            iconPosition="left"
            id="description"
            onChange={this.handleChange}
            placeholder="description"
            required
            type="text"
            value={this.state.description}
          />
          <Form.Field
            control={Input}
            error={false}
            icon=""
            iconPosition="left"
            id="productLink"
            onChange={this.handleChange}
            placeholder="Link of Product"
            required
            type="text"
            value={this.state.productLink}
          />

          <Form.Field
            control={Input}
            error={false}
            icon=""
            iconPosition="left"
            id="amazonStore"
            onChange={this.handleChange}
            placeholder="Amazone Store Link"
            required
            type="text"
            value={this.state.amazonStore}
          />
          <Form.Field
            control={Input}
            error={false}
            icon=""
            iconPosition="left"
            id="amazonLink"
            onChange={this.handleChange}
            placeholder="Amazone Link"
            required
            type="text"
            value={this.state.amazonLink}
          />
          <Form.Field
            control={Input}
            error={false}
            icon=""
            iconPosition="left"
            id="walmartLink"
            onChange={this.handleChange}
            placeholder="walmartLink Link"
            required
            type="text"
            value={this.state.walmartLink}
          />
          <Form.Field
            control={Select}
            label="Gender"
            options={options}
            placeholder="Gender"
          />
        </Form>

      </div>
    )
  }
}
function mapStateToProps({ state }, props) {
  return {
    state,
  }
}
export default connect(mapStateToProps)(AddProduct)
