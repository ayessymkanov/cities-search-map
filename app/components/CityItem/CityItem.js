import React, {Component} from 'react'
import {ListItem} from './CityItemStyles'
import {connect} from 'react-redux'
import {chooseCity} from '../../AC/chooseCity'
import {setValue} from '../../AC/setValue'

class CityItem extends Component {
    render() {
        return (
            <ListItem onClick={this.handleClick}>
                <span>{this.props.city.city} - {this.props.city.state}</span>
            </ListItem>
        )
    }
    handleClick = () => {
        const { city, state, latitude, longitude } = this.props.city
        console.log(this.props.city)
        this.props.chooseCity(this.props.city)
        this.props.setValue(`${city}, ${state}`)
    }
}

export default connect(null, {chooseCity, setValue})(CityItem)
