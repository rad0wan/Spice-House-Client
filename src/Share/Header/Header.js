import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {

    const [user, loading, error] = useAuthState(auth);

    const handleLogout = () => {
        signOut(auth)
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>Spice House</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user && <>
                                    <Nav.Link as={Link} to='/manageInventory'>Manage Inventory</Nav.Link>
                                    <Nav.Link as={Link} to='/addNewItem'>Add New Item</Nav.Link>
                                </>
                            }
                            {
                                user ?
                                    <button className='btn btn-link text-decoration-none' onClick={handleLogout}><Nav.Link as={Link} to='/' >LogOut</Nav.Link></button>
                                    :
                                    <Nav.Link as={Link} to='/login' >Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;