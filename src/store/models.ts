import { Action } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { RouterState } from 'connected-react-router'

import { IChartState } from 'reducers/chart'
import { ICommonState } from 'reducers/common'

export interface IAction<T> extends Action<string> {
  payload?: T
}

export interface IAppState {
  router: RouterState
  common: ICommonState
  chart: IChartState
}

export type TAppActionThunk<TPayload, TReturn = void, > = ThunkAction<
  TReturn,
  IAppState,
  unknown,
  IAction<TPayload>
>

export type TAppDispatchThunk<TPayload> = ThunkDispatch<
  IAppState,
  unknown,
  IAction<TPayload>
>
