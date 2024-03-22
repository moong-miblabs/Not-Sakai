import axios from 'axios'
import { SERVER_URL } from '@/env.js'
import { useStore } from '@/store'
const $strore = useStore()

const _axios = axios.create({
	baseURL: SERVER_URL,
	timeout: 5000
})

const $axios = axios.create({
	baseURL: SERVER_URL,
	timeout: 5000,
	headers : {
		Authorization : $strore.getToken
	}
});

$axios.interceptors.response.use(function (response) {
	if(response.data.error_code == 401) {
		window.location.href = '/logout'
		return
	} 
	return response;
})

export { _axios, $axios }