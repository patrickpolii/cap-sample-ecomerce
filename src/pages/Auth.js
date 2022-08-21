import { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

class Auth extends Component {
  render() {
    return (
      <div className="App">
        <h2>Sign Up</h2>
        <Form className="form">
          <FormGroup>
            <Label for="exampleName">Name</Label>
            <Input
              type="text"
              name="name"
              id="exampleEmail"
              value={dataRegister.name}
              onChange={(e) =>
                setDataRegister({ ...dataRegister, name: e.target.value })
              }
              placeholder="Enter your name"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Username</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              value={dataRegister.email}
              onChange={(e) =>
                setDataRegister({ ...dataRegister, email: e.target.value })
              }
              placeholder="Enter your email"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              value={dataRegister.password}
              onChange={(e) =>
                setDataRegister({ ...dataRegister, password: e.target.value })
              }
              placeholder="Create a password"
              required
            />
          </FormGroup>
          <Button onClick={e => handleSubmit (e, 'register')}>
              Register
          </Button>
          <div className="signup">
          <br></br>
            <span className="text">
              Already a member?
              <Link to="/signin" className="btn">
                Logim
              </Link>
            </span>
          </div>
        </Form>
      </div>
    );
  }
}

export default Auth;
