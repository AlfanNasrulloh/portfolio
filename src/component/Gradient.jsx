import image from '../assets/Gradient.png'

const Gradient = () => {
	return (
		<div className='md:w-50 w-40'>
			<img
				src={image}
				alt='me'
				// className='drop-shadow-[0_0_150px_rgba(255,255,255,0.6)]'
			/>
		</div>
	)
}

export default Gradient
