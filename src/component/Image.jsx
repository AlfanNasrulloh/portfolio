import image from '../assets/image.png'

const Image = () => {
	return (
		<div className='md:w-35 w-25'>
			<img
				src={image}
				alt='me'
				// className='drop-shadow-[0_0_150px_rgba(255,255,255,0.6)]'
			/>
		</div>
	)
}

export default Image
