import React from 'react';
import front from './Front.jpg';
import back from './Back.jpg';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

class Step1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    render() {
        return (
            <div>
                <p className="App-intro">
                    This app shows all the code needed to solve the badge problem.
            </p>
                <img src={front} className="logo" alt="front" width="300" height="300" />
                <img src={back} className="logo" alt="back" width="300" height="300" />
                <FormGroup>
                    <ControlLabel>We'll be working with the front of badge value :</ControlLabel>
                    <FormControl value="70 65 6c 63 67 62 20 7a 72 6e 61 66 20 70 65 6c 63 67 62 20 7a 72 6e" />
                    <ControlLabel>And using a back of badge value of </ControlLabel>
                    <FormControl value="28 00 00 00 00 00 0c 4d 36 14 1e 16 52 0e 13 17 57 07 4f 50 08 11 41 0a 1c 47 43 1b 17 50 00 07 45 4d 15 0e 1e 06 0f 13 0b 50 17 00 4d 04 06 4d 4e 10 41 11 06 16 1f 1a 43 00 0c 0b 05 4e 1e 4f 15 1b 1c 50 07 0a 52 04 00 12" />
                </FormGroup>
            </div>
        );
    }
}

export default Step1;