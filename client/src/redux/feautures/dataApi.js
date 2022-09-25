import axios from 'axios';
import { API_BASE_URL, AxiosConfigs } from '../../config';

const getUrl = (url) => {
	return API_BASE_URL + '/api/' + url
}

export const getUserGeneralInfo = async () => {
	try {
		return await axios.post(getUrl('getGeneralInfo'), null, AxiosConfigs);
	} catch (error) {
		console.error(error.message);
	}
};