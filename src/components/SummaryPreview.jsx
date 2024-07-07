/* eslint-disable react/prop-types */
const SummaryPreview = ({ resumeInfo }) => {
	return (
		<div>
			<h2 className='section-title'>Summary</h2>
			<p className='section-body'>{resumeInfo?.summary}</p>
			<hr className="divider" />
		</div>
	);
};

export default SummaryPreview;
