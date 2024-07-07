import { client } from '@/lib/utils';
import { useUser } from '@clerk/clerk-react';
import { useState, useRef } from 'react';

const Supabase = () => {
	const [resumes, setResumes] = useState([]);
	const { user } = useUser();

	const listResumes = async () => {
		const { data, error } = await client.from('user_resumes').select();
		if (!error) setResumes(data);
	};

	const inputRef = useRef(null);
	const sendResume = async () => {
		if (!inputRef.current?.value) return;
		await client.from('user_resumes').insert({
			title: inputRef.current?.value,
			user_email: user?.primaryEmailAddress.emailAddress,
			user_name: user?.fullName,
		});
	};

	return (
		<>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<input
					onSubmit={sendResume}
					type='text'
					ref={inputRef}
				/>
				<button onClick={sendResume}>Create</button>
				<button onClick={listResumes}>Fetch resumes</button>
			</div>
			<h2>Resumes</h2>
			{!resumes ? (
				<p>No Resumes</p>
			) : (
				<ul>
					{resumes.map(resume => (
						<li key={resume.id}>{resume.title}</li>
					))}
				</ul>
			)}
		</>
	);
};

export default Supabase;
