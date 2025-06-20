import image from '../assets/image.png'
import one from '../assets/php.png'
import two from '../assets/js1.png'
import three from '../assets/lara.png'
import four from '../assets/ci4.png'
import five from '../assets/react.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import skill from '../assets/Skills.png'
// import Gradient from '../assets/Gradient.png'

const Experience = () => {
	return (
		<div
			className='text-white pt-30 md:mt-10 px-4 md:px-16 mt-80'
			id='experience'
		>
			<h1 className='text-2xl md:text-3xl font-bold mb-8'>Experience</h1>

			<div className='grid sm:grid-cols-1 md:grid-cols-2 gap-6'>
				{[
					{
						title: 'BackEnd Developer',
						desc: 'Internship at PT. Technopartner Indonesia as a backend developer.',
					},
					{
						title: 'Web Developer',
						desc: 'Doing freelance work as a web developer.',
					},
					{
						title: 'Informatics Management Student',
						desc: 'Was once a student at the Lampung State Polytechnic.',
					},
					{
						title: 'FullStack Developer',
						desc: 'Built a website for a student entrepreneurship event.',
					},
				].map((item, index) => (
					<div
						key={index}
						className='shadow-lg p-5 rounded-xl bg-[#2b114f] flex gap-4 items-start'
					>
						<img src={image} alt='profile' className='w-12 h-auto mt-2' />
						<div>
							<h3 className='font-bold text-lg md:text-xl text-white'>
								{item.title}
							</h3>
							<p className='text-xs text-gray-300 mb-3'>{item.desc}</p>
							<button className='bg-purple-950 hover:bg-purple-600 text-white text-xs py-2 px-4 rounded-lg'>
								LEARN MORE
							</button>
						</div>
					</div>
				))}
			</div>

			<div className='mt-16 text-center'>
				<h1 className='text-lg md:text-xl'>
					I'm currently looking to join a{' '}
					<span className='text-purple-400'>cross-functional</span> team
				</h1>
				<p className='text-sm mt-1'>
					that values improving people's lives through accessible development
				</p>

				<div className='mt-6'>
					<ul className='flex flex-wrap justify-center gap-4'>
						{[html, css, two, one, three, four, five].map((icon, idx) => (
							<li key={idx}>
								<img
									src={icon}
									alt='skill'
									className='w-8 h-8 md:w-9 md:h-9 hover:scale-110 transition bg-indigo-950 rounded-full p-1'
								/>
							</li>
						))}
					</ul>
				</div>

				<div className='mt-12'>
					{/* <img src={Gradient} alt="gradient" className="mb-8" /> */}
					<img src={skill} alt='skills' className='w-full max-w-4xl mx-auto' />
				</div>
			</div>
		</div>
	)
}

export default Experience
