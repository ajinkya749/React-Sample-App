import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://store-images.s-microsoft.com/image/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.12c2c5b7-0d97-4635-9b57-8a35da0f4c79?mode=scale&q=90&h=1080&w=1920',
    altText: 'Slide 1',
    caption: 'React-Redux',
    header: 'ToughtWorks'
  }
];

const CaraouselComponent = () => <UncontrolledCarousel items={items} />;

export default CaraouselComponent;