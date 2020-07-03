import { combineReducers } from "redux";
import getGalleries from "./galleries";
import submissionForm from "./formSubmission";
import learningPackages, { createNewPackage } from "./learn";
import adminPanel from "./admin";
import richText from "./richText";

const allReducers = combineReducers({
  galleries: getGalleries,
  submissionForm,
  learningPackages,
  adminPanel,
  richText,
  createNewPackage,
});

export default allReducers;
