import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            userdet: [{ name: '', email: '', phone: '' }],
        };
    }

    handleNameChange = (evt) => {
        this.setState({ name: evt.target.value });
    }

    handleuserdetNameChange = (idx) => (evt) => {
        const newUser = this.state.userdet.map((userdet, sidx) => {
            if (idx !== sidx) return userdet;
            return { ...userdet, name: evt.target.value };
        });

        this.setState({ userdet: newUser });
    }

    handleSubmit = (evt) => {
        const { name, userdet } = this.state;
        alert(`Incorporated: ${name} with ${userdet.length} userdet`);
    }

    handleAdduserdet = () => {
        this.setState({ userdet: this.state.userdet.concat([{ name: '', email: 'gmail', phone: '123' }]) });
    }

    handleRemoveuserdet = (idx) => () => {
        this.setState({ userdet: this.state.userdet.filter((s, sidx) => idx !== sidx) });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Company name, e.g. Magic Everywhere LLC"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                />

                <h4>User Details</h4>

                {this.state.userdet.map((userdet, idx) => (
                    <div className="shareholder">
                        <input
                            type="text"
                            placeholder={`user #${idx + 1} name`}
                            value={userdet.name}
                            onChange={this.handleuserdetNameChange(idx)}
                        />
                        <input
                            type="text"
                            placeholder={`user #${idx + 1} email`}
                        />
                        <input
                            type="text"
                            placeholder={`user #${idx + 1} phone`}
                        />
                        <button type="button" onClick={this.handleRemoveuserdet(idx)} className="small">-</button>
                    </div>
                ))}
                <button type="button" onClick={this.handleAdduserdet} className="small">Add user    </button>
                <button>Submit</button>
            </form>
        )
    }
}
export default Login;