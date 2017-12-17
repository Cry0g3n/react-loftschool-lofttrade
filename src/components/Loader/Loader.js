import React, {Component} from 'react';
import Spinner from 'react-svg-spinner';

export default class Loader extends Component {
    render() {
        return (
            <Spinner size="70px" gap={4} color="fuchsia"/>
        );
    }
}