/* eslint-disable no-unused-vars */
import { logo } from '@/constants';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { UserButton, useUser } from '@clerk/clerk-react';

const Header = () => {
	const { user, isSignedIn } = useUser();
	return (
		<div className='py-3 px-5 flex items-center justify-between shadow-md '>
			<a href='/'>
				<img
					src={logo}
					alt='logo'
					width={100}
					height={100}
				/>
			</a>
			{isSignedIn ? (
				<div className='flex items-center gap-x-2  '>
					<Link to='/dashboard'>
						<Button variant='outline'>Dashboard</Button>
					</Link>
					<UserButton />
				</div>
			) : (
				<Link to='/auth/sign-in'>
					<Button>Get Started</Button>
				</Link>
			)}
		</div>
	);
};

export default Header;
