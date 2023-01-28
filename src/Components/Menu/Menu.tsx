import { Button } from '@mantine/core';

const MenuItems = [
	{ label: 'Home', link: '/' },
	{ label: 'About', link: '/About' },
	{ label: 'User Profile', link: '/me' },
	{ label: 'Group', link: '/Groups' },
	{ label: 'Blog', link: '/Blog' },
	{ label: 'Group', link: '/groups' },
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
						'&:hover': {
							background: 'rgba(23, 90, 145, 0.5)',
						},
					}}
				>
					{link.label}
				</Button>
			))}
		</>
	);
};
export default Menu;
