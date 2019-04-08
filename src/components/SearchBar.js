import React from 'react'

class SearchBar extends React.Component {
  state = { searchTerm: '' }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label>
              Bildersuche:{' '}
              <input
                type="text"
                value={this.state.searchTerm}
                onChange={this.onChange}
              />
            </label>
          </div>
        </form>
      </div>
    )
  }

  onChange = event => {
    this.setState({ searchTerm: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onSubmit(this.state.searchTerm)
  }
}

export default SearchBar
