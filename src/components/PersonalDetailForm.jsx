import { FormSection } from '@/components';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ResumeInfoContext } from '@/context/ResumeInfo.context';
import { client } from '@/lib/utils';
import { Loader } from 'lucide-react';
import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';

const PersonalDetailForm = ({ enabledNext }) => {
	const { resumeId } = useParams();
	const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
	const [formData, setFormData] = useState({});
	const [loading, setLoading] = useState(false);

	const handleInputChange = async e => {
		enabledNext(false);
		const { name, value } = e.target;

		setFormData({
			...formData,
			[name]: value,
		});

		setResumeInfo({
			...resumeInfo,
			[name]: value,
		});
	};

	const onSave = async e => {
		e.preventDefault();
		setLoading(true);

		// updating data in supabase
		const { data, error } = await client.from('user_resumes').update(formData).eq('id', resumeId).select();
		if (error) {
			console.error(error);
			toast.error('Some error occurred!')
		}
		data && toast.success('Personal details updated!');

		enabledNext(true);
		setLoading(false);
	};

	return (
		<FormSection
			title='Personal Details'
			subtitle='Get started with your basic details'>
			<form onSubmit={onSave}>
				<div className='grid grid-cols-2 mt-5 gap-3'>
					<div>
						<Label
							htmlFor='first_name'
							className='text-sm'>
							First Name
						</Label>
						<Input
							id='first_name'
							name='first_name'
							value={resumeInfo?.first_name || ''}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div>
						<Label
							htmlFor='last_name'
							className='text-sm'>
							Last Name
						</Label>
						<Input
							id='last_name'
							name='last_name'
							value={resumeInfo?.last_name || ''}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div className='col-span-2'>
						<Label
							htmlFor='job_title'
							className='text-sm'>
							Job Title
						</Label>
						<Input
							id='job_title'
							name='job_title'
							value={resumeInfo?.job_title || ''}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div className='col-span-2'>
						<Label
							htmlFor='phone'
							className='text-sm'>
							Phone
						</Label>
						<Input
							id='phone'
							name='phone'
							value={resumeInfo?.phone || ''}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div className='col-span-2'>
						<Label
							htmlFor='email'
							className='text-sm'>
							Email
						</Label>
						<Input
							id='email'
							name='email'
							value={resumeInfo?.email || ''}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div
						id='socialLinks'
						className='col-span-2 mt-4 flex flex-col gap-2'>
						<h3 className='section-title'>Websites & Social links</h3>
						<div className='input-link col-span-2'>
							<Label
								htmlFor='github'
								className='text-sm'>
								Github URL
							</Label>
							<Input
								id='github'
								name='github'
								value={resumeInfo?.github || ''}
								onChange={handleInputChange}
							/>
						</div>
						<div className='input-link col-span-2'>
							<Label
								htmlFor='linkedin'
								className='text-sm'>
								Linkedin URL
							</Label>
							<Input
								id='linkedin'
								name='linkedin'
								value={resumeInfo?.linkedin || ''}
								onChange={handleInputChange}
								required
							/>
						</div>
						{/* // TODO: Feat: Add more links on clicking a button */}
					</div>
				</div>
				<div className='mt-3 flex justify-end'>
					<Button
						type='submit'
						disabled={loading}>
						{loading ? <Loader className='animate-spin size-4' /> : 'Save'}
					</Button>
				</div>
			</form>
		</FormSection>
	);
};

export default PersonalDetailForm;
