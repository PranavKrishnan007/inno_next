import { IComment, ICommentPayload } from '../Interfaces/comment';
import { axhttp } from './axios_setup';

export enum entities {
	INNOVATION = 'innovation',
	PROBLEM = 'problem',
	HACKATHON = 'hackathon',
}

export const getAllComments = async (entity: entities, entityId: string): Promise<IComment[]> => {
	const res = (await axhttp.get(`/comments/api::${entity}.${entity}:${entityId}`)) as IComment[];
	if (!res) return [];
	return res;
};

export const createComment = async (entity: entities, entityId: string, comment: ICommentPayload): Promise<IComment> => {
	const res = (await axhttp.post(`/comments/api::${entity}.${entity}:${entityId}`, comment)) as IComment;
	if (!res) return {} as IComment;
	return res;
};

export const deleteComment = async (entity: entities, entityId: string, commentId: string): Promise<boolean> => {
	const res = (await axhttp.delete(`/comments/api::${entity}.${entity}:${entityId}/comment/${commentId}`)) as boolean;
	return res;
};
