import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

// custom hook that binds our action creators to dispatch
export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
  // e.g., { searchRepositories: dispatch(searchRepositories) }
};
