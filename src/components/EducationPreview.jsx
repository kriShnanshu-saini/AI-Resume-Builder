import { Section } from '@/components';
import { Dot } from 'lucide-react';

/* eslint-disable react/prop-types */
const EducationPreview = ({ resumeInfo }) => {
	return (
		<Section title='Education'>
			<ul>
				{resumeInfo?.education?.map(edu => (
					<li
						key={edu.id}
						className='section-body grid grid-rows-[min-content_auto] mt-2 first:mt-0 '>
						<div className='flex items-center justify-between font-semibold flex-nowrap'>
							<h3 className='inline-flex items-center '>
								<Dot /> {edu.major}
							</h3>
							<h3> {edu.universityName} </h3>
							<h3>
								{edu.startDate} - {edu.endDate}
							</h3>
						</div>
						<p className='ml-3'> {edu.cgpa ? `CGPA: ${parseFloat(edu.cgpa.toFixed(2))}/10.00` : `Percentage: ${parseFloat(edu.percentage.toFixed(2))}/100.0`} </p>
					</li>
				))}
			</ul>

		</Section>
	);
};

export default EducationPreview;
