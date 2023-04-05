// import FeaturedPost from '../components/FeaturedPost';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
// import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import { getPosts } from '../services'

// const Top = ({ posts }) => {
// 	console.log(posts);
//   return (<div className="relative">
// 	<div className="flex mb-8 h-56 w-full relative overflow-hidden items-center">
// 	<ArrowCircleLeftIcon className="absolute text-white -left-4 h-full top-0 bottom-0 m-auto"/>
// 		<div className="flex relative min-w-max w-4/5 max-w-[1010px]">
// 			{
// 				// console.log("posts")
// 				// console.log(posts);
// 				posts.map((post)=>{
// 					return <FeaturedPost post={post.node} />
// 				})
// 			}
// 		</div>
// 	<ArrowCircleRightIcon classname="absolute right-0 h-full top-0 bottom-0 m-auto"/>
// 	</div>
// 	</div>
//   )
// }
// export default Top
// // export async function getStaticProps(){
// // 	const posts = (await getPosts())||[]
// // 	return{
// // 		props: {posts}
// // 	}
// // }

import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import FeaturedPost from '../components/FeaturedPost';
import { getFeaturedPosts } from '../services';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const Top = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    });
  }, []);

  const customLeftArrow = (
    <div className="absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
    </div>
  );

  const customRightArrow = (
    <div className="absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </div>
  );

  return (
    <div className="mb-8">
      <Carousel infinite customLeftArrow={customLeftArrow} customRightArrow={customRightArrow} responsive={responsive} itemClass="px-2">
      {/* <Carousel infinite customLeftArrow={customLeftArrow} customRightArrow={customRightArrow} responsive={responsive}> */}
        {dataLoaded && featuredPosts.map((post, index) => (
          	<FeaturedPost key={index} post={post} />
        ))}
      </Carousel>
    </div>
  );
};

export default Top;
