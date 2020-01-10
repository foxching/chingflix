import React from 'react';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShareIcon from '@material-ui/icons/Share';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { thousandSeparator } from '../../utils/helper';

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
						height="300vh"
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
						<span style={{ color: 'red' }}>{movie.runtime}mins</span>
					</Typography>

					<Typography variant="subtitle1">
						<strong>Budget:</strong>
						<span style={{ color: 'red' }}>${thousandSeparator(movie.budget)}</span>
					</Typography>

					<Typography variant="subtitle1">
						<strong>Revenue:</strong>
						<span style={{ color: 'red' }}>${thousandSeparator(movie.revenue)}</span>
					</Typography>

					<Typography variant="subtitle1" gutterBottom>
						<strong>Genres:</strong>
						{movie.genres.map((genre) => (
							<span key={genre.id} style={{ color: 'red' }}>
								{' '}
								{genre.name}
								{', '}
							</span>
						))}
					</Typography>

					<Typography variant="subtitle1">
						<strong>Production Companies:</strong>
						{movie.production_companies.map((company) => (
							<span key={company.id} style={{ color: 'red' }}>
								{company.name},
							</span>
						))}
					</Typography>
				</Grid>
				<Grid item md={2}>
					<Typography variant="h3">
						<span style={{ color: 'red' }}>{movie.vote_average.toFixed(1)}</span>
					</Typography>
					<Typography variant="overline">{movie.vote_count} votes</Typography>
				</Grid>
			</Grid>
			<Grid container spacing={4}>
				<Grid item md={5} />
				<Grid item md={7}>
					<div>
						<Button variant="contained" color="primary" style={{ marginLeft: '30px' }}>
							Share
							<ShareIcon />
						</Button>
						<Button variant="contained" color="secondary" style={{ marginLeft: '30px' }}>
							Trailer
							<PlayArrowIcon />
						</Button>
						<Button variant="contained" color="default" style={{ marginLeft: '30px' }}>
							Favorite
							<FavoriteIcon />
						</Button>
					</div>
				</Grid>
			</Grid>
			<Grid container spacing={4}>
				<Grid item md={12}>
					<Typography variant="h6" color="error">
						Storyline
					</Typography>
					<Typography variant="subtitle1">{movie.overview}</Typography>
				</Grid>
				<Grid item md={6}>
					<Typography variant="h6" color="error">
						Details
					</Typography>
					<Typography variant="subtitle1">
						<strong>Status:</strong>
						<span style={{ color: 'red' }}>{movie.status}</span>
					</Typography>
					<Typography variant="subtitle1">
						<strong>Release Date:</strong>
						<span style={{ color: 'red' }}>{movie.release_date}</span>
					</Typography>
					<Typography variant="subtitle1">
						<strong>Language:</strong>
						{movie.spoken_languages.map((lang) => (
							<span key={lang.name} style={{ color: 'red' }}>
								{lang.name},
							</span>
						))}
					</Typography>
				</Grid>
				<Grid item md={6}>
					<br />
					<br />
					<Typography variant="subtitle1">
						<strong>IMDb ID:</strong>
						<span style={{ color: 'red' }}>{movie.imdb_id}</span>
					</Typography>
					<Typography variant="subtitle1">
						<strong>Country:</strong>
						{movie.production_countries.map((country) => (
							<span key={country.name} style={{ color: 'red' }}>
								{country.name},
							</span>
						))}
					</Typography>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default MovieDetailedInfo;
