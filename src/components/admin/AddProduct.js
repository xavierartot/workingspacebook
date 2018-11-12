/*
 * AddProduct.js
 * Parent: <Profil/>
 */
import React, { Component } from 'react'
import { Header, Select, Form, Input, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class AddProduct extends Component {
  state = {
    title: '',
    body: '',
    price: '',
    productLink: '',
    deleted: false,
    picture: [],
    collections: [], // categorie of the product
    controlForm: {
      submitActive: null,
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
    this.setState({ controlForm: { ...this.state.controlForm, submitActive: true } })

    // const { profile } = this.props
    // this.props.history.push(`/${profile.firstName}${profile.lastName}/likes`)

    // this.props.dispatch(handleAddProduct(this.state))
  }
  render() {
    const { profile, collections } = this.props
    const options = collections && collections.map(c => ({ key: c.id, text: c.name, value: c.name }))
    console.log(options)
    // const options = [
    // { key: '5', text: '5 minutes', value: '5' },
    // { key: '15', text: '15 minutes', value: '15' },
    // { key: '30', text: '30 minutes', value: '30' },
    // { key: '60', text: '1 hour', value: '60' },
    // { key: '120', text: '2 hours', value: '120' },
    // ]
    // console.log(options)
    return (
      <div className="AddProduct">
        <Header as="h3" className="tac">{`${profile.firstName}${profile.lastName}`}</Header>
        <Form onClick={this.handleSubmit} >
          <Form.Field
            control={Input}
            error={false}
            icon=""
            iconPosition="left"
            id="title"
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
            id="price"
            label="Price"
            placeholder="Price"
            required
            type="text"
            value={this.state.price}
          />
          <Form.Field
            control={Input}
            error={false}
            icon=""
            iconPosition="left"
            id="description"
            label="Description"
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
            label="Link of Product"
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
            label="Amazone Store Link"
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
            label="Amazone Link"
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
            label="Walmart link"
            onChange={this.handleChange}
            placeholder="walmart Link"
            type="text"
            value={this.state.walmartLink}
          />
          { options &&
            <Form.Select
              control={Select}
              label="Categorie"
              options={options}
              required
            />
          }
          <Button loading={this.state.submitActive}>Create</Button>
        </Form>

      </div>
    )
  }
}
function mapStateToProps(state, props) {
  const p = props.match.params
  console.log(p)
  const products = state.firestore.data.products
  const collections = state.firestore.data.collections
  // console.log(products)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    products,
    collections: collections && Object.values(collections),
  }
}
export default withRouter(connect(mapStateToProps)(AddProduct))

