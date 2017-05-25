import React from 'react'
import Input from '../Input/Input'
import {HomeContainer, Title} from './HomeStyles'
import CityList from '../CityList/CityList'

export default class Home extends React.Component {

    render() {
        const cities = [
            {name: 'Boston', state: 'MA'},
            {name: 'Lost Angeles', state: 'CA'},
            {name: 'New York', state: 'New York'}
        ]
        const empty = []
        return (
            <HomeContainer>
                <Title>City search</Title>
                <Input handleChange={this.handleChange} />
                <CityList cities={cities} />
            </HomeContainer>
        )
    }
}
