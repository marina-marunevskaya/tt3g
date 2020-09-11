import { AnyAction } from 'redux'
import {
    SET_CHART_CURRENCY,
    SET_CHART_DATA,
    SET_CHART_ERROR
} from 'actions/chart'
import { DEFAULT_CURRENCY } from 'config/currency'
import { calculateDate, formatDate } from 'utils/date'

const today = new Date()

const initState = {
    startDate: formatDate(today),
    endDate: formatDate(
        calculateDate(today, 6)
    ),
    currencyID: DEFAULT_CURRENCY,
    error: undefined,
    data: []
}

export interface IChartState {
    startDate: string
    endDate: string
    currencyID: number
    error?: string
    data: number[][]
}

export function chartReducer(
    state: IChartState = initState,
    {
        type,
        payload = null
    }: AnyAction
) {
    switch (type) {
        case SET_CHART_CURRENCY: {
            return {
                ...state,
                currencyID: payload.currencyID
            }
        }
        case SET_CHART_DATA: {
            return {
                ...state,
                error: undefined,
                data: payload.data
            }
        }
        case SET_CHART_ERROR: {
            return {
                ...state,
                error: payload.error
            }
        }
        default:
            return state
    }
}
