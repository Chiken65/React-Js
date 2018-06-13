import React, { Component } from 'react';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            password: '',
            phone_no: '',
            email: '',
            address: ''
        };
    }

    handleNameChange = (evt) => {
        // console.log(value, evt);
        console.log(this.state);

        // this.setState({ name: evt.target.value, password: evt.target.value });
    }

    handleSubmit() {
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Name" value={this.state.name} onChange={this.handleNameChange} />
                <input type="text" placeholder="password" value={this.state.password} onChange={this.handleNameChange} />
                <input type="text" placeholder="phone_no" value={this.state.phone_no} onChange={this.handleNameChange} />
                <input type="text" placeholder="email" value={this.state.email} onChange={this.handleNameChange} />
                <input type="text" placeholder="address" value={this.state.address} onChange={this.handleNameChange} />
                <button type='submit'>Submit</button>
            </form>
        );
    }
}
export default Home;