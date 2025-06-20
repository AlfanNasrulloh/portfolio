import { ArrowBendLeftDown, GithubLogoIcon } from '@phosphor-icons/react'
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
	return (
		<div className='text-white' id='home'>
			<div className='flex px-40 md:px-120 z-10 pt-20 gap-5 md:text-sm text-xs'>
				{/* <ArrowBendLeftDown size={40} className='transform rotate-30' /> */}
				<h5 className='font-semibold font-preahvihear'>
					Hello! I Am <span className='text-violet-600'>Alfan Nasrulloh</span>.
				</h5>
			</div>
			<div className='md:px-120 px-40 -mt-12 md:text-md text-xm'>
				<div className='pt-15'>
					<p className='underline'>A Software Developer</p>
					<h2 className='md:text-5xl text-xl font-semibold'>
						Don't judges a book
						<br />
						it's <span className='text-violet-600'>cover</span>...
					</h2>
					<p className='text-xs w-70 md:text-sm pt-2'>
						But if the cover is so captivating, imagine the depth of the story
						inside.
					</p>
				</div>
			</div>

			<div className='mx-10 md:mx-70 mt-10'>
				<h1 className='font-bold md:text-4xl text-xl text-white'>
					<Typewriter
						words={[
							"I'm a Software Developer.",
							"I'm a FrontEnd Developer.",
							"I'm a FullStack Developer.",
						]}
						loop={false}
						cursor
						cursorStyle='|'
						typeSpeed={100}
						deleteSpeed={100}
						delaySpeed={5000}
					/>
				</h1>
				<p className='flex mt-2 text-xs md:text-md'>
					Currently, I'm a Software Developer at
					<GithubLogoIcon size={20} className='text-zinc-600 mx-1' />
					<span className='text-zinc-600'>
						<a href='https://github.com/AlfanNasrulloh'>I'm not thinking</a>
					</span>
					.
				</p>
			</div>

			<div className='flex px-10 md:px-70 mt-5 md:mt-15'>
				<p className='md:w-xl w-90 text-justify'>
					A web developer, I create meaningful and delightful digital products
					that strike a balance between user needs and business goals.
				</p>
			</div>
		</div>
	)
}

export default Home
