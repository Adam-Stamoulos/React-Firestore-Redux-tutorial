import React, { Component } from 'react'
import { connect } from 'react-redux';

class TestComponent extends Component {
    render() {
        return (
            <div>
                <h1>Test component</h1>
            </div>
        )
    }
}


export default connect()(TestComponent);