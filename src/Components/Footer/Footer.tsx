import {
	createStyles,
	Text,
	Container,
	ActionIcon,
	Group,
} from '@mantine/core';
import { AiFillYoutube, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';

const useStyles = createStyles((theme) => ({
	footer: {
		marginTop: 80,
		paddingTop: theme.spacing.xl * 2,
		paddingBottom: theme.spacing.xl * 2,
		backgroundColor: '#000',
		borderTop: `1px solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
		}`,
		[theme.fn.smallerThan('sm')]: {
			backgroundColor: '#171717',
		},
	},

	logo: {
		maxWidth: 200,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},

	description: {
		marginTop: theme.spacing.xs,
		textAlign: 'center',
	},

	inner: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},

	groups: {
		display: 'none',
	},

	wrapper: {
		width: 160,
	},

	link: {
		display: 'block',
		color:
			theme.colorScheme === 'dark'
				? theme.colors.dark[1]
				: theme.colors.gray[6],
		fontSize: theme.fontSizes.sm,
		paddingTop: 3,
		paddingBottom: 3,

		'&:hover': {
			textDecoration: 'underline',
		},
	},

	title: {
		fontSize: theme.fontSizes.lg,
		fontWeight: 700,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		marginBottom: theme.spacing.xs / 2,
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
	},

	afterFooter: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: theme.spacing.xl,
		paddingTop: theme.spacing.xl,
		paddingBottom: theme.spacing.xl,
		textAlign: 'center',
	},

	social: {
		marginTop: theme.spacing.xs,
	},
}));

interface FooterLinksProps {
	data: {
		title: string;
		links: { label: string; link: string }[];
	}[];
}

export function FooterLinks({ data }: FooterLinksProps) {
	const { classes } = useStyles();

	const groups = data.map((group) => {
		const links = group.links.map((link, index) => (
			<Text<'a'>
				key={index}
				className={classes.link}
				component="a"
				href={link.link}
				onClick={(event) => event.preventDefault()}
			>
				{link.label}
			</Text>
		));

		return (
			<div className={classes.wrapper} key={group.title}>
				<Text className={classes.title}>{group.title}</Text>
				{links}
			</div>
		);
	});

	return (
		<footer className={classes.footer}>
			<Container className={classes.inner}>
				<div className={classes.logo}>
					<Text sx={{ color: '#fff', fontSize: '28px', fontWeight: 700 }}>
						DevTalk
					</Text>
					<Text size="xs" color="dimmed" className={classes.description}>
						A Sri Lankan community for developers
					</Text>
				</div>
				<div className={classes.groups}>{groups}</div>
			</Container>
			<Container className={classes.afterFooter}>
				<Text color="dimmed" size="sm">
					© 2023 devtalk.lk All rights reserved.
				</Text>

				<Group spacing={0} className={classes.social} position="right" noWrap>
					<ActionIcon
						size="lg"
						onClick={() =>
							window.open('https://www.youtube.com/@devxlk', '_blank')
						}
					>
						<AiFillYoutube size={18} />
					</ActionIcon>
					<ActionIcon
						size="lg"
						onClick={() =>
							window.open(
								'https://www.linkedin.com/in/oshadhashiro404/',
								'_blank',
							)
						}
					>
						<AiFillLinkedin size={18} />
					</ActionIcon>
					<ActionIcon
						size="lg"
						onClick={() =>
							window.open(
								'https://www.instagram.com/oshadhashiro404/',
								'_blank',
							)
						}
					>
						<AiFillInstagram size={18} />
					</ActionIcon>
					<ActionIcon size="lg" onClick={() => window.open('#', '_blank')}>
						<FaDiscord size={18} />
					</ActionIcon>
				</Group>
			</Container>
		</footer>
	);
}
