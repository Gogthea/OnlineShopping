import React from 'react';
import {Row, Col, Space, Button} from 'antd';
import ProductBlock from '../Products/ProductBlock';

export default function Sections() {
  return (
    <Row justify="center" >

{/* 
<Col span={22} style={{ backgroundColor:'green'}}>
      
      <Space align="center" style={{height:'400px'}}>
          >
          
      </Space>

     
  </Col> */}
      
      <ProductBlock/>
        
    </Row>
  )
}
