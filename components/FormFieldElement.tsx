import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

type FormFieldElementProps = {
	formControl: any;
	name: string;
	label: string;
	placeHolder: string;
	type: string;
};

//uses: FormFieldElement(formControl="form.control" name="" label="" placeHolder="" type="")

export function FormFieldElement({
	formControl,
	name,
	label,
	placeHolder,
	type,
}: FormFieldElementProps) {
	return (
		<FormField
			control={formControl}
			name={name}
			render={({ field }) => (
				<FormItem className="">
					<FormLabel className="text-sm text-gray-800">{label}</FormLabel>
					<FormControl>
						<Input
							className="rounded-lg text-gray-800 text-base md:text-base"
							placeholder={placeHolder}
							type={type}
							{...field}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
