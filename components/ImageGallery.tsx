import React from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { IoIosCloudUpload, IoMdClose } from 'react-icons/io';
import GalleryImage from './GalleryImage';
interface Props {
	visible: boolean;
	onClose(state: boolean): void;
}

export default function ImageGallery({ visible, onClose }: Props) {
	const handleClose = () => {
		onClose(!visible);
	};
	if (!visible) return null;
	return (
		<div
			tabIndex={-1}
			onKeyDown={({ key }) => {
				if (key === 'Escape') handleClose();
			}}
			className="fixed inset-0 bg-black z-50 bg-opacity-40 backdrop-blur-sm flex items-center justify-center"
		>
			<div className="relative md:w-[760px] w-[80%] h-[80%] bg-white rounded-md p-4 overflow-y-auto">
				<div className="absolute right-4 top-4 p-2 z-50">
					<button onClick={handleClose}>
						<IoMdClose size={24} />
					</button>
				</div>
				<FileUploader
					handleChange={(file: File) => {
						console.log(file);
					}}
					name="file"
					types={['png', 'jpg', 'jpeg', 'webp']}
				>
					<div className="flex items-center justify-center w-full">
						<label
							htmlFor="dropzone-file"
							className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 "
						>
							<div className="flex flex-col items-center justify-center pt-5 pb-6">
								<IoIosCloudUpload size={30} className="text-gray-500" />
								<p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
									<span className="font-semibold">Click to upload</span> or drag
									and drop
								</p>
								<p className="text-xs text-gray-500 dark:text-gray-400">
									SVG, PNG, JPG or GIF (MAX. 800x400px)
								</p>
							</div>
							<input id="dropzone-file" type="file" className="hidden" />
						</label>
					</div>
				</FileUploader>

				<p className="p-4 text-center text-2xl font-semibold opacity-50">
					No Images
				</p>
				<div className="grid md:grid-cols-4 grid-cols-2 mt-4 gap-4">
					<GalleryImage src="/earth.jpg" />
				</div>
			</div>
		</div>
	);
}
