import React from 'react';

const Form = (props) => {

    const myForm = () => {
        return ({
            display: 'flex',
            backgroundColor: 'beige',
            borderRadius: '3px',
            padding: '1.8em'
        })
    }
    const message = () => {
        return {
            display: 'flex',
            flexDirection: 'column',
            order: '2'
        }
    }
    // //   message > textarea= {
    // //     flex: '1',
    // //     minWidth: '18em'
    // // }
    // contact = {
    //     flex: '1',
    //     order: '1',
    //     marginRight: ' 2em'
    // }
    // contactInput = {
    //     width: '100 %'
    // }

    // contactButton = {
    //     padding: '1em',
    //     marginBottom: ' 1em'
    // }
    // contactButton = {
    //     background: 'gray',
    //     color: 'white',
    //     border: '0'
    // }


    return (
        <form style={myForm()} onSubmit={props.getWeather}>
            <input style={message()} type='text' name='city' placeholder='city..' />
            <input style={message()} type='text' name='country' placeholder='country...' />
            <button style={message()}> get weather!</button>
        </form>
    );

}
export default Form;
