import './ApplForm.css';
import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.css';
export const ApplForm = () => {
  return (
    <div className="Form">
        <br />
        <Form>
  <Form.Group className="mb-3" controlId="name">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="Enter your full name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="name">
    <Form.Label>Pronouns</Form.Label>
    <Form.Control type="pronouns" placeholder="What are your pronouns?" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>School</Form.Label>
    <Form.Control type="school" placeholder="Enter your school" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Program</Form.Label>
    <Form.Control type="program" placeholder="Enter your current program" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Strengths</Form.Label>
    <Form.Control type="strengths" placeholder="What are you best at?" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Could use some work ( Math, Stats, Writing, Conversation, ect. )</Form.Label>
    <Form.Control type="weakness" placeholder="What do you want to improve?" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Interests</Form.Label>
    <Form.Control type="interests" placeholder="Hobby of choice?" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Schedule (Optional) </Form.Label>
    <Form.Control type="availibility" placeholder="What time of the week works best for you to be reached?" />
  </Form.Group>
  <Button variant="outline-info" type="submit">
    Submit
  </Button>
</Form>
    </div>
  )
}
