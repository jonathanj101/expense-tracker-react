import React, { Component } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'

export class UserInput extends Component {
    render() {
        return (
            <div>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Username"
                        aria-label="Username"

                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Username"
                        aria-label="Username"

                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Username"
                        aria-label="Username"

                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Username"
                        aria-label="Username"
                    />
                </InputGroup>

            </div>
        )
    }
}

export default UserInput
