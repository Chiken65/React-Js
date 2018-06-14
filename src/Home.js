import React, { Component } from 'react';

class Home extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            username: '',
            email: '',
            birthdate: ''
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        this.setState({
            username: 'Rohith',
            email: 'ra@gmail.com',
            birthdate: 'Today'
        });
        fetch('/api/form-submit-url', {
            method: 'POST',
            body: data,
        });
    }

    componentDidMount() {
        // onlyrisk
        fetch("http://97.74.237.101:2255/risk/threats_details")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        items: result.data
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className='row'>
                    <div className='col-md-12'>
                        <ul className='col-md-6'>
                            {items.map(item => (
                                <li key={item.id}>
                                    {item.itemName}
                                </li>
                            ))}
                        </ul>

                        <form className='col-md-6' onSubmit={this.handleSubmit}>
                            <label htmlFor="username">Enter username</label>
                            <input id="username" name="username" type="text" />

                            <label htmlFor="email">Enter your email</label>
                            <input id="email" name="email" type="email" />

                            <label htmlFor="birthdate">Enter your birth date</label>
                            <input id="birthdate" name="birthdate" type="text" />

                            <button>Send data!</button>
                        </form>
                    </div>
                </div>
            );
        }
    }
}
export default Home;