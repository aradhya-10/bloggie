import React, { useEffect, useState } from 'react'
import moment from 'moment'
import 'animate.css'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({categories, slug}) => {
	const[relatedPosts, setRelatedPosts] = useState([]);

	useEffect(()=>{
		if(slug){
			getSimilarPosts(categories,slug)
				.then((result) => setRelatedPosts(result))
		}else{
			getRecentPosts()
				.then((result) => setRelatedPosts(result))
		}
	},[slug])

	return (
		<div className="bg-white shadow-lg rounded-lg p-8 mb-8 min-w-min">
			<h3 className="text-xl mb-8 font-semibold border-b pb-4">
				{slug?'Related Posts' : 'Recent Posts'}
			</h3>
			{relatedPosts.map((post)=>(
				<div key={post.title} className="flex items-center w-full mb-4 hover:animate-pulse">
					<div className="w-16 flex-none">
						<Link href={`/post/${post.slug}`} key={post.title} className="text-md">
						<img
							alt={post.title}
							className='w-14 h-14 rounded-full object-cover'
							src={post.featuredImage.url}
							/>
						</Link>
					</div>
					<div className="flex-grow ml-4">
						<p className='text-gray-500 font-xs'>
							{moment(post.createdAt).format('MMM DD, YYYY')}
						</p>
						<Link href={`/post/${post.slug}`} key={post.title} className="text-md">
							{post.title}
						</Link>
					</div>
				</div>
			))}
		</div>
	)
}

export default PostWidget
