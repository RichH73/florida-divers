import React, { Component } from 'react';
import TextEditor from '../../Helpers/TextEditor';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../../actions/index';
import _ from 'lodash';
import DivePackages from './DivePackages';

class LeanrForm extends Component {
	componentWillUnmount() {
		this.props.clearRichText();
		this.props.clearnLearnForm();
	}
	onChangeHandler = (event) => {
		this.props.newPackageFormData([event.target.name], event.target.value);
	};

	onSubmitHandler = (event) => {
		event.preventDefault();
		const { _id, title, price, link, linkText } = this.props.courseData;
		axios({
			method: 'post',
			url: `${this.props.serverAPI}/learn/createNewPackage`,
			data: {
				_id: _id,
				title: title,
				description: this.props.description,
				price: price,
				link: link,
				linkText: linkText,
			},
		}).then((response) => {
			if (_.isEqual(response.status, 200)) {
				this.props.clearRichText();
				this.props.clearnLearnForm();
				this.props.history.push('/learn');
			}
		});
	};

	render() {
		const { title, description, price, link, linkText } = this.props.courseData;
		return (
			<div className="edit-learn-form">
				<p>
					<b>Create a new dive package by filling out the form below.</b>
				</p>
				<p>
					<b>Title:</b> Displays the text in bold letters.
				</p>

				<p>
					<b>Description:</b> Enter the information that you would like to display about each course. Small images can also be used.
				</p>

				<p>
					<b>Price:</b> Display a dollar amount per student for the course.
				</p>

				<p>
					<b>Link:</b> This will be the full url to your PayPal account and to the exact dive package a student will be signing up for.
				</p>

				<p>
					<b>Link Text:</b> This will display as the link in your dive package. You can use any phrase you like, "Signup Here" or "Pay for this
					course" are a couple of examples.
				</p>
				<div className="edit-learn-form-element">
					<label>Title</label>
					<div className="edit-learn-form-input-field">
						<input type="text" name="title" onChange={this.onChangeHandler} value={title} />
					</div>
				</div>
				<div className="edit-learn-form-element">
					<label>Description</label>
					<div className="edit-learn-form-textarea">
						<TextEditor description={description} />
					</div>
				</div>
				<div className="edit-learn-form-element">
					<label>Price</label>
					<div className="edit-learn-form-input-field">
						<input type="text" name="price" onChange={this.onChangeHandler} value={price} />
					</div>
				</div>
				<div className="edit-learn-form-element">
					<label>Link</label>
					<div className="edit-learn-form-input-field">
						<input type="text" name="link" onChange={this.onChangeHandler} value={link} />
					</div>
				</div>
				<div className="edit-learn-form-element">
					<label>Link Text</label>
					<div className="edit-learn-form-input-field">
						<input type="text" name="linkText" onChange={this.onChangeHandler} value={linkText} />
					</div>
				</div>
				<button onClick={this.onSubmitHandler}>Submit</button>
				<div className="edit-form-edit-dive-packages">
					<DivePackages />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	packagesPrices: state.learningPackages.packages,
	courseData: state.createNewPackage,
	description: state.richText.text,
	title: state.createNewPackage.title,
	price: state.createNewPackage.price,
	link: state.createNewPackage.link,
	linkText: state.createNewPackage.linkText,
	serverURL: state.Config.url,
	serverAPI: state.Config.api,
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LeanrForm);
