import React, { useEffect, useMemo } from 'react'
import ApexChart, { Props } from 'react-apexcharts'
import { Alert, Select, Spin } from 'antd'
import { CURRENCIES, DEFAULT_CURRENCY } from 'config/currency'
import { TReduxProps } from './Container'
import { StyledContainer, StyledSpinnerContainer } from './style'

export type TComponentProps = {
} & TReduxProps

const Rates: React.FC<TComponentProps> = ({
  getChartData,
  setChartCurrency,
  error,
  fetching,
  startDate,
  endDate,
  currencyID,
  data
}) => {
  useEffect(
    () => {
      getChartData(startDate, endDate, currencyID)
    },
    [
      getChartData,
      startDate,
      endDate,
      currencyID
    ]
  )

  const chartOptions = useMemo(
    () => (
      {
        chart: {
          zoom: {
            enabled: false
          }
        },
        xaxis: {
          labels: {
            datetimeUTC: false
          },
          type: 'datetime'
        }
      }
    ),
    []
  )
  const chartSeries = useMemo(
    () => [{
      name: "Rates",
      data
    }],
    [data]
  )
  const type = 'line'

  return (
    <StyledContainer>
      {
        !!error && <Alert message={error} type="error" />
      }
      <StyledSpinnerContainer>
        {
          fetching && <Spin/>
        }
      </StyledSpinnerContainer>
      <ApexChart
        options={chartOptions}
        series={chartSeries}
        type={type}
        width={500}
        height={300}
      />
      <Select
        defaultValue={DEFAULT_CURRENCY}
        disabled={fetching}
        onChange={setChartCurrency}
        options={CURRENCIES}
        style={{ width: 120 }}
      />
    </StyledContainer>
  )
}

export default Rates