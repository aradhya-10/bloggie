import Head from 'next/head'
import Image from 'next/image'
import { PostCard, PostWidget, Categories} from '../components';
import Top from '../section/Top';
import { getPosts } from '../services'
import FeaturedPost from '../components/FeaturedPost';

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-4 lg:px-10 mb-8">
		<Head>
			<title>Bloggie</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Top />
		<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
			<div className="lg:col-span-8 col-span-1">
				{posts.map((post) => <PostCard post={post.node} key={post.node.title}/>)}
			</div>	
		<div className="lg:col-span-4 col-span-1">
			<div className="lg:sticky relative top-8">
				<PostWidget /> 
				<Categories />
			</div>
		</div>
		</div>
    </div>
  )
}

export async function getStaticProps(){
	const posts = (await getPosts())||[]
	return{
		props: {posts}
	}
}