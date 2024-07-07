import { Github, Linkedin } from 'lucide-react';

/* eslint-disable react/prop-types */
const PersonalDetailPreview = ({ resumeInfo }) => {
	return (
		<div>
			<h2 className='font-bold text-lg lg:text-xl text-center capitalize '>
				{resumeInfo?.first_name} {resumeInfo?.last_name}
			</h2>
			<h2 className='capitalize text-center text-sm lg:text-base font-medium '> {resumeInfo?.job_title} </h2>
			<ul className='flex flex-wrap justify-center items-center gap-x-4 text-sm mt-2 '>
				<li className='border-r border-black/75 pr-4 last:border-0 last:pr-0'> {resumeInfo?.phone} </li>
				<li className='border-r border-black/75 pr-4 last:border-0 last:pr-0'> {resumeInfo?.email} </li>
				<li className='border-r border-black/75 pr-4 last:border-0 last:pr-0'>
					<a
						href={resumeInfo?.github}
						target='_blank'
						className='flex items-center justify-start gap-x-1 '>
						<Github className='size-4 ' /> Github
					</a>
				</li>
				<li className='border-r border-black/75 pr-4 last:border-0 last:pr-0'>
					<a
						href={resumeInfo?.linkedin}
						target='_blank'
						className='flex items-center justify-start gap-x-1 '>
						<Linkedin className='size-4 ' /> Linkedin
					</a>
				</li>
			</ul>
		</div>
	);
};

export default PersonalDetailPreview;
