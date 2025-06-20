import {
	InstagramLogoIcon,
	LinkedinLogoIcon,
	TiktokLogoIcon,
	GithubLogoIcon,
} from '@phosphor-icons/react'

const Contact = () => {
	return (
		<div id='contact' className='pb-10 flex md:-mx-10 -mx-50'>
			<div className='px-60 text-white'>
				<h1 className='text-3xl font-semibold mt-15'>Contact</h1>
				<p className='mt-20 mb-10'>
					I'm currently looking to join a cross-functional team that values
					improving people's lives through accessible design. or have a project
					in mind? Let's connect.
				</p>
				<p>alfannasrulloh22@gmail.com</p>

				<div className='mt-5 flex gap-4'>
					<a href='https://www.instagram.com/alfaann__/?hl=id'>
						<InstagramLogoIcon size={30} />
					</a>
					<a href=''>
						<LinkedinLogoIcon size={30} />
					</a>
					<a href=''>
						<TiktokLogoIcon size={30} />
					</a>
					<a href='https://github.com/AlfanNasrulloh'>
						<GithubLogoIcon size={30} />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Contact
