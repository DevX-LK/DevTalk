import { Button, createStyles, Input, TextInput } from '@mantine/core';
import { useForm } from 'react-hook-form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '@/firebase.config';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const auth = getAuth(app);

const useStyles = createStyles({
	input: {
		margin: ' 0 0 20px 0',
	},
	form: {
		padding: '1rem',
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
	},
	inputLabel: {
		fontSize: '15px',
	},
	error: {
		color: 'red',
		fontSize: '12px',
		alignSelf: 'center',
		opacity: '0.7',
		animation: 'fadeIn 1s',
		'@keyframes fadeIn': {
			from: { opacity: 0, transform: 'translate3d(0, -20%, 0)' },
			to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
		},
	},
});

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const router = useRouter();
	const { classes, cx } = useStyles();

	return (
		<form
			onSubmit={handleSubmit((data: any) => {
				signInWithEmailAndPassword(auth, data.email, data.password)
					.then((userCredentials) => {
						typeof window !== 'undefined' &&
							localStorage.setItem(
								'user',
								JSON.stringify(userCredentials.user),
							);
						typeof window !== 'undefined' &&
							localStorage.setItem(
								'current_user_id',
								JSON.stringify(userCredentials.user.uid),
							);
						toast.success('Logged In!', {
							position: 'bottom-right',
							autoClose: 5000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
							theme: 'dark',
						});
						router.push('/');
					})
					.catch((error) => {
						console.log(error);
						toast.error('Invalid credentials!');
					});
			})}
			className={classes.form}
		>
			<label className={classes.inputLabel}>Email :</label>
			<Input
				{...register('email', {
					required: true,
					pattern: {
						value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
						message: 'Invalid email address',
					},
				})}
				placeholder="Email"
				className={classes.input}
			/>

			<label className={classes.inputLabel}>Password :</label>
			<Input
				type={'password'}
				{...register('password', {
					required: true,
					minLength: 6,
				})}
				placeholder="Password"
				className={classes.input}
			/>

			{errors.email && errors.email.type == 'required' && (
				<span role={'alert'} className={classes.error}>
					Email is required!
				</span>
			)}
			{errors.email?.message && (
				<span role={'alert'} className={classes.error}>
					Invalid email address
				</span>
			)}
			{errors.password && errors.password.type == 'required' && (
				<span role={'alert'} className={classes.error}>
					Password is required!
				</span>
			)}
			{errors.password && errors.password.type == 'minLength' && (
				<span role={'alert'} className={classes.error}>
					Password should be at least 6 characters long
				</span>
			)}

			<Button
				type="submit"
				sx={{
					alignSelf: 'center',
					justifySelf: 'flex-end',
					marginTop: 'auto',
					marginBottom: '2rem',
				}}
			>
				Submit
			</Button>
		</form>
	);
};

export default Login;
