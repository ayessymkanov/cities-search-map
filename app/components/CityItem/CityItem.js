import React, {Component} from 'react'
import {ListItem} from './CityItemStyles'
import {connect} from 'react-redux'
import {chooseCity} from '../../AC/chooseCity'
import {setValue} from '../../AC/setValue'

class CityItem extends Component {
    render() {
        const { city, state, population } = this.props.city
        return (
            <ListItem onClick={this.handleClick}>
                <div>{city} - {state}</div>
            <div>{this.numberWithCommas(population)}</div>
            </ListItem>
        )
    }

    numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    handleClick = () => {
        const { city, state, latitude, longitude } = this.props.city
        this.props.chooseCity(this.props.city)
        this.props.setValue(`${city}, ${state}`)
    }
}

export default connect(null, {chooseCity, setValue})(CityItem)
