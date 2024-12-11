'use client';

import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Tools from './Tools';

const Tiptap = () => {
	const editor = useEditor({
		extensions: [
			StarterKit,
			Underline,
			TextAlign.configure({
				types: ['paragraph'],
			}),
			Placeholder.configure({ placeholder: 'Write something..' }),
		],
		// content: '<h1>Hello World! 🌎️</h1>',
		immediatelyRender: false,
		editorProps: {
			attributes: {
				class:
					'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl outline-none',
			},
		},
	});

	return (
		<div className="h-screen flex flex-col space-y-6">
			<div className="sticky top-0 bg-white z-50">
				<Tools editor={editor} />
			</div>
			<div className="flex-1">
				<EditorContent editor={editor} className="h-full" />
			</div>
		</div>
	);
};

export default Tiptap;
