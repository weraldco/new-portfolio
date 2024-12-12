'use client';

import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useState } from 'react';
import ImageGallery from './ImageGallery';
import Tools from './Tools';

const Tiptap = () => {
	const [showImageGallery, setShowImageGallery] = useState(false);
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
		<>
			<div className="h-screen flex flex-col space-y-6">
				<div className="sticky top-0 bg-white z-50">
					<Tools
						editor={editor}
						onImageSelection={() => setShowImageGallery(true)}
					/>
				</div>
				<div className="flex-1">
					<EditorContent editor={editor} className="h-full" />
				</div>
				<div className="p-4 text-right">
					<button
						onClick={() => {
							// The result should be this one.
							// editor?.getHTML -> which is give you the result of your data you put in your richtext editor.
							console.log(editor?.getHTML());
						}}
						className="bg-black text-white px-4 py-2 rounded-lg"
					>
						Create new post
					</button>
				</div>
			</div>
			<ImageGallery visible={showImageGallery} onClose={setShowImageGallery} />
		</>
	);
};

export default Tiptap;
