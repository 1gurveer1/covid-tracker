import React from 'react'
import { Form } from "react-bootstrap"

const Contact = () => {
    return (
        <>
        <div className="container">
                <h1 className="text-center" style={{ marginTop: '20px', color: '#DBE6F6'}}>Contact Us</h1>
                <Form>
                    <Form.Group className="mb-6 my-3" style={{ color: 'white', fontSize:'18px'}} controlId="form.Name">
                        Name
                        <Form.Control className="my-2" style={{
                            marginTop: '5px',
                            paddingTop: '15px',
                            paddingBottom: '15px',
                            paddingLeft: '10px',
                            color: '#DBE6F6',
                            backgroundColor: '#202020',
                            fontSize: '18px'
                        }} type="text" placeholder="Name" name="name" minLength={4} required />
                    </Form.Group>

                    <Form.Group className="mb-6" style={{ color: 'white', fontSize: '18px' }} controlId="form.Email">
                        Email
                        <Form.Control className="my-2" style={{

                            paddingTop: '15px',
                            paddingBottom: '15px',
                            paddingLeft: '10px',
                            backgroundColor: '#202020',
                            color: '#DBE6F6',
                            fontSize: '18px'
                        }} type="email" placeholder="Email" name="email" required />
                    </Form.Group>

                    <Form.Group className="mb-6 my-3" style={{ color: 'white', fontSize: '18px' }} controlId="form.phone">
                        Mobile Number

                        <Form.Control className="my-2" style={{

                            paddingTop: '15px',
                            paddingBottom: '15px',
                            paddingLeft: '10px',
                            backgroundColor: '#202020',
                            color: '#DBE6F6',
                            fontSize: '18px'
                        }} type="phone" placeholder="Mobile" name="phone" required/>
                    </Form.Group>

                    <Form.Group className="mb-6" style={{ color: 'white', fontSize: '18px' }} controlId="form.Textarea">
                        Describe your condition
                        <Form.Control className="my-2" style={{

                            paddingTop: '15px',
                            paddingBottom: '15px',
                            paddingLeft: '10px',
                            color: '#DBE6F6',
                            backgroundColor: '#202020',
                            fontSize: '18px'
                        }} as="textarea" rows={3} placeholder="Message" name="message" minLength={4} required />
                    </Form.Group>
                    <button className="cbutton" style={{ backgroundColor: '#4E67EB',border:'none', fontSize: '15px',borderRadius: '5px' ,marginTop: '10px', height: '50px', width: '130px'}}>Send Message</button>
                </Form>
        </div>
            
        </>
    )
}

export default Contact
