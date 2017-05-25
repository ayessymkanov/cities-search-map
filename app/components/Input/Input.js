import React, {Component} from 'react'
import {SearchInput, InputContainer, Clear} from './InputStyles'
import {connect} from 'react-redux'
import {input} from '../../AC/input'

class Input extends Component {

    render() {
        return (
            <InputContainer>
                <SearchInput
                    type="text"
                    placeholder="Start typing"
                    onChange={this.handleChange} />
                <Clear onClick={this.clearInput}></Clear>
            </InputContainer>
        )
    }
    handleChange = (e) => {
        console.log('handle change input', e.target.value)
        this.props.input(e.target.value)
    }
    clearInput = () => {
        this.props.input('')
    }
}

export default connect(null, {input})(Input)
