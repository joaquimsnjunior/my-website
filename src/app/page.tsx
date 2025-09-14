'use client'
import Link from 'next/link';
import HeroImage from '../assets/hero-image.png'
import Image from 'next/image';


export default function Home() {
  return (
   <div className='flex flex-col items-center justify-center gap-8 flex-1'>
			<div className='w-full sm:w-[500px] flex items-center justify-center text-center opacity h-[323px]'>
				<Image
					src={HeroImage}
					alt='Imagem de Joaquim Silva'
					width={250}
					height={250}
					priority
				/>
			</div>

			<div className='max-w-[500px] opacity-75'>
				<p>
					{`>> "Sou desenvolvedor backend especializado em Golang com experiência na construção de APIs escaláveis, seguras e performáticas utilizando o framework Gin e banco de dados PostgreSQL. Tenho forte atuação em ambientes de cloud computing (AWS), aplicando práticas de DevOps com Docker, Kubernetes, Terraform e CI/CD para garantir entregas ágeis e sustentáveis."`}
				</p>
			</div>
		</div>
  );
}
