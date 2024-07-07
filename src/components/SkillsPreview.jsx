const SkillsPreview = ({ resumeInfo }) => {
	return (
		<div>
			<h3 className='section-title'>Skills</h3>
			<ul>
				{resumeInfo?.skills?.map(el => (
					<li
						key={el.category}
						className='section-body flex items-start justify-start gap-2 mt-2 first:mt-1 ' >
						<h3 className="capitalize font-semibold"> {el.category}: </h3>
						<p> {el.values.join(', ')} </p>
					</li>
				))}
			</ul>
			<hr className='divider' />
		</div>
	);
};

export default SkillsPreview;
