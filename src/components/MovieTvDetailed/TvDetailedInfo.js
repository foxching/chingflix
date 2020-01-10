import React from 'react';
import moment from 'moment';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ShareIcon from '@material-ui/icons/Share';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import FavoriteIcon from '@material-ui/icons/Favorite';

const TvDetailedInfo = ({ tv }) => {
	console.log(tv);
	let poster, title, date, runTime, status, noOfSeasons, genres, companies, vote_average, vote_count, overview;
	let firtstAirDate, lastAirDate;
	if (tv) {
		poster = tv.poster_path;
		title = tv.name;
		date = moment(`${tv.first_air_date}`).format('YYYY ');
		runTime = tv.episode_run_time;
		status = tv.status;
		noOfSeasons = tv.number_of_seasons;
		genres = tv.genres;
		companies = tv.production_companies;
		vote_average = tv.vote_average;
		vote_count = tv.vote_count;
		overview = tv.overview;
		firtstAirDate = tv.first_air_date;
		lastAirDate = tv.last_air_date;
	}

	return (
		<React.Fragment>
			<Grid container spacing={4}>
				<Grid item md={3}>
					<img src={`https://image.tmdb.org/t/p/w500${poster}`} width="100%" height="300vh" alt="" />
				</Grid>
				<Grid item md={7}>
					<Typography variant="h4" gutterBottom>
						{title}
						<Typography component="span" variant="subtitle2" color="error">
							({date})
						</Typography>
					</Typography>

					<Typography variant="subtitle1">
						<strong>Episode RunTime:</strong>
						{runTime &&
							runTime.map((time) => (
								<span key={time} style={{ color: 'red' }}>
									{' '}
									{time} mins,{' '}
								</span>
							))}
					</Typography>
					<Typography variant="subtitle1">
						<strong>Status:</strong>
						<span style={{ color: 'red' }}>{status}</span>
					</Typography>
					<Typography variant="subtitle1">
						<strong>No. of Seasons:</strong>
						<span style={{ color: 'red' }}>{noOfSeasons}</span>
					</Typography>
					<Typography variant="subtitle1">
						<strong>Genres:</strong>
						{genres &&
							genres.map((genre) => (
								<span key={genre.id} style={{ color: 'red' }}>
									{genre.name},
								</span>
							))}
					</Typography>
					<Typography variant="subtitle1">
						<strong>Production Companies:</strong>
						{companies &&
							companies.map((company) => (
								<span key={company.id} style={{ color: 'red' }}>
									{company.name},
								</span>
							))}
					</Typography>
				</Grid>
				<Grid item md={2}>
					<Typography variant="h3">
						<span style={{ color: 'red' }}>{vote_average}</span>
					</Typography>
					<Typography variant="overline">{vote_count} votes</Typography>
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
					<Typography variant="subtitle1">{overview}</Typography>
				</Grid>
				<Grid item md={6}>
					<Typography variant="h6" color="error">
						Details
					</Typography>
					<Typography variant="subtitle1">
						<strong>First Air Date:</strong>
						<span style={{ color: 'red' }}>{firtstAirDate}</span>
					</Typography>
					<Typography variant="subtitle1">
						<strong>Last Air Date:</strong>
						<span style={{ color: 'red' }}>{lastAirDate}</span>
					</Typography>
					<Typography variant="subtitle1">
						<strong>Language:</strong>
					</Typography>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default TvDetailedInfo;
