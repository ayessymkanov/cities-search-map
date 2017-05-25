import React from 'react'
import Input from '../Input/Input'
import {HomeContainer, Title, MapContainer} from './HomeStyles'
import CityList from '../CityList/CityList'
import {connect} from 'react-redux'
import GoogleMapReact from 'google-map-react'

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

    findMatches = () => {
        const { input } = this.props
        const regex = new RegExp(input, 'gi')
        return input.length === 0 ? [] : this.state.cities.filter(city => city.city.match(regex) || city.state.match(regex))
    }

    render() {
        console.log('Home props', this.props)
        const cities = this.state.cities
        const empty = []
        return (
            <div>
            <HomeContainer>
                <Title>City search</Title>
                <Input />
            {this.props.showList && <CityList cities={this.findMatches()}/>}

            </HomeContainer>
            <MapContainer>
                <GoogleMapReact
                center={this.props.coordinates}
                defaultZoom={10} />
            </MapContainer>
            </div>
        )
    }
}

export default connect((state) => {
    return {
        input: state.input,
        showList: state.showList,
        coordinates: state.coordinates
    }
})(Home)
