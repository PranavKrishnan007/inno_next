import { IUser } from '@/utils/Interfaces';
import { createComment, deleteComment, entities, getAllComments } from '@/utils/Services';
import {Avatar, Button, Input, Menu, Textarea} from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { IComment, ICommentPayload } from '@/utils/Interfaces/comment';
import { toast } from 'react-toastify';

export interface ICommentSectionProp {
    entityType : entities,
    entityId : number | undefined,
    user: IUser,
}

const CommentCard = ( {entityId, entityType, user} : ICommentSectionProp) => {

	const [reply, setReply] = useState<boolean>(false);
	const [replyText, setReplyText] = useState('');
	const [postText, setPostText] = useState('');

    const [comments , setComment] = useState<IComment[]>([]);

	useEffect( () => {
		getAllComments(entityType, entityId).then((data) => { 
			setComment(data)
		})
	}, [entityId, entityType]) 


	const submitComment  = () => {
		const commentPayload:ICommentPayload = {
		content : postText,
		author : {
			id : user.id || 0,
			name : user.genericuser?.firstname + ' ' + user.genericuser?.lastname,
			email : user.email,
			avatar : user.avatar || '',
		}}
		createComment( entityType, entityId,  commentPayload).then ( (data) => {
			toast.success('Comment Added')
			setComment([...comments, data])
		})
	}		

	const deleteComments = async (commentId : number) => {
		const res = await deleteComment( entityType, entityId,  commentId, user.id)
		if (!res) return
		toast.success('Comment Deleted')
		setComment(comments.filter( (comment) => comment.id !== commentId))

	}

	return (
		<div className="p-10 border bg-slate-50 rounded-xl">
			<div>
				<h2 className='sticky top-0 z-10  text-gray-700 text-2xl font-bold'>Comments</h2>
			</div>
			<div>
				<form className='sticky top-0  w-full bg-white mt-4 rounded-lg p-4 shadow-md hover:shadow-lg border-l-2 transition-shadow duration-800' onSubmit={() => {}}>
					<div className='flex items-center  flex-row gap-2 px-2'>
						<Avatar src={user?.avatar} size={40} alt={'hello'} radius="xl" />
						<div>
							<div className='text-sm text-gray-900 font-semibold'>{user?.username}</div>
						</div>
					</div>
					<Textarea className="mt-4 " value={postText} onChange={(e) => setPostText(e.currentTarget.value)} />
					<div className='flex justify-end'>
						<Button onClick={submitComment} className='mt-2 bg-blue-400 w-32' fullWidth >
							Send
						</Button>
					</div>
				</form>
			</div>
			<div className="max-h-[70vh] mt-4 overflow-auto scroll-smooth no-scrollbar">
			{
			 comments && comments.map( (comment)=> 
			 <div className='flex  flex-row mt-4 bg-white mr-10 rounded-lg p-4 relative shadow-md hover:shadow-lg  transition-shadow duration-800'>
				<div className='flex flex-col w-full '>
					<div className='flex flex-row w-full justify-between  items-center'>
						<div className='flex flex-row gap-2 px-2'>
							<Avatar src={comment.author?.avatar} size={40} alt={'hello'} radius="xl" />
							<div>
								<div className='text-sm text-gray-900 font-semibold'>{comment.author.name}</div>
								<div className='text-xs font-normal text-gray-500'>{new Date(comment.createdAt).toDateString()}</div>
							</div>
						</div>
						<div>
							{
								user.id === comment.author.id && (
							<Menu position="bottom-start" shadow="sm" width={140}>
								<Menu.Target>
									<button>
										<svg width="24px" height="24px" viewBox="0 0 24 24" id="three-dots" xmlns="http://www.w3.org/2000/svg">
											<g id="_20x20_three-dots--grey" data-name="20x20/three-dots--grey" transform="translate(24) rotate(90)">
											<rect id="Rectangle" width="24" height="24" fill="none"/>
												<circle id="Oval" cx="1" cy="1" r="1" transform="translate(5 11)" stroke="#000" stroke-miterlimit="10" stroke-width="0.5"/>
											<circle id="Oval-2" data-name="Oval" cx="1" cy="1" r="1" transform="translate(11 11)" stroke="#000" stroke-miterlimit="10" stroke-width="0.5"/>
												<circle id="Oval-3" data-name="Oval" cx="1" cy="1" r="1" transform="translate(17 11)" stroke="#000" stroke-miterlimit="10" stroke-width="0.5"/>
											</g>
										</svg>
									</button>
								</Menu.Target>
								<Menu.Dropdown>
									{/*<Menu.Item >Edit</Menu.Item>*/}
									<Menu.Item onClick={() => deleteComments(comment.id)}  type='submit' >Remove</Menu.Item>
								</Menu.Dropdown>
							</Menu>
								)
							}
						</div>
					</div>
					<div className='p-2'>
						<div className='text-sm font-normal pl-12 text-gray-600'>{comment.content}</div>
					</div>
				</div>
			</div>
			)}
			{reply && (
				<form className='w-full bg-white mt-4 rounded-lg p-4 shadow border-l-2' onSubmit={() => {}}>
					<Textarea value={replyText} onChange={(e) => setReplyText(e.currentTarget.value)} />
					<div className='flex  justify-end'>
						<Button className='mt-2 bg-blue-400 w-32' fullWidth type='submit'>
							Send
						</Button>
					</div>
				</form>
			)}
			</div>
		</div>
	);
};

export default CommentCard;
