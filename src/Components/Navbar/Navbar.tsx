import { useState } from 'react';
import { createStyles, Navbar, Group, Code, Text } from '@mantine/core';
import {
	FcHome,
	FcAbout,
	FcBusinessman,
	FcCollaboration,
	FcBookmark,
	FcCustomerSupport,
} from 'react-icons/fc';
import { FooterLinks } from '../Footer/Footer';

const useStyles = createStyles((theme, _params, getRef) => {
	const icon = getRef('icon');
	return {
		header: {
			paddingBottom: theme.spacing.md,
			marginBottom: theme.spacing.md * 1.5,
			borderBottom: `1px solid ${
				theme.colorScheme === 'dark'
					? theme.colors.dark[4]
					: theme.colors.gray[2]
			}`,
		},

		footer: {
			// paddingTop: theme.spacing.md,
			// marginTop: theme.spacing.md,
			position: 'absolute',
			bottom: '0',
			right: '0',
			left: '0',
		},

		link: {
			...theme.fn.focusStyles(),
			display: 'flex',
			alignItems: 'center',
			textDecoration: 'none',
			fontSize: theme.fontSizes.sm,
			color:
				theme.colorScheme === 'dark'
					? theme.colors.dark[1]
					: theme.colors.gray[7],
			padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
			borderRadius: theme.radius.sm,
			fontWeight: 500,

			'&:hover': {
				backgroundColor:
					theme.colorScheme === 'dark'
						? theme.colors.dark[6]
						: theme.colors.gray[0],
				color: theme.colorScheme === 'dark' ? theme.white : theme.black,

				[`& .${icon}`]: {
					color: theme.colorScheme === 'dark' ? theme.white : theme.black,
				},
			},
		},

		linkIcon: {
			ref: icon,
			color:
				theme.colorScheme === 'dark'
					? theme.colors.dark[2]
					: theme.colors.gray[6],
			marginRight: theme.spacing.sm,
		},

		linkActive: {
			'&, &:hover': {
				backgroundColor: theme.fn.variant({
					variant: 'light',
					color: theme.primaryColor,
				}).background,
				color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
					.color,
				[`& .${icon}`]: {
					color: theme.fn.variant({
						variant: 'light',
						color: theme.primaryColor,
					}).color,
				},
			},
		},
	};
});

const data = [
	{ label: 'Home', link: '/', icon: FcHome },
	{ label: 'About', link: '/About', icon: FcAbout },
	{ label: 'User Profile', link: '/me', icon: FcBusinessman },
	{ label: 'Group', link: '/Groups', icon: FcCollaboration },
	{ label: 'Blog', link: '/Blog', icon: FcBookmark },
	{ label: 'Contact-us', link: '/Contact', icon: FcCustomerSupport },
];

export function NavbarSimple() {
	const { classes, cx } = useStyles();
	const [active, setActive] = useState('Billing');

	const links = data.map((item) => (
		<a
			className={cx(classes.link, {
				[classes.linkActive]: item.label === active,
			})}
			href={item.link}
			key={item.label}
			onClick={(event) => {
				event.preventDefault();
				setActive(item.label);
			}}
		>
			<item.icon className={classes.linkIcon} />
			<span>{item.label}</span>
		</a>
	));

	return (
		<Navbar
			height={700}
			width={{ sm: 300 }}
			p="md"
			sx={{
				backgroundColor: '#171717',
			}}
		>
			<Navbar.Section grow>
				<Group className={classes.header} position="apart">
					<Text sx={{ color: '#fff', fontSize: '28px', fontWeight: 700 }}>
						DevTalk
					</Text>
				</Group>
				{links}
			</Navbar.Section>

			<Navbar.Section className={classes.footer}>
				<FooterLinks
					data={[
						{
							title: 'DevTalk',
							links: [
								{ link: '/', label: 'Home' },
								{ link: '/About', label: 'About' },
							],
						},
					]}
				/>
			</Navbar.Section>
		</Navbar>
	);
}
