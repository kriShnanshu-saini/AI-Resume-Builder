import { client } from '@/lib/utils';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

const axiosClient = axios.create({
	baseURL: 'http://localhost:1337/api',
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${API_KEY}`,
	},
});

const createNewResume = data => axiosClient.post('/user-resumes', data);

const getUserResumes = async userEmail => {
	const resumes = await client.from('user_resumes').select('*').eq('user_email', userEmail);
	return resumes;
};

export { createNewResume, getUserResumes };

// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
// const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default supabase;
