import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            userdet: [{ name: '', email: '', phone: '', addmore: [{ games: '' }] }],
        };
    }

    handleNameChange = (evt) => {
        this.setState({ name: evt.target.value });
    }

    handleuserdetNameChange = (idx, value) => (evt) => {
        console.log(value, idx);
        const newUser = this.state.userdet.map((userdet, sidx) => {
            if (idx !== sidx) return userdet;
            if (value == 'name')
                return { ...userdet, name: evt.target.value };
            if (value == 'email')
                return { ...userdet, email: evt.target.value };
            if (value == 'phone')
                return { ...userdet, phone: evt.target.value };
        });

        this.setState({ userdet: newUser });
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(this.state);
        const { name, userdet } = this.state;
        // alert(`Incorporated: ${name} with ${userdet.length} userdet`);
    }

    handleAdduserdet = () => {
        this.setState({ userdet: this.state.userdet.concat([{ name: '', email: '', phone: '', addmore: [{ games: '' }] }]) });
    }

    handleAddgames = (index) => () => {
        console.log(this.state, index);
        // this.setState({userdet: this.state.userdet})
        this.setState({ userdet: this.state.userdet[index].addmore.concat([{ games: '' }]) });
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

                {this.state.userdet.map((text1, idx) => (
                    <div className="shareholder">
                        <input
                            type="text"
                            placeholder={`user #${idx + 1} name`}
                            value={text1.name}
                            onChange={this.handleuserdetNameChange(idx, 'name')}
                        />
                        <input
                            type="text"
                            placeholder={`user #${idx + 1} email`}
                            value={text1.email} onChange={this.handleuserdetNameChange(idx, 'email')} />
                        <input
                            type="text"
                            placeholder={`user #${idx + 1} phone`}
                            value={text1.phone} onChange={this.handleuserdetNameChange(idx, 'phone')} />
                        <button type="button" onClick={this.handleRemoveuserdet(idx)} className="small">-</button>
                        <br />

                        {/* {text1.addmore.map((data, index) => (
                            <input
                                type="text"
                                placeholder={`user #${index + 1} name`}
                                value={data.games}
                            />
                        ))} */}
                        <button type="button" onClick={this.handleAddgames(idx)} className="small">Add Games    </button>
                    </div>
                ))}
                <button type="button" onClick={this.handleAdduserdet} className="small">Add user    </button>
                <button>Submit</button>
            </form>
        )
    }
}
export default Login;