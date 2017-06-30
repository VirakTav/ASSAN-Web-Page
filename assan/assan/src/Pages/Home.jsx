import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Alllist from '../Components/Alllist';
import Awesome from '../Components/Awesome';
import Client from '../Components/Client';
import Clientservice from '../Components/Clientservice';
import Latestnew from '../Components/Latestnew';
import Service from '../Components/Service';
import Slideshow from '../Components/Slideshow';
import Whatwe from '../Components/Whatwe';
import Team from '../Components/Team';
import Data from '../Components/Data';

export default class Home extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Slideshow />
                <Whatwe />
                <Alllist /><br/>
                <Service />
                <Data/>
                <Client />
                <Clientservice />
                <Awesome />
                <Team />
                <Latestnew />
                
            </div>
        )
    }
}