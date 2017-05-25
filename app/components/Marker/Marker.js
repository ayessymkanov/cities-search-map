import React, {Component} from 'react'
import {Mark} from './MarkerStyles'
import {MapMarker} from 'react-icons/fa/map-marker'

export default class Marker extends Component {
    static defaultProps = {
        lat: 0,
        lng: 0
    }
    render() {
        return (
            <Mark />
        )
    }
}
