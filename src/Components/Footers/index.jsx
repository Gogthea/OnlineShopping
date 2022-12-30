import React from 'react';
import {Row, Col, Space} from 'antd'
import {Typography} from 'antd';

export default function Footers() {
  return (
    <Row>
            
        <Col span={24} style={{backgroundColor:'red', padding:'100px 0 100px 170px'}}>
              <Row>
                <Col span={6}>
                <Typography.Link style={{fontSize:'20px', color:'white'}} href="https://www.google.com" >Privacy Policy</Typography.Link>

                </Col>
                <Col span={6}>
                <Typography.Link style={{fontSize:'20px', color:'white'}} href="https://www.google.com" target={'_blank'}>Terms & Conditions</Typography.Link>
                  
                </Col>
                <Col span={6}>
                <Typography.Link style={{fontSize:'20px', color:'white'}} href="https://www.google.com" target={'_blank'}>Return policy</Typography.Link>
                  
                </Col>
                <Col span={6}>
                <Typography.Link style={{fontSize:'20px', color:'white'}} href="tel:+042894789234" target={'_blank'}>+042894789234</Typography.Link>
                  
                </Col>
              </Row>        
                
        </Col>
           
    </Row>
  )
}
