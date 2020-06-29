import { combineReducers } from "redux";
import getGalleries from './galleries';
import submissionForm from './formSubmission';
const allReducers = combineReducers({
    galleries: getGalleries,
    submissionForm
});

export default allReducers;
