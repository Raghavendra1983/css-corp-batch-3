import React, { forwardRef, memo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { TodoConsumer } from '../../context/WeatherContext';

class Input extends PureComponent {
    render() {
        return (
            <div className="pt-6 w-3/4">
                <div className="border border-3">
                    <div>
                        <div><label className="w-full pl-3 font-bold">LOCATION</label></div>
                        <input className="pb-4" type="text"></input>
                    </div>
                </div>
            </div>
        );
    }
}

export default Input;