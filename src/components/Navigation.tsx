'use client';

import Link from 'next/link';
import Logo  from './Logo';

export function Navigation() {
	return (
		<nav className='flex items-center gap-7'>
			<Link href='/'>
				<Logo />
			</Link>
			<Link href={{ pathname: '/blog' }} className='opacity-75 underline'>
				blog
			</Link>
		</nav>
	);
}