import React from 'react';

const Weather = (props) => {
    return (
        <div>
            <p>this is the city:</p>
            <p>
                {props.city}
            </p>
            <p>
                {props.temp}
            </p>
            <p>
                {props.description}
            </p>


            {/* {
                props.city && props.country && <p className="weather__key"> Location:
	 		<span className="weather__value"> {props.city}, {props.country}</span>
                </p>
            } */}

        </div>
    )
}
export default Weather;