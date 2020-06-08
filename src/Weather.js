import React, {Component} from 'react';
import DisplayTemp from './DisplayTemp';

class Weather extends Component {
    // UNSAFE_componentWillReceiveProps() {
    //     console.log(this.props);
    //     if (this.props.data !== undefined) {
    //         console.log(this.props.data);
    //         return;
    //     }
    // };
    render() {
        let displayTemp;
        if (this.props.data) {
            displayTemp = <DisplayTemp data={this.props.data.main}></DisplayTemp>;
        } else {
            displayTemp = null;
        };
        return (
            <div className="Weather">
            <h2>Weather in {this.props.data.name} is {displayTemp}</h2>
            <div className="tableContent">
                <ul>
                    <li>
                        <span>Local Time</span>
                        <span>12:32, 8 Jun 2020</span>
                    </li>
                    <li>
                        <span>Wind</span>
                        <span>Moderate breeze 5.8 m/s</span>
                    </li>
                    <li>
                        <span>Cloudiness</span>
                        <span>Overcast clouds</span>
                    </li>
                    <li>
                        <span>Pressure</span>
                        <span></span>
                    </li>
                    <li>
                        <span>Humidity</span>
                        <span></span>
                    </li>
                    <li>
                        <span>Rain</span>
                        <span></span>
                    </li>
                    <li>
                        <span>Sunrise</span>
                        <span></span>
                    </li>
                    <li>
                        <span>Sunset</span>
                        <span></span>
                    </li>
                    <li>
                        <span>Geo coords</span>
                        <span>[ 51.51, -0.13]</span>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
}
export default Weather;
