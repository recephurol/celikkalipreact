import React from 'react';
import GoogleMapEmbed from '../utils/googleMap';
import MailForm from '../utils/MailForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // FontAwesomeIcon bileşenini içeri aktar
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';  // Kullanılacak iconları içeri aktar


const Iletisim = () => {
  return (
      <Container>
        <GoogleMapEmbed latitude={40.220970} longitude={29.07069} />
        <Row>
          <Col> <MailForm /></Col>
          <Col> <div className="sidebar col_last nobottommargin">

            <address>
              <br />
              <div style={{ "size": "20px" }}>
                <FontAwesomeIcon icon={faLocationDot} />&emsp;&emsp;Küçükbalıklı Mahallesi Katip Sokak No:7 Osmangazi - BURSA<br />
              </div>
            </address>
            <FontAwesomeIcon icon={faPhone} /><span>&emsp; +90 538 503 4 609</span><br />
            <FontAwesomeIcon icon={faEnvelope} /><span>&emsp; s.celik@celikkalipmakina.com</span>

          </div></Col>
        </Row>
        <br/>
      </Container>
  )
}
export default Iletisim;
