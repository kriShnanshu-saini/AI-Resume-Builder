import { ExperienceForm, PersonalDetailForm, SummaryForm } from '@/components';
import { Button } from '@/components/ui/button';
import { LayoutGrid } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

const ResumeForm = () => {
	const [activeFormIndex, setActiveFormIndex] = useState(2);
    const [enableNext, setEnableNext] = useState(false);
	
	useEffect(() => {
		toast(activeFormIndex);
	}, [activeFormIndex])

	return (
		<div>
			<div className='flex justify-between items-center'>
				<Button
					className='flex gap-1 items-center'
					size='sm'
					variant='outline'>
					<LayoutGrid className='size-4' /> Theme
				</Button>
				<div className='flex gap-2 items-center'>
					{activeFormIndex > 0 && <Button onClick={() => setActiveFormIndex(prev => prev - 1)} size='sm'>Previous</Button>}
					<Button onClick={() => setActiveFormIndex(prev => prev + 1)} size='sm' disabled={!enableNext} >Next </Button>
				</div>
			</div>
			{/* personal details */}
			{activeFormIndex === 0 && <PersonalDetailForm enabledNext={v => setEnableNext(v)} />}
			{/* summary */}
			{activeFormIndex === 1 && <SummaryForm enabledNext={v => setEnableNext(v)} />}
			{/* experience */}
			{activeFormIndex === 2 && <ExperienceForm enabledNext={v => setEnableNext(v)} />}
			{/* education */}
			{/* projects */}
			{/* skills */}
		</div>
	);
};

export default ResumeForm;
