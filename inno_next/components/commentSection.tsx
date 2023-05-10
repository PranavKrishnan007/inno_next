import { IUser } from '@/utils/Interfaces';
import { entities } from '@/utils/Services';
import {Avatar, Button, Input, Menu, Textarea} from '@mantine/core';
import React, { useState } from 'react';
import { IComment, ICommentPayload } from '@/utils/Interfaces/comment';

export interface ICommentSectionProp {
    entityType : entities,
    entityId : String,
    user: IUser,
}

const CommentCard = ( {entityId, entityType, user} : ICommentSectionProp) => {

	const [reply, setReply] = useState<boolean>(false);
	const [replyText, setReplyText] = useState('');
	const [postText, setPostText] = useState('');

    const [comments , setComment] = useState<IComment[]>([{
        id : 1,
        content : 'Content',
        blocked : false,
        blockedThread : false,
        isAdminComment : '',
        removed : false,
        approvalStatus : '',
        related : '',
        createdAt : '',
        updatedAt : '',
        gotThread : false,
    }]);



	return (
		<div className="w-2/3 mx-auto mt-12">
			<div>
				<h2 className='text-gray-700 text-2xl font-medium'>Comments</h2>
			</div>
			<div>
				<form className='w-full shadow-md mt-4 text-gray-500 rounded-lg p-4 hover:shadow-lg ' onSubmit={() => {}}>
					<div className='flex flex-row gap-2 px-2 mb-2'>
						<Avatar src='' size={40} alt={'hello'} />
						<div>
							<div className='text-sm font-medium text-gray-900 '>Anonymous</div>
							<div className='text-xs font-normal text-gray-500'>user</div>
						</div>
					</div>
					<Textarea value={postText} onChange={(e) => setPostText(e.currentTarget.value)} />
					<div className='flex '>
						<Button className='mt-2 bg-blue-500 w-32' fullWidth type='submit'>
							Send
						</Button>
					</div>
				</form>
			</div>
			<div className='flex flex-row mt-4 shadow-md rounded-lg p-4 relative hover:shadow-lg transition-shadow duration-800'>
				<div className='flex flex-col w-full'>
					<div className='flex flex-row w-full justify-between items-center'>
						<div className='flex flex-row gap-2 px-2'>
							<Avatar src='' size={40} alt={'hello'} />
							<div>
								<div className='text-sm font-medium text-gray-900 '>User_467</div>
								<div className='text-xs font-normal text-gray-500'>world</div>
							</div>
						</div>

						<div>
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
									<Menu.Item >Edit</Menu.Item>
									<Menu.Item >Remove</Menu.Item>
								</Menu.Dropdown>
							</Menu>
						</div>
					</div>
					<div className='p-2'>
						<div className='text-sm font-normal text-gray-500'>'description When using these modifiers, Tailwind will automatically add content: '' by default so you don’t have to specify it unless you want a different value:'</div>
					</div>
					<button className="flex items-center text-md text-gray-500 gap-1 ml-1 hover:text-blue-500 " onClick={() => setReply(!reply)}>
						<svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.2881437,19.1950792 C8.38869181,19.1783212 8.49195996,19.1926955 8.58410926,19.2362761 C9.64260561,19.7368747 10.8021412,20 12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 C7.581722,4 4,7.581722 4,12 C4,13.7069096 4.53528582,15.3318588 5.51454846,16.6849571 C5.62010923,16.830816 5.63909672,17.022166 5.5642591,17.1859256 L4.34581002,19.8521348 L8.2881437,19.1950792 Z M3.58219949,20.993197 C3.18698783,21.0590656 2.87870208,20.6565881 3.04523765,20.2921751 L4.53592782,17.0302482 C3.54143337,15.5576047 3,13.818993 3,12 C3,7.02943725 7.02943725,3 12,3 C16.9705627,3 21,7.02943725 21,12 C21,16.9705627 16.9705627,21 12,21 C10.707529,21 9.4528641,20.727055 8.30053434,20.2068078 L3.58219949,20.993197 Z"/>
						</svg>
						<span>Reply</span>
					</button>
				</div>
			</div>
			{reply && (
				<div className="flex justify-end ">
					<form className='w-5/6 pl-10 shadow-md mt-4 text-gray-500 rounded-lg p-4 hover:shadow-lg' onSubmit={() => {}}>
						<div className='flex flex-row gap-2 px-2 mb-2'>
							<Avatar src='' size={40} alt={'hello'} />
							<div>
								<div className='text-sm font-medium text-gray-900 '>Anonymous</div>
								<div className='text-xs font-normal text-gray-500'>user</div>
							</div>
						</div>
						<Textarea value={replyText} onChange={(e) => setReplyText(e.currentTarget.value)} />
						<div className='flex justify-end'>
							<Button className='mt-2 bg-blue-500 w-32' fullWidth type='submit'>
								Send
							</Button>
						</div>
					</form>
				</div>
			)}
		</div>
	);
};

export default CommentCard;
