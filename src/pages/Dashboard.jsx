import { AddResume, ResumeCardItem } from '@/components';
import { useUser } from '@clerk/clerk-react';
import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { getUserResumes } from '../../service/api';

const Dashboard = () => {

  // TODO: Can add skeletons while the resumes are being fetched.

	const { user } = useUser();
	const [resumeList, setResumeList] = useState([]);
	useEffect(() => {
		const getResumeList = async () => {
			const resumes = await getUserResumes(user?.primaryEmailAddress?.emailAddress);
			console.log('🚀 ~ getResumeList ~ resumes:', resumes.data);
			setResumeList(resumes.data);
		};
		user && getResumeList();
	}, [user]);

	return (
		<div className='p-10 md:px-20 lg:px-32 '>
			<h2 className='font-bold text-2xl '>My Resume</h2>
			<p>Start creating & Exploring AI Resume to your next Job role</p>
			<div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 '>
				<AddResume />
				{resumeList?.map(resume => (
					<ResumeCardItem
						resume={resume}
						key={resume.id}
					/>
				))}
			</div>
		</div>
	);
};

export default Dashboard;
