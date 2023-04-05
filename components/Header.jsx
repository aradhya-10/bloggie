import React, { useState , useEffect} from 'react'
import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
		const [categories, setCategories] = useState([]);
	
		useEffect(()=>{
			getCategories()
				.then((newCategories) => setCategories(newCategories))
			},[]);

	return (
			<div className="conatiner mx-auto px-10 mb-8">
				<div className="border-b w-full inline-block border-violet-400 py-8">
					<div className="md:float-left block">
						<Link href="/">
							<span className="cursor-pointer font-bold text-4xl text-white">
								SmartParrot
							</span>
						</Link>
					</div>
				<div className="hidden md:float-left md:contents">
					{
						categories.map((category)=>(
							<Link key={category.slug} href={`/category/${category.slug}`}>
								<span className="cursor-pointer md:float-right mt-2 align-middle text-white ml-4 font-semibold">
									{category.name}
								</span>
							</Link>
						))
					}
				</div>
				</div>
			</div>
	)
}

export default Header
