class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      something: '',
      showModal: false
    }
  }

  handleChangeForms = (e, { value }) => {
    this.setState({ something: value });
  }

  handleCreateButton(evt) {
    evt.preventDefault()
    this.closeModal();
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    const {
      something,
      showModal
    } = this.state

    return (
      <Modal
        closeIcon
        onClose={this.closeModal}
        open={showModal}
        trigger={<Button onClick={() => this.setState({ showModal: true })}>New Challenge</Button>}
      >
        <Modal.Header>My Modal</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Input
              label='Something'
              value={something}
              onChange={this.handleChangeForms}
            />
            <Button onClick={(evt) => this.handleCreateButton(evt)}>Save</Button>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
<link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.9/semantic.min.css" rel="stylesheet"/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/semantic-ui-react@0.77.1/dist/umd/semantic-ui-react.min.js"></script>
<div id="root"></div>
