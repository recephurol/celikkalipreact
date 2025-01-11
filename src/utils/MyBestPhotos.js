import React from 'react'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import urun1 from '../imgs/anasayfa/urun1.jpg';
import urun2 from '../imgs/anasayfa/urun2.jpg';
import urun3 from '../imgs/anasayfa/urun3.jpg';
import urun4 from '../imgs/anasayfa/urun4.jpg';
import urun5 from '../imgs/anasayfa/urun5.jpg';
import urun6 from '../imgs/anasayfa/urun6.jpg';
import urun7 from '../imgs/anasayfa/urun7.jpg';
import urun8 from '../imgs/anasayfa/urun8.jpg';
import urun10 from '../imgs/anasayfa/urun10.jpg';

function MyBestPhotos() {
    return (
        <MDBCarousel showControls interval={3000}>
        <MDBCarouselItem itemId={1} interval={1000}>
          <img src={urun1} className='d-block w-100' alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
        <img src={urun2} className='d-block w-100' alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
        <img src={urun3} className='d-block w-100' alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={4}>
        <img src={urun4} className='d-block w-100' alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={5}>
        <img src={urun5} className='d-block w-100' alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={6}>
        <img src={urun6} className='d-block w-100' alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={7}>
        <img src={urun7} className='d-block w-100' alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={8}>
        <img src={urun8} className='d-block w-100' alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={9}>
        <img src={urun10} className='d-block w-100' alt='...' />
        </MDBCarouselItem>
      </MDBCarousel>
    )
}

export default MyBestPhotos