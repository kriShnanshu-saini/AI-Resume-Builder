import { Section } from '@/components';
import { Dot } from 'lucide-react';
import DOMPurify from 'dompurify';

/* eslint-disable react/prop-types */
const ExperiencePreview = ({ resumeInfo }) => {
	return (
		<Section title='Experience'>
			<ul>
				{resumeInfo?.experience?.map(exp => {
					const sanitizedContent = DOMPurify.sanitize(exp.workSummary);
					return (
						<li
							key={exp.id}
							className='section-body mt-3 first:mt-0 grid grid-rows-[min-content_auto] '>
							<div className='font-semibold inline-flex items-center justify-between '>
								<h3 className='inline-flex items-center capitalize'>
									<Dot /> {exp.title}
								</h3>
								<h3 className='capitalize'>
									{exp.companyName}, {exp.city}, {exp.state}
								</h3>
								<h3>
									{exp.startDate} - {exp.currentlyWorking ? 'Present' : exp.endDate}
								</h3>
							</div>
							<div className='-mt-1 ml-3' dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
						</li>
					);
				})}
			</ul>
		</Section>
	);
};

export default ExperiencePreview;
