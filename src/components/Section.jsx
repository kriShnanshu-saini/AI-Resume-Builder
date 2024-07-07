const Section = ({ title, children, className }) => {
	return (
		<section className={`${className || ''} mt-4  `}>
			<h3 className='section-title'> {title} </h3>
			<hr className='divider' />
			<div className='section-body'>
                {children}
                </div>
		</section>
	);
};

export default Section;
