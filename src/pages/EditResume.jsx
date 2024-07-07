import { ResumeForm, ResumePreview } from '@/components';
import { resumeDummyData } from '@/constants/dummy';
import { ResumeInfoContext } from '@/context/ResumeInfo.context';
import { useEffect, useState } from 'react';

const EditResume = () => {
	const [resumeInfo, setResumeInfo] = useState(null);

	useEffect(() => {
		
		setResumeInfo(resumeDummyData);
		console.log('🚀 ~ EditResume ~ resumeInfo:', resumeInfo);
	}, []);

	return (
		<ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
			<div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10 '>
				{/* form section */}
				<ResumeForm />

				{/* preview section */}
				<ResumePreview />
			</div>
		</ResumeInfoContext.Provider>
	);
};

export default EditResume;
