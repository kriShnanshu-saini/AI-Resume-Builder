import { AILogo } from '@/assets';
import { FormSection } from '@/components';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ResumeInfoContext } from '@/context/ResumeInfo.context';
import { client } from '@/lib/utils';
import { Loader } from 'lucide-react';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AIChatSession } from '../../service/api/AIModel.js';
import { toast } from 'sonner';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const SummaryForm = ({ enabledNext }) => {
	const { resumeId } = useParams();
	const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
	const [summary, setSummary] = useState('');
	const [loading, setLoading] = useState(false);
	const [aiGeneratedSummaryList, setAiGeneratedSummaryList] = useState(null);
	const [aiGenerating, setAiGenerating] = useState(false);

	useEffect(() => {
		// enabledNext(false);
		summary && setResumeInfo({ ...resumeInfo, summary: summary });
	}, [summary]);

	const generateSummaryFromAI = async () => {
		setLoading(true);
		setAiGenerating(true);
		const PROMPT = `Job title: ${resumeInfo?.job_title}, create a concise ats optimized summary for the resume in 4-5 lines in JSON format with field experience level and summary with experience level for Fresher, Entry level, Experienced`;
		try {
			const { response } = await AIChatSession.sendMessage(PROMPT);

			const responseText = await response.text();

			const parsedResult = JSON.stringify(responseText);

            // TODO: Fix ai generated summary
			setAiGeneratedSummaryList(JSON.parse(parsedResult));
		} catch (err) {
			console.error('Error parsing JSON:', err);
		} finally {
			setLoading(false);
			setAiGenerating(false);
		}
	};

	const onSave = async e => {
		e.preventDefault();
		setLoading(true);

		// updating data in supabase
		try {
			const { data, error } = await client.from('user_resumes').update({ summary: summary }).eq('id', resumeId).select();
			if (error) {
				console.error(error);
				toast.error('Some error occurred!');
			}
			data && toast.success('Summary updated successfully!');

			enabledNext(true);
		} catch (err) {
			console.error(err);
			toast.error('Some error occurred!');
		} finally {
			setLoading(false);
		}
	};

	return (
		<FormSection
			title='Summary'
			subtitle='Write a brief summary about yourself'>
			<form
				className='mt-7'
				onSubmit={onSave}>
				<div className='flex items-end justify-between'>
					<Label htmlFor='summary'>Summary</Label>
					<Button
						variant='outline'
						size='sm'
						type='button'
						onClick={generateSummaryFromAI}
						className='flex items-center gap-1 border-primary text-primary hover:text-primary hover:bg-primary/5'>
						{aiGenerating ? (
							<Loader className='size-4 animate-spin' />
						) : (
							<img
								src={AILogo}
								alt='AI'
								className='size-5 '
							/>
						)}
						{aiGenerating ? 'Generating' : 'AI Generate'}
					</Button>
				</div>
				<Textarea
					className='mt-5 '
					id='summary'
					name='summary'
					required
					placeholder='A brief summary which represents you and your work to the recruiter...'
					value={resumeInfo?.summary || ''}
					onChange={e => setSummary(e.target.value)}
				/>
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

export default SummaryForm;
