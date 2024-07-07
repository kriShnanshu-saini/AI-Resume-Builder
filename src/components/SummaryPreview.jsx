import { Section } from '@/components';

/* eslint-disable react/prop-types */
const SummaryPreview = ({ resumeInfo }) => {
	return (
		<Section title={'Summary'}>
			<p>{resumeInfo?.summary}</p>
		</Section>
	);
};

export default SummaryPreview;
