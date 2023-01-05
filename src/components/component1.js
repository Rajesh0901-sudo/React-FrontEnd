import React, { Component } from 'react';
import { Table, Row, Col, Spin, Alert, Modal } from 'antd';
import { ES_TABLE_DATA } from './ESTableInfo';
import './component1.scss';

class EstimateSummary extends Component {
  constructor (props) {
    super(props);
    this.state = {
      tciID: this.props.tciID || 0,
      tableColumns: [
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description'
        }
      ],
      tableData: ES_TABLE_DATA,
      hirePayment: [],
      showSummary: false,
      showMakePayment: false,
      makePayment: {}
    }
  }

  async componentDidMount() {
        this.setState({ ...this.state, showSummary: true })
      }
 

  render() {
    const { tableColumns, tableData, showSummary, showMakePayment, makePayment } = this.state;

    return (
      <>
        <Row gutter={16}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            { showSummary ?
              <Table columns={tableColumns} dataSource={tableData} pagination={false} bordered />
              : <div className="col col-lg-12">
                <Spin tip="Loading...">
                  <Alert
                    message=" "
                    description="Please wait..."
                    type="info"
                  />
                </Spin>
              </div> }
          </Col>
        </Row>
        
        { showMakePayment ? 
            <Modal title="Make Payment"
              visible={this.state.showMakePayment}
              width="80%"
              onCancel={this.onCancelMakePayment}
              style={{ top: '10px' }}
              bodyStyle={{ maxHeight: 790, overflowY: 'auto', padding: '0.5rem' }}
              footer={null}
            >  </Modal> 
          : undefined }
      </>
    );
  }
}

export default EstimateSummary;
