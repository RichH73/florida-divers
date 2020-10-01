import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../../actions';
import _ from 'lodash';

class Reviews extends Component {
	render() {
		const { loggedUser } = this.props;
		return (
			<div style={{ float: 'right' }}>
				<div className="reviews-body">
					{this.props.siteReviews.map((review) => (
						<div style={{ marginTop: '1em' }}>
							<div>
								{review.firstName}, {review.lastName}
							</div>
							<div>{review.review}</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	siteURL: state.Config.url,
	siteAPI: state.Config.api,
	siteReviews: state.reviews.siteReviews,
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
