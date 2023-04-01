import { Button, Text } from '@mantine/core';
import Link from 'next/link';
import {
	FcHome,
	FcAbout,
	FcBusinessman,
	FcCollaboration,
	FcBookmark,
	FcCustomerSupport,
} from 'react-icons/fc';
import { Grid } from '@mantine/core';

const MenuItems = [
	{ label: 'Home', link: '/', icon: <FcHome /> },
	{ label: 'About', link: '/About', icon: <FcAbout /> },
	{ label: 'User Profile', link: '/me', icon: <FcBusinessman /> },
	{ label: 'Group', link: '/Groups', icon: <FcCollaboration /> },
	{ label: 'Blog', link: '/Blog', icon: <FcBookmark /> },
	{ label: 'Contact-us', link: '/Contact', icon: <FcCustomerSupport /> },
];

const Menu = () => {
	return (
		<Grid.Col
			span={'auto'}
			sx={{
				display: 'flex',
				flexDirection: 'column',
			}}
			mt="lg"
		>
			{MenuItems.map((link) => (
				<Button
					sx={{
						background: 'transparent',
						margin: '5px 0',
						fontSize: '13px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						'&:hover': {
							background: 'rgba(23, 90, 145, 0.5)',
						},
					}}
					key={link.label}
				>
					<Link
						href={link.link}
						style={{ display: 'flex', alignItems: 'center' }}
					>
						{link.label}
						<Text
							sx={{
								fontSize: '20px',
								display: 'flex',
								alignItems: 'center',
								marginLeft: '4px',
							}}
						>
							{link.icon}
						</Text>
					</Link>
				</Button>
			))}
		</Grid.Col>
	);
};
export default Menu;
