import React, {Component} from 'react'
import {List, NoItems} from './CityListStyles'
import CityItem from '../CityItem/CityItem'
export default class CityList extends Component {
    render() {
        const { cities } = this.props
        const items = cities.map(city => <li key={city.rank}><CityItem city={city} /></li>)
        return (
            <List>
                {items.length > 0 ? items : ''}
            </List>
        )
    }
}
