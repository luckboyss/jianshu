import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set('focused', true);// 会返回一个全新的对象
    case constants.SEARCH_BLUR:
      return state.set('focused', false);
    default:
      return state;
  }
}