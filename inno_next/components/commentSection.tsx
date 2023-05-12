import { IUser } from '@/utils/Interfaces';
import { createComment, deleteComment, entities, getAllComments } from '@/utils/Services';
import { Avatar, Button, Input, Textarea } from '@mantine/core';
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
			console.log(data)
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
		<div>
			<div>
				<h2 className='text-gray-700 text-2xl font-bold'>Comments</h2>
			</div>
			<div>
				<form className='w-full bg-white mt-4 rounded-lg p-4 ml-10 shadow border-l-2' onSubmit={() => {}}>
					<Textarea value={postText} onChange={(e) => setPostText(e.currentTarget.value)} />
					<div className='flex  justify-end'>
						<Button onClick={submitComment} className='mt-2 bg-blue-400 w-32' fullWidth >
							Send
						</Button>
					</div>
				</form>
			</div>
			{
			 comments && comments.map( (comment)=> 
			 <div className='flex flex-row mt-4 bg-white rounded-lg p-4 relative hover:shadow shadow-none transition-shadow duration-800'>
				<div className='flex flex-col w-full'>
					<div className='flex flex-row w-full justify-between items-center'>
						<div className='flex flex-row gap-2 px-2'>
							<Avatar src='' size={40} alt={'hello'} />
							<div>
								<div className='text-sm text-gray-900 font-semibold'>{comment.author.name}</div>
								<div className='text-xs font-normal text-gray-500'>{new Date(comment.createdAt).toDateString()}</div>
							</div>
						</div>
						<button onClick={() => setReply(!reply)}>Reply</button>
					</div>
					<div className='p-2'>
						<div className='text-sm font-normal text-gray-900'>{comment.content}</div>
					</div>
					<div className='flex gap-2'>
					{
						user.id === comment.author.id && (
							<div className='flex  justify-end'>
							<Button className='mt-2 bg-blue-400 w-32' onClick={() => deleteComments(comment.id)} fullWidth type='submit'>
								Delete
							</Button>
						</div>
						)
					}
					</div>
				</div>
			</div>
			)}
			{reply && (
				<form className='w-full bg-white mt-4 rounded-lg p-4 ml-10 shadow border-l-2' onSubmit={() => {}}>
					<Textarea value={replyText} onChange={(e) => setReplyText(e.currentTarget.value)} />
					<div className='flex  justify-end'>
						<Button className='mt-2 bg-blue-400 w-32' fullWidth type='submit'>
							Send
						</Button>
					</div>
				</form>
			)}
		</div>
	);
};

export default CommentCard;
