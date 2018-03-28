import React from 'react';
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import './content.less'

const { Content } = Layout

export default class Contents extends React.Component {
  render() {
    return (
      <Content className="content" id="content">

      </Content>
    );
  }
}