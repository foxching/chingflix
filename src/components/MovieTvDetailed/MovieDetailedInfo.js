import React from 'react';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
//import { thousandSeparator } from '../../utils/helper';

const MovieDetailedInfo = ({ movie }) => {
	let date = moment(`${movie.release_date}`).format('YYYY');
	console.log(movie);
	return (
		<React.Fragment>
			<Grid container spacing={4}>
				<Grid item md={3}>
					<img
						src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
						width="100%"
						height="250vh"
						alt=""
					/>
				</Grid>
				<Grid item md={7}>
					<Typography variant="h4" gutterBottom>
						{movie.title}
						<Typography component="span" variant="subtitle2" color="error">
							({date})
						</Typography>
					</Typography>

					<Typography variant="subtitle1">
						<strong>Run Time:</strong>
						{movie.runtime}min
					</Typography>

					<Typography variant="subtitle1" gutterBottom>
						<strong>Genres:</strong>
						{movie.genres.map((genre) => <span> {genre.name}, </span>)}
					</Typography>

					<Typography variant="subtitle1">
						<strong>Production Companies:</strong>
						{movie.production_companies.map((company) => (
							<span style={{ color: 'red' }}> {company.name}, </span>
						))}
					</Typography>
				</Grid>
				<Grid item md={2}>
					Rating Here
				</Grid>
			</Grid>
			<Grid container spacing={4}>
				<Grid item md={6} />
				<Grid item md={6}>
					<div>
						<Button variant="contained" color="secondary" style={{ marginLeft: '30px' }}>
							Delete
							<DeleteIcon />
						</Button>
						<Button variant="contained" color="secondary" style={{ marginLeft: '30px' }}>
							Delete
							<DeleteIcon />
						</Button>
						<Button variant="contained" color="secondary" style={{ marginLeft: '30px' }}>
							Delete
							<DeleteIcon />
						</Button>
					</div>
				</Grid>
			</Grid>
			<Grid container spacing={4}>
				<Grid item>
					<Typography variant="h6" color="error">
						Storyline
					</Typography>
					<Typography variant="subtitle1">{movie.overview}</Typography>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default MovieDetailedInfo;
