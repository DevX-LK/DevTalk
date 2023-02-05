import { useState } from 'react';
import {
	createStyles,
	Header,
	Container,
	Group,
	Burger,
	Paper,
	Transition,
	Text,
	Button,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { NavbarSimple } from '../Navbar/Navbar';
import { toast } from 'react-toastify';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
	root: {
		position: 'relative',
		zIndex: 1,
		backgroundColor: '#171717',
		borderBlockWidth: '0',
	},

	dropdown: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: '4rem',
		zIndex: 0,
		height: '100vh',
		borderTopRightRadius: 0,
		borderTopLeftRadius: 0,
		borderTopWidth: 0,
		overflow: 'hidden',
		background: '#171717',

		[theme.fn.largerThan('sm')]: {
			display: 'none',
		},
	},

	header: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '100%',
	},

	links: {
		[theme.fn.smallerThan('sm')]: {
			display: 'none',
		},
	},

	burger: {
		[theme.fn.largerThan('sm')]: {
			display: 'none',
		},
	},

	link: {
		display: 'block',
		lineHeight: 1,
		padding: '8px 12px',
		borderRadius: theme.radius.sm,
		textDecoration: 'none',
		color: theme.colors.dark[0],
		fontSize: '12px',
		fontWeight: 500,

		'&:hover': {
			backgroundColor: 'rgba(23, 90, 145, 0.3)',
		},

		[theme.fn.smallerThan('sm')]: {
			color: '#111',
			borderRadius: 0,
			padding: theme.spacing.md,
		},
	},

	linkActive: {
		'&, &:hover': {
			backgroundColor: 'rgba(23, 90, 145, 0.5)',
			color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
				.color,
		},
	},
	registerBtn: {
		'&:hover': {
			background: 'rgb(23, 90, 170)',
			borderColor: 'rgb(23, 90, 170)',
			color: '#fff',
		},
	},
}));

interface HeaderResponsiveProps {
	links: { link: string; label: string }[];
}

export function HeaderBar({ links }: HeaderResponsiveProps) {
	const [opened, { toggle, close }] = useDisclosure(false);
	const [active, setActive] = useState(links[0].link);
	const { classes, cx } = useStyles();

	const items = links.map((link) => (
		<a
			key={link.label}
			href={link.link}
			className={cx(classes.link, {
				[classes.linkActive]: active === link.link,
			})}
			onClick={(event) => {
				event.preventDefault();
				setActive(link.link);
				close();
			}}
		>
			{link.label}
		</a>
	));

	return (
		<Header height={HEADER_HEIGHT} mb={35} className={classes.root}>
			<Container className={classes.header}>
				<Text sx={{ color: '#fff', fontSize: '28px', fontWeight: 700 }}>
					DevTalk
				</Text>
				<Group spacing={5} className={classes.links}>
					{localStorage.getItem('user') ? (
						<Button
							variant="outline"
							onClick={() => {
								if (typeof window !== 'undefined') {
									localStorage.removeItem('user');
								}
								toast.success('Logged out!', {
									position: 'bottom-right',
									autoClose: 5000,
									hideProgressBar: false,
									closeOnClick: true,
									pauseOnHover: true,
									draggable: true,
									progress: undefined,
									theme: 'dark',
								});
							}}
						>
							Logout
						</Button>
					) : (
						<>
							<Link href={'/Register'}>
								<Button variant="outline" className={classes.registerBtn}>
									Login
								</Button>
							</Link>
							<Link href={'/Register'}>
								<Button variant="outline" className={classes.registerBtn}>
									Register
								</Button>
							</Link>
						</>
					)}
				</Group>

				<Burger
					opened={opened}
					onClick={toggle}
					className={classes.burger}
					size="sm"
					color="#fff"
				/>

				<Transition transition="pop-top-left" duration={200} mounted={opened}>
					{(styles) => (
						<Paper className={classes.dropdown} style={styles}>
							<NavbarSimple />
						</Paper>
					)}
				</Transition>
			</Container>
		</Header>
	);
}
