import React, {useEffect, useState} from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "./header.css"
import userService from "../../services/users-service";

const Header = () => {
    const [currentUser, setCurrentUser] = useState([])

    useEffect(() => {
      userService.profile()
        .then(profile => {
          setCurrentUser(profile.Items[0]);
        })
        .catch(error => {
          console.log("Header: ", error);
        })

    }, [])


  return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-top">
          <Navbar.Brand href="/">MealForToday</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/search">Search</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/policy">Privacy Policy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
              {/*<Form inline>*/}
              {/*  <FormControl type="text" placeholder="Search" className="mr-sm-2" />*/}
              {/*  <Button variant="outline-success" >Search</Button>*/}
              {/*</Form>*/}
            <Nav>
              {
                currentUser.length === 0 && (
                  <Nav.Link href="/login">Login</Nav.Link>
                )
              }
              {
                currentUser.length === 0 && (
                  <Nav.Link href="/register">Register</Nav.Link>
                )
              }
              {
                currentUser.length !== 0 && (
                  <Nav.Link href={`/profile/${currentUser.username}`}>Profile</Nav.Link>
                )
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
  )
}

export default Header