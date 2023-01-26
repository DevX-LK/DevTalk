import { useState } from 'react';
import {
	createStyles,
	Header,
	Container,
	Group,
	Burger,
	Paper,
	Transition,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Text } from '@mantine/core';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
	root: {
		position: 'relative',
		zIndex: 1,
		backgroundColor: '#2F9834',
		borderBottomWidth: 0,
	},

	dropdown: {
		position: 'absolute',
		top: HEADER_HEIGHT,
		left: 0,
		right: 0,
		zIndex: 0,
		borderTopRightRadius: 0,
		borderTopLeftRadius: 0,
		borderTopWidth: 0,
		overflow: 'hidden',

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
		color: '#111',
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,

		'&:hover': {
			backgroundColor: 'rgba(10, 10, 10, 0.3)',
		},

		[theme.fn.smallerThan('sm')]: {
			borderRadius: 0,
			padding: theme.spacing.md,
		},
	},

	linkActive: {
		'&, &:hover': {
			backgroundColor: 'rgba(10, 10, 10, 0.6)',
			color: 'rgba(255,255,255,0.6)',
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
		<Header height={HEADER_HEIGHT} mb={60} className={classes.root}>
			<Container className={classes.header}>
				<Text sx={{ fontSize: '30px', color: '#111', fontWeight: 600 }}>
					DevTalk
				</Text>
				<Group spacing={5} className={classes.links}>
					{items}
				</Group>

				<Burger
					opened={opened}
					onClick={toggle}
					className={classes.burger}
					size="sm"
				/>

				<Transition transition="pop-top-right" duration={200} mounted={opened}>
					{(styles) => (
						<Paper className={classes.dropdown} withBorder style={styles}>
							{items}
						</Paper>
					)}
				</Transition>
			</Container>
		</Header>
	);
}
