import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { Grid } from '@mantine/core';

export default function Home() {
	return (
		<Grid>
			<Grid.Col
				span={'auto'}
				sx={{
					backgroundColor: '#171717',
					minHeight: 600,
					borderRadius: '10px',
				}}
				m="lg"
			>
				Posts
			</Grid.Col>
			<Grid.Col
				span={2}
				sx={{
					backgroundColor: '#171717',
					minHeight: 600,
					borderRadius: '10px',
				}}
				m="lg"
			>
				Menu
			</Grid.Col>
		</Grid>
	);
}
