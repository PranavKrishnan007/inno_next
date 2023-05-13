import { toast } from 'react-toastify';
import { IProblem, IStrapiServerData } from '../../utils/Interfaces/coreEntity';
import { axhttp } from './axios_setup';

const responseHandler = (response: any) => {
	if (response && response.data) {
		return response.data;
	}
	return false;
};

export const getAllProblems = async (): Promise<IProblem[]> => {
	const res = responseHandler((await axhttp.get('/problems?filters[status][$eq]=confirmed&populate=*')) as IStrapiServerData[]);
	if (!res) return [];
	return res?.map((problem: IStrapiServerData) => {
		problem.attributes.id = problem.id;
		return problem.attributes as IProblem;
	});
};
// get problems by login user
export const getProblemsByUser = async (userId: string): Promise<IProblem[]> => {
	const res = responseHandler((await axhttp.get(`/problems?filters\[author\][id][$eq]=${userId}&populate=*`)) as IStrapiServerData[]);
	if (!res) return [];
	return res?.map((problem: IStrapiServerData) => {
		problem.attributes.id = problem.id;
		return problem.attributes as IProblem;
	});
};

// create problem
export const createProblem = async (problem: IProblem): Promise<IProblem> => {
	const res = responseHandler(
		(await axhttp.post('/problems/', {
			data: problem,
		})) as IStrapiServerData,
	);
	if (!res) return {} as IProblem;
	res.attributes.id = res.id;
	return res.attributes as IProblem;
};
// update problem

export const getProblem = async (problemId: string): Promise<IProblem> => {
	const res = responseHandler(await axhttp.get(`/problems/${problemId}`)) as IStrapiServerData;
	if (!res) return {} as IProblem;
	res.attributes.id = res.id;
	return res.attributes as IProblem;
};
