import React, { useState } from 'react';
import {
	Avatar,
	Paper,
	Button,
	Grid,
	Typography,
	Container
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import LockOutlineIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './Input';
import { signin, signup } from '../../actions/auth';
import './Form.css';

function Form() {
	const initialState = {
		email: '',
		username: '',
		password: '',
		confirmPassword: ''
	};
	const classes = useStyles();
	const [showPassword, setShowPassword] = useState(false);
	const [isSignup, setIsSignup] = useState();
	const [formData, setFormData] = useState(initialState);
	const history = useHistory();

	const handleShowPassword = () => {
		setShowPassword((prevShowPassword) => !prevShowPassword);
	};
	const handleSubmit = (event) => {
		event.preventDefault();

		if (isSignup) {
			signup(formData, history);
		} else {
			signin(formData, history);
		}
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const switchMode = () => {
		setIsSignup((prevIsSignup) => !prevIsSignup);
		setShowPassword(false);
	};

	return (
		<Container component='main' maxWidth='xs' className='Form'>
			<Paper className={classes.paper} elevation={3}>
				<Avatar className={classes.avatar}>
					<LockOutlineIcon />
				</Avatar>
				<Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>

				<form className={classes.form} onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						{isSignup && (
							<Input
								name='email'
								label='Email'
								handleChange={handleChange}
								autoFocus
							/>
						)}
						<Input name='username' label='Username' handleChange={handleChange} />
						<Input
							name='password'
							label='Password'
							handleChange={handleChange}
							type={showPassword ? 'text' : 'password'}
							handleShowPassword={handleShowPassword}
						/>
						{isSignup && (
							<Input
								name='confirmPassword'
								label='Repeat Password'
								handleChange={handleChange}
								type='password'
							/>
						)}
					</Grid>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						color='primary'
						className={classes.submit}>
						{isSignup ? 'Sign Up' : 'Sign In'}
					</Button>

					<Grid container justify='flex-end'>
						<Grid item>
							<Button onClick={switchMode}>
								{isSignup
									? 'Already have an account? Sign In'
									: "Don't have an account? Sign Up."}
							</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</Container>
	);
}

export default Form;
