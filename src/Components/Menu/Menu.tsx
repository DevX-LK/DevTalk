import { Button, Text } from '@mantine/core';
import {
	FcHome,
	FcAbout,
	FcBusinessman,
	FcCollaboration,
	FcBookmark,
	FcCustomerSupport,
} from 'react-icons/fc';

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
		<>
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
				</Button>
			))}
		</>
	);
};
export default Menu;
