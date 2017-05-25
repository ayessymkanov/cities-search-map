import React, {Component} from 'react'
import {SearchInput, InputContainer, Clear} from './InputStyles'

export default class Input extends Component {
    state = {
        value: ''
    }

    render() {
        return (
            <InputContainer>
                <SearchInput
                    type="text"
                    placeholder="Start typing"
                    value={this.state.value}
                    onChange={this.handleChange} />
                <Clear onClick={this.clearInput}></Clear>
            </InputContainer>
        )
    }
    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    clearInput = () => {
        this.setState({
            value: ''
        })
    }
}
