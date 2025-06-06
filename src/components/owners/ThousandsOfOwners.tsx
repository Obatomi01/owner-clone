import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Owner from './Owner';

import Owner1 from '../../assets/business-owner/owner-1.jpeg';
import Owner2 from '../../assets/business-owner/owner-2.jpg';
import Owner3 from '../../assets/business-owner/owner-3.jpg';
import Owner4 from '../../assets/business-owner/owner-4.jpg';
import Owner5 from '../../assets/business-owner/owner-5.jpg';
import Owner6 from '../../assets/business-owner/owner-6.jpg';
import Owner7 from '../../assets/business-owner/owner-7.jpg';

import type { OwnerProps } from './Owner';

const owners: OwnerProps[] = [
  {
    owner: 'Fernando Izaguirre',
    company: 'Owner of Sushi Addicts',
    description: (
      <h4 className='font-bold text-xl'>
        How Sushi addicts grew online orders to $210,000 in a year
      </h4>
    ),
    imgSrc: Owner1,
  },
  {
    owner: 'Jessica Lee',
    company: 'Owner of Urban Brew',
    description: (
      <h4 className='font-bold text-xl'>
        Urban Brew doubled their customer base in 6 months
      </h4>
    ),
    imgSrc: Owner2,
  },
  {
    owner: 'Michael Chen',
    company: 'Owner of Tech Haven',
    description: (
      <h4 className='font-bold text-xl'>
        Tech Haven expanded to three new locations
      </h4>
    ),
    imgSrc: Owner3,
  },
  {
    owner: 'Priya Patel',
    company: 'Owner of Spice Route',
    description: (
      <h4 className='font-bold text-xl'>
        Spice Route increased online reviews by 400%
      </h4>
    ),
    imgSrc: Owner4,
  },
  {
    owner: 'Lucas Martin',
    company: 'Owner of Green Eats',
    description: (
      <h4 className='font-bold text-xl'>
        Green Eats cut delivery times in half
      </h4>
    ),
    imgSrc: Owner5,
  },
  {
    owner: 'Sara Kim',
    company: 'Owner of Blossom Boutique',
    description: (
      <h4 className='font-bold text-xl'>
        Blossom Boutique launched a successful loyalty program
      </h4>
    ),
    imgSrc: Owner6,
  },
  {
    owner: 'David Johnson',
    company: 'Owner of FitZone Gym',
    description: (
      <h4 className='font-bold text-xl'>
        FitZone Gym grew memberships by 150% in one year
      </h4>
    ),
    imgSrc: Owner7,
  },
];

function ThousandsOfOwners() {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1230,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      className='slider-container my-12'
      style={{
        overflowX: 'hidden',
      }}
    >
      <Slider {...settings}>
        {owners.map((owner, index) => (
          <div key={index} className='px-2'>
            <Owner {...owner} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ThousandsOfOwners;
