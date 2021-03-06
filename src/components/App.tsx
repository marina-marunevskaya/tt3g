import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import routeHistory from 'route-history'
import { Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'
import styled from 'styled-components'

import NotFound from './NotFound'
import Rates from './Rates'
import Header from './Header'

import "antd/dist/antd.css"

const { Content } = Layout

function App() {
  return (
    <ConnectedRouter history={routeHistory}>
      <Layout style={{ minHeight: '100%' }}>
        <Header>Rates</Header>
        <Layout>
          <Content>
            <Switch>
              <Route exact path="/" component={Rates} />
              <Route component={NotFound} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </ConnectedRouter>
  )
}

export default styled(App)`
    background:#001529;
  .ant-layout-header{
    height:60px;
    background:#001529;
    display:flex;
    align-items:center;
  }
`
