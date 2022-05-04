import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function PanteonCarousel({ data }) {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      showArrows={false}
    >
      {data.map((item, index) => {
        return (
          <div key={'slider-2' + index}>
            <img src={require('../assets/img/' + item.slider)} alt={item.alt} />
            <p className="legend">
              <img
                src={require('../assets/img/' + item.logo)}
                style={{ width: '40%' }}
                alt={item.alt}
              />
            </p>
          </div>
        );
      })}
    </Carousel>
  );
}

export default PanteonCarousel;
