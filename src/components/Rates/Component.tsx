import React, { useEffect, useMemo } from 'react'
import ApexChart, { Props } from 'react-apexcharts'
import { TReduxProps } from './Container'
import { StyledContainer } from './style'

export type TComponentProps = {
} & TReduxProps

const Rates: React.FC<TComponentProps> = ({
  getChartData,
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
      <ApexChart
        options={chartOptions}
        series={chartSeries}
        type={type}
        width={500}
        height={300}
      />
    </StyledContainer>
  )
}

export default Rates