import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import routeHistory from 'route-history'

import chartReducer from 'reducers/chart'
import commonReducer from 'reducers/common'
import { IAppState } from './models'

const rootReducer = combineReducers<IAppState>({
  router: connectRouter(routeHistory),
  common: commonReducer,
  chart: chartReducer,
})

export default rootReducer
