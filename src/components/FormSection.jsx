const FormSection = ({title, subtitle, children, className}) => {
	return (
		<div className={`${className} p-5 shadow-lg rounded0lg border-t-primary border-t-4 mt-10`}>
			<h2 className='font-bold text-lg '> {title} </h2>
			<p>{subtitle}</p>
            {children}
		</div>
	);
};

export default FormSection;
