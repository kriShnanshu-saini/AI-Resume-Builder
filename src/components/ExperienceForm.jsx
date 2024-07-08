import { Skip } from '@/assets';
import { FormSection, RichTextEditor } from '@/components';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ResumeInfoContext } from '@/context/ResumeInfo.context';
import { Trash2Icon } from 'lucide-react';
import { useContext, useEffect, useState } from 'react';

// TODO: bullet points in RTE is not visible on ui

const ExperienceForm = () => {
	const formField = {
		title: '',
		companyName: '',
		city: '',
		state: '',
		startDate: '',
		endDate: '',
		workSummary: '',
	};
	const [experienceList, setExperienceList] = useState([formField]);
	const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

	useEffect(() => {
		setResumeInfo({
			...resumeInfo,
			experience: experienceList,
		});
	}, [experienceList]);

	const handleChange = (e, index) => {
		const { name, value } = e.target;
		const newEntries = experienceList.slice();
		newEntries[index][name] = value;
		setExperienceList(newEntries);
	};

	const handleRichTextEditorChange = (e, name, index) => {
		const newEntries = experienceList.slice();
		newEntries[index][name] = e.target.value;
		setExperienceList(newEntries);
	};

	const addExp = () => {
		setExperienceList([...experienceList, formField]);
	};

	const removeExp = index => {
		setExperienceList(experienceList.filter((_, idx) => idx !== index));
	};

	return (
		<FormSection
			title='Experience'
			subtitle='Add your some of the work experience'>
			<div>
				{experienceList?.map((exp, index) => (
					<div key={index}>
						<div className='relative grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
							<Button
								data-id={index}
								variant='outline'
								onClick={() => removeExp(index)}
								className=' absolute -top-4 -right-4 px-3 py-1 rounded-full group hover:bg-red-50 hover:border-red-300 transition-all'>
								<Trash2Icon className='size-4 group-hover:stroke-red-600 transition-all' />
							</Button>
							<div>
								<Label className='text-xs '>Position</Label>
								<Input
									name='title'
									onChange={e => handleChange(e, index)}
								/>
							</div>
							<div>
								<Label className='text-xs '>Company</Label>
								<Input
									name='companyName'
									onChange={e => handleChange(e, index)}
								/>
							</div>
							<div>
								<Label className='text-xs '>City</Label>
								<Input
									name='city'
									onChange={e => handleChange(e, index)}
								/>
							</div>
							<div>
								<Label className='text-xs '>State</Label>
								<Input
									name='state'
									onChange={e => handleChange(e, index)}
								/>
							</div>
							<div>
								<Label className='text-xs '>Start Date</Label>
								<Input
									name='startDate'
									type='date'
									onChange={e => handleChange(e, index)}
								/>
							</div>
							<div>
								<Label className='text-xs '>End Date</Label>
								<Input
									name='endDate'
									type='date'
									onChange={e => handleChange(e, index)}
								/>
							</div>
							<div className='col-span-2'>
								<Label className='text-xs '>Work Summary</Label>
								<RichTextEditor onRichTextEditorChange={e => handleRichTextEditorChange(e, 'workSummary', index)} />
							</div>
						</div>
					</div>
				))}
			</div>
			<div className='flex justify-between mt-3'>
				<Button
					variant='outline'
					className='text-primary '
					onClick={addExp}>
					{' '}
					+ Add more{' '}
				</Button>
				<div className='flex items-center gap-2'>
					<Button variant='outline' className='flex items-center justify-center p-2 text-primary hover:text-primary' > <img src={Skip} className='size-6 -ml-1 ' alt="Skip icon" /> Skip </Button>
					<Button> Save </Button>
				</div>
			</div>
		</FormSection>
	);
};

export default ExperienceForm;
