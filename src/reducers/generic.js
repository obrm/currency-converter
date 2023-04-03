import { createReducer } from 'redux-act';
import * as a from '../actions/generic';

const getDefaultState = () => ({
  proposalEvent: undefined
});

const reducer = () =>
  createReducer(
    {
      [a.saveInstallProposalEvent]: (state, proposalEvent) => ({ ...state, proposalEvent }),
      [a.promptToAddToHomeScreen]: (state) => ({ ...state, proposalEvent: undefined })
    },
    getDefaultState()
  );

export default reducer;
