import { combineReducers } from "redux";
import getGalleries from './galleries';
import submissionForm from './formSubmission';
import learningPackages from './learn';
import adminPanel from './admin'
import richText from './richText';

const allReducers = combineReducers({
    galleries: getGalleries,
    submissionForm,
    learningPackages,
    adminPanel,
    richText
});

export default allReducers;
