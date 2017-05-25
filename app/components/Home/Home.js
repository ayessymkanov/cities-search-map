import React from 'react'
import Input from '../Input/Input'
import {HomeContainer, Title} from './HomeStyles'
import CityList from '../CityList/CityList'
import {connect} from 'react-redux'

class Home extends React.Component {

    state = {
        cities: [],
        showList: false
    }

    componentDidMount() {
        fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    cities: [...data]
                })

            })
    }

    componentWillReceiveProps(nextProps) {
        console.log('Receiving next props', nextProps)
        console.log('props', this.props)
        console.log('state', this.state)
    }

    findMatches = () => {
        const { input } = this.props
        const regex = new RegExp(input, 'gi')
        return input.length === 0 ? [] : this.state.cities.filter(city => city.city.match(regex) || city.state.match(regex))
    }

    render() {
        const cities = this.state.cities
        const empty = []
        return (
            <HomeContainer>
                <Title>City search</Title>
                <Input />
            <CityList cities={this.findMatches()}/>
            </HomeContainer>
        )
    }
}

export default connect((state) => {
    return {
        input: state.input
    }
})(Home)
