import React from 'react';
import { Col, Row } from 'react-bootstrap';
export default class Service extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }
    componentWillMount() {
        this.state.data = [
            {
                number: '0',
                sign: '+',
                description1: 'Downloads'
            },
            {
                number: '87',
                description1: 'Happy Customers'
            },
            {
                number: '2',
                sign: '+',
                description1: 'Valid Layouts'
            },
            {
                number: '113',
                description1: 'Cups Of Tea'
            }
        ]
    }

    render() {
        var data = this.state.data.map(item => {
            return <div>
                <Col md={3}>
                    <div className="download">
                        <h3><span className="counter">{item.number}</span>{item.sign}<h4>{item.description1}</h4></h3>
                    </div>
                </Col>
            </div>
        })

        return (

            <div className="bg-data">
                <div className="container">
                    <div className="row">
                        <Col md={12}>
                            <section className="fun-fact-wrap fun-facts-bg">
                                {data}
                            </section>
                        </Col>
                    </div>
                </div>
            </div>
        )
    }
}