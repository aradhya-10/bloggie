import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { submitComment } from '../services';

const CommentsForm = ({slug}) => {
	
	const [error, setError] = useState(false);
	const [localStorage, setLocalStorage] = useState(null);
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const commentEl = useRef();
	const nameEl = useRef();
	const emailEl = useRef();
	const storeDataEl = useRef();
	
	useEffect(() => {
		nameEl.current.value = window.localStorage.getItem('name');
		emailEl.current.value = window.localStorage.getItem('email');
	}, [])

	const handleCommentSubmission = () => {
		setError(false);

		const { value: comment } = commentEl.current;
		const { value: name } = nameEl.current;
		const { value: email } = emailEl.current;
		const { checked: storeData } = storeDataEl.current;

		if(!comment || !name || !email){
			setError(true);
			return;
		}

		const commentObj = {name, email, comment, slug};

		if(storeData){
			window.localStorage.setItem('name', name);
			window.localStorage.setItem('email', email);
		}else{
			window.localStorage.removeItem('name', name);
			window.localStorage.removeItem('email', email);
		}

		submitComment(commentObj)
			.then((res)=>{
				setShowSuccessMessage(true);
				setTimeout(()=>{
					setShowSuccessMessage(false);
				}, 3000);
			})
	}
	return (
		<div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
			<h3 className="text-xl mb-8 font-semibold border-b pb-4">
				Leave a Reply
			</h3>
				<div className="grid grid-cols-1 gap-4 mb-4">
					<textarea 
						ref={commentEl} 
						placeholder="Comment"
						name="comment" 
						id="comment" 
						cols="30" 
						rows="6"
						className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" />
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
					<input 
						type="text"
						ref={nameEl}
						placeholder="Name"
						name="name"
						className="px-4 py-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
					/>
				<input 
						type="email"
						ref={emailEl}
						placeholder="Email"
						name="email"
						className="px-4 py-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
					/>
				</div>
				<div className="grid grid-cols-1 gap-4 mb-4">
					<div>
						<input 
							type="checkbox"
							ref={storeDataEl}
							id = "storeData"
							name = "storeData"
							value = "true"
						/>
						<label 
							htmlFor="storeData"
							className="text-gray-500 cursor-pointer ml-2"
						>
							Save my email and name for the next time I comment.
						</label>
					</div>
				</div>
				{
					error && 
					<p className="text-xs text-red-500">All fields are required</p>
				}
				<div className="mt-8">
					<button 
						className="rounded-full py-3 px-5 transition duration-500 ease bg-pink-600 text-white cursor-pointer hover:bg-indigo-900 inline-block"
						onClick = {handleCommentSubmission}
					>
						Post Comment
					</button>
					{showSuccessMessage && 
						<span className="text-sm float-right f]]ont-semibold mt-3 text-green-500">
							Comment submitted for review
						</span>}
				</div>
		</div>
	)
}

export default CommentsForm