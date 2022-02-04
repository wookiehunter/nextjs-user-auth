import styles from '../styles/Header.module.css';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Header() {
	const { data: session, status } = useSession();
	const loading = status === 'loading';

	return (
		<header id='header' className={styles.header}>
			<noscript>
				<style>{`.nojs-show {opacity: 1; top: 0; }`}</style>
			</noscript>
			<div className={styles.signedInStatus}>
				<p
					className={`nojs-show ${
						!session && loading ? styles.loading : styles.loaded
					}`}
				>
					{!session && (
						<>
							<p className={styles.notSignedInText}>
								You are not signed in -{' '}
								<span>
									<a
										href={`/api/auth/signin`}
										className={styles.buttonPrimary}
										onClick={(e) => {
											e.preventDefault();
											signIn();
										}}
									>
										Sign in
									</a>
								</span>
							</p>
						</>
					)}
					{session && (
						<>
							{session.user.image && (
								<span
									style={{ backgroundImage: `url('${session.user.image}')` }}
									className={styles.avatar}
								/>
							)}
							<span className={styles.signedInText}>
								<small>Signed in as</small>
								<br />
								<strong>{session.user.email || session.user.name}</strong>
							</span>
							<a
								href={`/api/auth/signout`}
								className={styles.button}
								onClick={(e) => {
									e.preventDefault();
									signOut();
								}}
							>
								Sign out
							</a>
						</>
					)}
				</p>
			</div>
			<nav>
				<ul className={styles.nav}>
					<li>
						<Link href='/'>Home</Link>
					</li>
					<li>
						<Link href='/protected'>Protected</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
