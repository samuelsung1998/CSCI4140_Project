import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from './history';

import { reducer as loginReducer } from '../../features/login/redux/slice';
import { reducer as logoutReducer } from '../../features/logout/redux/slice';
import { reducer as settingsReducer } from '../../features/settings/redux/slice';

const rootReducer = combineReducers({
  router: connectRouter(history),
  login: loginReducer,
  logout: logoutReducer,
  settings: settingsReducer,
});

// export the type of state
export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
