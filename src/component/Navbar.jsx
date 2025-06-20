import { ListIcon } from '@phosphor-icons/react'

const Navbar = () => {
	return (
		<div
			className='w-full h-16 flex items-center justify-between px-4 md:px-70 md:gap-50 shadow-md'
			style={{ background: '#1a0b2e', fontFamily: 'Plus Jakarta Sans' }}
		>
			<h1 className='text-2xl font-bold text-white'>PORTFOLIO</h1>
			<ul className='hidden md:flex gap-6 font-semibold text-sm text-white md:gap-30'>
				<li>
					<a href='#home' className='hover:text-indigo-300'>
						Home
					</a>
				</li>
				<li>
					<a href='#experience' className='hover:text-indigo-300'>
						About
					</a>
				</li>
				<li>
					<a href='#lab' className='hover:text-indigo-300'>
						Lab
					</a>
				</li>
			</ul>
			<div className='md:hidden text-white'>
				<button>
					<ListIcon />
				</button>
			</div>
		</div>
	)
}

export default Navbar
