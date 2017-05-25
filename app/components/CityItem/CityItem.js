import React, {Component} from 'react'
import {ListItem} from './CityItemStyles'

export default class CityItem extends Component {
    render() {
        return (
            <ListItem onClick={this.handleClick}>
                <span>{this.props.city.city} - {this.props.city.state}</span>
            </ListItem>
        )
    }
    handleClick = () => {
        console.log(`${this.props.city.city} is clicked`)
    }
}
