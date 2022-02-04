import { FormGroup, FormControlLabel, Switch } from '@mui/material';
import { Icon } from '@mui/material';
import Brightness6OutlinedIcon from '@mui/icons-material/Brightness6Outlined';
import styles from '../styles/Header.module.css';
import Link from 'next/link';

export default function Header() {
	return (
		<div id='header' className={styles.header}>
			{/* <FormGroup>
				<FormControlLabel
					control={<Switch color='success' defaultChecked />}
					label='Light/Dark'
				/>
			</FormGroup> */}
			<ul className={styles.nav}>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='api/auth/signin'>Login</Link>
				</li>
                <li>
					<Link href='/signup'>Register</Link>
				</li>
			</ul>
		</div>
	);
}
