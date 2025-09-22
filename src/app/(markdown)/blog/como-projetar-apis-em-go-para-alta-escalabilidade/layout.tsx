'use client';

import { useEffect, useState } from 'react';


function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / total) * 100;
      setProgress(progress);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className='fixed top-0 left-0 w-full h-1 bg-gray-200 z-50'>
      <div
        className='h-full bg-blue-400 transition-all duration-150'
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ReadingProgress />
      <div className='w-full flex flex-col items-center justify-center py-10'>
        {/* Header com título estilizado */}
        <header className='w-full md:w-[100ch] mb-8 text-center'>
          <h1 className='text-3xl md:text-4xl font-bold underline underline-offset-8 decoration-4 decoration-blue-400 mb-4'>
            Como Projetar APIs em Go para Alta Escalabilidade
          </h1>
        </header>
        {/* Tags */}
        <div className='flex gap-2 mb-4'>
          {['Go', 'API', 'Escalabilidade', 'Backend'].map((tag) => (
            <span
              key={tag}
              className='px-8 py-2 bg-blue-100 text-blue-900 text-xs'
            >
              {tag}
            </span>
          ))}
        </div>
        <div className='w-full md:w-[100ch]
        /* Parágrafos */
          [&_p]:mb-6 
          [&_p]:leading-relaxed 
          [&_p]:text-white
          [&_p]:text-lg
          
          /* Links */
          [&_a]:text-blue-200 
          [&_a]:underline 
          [&_a]:decoration-blue-400 
          [&_a]:decoration-2 
          [&_a]:underline-offset-4
          [&_a]:transition-all
          [&_a]:duration-200
          [&_a:hover]:decoration-blue-600 
          [&_a:hover]:text-blue-800
          
          /* Títulos */
          [&_h2]:text-2xl 
          [&_h2]:font-bold 
          [&_h2]:mt-8 
          [&_h2]:mb-4 
          [&_h2]:text-white
          [&_h3]:text-xl 
          [&_h3]:font-semibold 
          [&_h3]:mt-6 
          [&_h3]:mb-3 
          [&_h3]:text-white
          
          /* Listas */
          [&_ul]:mb-6 
          [&_ul]:ml-6 
          [&_ul]:list-disc
          [&_ol]:mb-6 
          [&_ol]:ml-6 
          [&_ol]:list-decimal
          [&_li]:mb-2 
          [&_li]:text-gray-300
          
          /* Código */
          [&_code]:bg-gray-100 
          [&_code]:px-2 
          [&_code]:py-1 
          [&_code]:rounded 
          [&_code]:text-sm 
          [&_code]:font-mono 
          [&_code]:text-gray-900
          
          /* Blockquotes */
          [&_blockquote]:border-l-4 
          [&_blockquote]:border-blue-400 
          [&_blockquote]:pl-4 
          [&_blockquote]:italic 
          [&_blockquote]:text-gray-200
          [&_blockquote]:bg-gray-800 
          [&_blockquote]:py-2
          [&_blockquote]:my-6
        '>
          {children}
        </div>
      </div>
    </>
  );
}