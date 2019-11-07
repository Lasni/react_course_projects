import React from 'react';

class SearchBar extends React.Component {

  state = {
    inputText: ''
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    this.props.onSearchSubmit(this.state.inputText)
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              onChange={(e) => this.setState({ inputText: e.target.value })}
              value={this.state.inputText} />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;