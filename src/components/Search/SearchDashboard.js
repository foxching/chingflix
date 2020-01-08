import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSearchMoviesTvs } from '../../actions/movieTvActions';
import Action from '../Action/Action';
import ResultsList from '../Results/ResultsList';
import Pagination from '../Pagination/Pagination';

class SearchDashboard extends Component {
	state = {
		pageNum: 1,
		searchTxt: this.props.location.state.detail
	};

	UNSAFE_componentWillMount() {
		this.loadData(this.props.location.state.slug, this.props.location.state.detail, this.state.pageNum);
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (this.props.location.state.detail !== nextProps.location.state.detail) {
			this.loadData(this.props.location.state.slug, nextProps.location.state.detail, this.state.pageNum);
			this.setState({ searchTxt: nextProps.location.state.detail });
		}
	}

	loadData = (slug, detail, pageNum) => {
		if (slug === 'search') {
			this.props.getSearchMoviesTvs(detail, pageNum);
		}
	};

	render() {
		const { queries, loading, page, totalPage, totalResults } = this.props;
		console.log(queries);
		return (
			<div>
				<main>
					<Action name="Search Results" loading={loading} />
					<ResultsList queries={queries} loading={loading} />
					<Pagination
						slug={this.props.location.state.slug}
						searchTxt={this.state.searchTxt}
						loadData={this.loadData}
						page={page}
						totalPage={totalPage}
						totalResults={totalResults}
					/>
				</main>
			</div>
		);
	}
}

const mapState = (state) => {
	return {
		queries: state.moviesTvs.queries,
		loading: state.async.loading,
		page: state.moviesTvs.page,
		totalPage: state.moviesTvs.totalPage,
		totalResults: state.moviesTvs.totalResults
	};
};

const actions = {
	getSearchMoviesTvs
};

export default connect(mapState, actions)(SearchDashboard);
