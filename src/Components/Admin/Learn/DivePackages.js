import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../../actions/index';

class DivePackages extends Component {
	componentWillUnmount() {
		this.props.clearRichText();
		this.props.clearnLearnForm();
	}

	onClickHandler = (id) => {
		this.props.loadPackageData(id);
		this.props.editText({ text: id.description });
	};

	onChangeHandler = (event) => {
		this.props.newPackageFormData([event.target.name], event.target.value);
	};

	sortPackageData = () => {
		return this.props.packagesPrices.map((course) => (
			<div className="edit-form-edit-dive-packages">
				<div className="edit-form-edit-dive-package" onClick={() => this.onClickHandler(course)}>
					<div>{course.title}</div>
					<div>${course.price}</div>
				</div>
				<br />
			</div>
		));
	};

	render() {
		return (
			<div className="edit-learn-form">
				<p>You can edit existing dive packages by clicking on the package below. This will load the package data into the form to view/edit.</p>
				<this.sortPackageData />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	packagesPrices: state.learningPackages.packages,
	description: state.richText.text,
	title: state.createNewPackage.title,
	price: state.createNewPackage.price,
	link: state.createNewPackage.link,
	linkText: state.createNewPackage.linkText,
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DivePackages);
