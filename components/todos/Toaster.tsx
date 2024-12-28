'use client';

import { useToast } from '@/components/hooks/use-toast';
import { Button } from '@/components/ui/button';

export default function ToastSimple() {
	const { toast } = useToast();
	const buttonClick = () => {
		toast({
			description: 'Your message has been sent.',
		});
		console.log('hey');
	};
	return (
		<Button variant="outline" onClick={buttonClick}>
			Show Toast
		</Button>
	);
}
