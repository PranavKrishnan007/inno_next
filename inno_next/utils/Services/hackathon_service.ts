import { toast } from 'react-toastify';
import { IHackathon, IStrapiServerData } from '../../utils/Interfaces/coreEntity';
import { axhttp } from './axios_setup';

const responseHandler = (response: any) => {
	if (response && response.data) {
		return response.data;
	}
	return false;
};

export const getAllHackathons = async (): Promise<IHackathon[]> => {
	const res = responseHandler(await axhttp.get('/hackathons?filters[accepted][$eq]=true&populate=*')) as IStrapiServerData[];
	if (!res) return [];
	return res?.map((hackathon: IStrapiServerData) => {
		hackathon.attributes.id = hackathon.id;
		return hackathon.attributes as IHackathon;
	});
};

export const createHackathon = async (hackathon: IHackathon) => {
	const res = responseHandler(await axhttp.post('/hackathons/', { data: hackathon })) as IStrapiServerData;
	if (!res) return {} as IHackathon;
	res.attributes.id = res.id;
	return res.attributes as IHackathon;
};

export const getHackathon = async (id: string) => {
	const res = responseHandler(await axhttp.get(`/hackathons/${id}/?populate=*`)) as IStrapiServerData;
	if (!res) return;
	res.attributes.id = res.id;
	res.attributes = res.attributes as IHackathon;
	res.attributes.applicationCloseDate = new Date(res.attributes.applicationCloseDate);
	res.attributes.applicationOpenDate = new Date(res.attributes.applicationOpenDate);
	res.attributes.hackathonEndDate = new Date(res.attributes.hackathonEndDate);
	res.attributes.hackathonStartDate = new Date(res.attributes.hackathonStartDate);

	return res.attributes as IHackathon;
};

export const registerForHackathon = async (hackathonId: string, userId: string) => {
	const res = responseHandler(
		await axhttp.put(`/hackathons/${hackathonId}/`, {
			data: {
				participants: {
					connect: [userId],
				},
			},
		}),
	);
	if (!res) return false;
	return res;
};

export const getHackathonRegistrations = async (hackathonId: string) => {
	const res = responseHandler(await axhttp.get(`/hackathons/${hackathonId}/registrations`));
	if (!res) return false;
	return res;
};

export const getHackathonByUser = async (userId: string) => {
	const res = responseHandler(await axhttp.get(`/hackathons?filters\[author\][id][$eq]=${userId}&populate=*`));
	if (!res) return [] as IHackathon[];
	return res?.map((hackathon: IStrapiServerData) => {
		hackathon.attributes.id = hackathon.id;

		return hackathon.attributes as IHackathon;
	});
};

export const getHackathonByParticipant = async (userId: string) => {
	const res = responseHandler(await axhttp.get(`/hackathons?filters[participants][$contains][$eq]=${userId}&populate=*`));
	if (!res) return {} as IHackathon[];
	return res?.map((hackathon: IStrapiServerData) => {
		hackathon.attributes.id = hackathon.id;
		return hackathon.attributes as IHackathon;
	});
};
