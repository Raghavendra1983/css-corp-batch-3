import React, { Component, createRef, Suspense } from 'react';
import './weather.css';
import cn from 'classnames';
import WeatherForm from './form';


export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityObjList: [],
            result: ''
        };
        this.inputText = createRef();
    }

    searchCity = async (city) => {
        const resultStr = await fetch(`http://localhost:3000/weather-info?city=${city}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });
        const resultObj = await resultStr.json();
        console.log(resultObj);
        this.setState(() => {
            return {
                resultText: (resultObj[0]) ? `Temperature in the city : ${resultObj[0].city} is :  ${resultObj[0].temp}` : `${city} not found`
            }
        });
    }

    searchWeather = (event) => {
        event.preventDefault();
        this.setState(() => {
            return {
                resultText: ''
            }
        })
        let enteredCity = this.inputText.current.value;
        this.searchCity(enteredCity.toLowerCase());
    }

    render() {
        console.log("Index render");
        return (
            <div className="bg-[#FAFAFA] h-screen flex flex-col">
                <h1 className="text-center my-2 text-lg font-bold">Weather Search app</h1>
                <WeatherForm searchWeather={this.searchWeather} ref={this.inputText} />
                {this.state.resultText === '' && (
                    <h1 className="text-center text-red-500">Loading...</h1>
                )}
                <span className={cn('text-center', {})}   > {this.state.resultText}</span>
            </div>
        );
    }
}