import React, {Component} from 'react'
import {SearchInput, InputContainer, Clear} from './InputStyles'
import {connect} from 'react-redux'
import {input} from '../../AC/input'
import {chooseCity} from '../../AC/chooseCity'
import {setValue} from '../../AC/setValue'



class Input extends Component {


    render() {
        return (
            <InputContainer>
                <SearchInput
                    type="text"
                    placeholder="Enter a city or a state name"
                    value={this.props.value}
                    onChange={this.handleChange}
                    autoFocus />
                <Clear onClick={this.clearInput}></Clear>
            </InputContainer>
        )
    }
    handleChange = (e) => {
        this.props.input(e.target.value)
        this.props.setValue(e.target.value)
    }
    clearInput = () => {
        this.props.chooseCity({})
        this.props.setValue('')
        this.props.input('')
    }
}

export default connect((state) => {
    return {
        value: state.value
    }
}, {input, chooseCity, setValue})(Input)
