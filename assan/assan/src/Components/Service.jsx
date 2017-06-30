import React from 'react';
import { Col, Row } from 'react-bootstrap';
export default class Service extends React.Component {
    constructor() {
        super()
        this.state = {
            Service: [],
        }
    }
    componentWillMount() {
        this.state.Service = [
            {
                icon: 'fa fa-tablet',
                tittle: 'Fully Responsive',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing metus. elit. Quisque rutrum pellentesque imperdiet.'
            },
            {
                icon: 'fa fa-twitter',
                tittle: 'BOOTSTRAP 3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing metus. elit. Quisque rutrum pellentesque imperdiet.'
            },
            {
                icon: 'fa fa-code',
                tittle: '250+ VALID HTML5 PAGES AND MUCH MORE...',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing metus. elit. Quisque rutrum pellentesque imperdiet.'
            }
        ]
    }

    render() {
        var Service = this.state.Service.map(service => {
            return (
                <Col md={6}>
                <div className="lineheight">
                    <div className="services-box-icon">
                        <i className={service.icon}></i>
                    </div>

                    <div className="services-box-info">
                        <h4>{service.tittle}</h4>
                        <h5>{service.description}</h5>
                    </div>
                </div>
                </Col>
            )
        })

        return (
            <div className="container-fluid">
                <div className="row">
                    <Col md={6}>
                        <img src="team.png" className="img-responsive" />
                    </Col>

                    
                        <center>
                            <h2>CORE FEATURES OF <span className="colored-text">ASSAN</span></h2>
                        </center>

                        {Service}
                        <a href="#" className="btn btn-theme-dark btn-lg">Purchase Now</a>
                    
                </div>
            </div>
        )
    }
}