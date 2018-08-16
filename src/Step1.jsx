import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

class Step1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '70 65 6c 63 67 62 20 7a 72 6e 61 66 20 70 65 6c 63 67 62 20 7a 72 6e',
            backValue: '28 00 00 00 00 00 0c 4d 36 14 1e 16 52 0e 13 17 57 07 4f 50 08 11 41 0a 1c 47 43 1b 17 50 00 07 45 4d 15 0e 1e 06 0f 13 0b 50 17 00 4d 04 06 4d 4e 10 41 11 06 16 1f 1a 43 00 0c 0b 05 4e 1e 4f 15 1b 1c 50 07 0a 52 04 00 12'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        var xorValue = "";
        var value = "";

        if (event.target.name === 'front-value') {

            try {
                xorValue = xor(asciiToHex(rot13(hexToAscii(event.target.value))), this.state.backValue.replace(/ /g, ""));
            } catch (err) {
                xorValue = "Failed";
            }

            this.setState({
                value: event.target.value,
                asciiValue: hexToAscii(event.target.value),
                rot13Value: rot13(hexToAscii(event.target.value)),
                reHexValue: asciiToHex(rot13(hexToAscii(event.target.value))),
                backValue: this.state.backValue,
                xorValue: xorValue
            });
        }

        else if (event.target.name === 'back-value') {
            try {
                xorValue = xor(this.state.reHexValue, event.target.value.replace(/ /g, ""));
            } catch (err) {
                xorValue = "Failed";
            }
            value = this.state.value;

            this.setState({
                value: value,
                asciiValue: hexToAscii(value),
                rot13Value: rot13(hexToAscii(value)),
                reHexValue: asciiToHex(rot13(hexToAscii(value))),
                backValue: event.target.value,
                xorValue: xorValue
            });
        }
        else if (event.target.name === 'rot13-value') {
            try {
                xorValue = xor(asciiToHex(event.target.value), this.state.backValue.replace(/ /g, ""));
            } catch (err) {
                xorValue = "Failed";
            }
            value = this.state.value;
            var backValue = this.state.backValue;

            this.setState({
                value: asciiToHex(rot13(event.target.value)),
                asciiValue: rot13(event.target.value),
                rot13Value: event.target.value,
                reHexValue: asciiToHex(event.target.value),
                backValue: backValue,
                xorValue: xorValue
            });
        }
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <FormGroup controlId="formBasicText">
                    <ControlLabel>Front Value</ControlLabel>
                    <FormControl type="text" value={this.state.value} placeholder="Enter text" onChange={this.handleChange} name="front-value" />
                    <ControlLabel>Ascii Value</ControlLabel>    <FormControl type="text" value={this.state.asciiValue} placeholder="Enter text" onChange={this.handleChange} name="ascii-value" />
                    <ControlLabel>Rot13 Value</ControlLabel> <FormControl type="text" value={this.state.rot13Value} placeholder="Enter text" onChange={this.handleChange} name="rot13-value" />
                    <ControlLabel>Hex Rot13 Value</ControlLabel><FormControl type="text" value={this.state.reHexValue} placeholder="Enter text" onChange={this.handleChange} name="rehex-value" />
                    <ControlLabel>Back Value</ControlLabel><FormControl type="text" value={this.state.backValue} placeholder="Enter text" onChange={this.handleChange} name="back-value" />
                    <ControlLabel>XOR Value</ControlLabel><FormControl type="text" value={this.state.xorValue} placeholder="Enter text" onChange={this.handleChange} name="xor-value" />
                </FormGroup>
            </div>
        );
    }
}

function hexToAscii(hexx) {
    var hex = hexx.toString();//force conversion
    hex = hex.replace(/ /g, "");
    var str = '';
    for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

function asciiToHex(str) {
    var arr1 = [];
    for (var n = 0, l = str.length; n < l; n++) {
        var hex = Number(str.charCodeAt(n)).toString(16);
        arr1.push(hex);
    }
    return arr1.join('');
}

function rot13(s) {
    try {
        var c = 0;
        var k = 0;
        return (s ? s : this).split('').map(function (_) {
            if (!_.match(/[A-Za-z]/)) return _;
            c = Math.floor(_.charCodeAt(0) / 97);
            k = (_.toLowerCase().charCodeAt(0) - 83) % 26 || 26;
            return String.fromCharCode(k + ((c === 0) ? 64 : 96));
        }).join('');
    } catch (error) {
        return 'Failed';
    }
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

export default Step1;