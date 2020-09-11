import { connect, ConnectedProps } from 'react-redux'

import { IAppState } from 'store'
import Component from './Component'
import {
  getChartData,
  setChartCurrency
} from 'actions/chart'

const mapStateToProps = (state: IAppState) => ({
  fetching: state.common.fetching,
  startDate: state.chart.startDate,
  endDate: state.chart.endDate,
  currencyID: state.chart.currencyID,
  error: state.chart.error,
  data: state.chart.data
})
const mapActionsToProps = (dispatch) => ({
  getChartData: (startDate, endDate, currencyID) => dispatch(
    getChartData(startDate, endDate, currencyID)
  ),
  setChartCurrency: (currencyID) => dispatch(
    setChartCurrency(currencyID)
  )
})

const connector = connect(mapStateToProps, mapActionsToProps)
export type TReduxProps = ConnectedProps<typeof connector>
export default connector(Component)