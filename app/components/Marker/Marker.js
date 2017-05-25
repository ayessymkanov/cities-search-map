import React, {Component} from 'react'
import {Mark} from './MarkerStyles'
import {MapMarker} from 'react-icons/fa/map-marker'

export default class Marker extends Component {
    static defaultProps = {
        lat: 0,
        lng: 0
    }
    render() {
        console.log('Marker props', this.props)
        return (
            <div>
                <Mark />
            </div>
        )
    }
    handleClick = () => {
        console.log(this.props.city)
    }
}
