import React from 'react'
import {Row, Col, Space, Carousel, Image} from 'antd';


export default function Slider() {
  return (
    <Row justify='center'>
        <Col span={22} className='Sliders'>
            {/* <Space align='center' style={{height:'400px',}}> */}
                <Carousel 
                autoplay 
                dots='false'
                pauseOnHover={true}
                pauseOnDotsHover={true}
                >
                  <div className='sliderImage'>
                  <Image
                  
                      width={700}
                      height={620}
                      src="https://th.bing.com/th/id/OIP.r-cfWBrAmvB_fliHGNNN1gHaHa?pid=ImgDet&rs=1"
                    />
                  </div>
                  <div className='sliderImage'>
                  <Image
                  
                      width={700}
                      height={620}
                      src="https://th.bing.com/th/id/OIP.aBe_7TgdT1B1z0ro7pLt_AHaJJ?pid=ImgDet&rs=1"
                    />
                  </div>
                  <div className='sliderImage'>
                  <Image
                  
                      width={700}
                      height={620}
                      src="https://i5.walmartimages.com/asr/fc10d2a9-df88-4203-9fb6-f25705b5fe71.1f6a5b23591bc6e2d7cbe27c06ee5173.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff"
                    />
                  </div>
                 
                </Carousel>
            {/* </Space> */}
        </Col>

    </Row>
  )
}
