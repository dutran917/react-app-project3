import React from 'react'
import { FormControl,Form,Button } from 'react-bootstrap';
const Help = () => {
    return (
        <div>
            <div className="help-bg">
                <div className="help-search">
                    <h1 className = "text-help">What can we help you with?</h1>
                    <Form className="form-help"> 
                    <FormControl
                        type="search"
                        placeholder="Ask something..."
                        className="mr-3"
                        aria-label="Search"
                    />
                    <Button variant="danger">Ask</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Help
