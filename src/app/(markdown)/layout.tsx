'use client';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='w-full flex flex-col items-center justify-center py-10'>
            <div className='w-full md:w-[100ch] 
                [&_a]:text-white 
                [&_a]:no-underline 
                [&_a]:relative
                [&_a]:transition-colors
                [&_a]:duration-200
                [&_a:hover]:text-white
                [&_a::after]:content-[""] 
                [&_a::after]:absolute 
                [&_a::after]:bottom-0 
                [&_a::after]:left-0 
                [&_a::after]:w-0 
                [&_a::after]:h-0.5 
                [&_a::after]:bg-blue-400 
                [&_a::after]:transition-all 
                [&_a::after]:duration-300
                [&_a:hover::after]:w-full'>
                {children}
            </div>
        </div>
    );
}