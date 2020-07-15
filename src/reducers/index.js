import { combineReducers } from "redux";
import getGalleries from "./galleries";
import submissionForm from "./formSubmission";
import learningPackages, { createNewPackage } from "./learn";
import adminPanel from "./admin";
import richText from "./richText";
import userInfo from "./user";
import Config from "./config";
import gallery_uploader from "./gallery_uploader";
import spinner from "./spinner";

const allReducers = combineReducers({
  galleries: getGalleries,
  submissionForm,
  learningPackages,
  adminPanel,
  richText,
  createNewPackage,
  userInfo,
  Config,
  gallery_uploader,
  spinner,
});

export default allReducers;
