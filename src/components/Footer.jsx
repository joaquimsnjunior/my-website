import Link from 'next/link';
import { SOCIAL_MEDIA_LINKS } from '../../constants';

export function Footer() {
    return (
        <footer className='flex justify-center gap-4 mt-auto pt-4 text-sm opacity-60 underline'>
            {Object.entries(SOCIAL_MEDIA_LINKS)
                .filter(([, href]) => typeof href === 'string' && href.length > 0)
                .map(([name, href]) =>
                    href.startsWith('http') ? (
                        <a key={href} href={href} target="_blank" rel="noopener noreferrer">
                            {name}
                        </a>
                    ) : (
                        <Link key={href} href={href}>
                            {name}
                        </Link>
                    )
                )}
        </footer>
    );
}