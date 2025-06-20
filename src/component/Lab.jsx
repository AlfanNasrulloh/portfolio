import example from '../assets/image.png'
import { BrowserIcon } from '@phosphor-icons/react'

const Lab = () => {
	return (
		<div
			className='text-white px-5 md:px-30 md:mb-80 items-center justify-between flex flex-wrap'
			id='lab'
		>
			<div className='md:mt-40 mt-40 md:mx-50'>
				<div className='px-5'>
					<h5 className='text-violet-500'>Featured Project</h5>
					<h1 className='text-lg md:text-2xl'>Example Project</h1>
				</div>
				<div className=''>
					<div className=' absolute md:mx-150 mx-60 md:-mt-20 -mt-5'>
						<div className='bg-white/10 backdrop-blur-3xl md:w-60 w-30 rounded-lg'>
							<img src={example} alt='me' />
						</div>
					</div>
					<div className='flex relative justify-between bg-white/10 backdrop-blur-3xl md:w-150 w-60 rounded-lg p-5 mt-10 mx-5'>
						<p className='md:text-lg text-xs'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Laboriosam reiciendis ipsa officia doloribus ipsam exercitationem
							nemo repellat non odit pariatur, praesentium deserunt at rem minus
							ullam laborum facilis accusantium beatae!
						</p>
					</div>
					<div className='mt-3 px-10 cursor-pointer '>
						<BrowserIcon size={32} />
					</div>
				</div>
			</div>
			<div className='md:mt-40 mx-50'>
				<div className='md:px-50 md:text-right '>
					<h5 className='text-violet-500 '>Featured Project</h5>
					<h1 className='text-lg md:text-2xl'>Example Project</h1>
				</div>
				<div className='-mx-45'>
					<div className=' absolute md:-mt-20 -mt-5'>
						<div className='bg-white/10 backdrop-blur-3xl md:w-60 w-30 rounded-lg'>
							<img src={example} alt='me' />
						</div>
					</div>
					<div className='flex relative justify-between bg-white/10 backdrop-blur-3xl md:w-150 w-60 rounded-lg p-5 mt-10 md:mx-55 mx-25'>
						<p className='md:text-lg text-xs'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Laboriosam reiciendis ipsa officia doloribus ipsam exercitationem
							nemo repellat non odit pariatur, praesentium deserunt at rem minus
							ullam laborum facilis accusantium beatae!
						</p>
					</div>
					<div className='mt-3 cursor-pointer flex justify-end md:px-60 px-75'>
						<BrowserIcon size={32} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Lab
