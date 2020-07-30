import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import Pages from './Components/Pages/Pages';
import Footer from './Components/Footer/Footer';
import Spinner from 'react-spinner-material';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './actions/index';
import axios from 'axios';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-173376472-1');

class App extends Component {
	componentDidMount() {
		axios({
			method: 'get',
			url: `${this.props.serverAPI}/learning`,
		}).then((response) => {
			this.props.updateLearningPackageData(response.data);
		});
	}

	spinner = () => {
		const { spinnerState } = this.props;
		return (
			<div
				style={{
					display: spinnerState.display,
					width: '100vw',
					height: '100vh',
					zIndex: '300',
					position: 'absolute',
					background: 'rgba(0, 0, 0, 0.2)',
				}}
			>
				<div
					style={{
						color: 'white',
						width: '200px',
						height: '200px',
						margin: '20% auto',
					}}
				>
					<div style={{ textAlign: 'center' }}>
						<b>Loading</b>
					</div>
					<div
						style={{
							width: '100px',
							height: '100px',
							margin: '20% auto',
						}}
					>
						<Spinner size={120} stroke={6} color={'rgb(157, 195, 236)'} radius={100} spinnerwidth={10} visible={true} />
					</div>
				</div>
			</div>
		);
	};

	render() {
		return (
			<BrowserRouter>
				<this.spinner />
				<div className="App">
					<div className="head">
						<Header history={this.props.history} />
					</div>
					<div className="pages">
						<Pages />
					</div>
					<div className="footer">
						<Footer />
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

const mapStateToProps = (state) => ({
	spinnerState: state.spinner,
	serverURL: state.Config.url,
	serverAPI: state.Config.api,
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
