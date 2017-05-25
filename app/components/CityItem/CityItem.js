import React, {Component} from 'react'
import {ListItem} from './CityItemStyles'

export default class CityItem extends Component {
    render() {
        console.log('city item props', this.props)
        return (
            <ListItem onClick={this.handleClick}>
                <span>{this.props.city.name} - {this.props.city.state}</span>
            </ListItem>
        )
    }
    handleClick = () => {
        console.log(`${this.props.city.name} is clicked`)
    }
}
