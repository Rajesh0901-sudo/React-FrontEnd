import React from 'react';
import { Table, Input, Row, Col, Button, Tabs, Form, DatePicker, Menu, Dropdown, Icon, Popconfirm, Checkbox } from 'antd';
import {result1Data} from '../../Data/result1Data.js';

const getData = ()=>{
  result1Data.map((data,i)=>{
      return data;
    })
}

class ResultDiv extends React.Component{

  render(){
    return(

      <div className='result1Div'>
        <div className='container'>
          <div className='row'>{
              result1Data.map((data,i)=>{
                return (
                  <div key={data.label}className='col'>
                    {data.label}
                  </div>
                )
              })          
            }
          </div>
        </div>


      </div>
      
    )
  }

}

export default ResultDiv;
