import { useState } from 'react';
import { BtnBold, BtnBulletList, BtnClearFormatting, BtnItalic, BtnLink, BtnNumberedList, BtnRedo, BtnStrikeThrough, BtnStyles, BtnUnderline, BtnUndo, Editor, EditorProvider, HtmlButton, Separator, Toolbar } from 'react-simple-wysiwyg';

const RichTextEditor = ({ onRichTextEditorChange }) => {
	const [value, setValue] = useState('');
	return (
		<EditorProvider>
			<Editor
				value={value}
				onChange={e => {
					setValue(e.target.value);
					onRichTextEditorChange(e);
				}}>
				<Toolbar>
					<BtnBold />
					<BtnItalic />
					<BtnUnderline />
					<BtnStrikeThrough />
					<Separator />
					<BtnBulletList />
					<BtnNumberedList />
					<Separator />
					<BtnClearFormatting />
					<BtnLink />
					<Separator />
					<BtnUndo />
					<BtnRedo />
					<Separator />
					<BtnClearFormatting />
					<HtmlButton />
					<BtnStyles />
				</Toolbar>
			</Editor>
		</EditorProvider>
	);
};

export default RichTextEditor;
