import { combineReducers } from "redux";
import getGalleries from './galleries';
import submissionForm from './formSubmission';
import learningPackages from './learn';



const allReducers = combineReducers({
    galleries: getGalleries,
    submissionForm,
    learningPackages
});

export default allReducers;
