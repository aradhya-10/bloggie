import moment from "moment"
import Link from "next/link"
import Image from "next/image"

const FeaturedPost = ({post}) => {
  return (
	<div className="h-64 w-56 min-w-max relative text-white cursor-pointer">
		<div className="absolute left-0 bg-black z-20 w-56 h-64 opacity-80"></div>
		<div className="absolute flex items-center justify-center z-30 rounded-lg opacity-30 w-56 h-64">
			<img
				src={post.featuredImage.url}
				className="h-full object-cover"	
			/>
		</div>
		<div className="flex flex-col justify-between items-center absolute left-4 top-7 z-50 h-48 w-48 mx-auto">
		<div className="">{moment(post.createdAt).format('MMM DD, YYYY')}</div>
		<div className="text-center font-semibold px-4"><Link href={`/post/${post.slug}`}>{post.title}</Link></div>
		<div className="flex text-sm items-center">
			<img
				src={post.author.image.url}
				className="h-7 w-7 rounded-full object-cover mr-2"	
			/>
			{post.author.name}
		</div>
		</div>
	</div>
// 	<div className="relative h-72">
//     <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72" style={{ backgroundImage: `url('${post.featuredImage.url}')` }} />
//     <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
//     <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
//       <p className="text-white mb-4 text-shadow font-semibold text-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
//       <p className="text-white mb-4 text-shadow font-semibold text-2xl text-center">{post.title}</p>
//       <div className="flex items-center absolute bottom-5 w-full justify-center">
//         <Image
//           unoptimized
//           alt={post.author.name}
//           height="30"
//           width="30"
//           className="align-middle drop-shadow-lg rounded-full"
//           src={post.author.image.url}
//         />
//         <p className="inline align-middle text-white text-shadow ml-2 font-medium">{post.author.name}</p>
//       </div>
//     </div>
//     <Link href={`/post/${post.slug}`}><span className="cursor-pointer absolute w-full h-full" /></Link>
//   </div>
  )
}

export default FeaturedPost