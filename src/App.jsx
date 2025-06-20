import './App.css'
import Home from './component/Home'
import Navbar from './component/Navbar'
import Image from './component/Image'
import Experience from './component/Experience'
import Contact from './component/Contact'
import Gradient from './component/Gradient'
import Lab from './component/Lab'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'

function App() {
	useEffect(() => {
		ScrollReveal().reveal('.reveal', {
			duration: 1000,
			origin: 'bottom',
			distance: '50px',
			easing: 'ease-in-out',
			reset: false,
		})
	}, [])

	return (
		<div
			style={{ background: '#11071f', overflowX: 'hidden' }}
			className='min-h-screen font-preahvihear'
		>
			<div className='flex items-top justify-center '>
				<Navbar />
			</div>

			<div className='flex items-center justify-between reveal'>
				<Home />
			</div>

			<div className='relative -mt-90 md:-mt-100 md:px-70 mx-5 z-10 reveal'>
				<Image />
				<div className='absolute top-2 -z-10 -mx-5'>
					<Gradient />
				</div>
			</div>

			<div className='relative flex items-center justify-center z-10 reveal mt-80'>
				<Experience />
				<div className='absolute -z-10 flex items-center justify-center mt-20 md:-mt-50'>
					<Gradient />
				</div>
			</div>

			<div className='reveal'>
				<Lab />
			</div>

			<div className='reveal'>
				<Contact />
			</div>
		</div>
	)
}

export default App
