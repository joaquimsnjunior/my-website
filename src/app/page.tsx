'use client'
import Link from 'next/link';
import HeroImage from '../assets/profile.png'
import Gif from '../assets/looking-around.gif'
import Image from 'next/image';

export default function Home() {
	return (
		<div className='min-h-screen flex items-center justify-center px-6'>
			<div className='max-w-4xl w-full'>
				{/* Hero Section */}
			            <div className='text-center mb-16'>
                    <div className='relative mb-8'>
                        {/* Avatar estilo Twitter com Gopher */}
                        <div className='relative w-32 h-32 mx-auto mb-6'>
                            <div className='w-full h-full rounded-full overflow-hidden'>
                                <Image
                                    src={HeroImage}
                                    alt='Imagem de Joaquim Silva, Backend Developer'
                                    width={140}
                                    height={140}
                                    className='object-contain w-full h-full'
                                    priority
                                />
                            </div>
                            {/* Indicador online (opcional) */}
                            <div className='absolute bottom-2 right-2 w-6 h-6'>
                                <Image
                                    src={Gif}
                                    alt='Gopher revirando os olhos'
                                    width={140}
                                    height={140}
                                    className='object-contain w-full h-full'
                                    priority
                                />
                            </div>
                        </div>

						<h1 className='text-4xl md:text-5xl font-light text-blue-200 mb-4'>
							Joaquim Silva
						</h1>

						<p className='text-lg text-gray-600 font-light tracking-wide'>
							Backend Developer
						</p>
					</div>

					{/* Subtitle */}
					<div className='max-w-2xl mx-auto'>
						<p className='text-gray-400 leading-relaxed text-lg font-light'>
							Especialista em construir APIs escaláveis com{' '}
							<span className='text-blue-300 font-medium'>Go</span>.
							<br />
							Transformo ideias em soluções backend robustas e performáticas.
						</p>
					</div>
				</div>

				{/* Skills Grid */}
				<div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-16'>
					{[
						{ name: 'Golang', color: 'bg-blue-50 text-blue-700' },
						{ name: 'PostgreSQL', color: 'bg-indigo-50 text-indigo-700' },
						{ name: 'Docker', color: 'bg-purple-50 text-purple-700' },
						{ name: 'AWS', color: 'bg-orange-50 text-orange-700' },
					].map((skill) => (
						<div
							key={skill.name}
							className={`${skill.color} px-4 py-3 text-center font-medium text-sm tracking-wide`}
						>
							{skill.name}
						</div>
					))}
				</div>

				{/* CTA Section */}
				<div className='text-center space-y-6'>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link
							href='/blog'
							className='px-8 py-2 bg-gray-900 text-white font-medium hover:bg-gray-700 transition-all duration-200 shadow-sm'
						>
							Ver Blog
						</Link>
						<Link
							href='https://www.linkedin.com/in/joaquimsnjr/'
							className='px-8 py-2 border border-gray-300 text-gray-400 font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-200'
						>
							Contato
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}