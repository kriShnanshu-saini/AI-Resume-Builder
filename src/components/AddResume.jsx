import { useState } from 'react';
import { Loader, PlusSquare } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useUser } from '@clerk/clerk-react';

// import { createNewResume } from '../../service/api';
import { client } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

const AddResume = () => {
	const [showDialog, setShowDialog] = useState(false);
	const [resumeTitle, setResumeTitle] = useState('');
	const [loading, setLoading] = useState(false);
	const { user } = useUser();
	const navigate = useNavigate();

	const onCreate = async () => {
		const resume = {
			title: resumeTitle,
			user_email: user?.primaryEmailAddress?.emailAddress,
			user_name: user?.fullName,
		};
		setLoading(true);
		try {
			const { data: res } = await client.from('user_resumes').insert(resume).select('*');
			console.log('🚀 ~ onCreate ~ res:', res);
			navigate(`/dashboard/resume/${res[0].id}/edit`);
		} catch (err) {
			console.error('🚀 ~ onCreate ~ err:', err);
		} finally {
			setLoading(false);
			setShowDialog(false);
			setResumeTitle('');
		}
	};

	return (
		<div>
			<div
				className='p-14 py-24 border border-dashed border-primary flex items-center justify-center bg-primary/5 rounded-lg mt-10 h-[280px] hover:scale-[1.01] transition-all hover:shadow-md cursor-pointer '
				onClick={() => setShowDialog(true)}>
				<PlusSquare className='text-primary' />
			</div>
			<Dialog open={showDialog}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Create new resume</DialogTitle>
						<DialogDescription className='flex flex-col justify-start items-start gap-2 pt-4 '>
							<Label htmlFor='title'>Add title for your new resume</Label>
							<Input
								id='title'
								placeholder='e.g. Full Stack resume'
								value={resumeTitle}
								onChange={e => setResumeTitle(e.target.value)}
							/>
						</DialogDescription>
						<div className='flex justify-end gap-5 '>
							<Button
								variant='ghost'
								onClick={() => setShowDialog(false)}>
								Cancel
							</Button>
							<Button
								disabled={!resumeTitle || loading}
								type='submit'
								onClick={onCreate}>
								{loading ? <Loader className='animate-spin ' /> : 'Create'}
							</Button>
						</div>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default AddResume;
