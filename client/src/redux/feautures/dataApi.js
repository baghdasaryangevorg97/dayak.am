import axios from 'axios';
import { API_BASE_URL, AxiosConfigs } from '../../config';

const getUrl = (url) => {
	return API_BASE_URL + '/api/' + url
}