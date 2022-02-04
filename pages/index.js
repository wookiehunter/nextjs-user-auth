import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from '../components/Layout';
import Image from 'next/image';

export default function App() {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode: prefersDarkMode ? 'dark' : 'light',
				},
			}),
		[prefersDarkMode],
	);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Layout>
				<h1>NextJS Playground</h1>
				<div className='img'>
					<Image src={'/samurai-01.jpg'} width={500} height={500} />
				</div>
			</Layout>
		</ThemeProvider>
	);
}
