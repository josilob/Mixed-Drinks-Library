import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		maxWidth: '450px',
		padding: theme.spacing(2),
		margin: '0 auto',
		zIndex: '1'
	},
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1)
		}
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	},
	googleButton: {
		marginBottom: theme.spacing(2)
	}
}));
