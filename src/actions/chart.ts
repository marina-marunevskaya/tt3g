import { TAppDispatchThunk } from 'store'
import { startFetching, stopFetching } from './common'

const MODULE_NAME = 'CHART'

export const SET_CHART_CURRENCY = `${MODULE_NAME}/SET_CHART_CURRENCY`
export const SET_CHART_DATA = `${MODULE_NAME}/SET_CHART_DATA`
export const SET_CHART_ERROR = `${MODULE_NAME}/SET_CHART_ERROR`

interface Rate {
    Cur_ID: number
    Date: string
    Cur_OfficialRate: number | null | undefined
}

const CHART_DATA_URL = 'https://www.nbrb.by/api/exrates/rates/dynamics'

export const setChartCurrency = (currencyID: number): any => async (
  dispatch: TAppDispatchThunk<{
    currencyID: number
  }>
): Promise<void> => {
  dispatch({
    type: SET_CHART_CURRENCY,
    payload: {
      currencyID
    }
  })
}

export const getChartData = (
  startDate: string,
  endDate: string,
  currencyID: number
): any => async (dispatch: TAppDispatchThunk<never>): Promise<void> => {
  dispatch(startFetching())

  fetch(
    `${CHART_DATA_URL}/${currencyID}?startdate=${startDate}&enddate=${endDate}`
  )
  .then(
    response => {
      if (response.status === 200) {
        return response.json()
      }

      throw new Error('An error occured.')
    }
  )
  .then(
    response => {
      const chartData = response.map(
        (day: Rate) => [
          (new Date(day.Date)).getTime(),
          day.Cur_OfficialRate || 0
        ]
      )

      dispatch(setChartData(chartData))
    }
  )
  .catch(
    error => dispatch(setChartError(error.message))
  )
  .finally(
    () => dispatch(stopFetching())
  )
}

export const setChartData = (data: number[][]): any => async (
  dispatch: TAppDispatchThunk<{
    data: number[][]
  }>
): Promise<void> => {
  dispatch({
    type: SET_CHART_DATA,
    payload: {
      data
    }
  })
}

export const setChartError = (error: string): any => async (
  dispatch: TAppDispatchThunk<{
    error: string
  }>
): Promise<void> => {
  dispatch({
    type: SET_CHART_ERROR,
    payload: {
      error
    }
  })
}
