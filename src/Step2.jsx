import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

class Step2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            backvalue: '',
            hexRot13Value: '63727970746f206d65616e732063727970746f206d65616e732063727970746f206d65616e7363727970746f206d65616e732063727970746f206d65616e732063727970746f206d6561'
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        var newValue = "";

        if (event.target.name === 'front-value') {

            try {
                newValue = xor(this.state.hexRot13Value, event.target.value.replace(/ /g, ""));
            } catch (err) {
                newValue = "Failed";
            }
            this.setState({
                value: event.target.value,
                backValue: newValue,
                hexRot13Value: this.state.hexRot13Value
            });
        }

        else if (event.target.name === 'back-value') {
            try {
                newValue = xor(this.state.hexRot13Value, asciiToHex(event.target.value)).toString('hex');
            } catch (err) {
                newValue = err;
            }

            this.setState({
                value: newValue,
                backValue: event.target.value,
                hexRot13Value: this.state.hexRot13Value
            });
        }
    }

    render() {
        return (
            <div>
                <FormGroup controlId="formBasicText">
                    <ControlLabel>Encrypted Hex Value</ControlLabel><FormControl type="text" value={this.state.value} placeholder="Enter text" onChange={this.handleChange} name="front-value" />
                    <ControlLabel>Decrypted Value</ControlLabel><FormControl type="text" value={this.state.backValue} placeholder="Enter text" onChange={this.handleChange} name="back-value" />
                </FormGroup>
            </div>
        );
    }
}

function asciiToHex(str) {
    var arr1 = [];
    for (var n = 0, l = str.length; n < l; n++) {
        var hex = Number(str.charCodeAt(n)).toString(16);
        arr1.push(hex);
    }
    return arr1.join('').toString();
}

function xor(a, b) {
    if (!Buffer.isBuffer(a)) a = new Buffer(a, 'hex');
    if (!Buffer.isBuffer(b)) b = new Buffer(b, 'hex');
    var res = [];
    var i = 0;
    if (a.length > b.length) {
        for (i = 0; i < b.length; i++) {
            res.push(a[i] ^ b[i]);
        }
    } else {
        for (i = 0; i < a.length; i++) {
            res.push(a[i] ^ b[i]);
        }
    }
    return new Buffer(res);
}

export default Step2;