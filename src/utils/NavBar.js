import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image';
import logo from '../celikkaliplogo.png';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LanguageToggleButton from './LanguageToggleButton';
import { useLanguage } from '../utils/LangugageContext';

function NavBar() {
    const { language } = useLanguage();

    const navLinkStyle = {
        fontSize: "18px",
        fontWeight: "500",
        color: "#333",
        margin: "0 15px",
        transition: "color 0.3s ease",
        textDecoration: "none",
        "&:hover": {
            color: "#007bff"
        }
    };

    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="/">
                        <Row>
                            <Col xs={3} md={2}>
                                <Image src={logo} style={{ "width": "300px" }} rounded />
                            </Col>
                        </Row>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/" style={navLinkStyle}>{language.anasayfa}</Nav.Link>
                        <Nav.Link href="/hakkinda" style={navLinkStyle}>{language.hakkinda}</Nav.Link>
                        <Nav.Link href="/urunler" style={navLinkStyle}>{language.urunler}</Nav.Link>
                        <Nav.Link href="/referanslar" style={navLinkStyle}>{language.referanslar}</Nav.Link>
                        <Nav.Link href="/iletisim" style={navLinkStyle}>{language.iletisim}</Nav.Link>
                    </Nav>
                    <LanguageToggleButton/>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
