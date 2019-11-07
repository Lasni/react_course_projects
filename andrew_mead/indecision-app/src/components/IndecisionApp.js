import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {

  state = {
    options: [],
    selectedOption: undefined
  }
  handleClearModal = () => {
    this.setState(() => ({ selectedOption: false }))
  }
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }))
  }
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return option !== optionToRemove
      })
    }))
  }
  handlePickOption = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const randomOpt = this.state.options[randomNum]
    this.setState(() => ({ selectedOption: randomOpt }))
  }
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }
    this.setState((prevState) => ({ options: prevState.options.concat(option) }))
  }
  // BEFORE DISPLAYING THE COMPONENT
  componentDidMount = () => {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      if (options) {
        this.setState(() => ({ options }))
        console.log('fetching data')
      }
    }
    catch (e) {
      console.log(e)
    }
  }
  // AFTER COMPONENT DATA CHANGES
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
      console.log('saving data')
    }
  }
  // BEFORE REMOVING THE COMPONENT
  componentWillUnmount = () => {

  }
  render = () => {
    const subtitle = 'Put your life in the hands of a computer'
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePickOption={this.handlePickOption}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearModal={this.handleClearModal}
        />
      </div>
    );
  }
}
IndecisionApp.defaultProps = {
  options: []
}