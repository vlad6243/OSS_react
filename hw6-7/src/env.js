const { PUBLIC_URL = '', REACT_APP_PRE_EXPANDED_LESSONS = '' } = process.env;

let PRE_EXPANDED_LESSONS = [];
try {
  PRE_EXPANDED_LESSONS = JSON.parse(REACT_APP_PRE_EXPANDED_LESSONS) || [];
} catch (e) {}

export default {
  PUBLIC_URL,
  PRE_EXPANDED_LESSONS,
};
