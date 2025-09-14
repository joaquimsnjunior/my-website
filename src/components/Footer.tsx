import Link from 'next/link';
import { SOCIAL_MEDIA_LINKS } from '../../constants';

export function Footer() {
	return (
		<footer className='flex justify-center gap-4 mt-auto pt-4 text-sm opacity-60 underline'>
			{Object.entries(SOCIAL_MEDIA_LINKS).map(([name, href]) => (
				<Link key={href} href={href}>
					{name}
				</Link>
			))}
		</footer>
	);
}