import {combineReducers} from 'redux';
import {i18nReducer} from 'react-redux-i18n';
import posts from './postReducer';
import ideas from './ideaReducer';
import discussion from './discussionReducer';

export default combineReducers({
    posts,
    ideas,
    discussion,
    i18n: i18nReducer
});