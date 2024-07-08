import { Section } from '@/components';

/* eslint-disable react/prop-types */
const SummaryPreview = ({ resumeInfo }) => {
	return (
		<Section title={'Summary'}>
			<p className='normal-case '>{resumeInfo?.summary}</p>
		</Section>
	);
};

export default SummaryPreview;
