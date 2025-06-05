import Review from './Review';
import type { ReviewProps } from './Review';

type Props = {};

const leftReviews: ReviewProps[] = [
  {
    imgSrc:
      'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/680e9284f98fb67f811248df_1_1.jpeg',
    name: 'Steven F',
    review:
      'The branded website and Online ordering platform is perfect for our guest and growing my business.',
  },
  {
    imgSrc:
      'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/680e940d4bbd0d98bed8fc77_1_8.jpeg',
    name: 'Jake A',
    review:
      'Owner.com has almost everything you need to run your restaurant online. An awesome partner to have for restaurants.',
  },
  {
    imgSrc:
      'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/680e932f3f679ef5a1bdf5f4_1-5.jpeg',
    name: 'Mostafa A',
    review:
      'The online ordering platform is easy to use and has helped us grow our business.',
    highlightBackground: true,
  },
];

const middleReviews: ReviewProps[] = [
  {
    imgSrc:
      'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/680e93f0f98fb67f81131322_1_7.jpeg',
    name: 'Chude',
    review:
      'I have been using Owner.com for a few months now and I am very impressed with the results. ',
  },
  {
    imgSrc:
      'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/680e92ad5b46e544921e6560_1_2.jpeg',
    name: 'Emeka',
    review:
      'My restaurant has been using Owner.com for a few months now and we are very happy with the results.',
  },
  {
    imgSrc:
      'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/680e92ad5b46e544921e6560_1_2.jpeg',
    name: 'Mohammed',
    review:
      'Enjoying the branded website and Online ordering platform. It is perfect for our guest and growing my business.',
    highlightBackground: true,
  },
];

const rightReviews: ReviewProps[] = [
  {
    imgSrc:
      'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/680e940d4bbd0d98bed8fc77_1_8.jpeg',
    name: 'Soji A',
    review:
      'The feedback from my customers has been overwhelmingly positive. They love the new online ordering system and the website looks great.',
  },
  {
    imgSrc:
      'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/680e932f3f679ef5a1bdf5f4_1-5.jpeg',
    name: 'philip F',
    review:
      "My restaurant's website looks awesome. I'm keeping all the profits for my store instead of giving 30-40% away.",
  },
  {
    imgSrc:
      'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/680e9284f98fb67f811248df_1_1.jpeg',
    name: 'Mohammed',
    review:
      'Everything is working great. The online ordering platform is easy to use and has helped us grow our business.',
    highlightBackground: true,
  },
];

export default function Reviews({}: Props) {
  return (
    <section className='flex justify-center gap-2'>
      <div className='flex flex-col gap-2'>
        {leftReviews.map((review, index) => (
          <Review
            key={index}
            imgSrc={review.imgSrc}
            name={review.name}
            review={review.review}
            highlightBackground={review.highlightBackground}
          />
        ))}
      </div>
      <div className='flex flex-col gap-2 -top-10 relative'>
        {middleReviews.map((review, index) => (
          <Review
            key={index}
            imgSrc={review.imgSrc}
            name={review.name}
            review={review.review}
            highlightBackground={review.highlightBackground}
          />
        ))}
      </div>
      <div className='flex flex-col gap-2'>
        {rightReviews.map((review, index) => (
          <Review
            key={index}
            imgSrc={review.imgSrc}
            name={review.name}
            review={review.review}
            highlightBackground={review.highlightBackground}
          />
        ))}
      </div>
    </section>
  );
}
