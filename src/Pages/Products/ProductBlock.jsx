import React, { useEffect, useState } from 'react';
import {Row, Col, Space, List, Card, Badge, Image, Typography, Rate, Button, message, Spin, Select} from 'antd';
import { addToCart, getAllProduct, getProductByCategory } from '../../API';
import { useParams } from 'react-router-dom';

export default function ProductBlock() {
    const [loading, setLoading] = useState(false)
    const param = useParams() 
    const [sortorder, setSortorder] = useState('az')
    const [product, setProduct] = useState([])
    useEffect(()=>{
        setLoading(true);
        (param?.categoryId ? 
        getProductByCategory(param.categoryId)
         :getAllProduct()).then(
            res=>{
                setProduct(res.products);
                setLoading(false)
            }
        )

    },[param]);

    const getSortedItems=()=>{
        const sortedItems = [...product]
        sortedItems.sort((a,b)=>{
            const aLowerCaseTitle = a.title.toLowerCase()
            const bLowerCaseTitle = b.title.toLowerCase()
            if(sortorder === 'az'){
                return aLowerCaseTitle > bLowerCaseTitle ? 1: aLowerCaseTitle === bLowerCaseTitle ? 0:-1
            }
            else if(sortorder === 'za'){
                return aLowerCaseTitle < bLowerCaseTitle ? 1: aLowerCaseTitle === bLowerCaseTitle ? 0:-1
            }
            else if(sortorder === 'lowhigh'){
                return a.price > b.price ? 1: a.price === b.price ? 0:-1
            }
            else if(sortorder === 'highlow'){
                return a.price > b.price ? 1: a.price === b.price ? 0:-1
            }
        });
        
        return sortedItems;
    };



    if(loading){
        return <Spin spinning/>
    }



  return (
    <Row justify='center'>
        <div className="productsContainer">
            
            <Col span={22}>
                <div>
                    <Typography.Text>View Items Sorted By:</Typography.Text>
                    <Select
                    onChange={(value)=>{
                        setSortorder(value)

                    }}
                    defaultValue={"az"}
                     options={[
                        {
                            label:'Alphabetically a-z',
                            value:'az'
                        },
                        {
                            label:'Alphabetically z-a',
                            value:'za'
                        },
                        {
                            label:'Price Low to High',
                            value:'lowhigh'
                        },
                        {
                            label:'Price High to Low',
                            value:'highlow'
                        },

                    ]}></Select>
                </div>
                <List
                grid={{column:3}}
                renderItem={(productitem, index)=> {
                    return <Badge.Ribbon text={`${productitem.discountPercentage}%off`} color='pink'>
                        
                     <Card actions={[
                        <Rate allowHalf disabled value={productitem.rating}/>,
                        <AddToCartButton item={productitem}/> 

                    ]} 
                    title={productitem.title}
                    style={{margin:'20px', border:'none'}}
                    key={index}
                    cover={<Image style={{height:'150px', objectFit:'scale-down'}} src={productitem.thumbnail}/>}>

                        <Card.Meta
                        title={<Typography.Paragraph>
                            Price:$ {productitem.price}{" "}
                            <Typography.Text>
                                ${parseFloat(productitem.price + productitem.discountPercentage/100).toFixed(2)}
                            </Typography.Text>
                            <Typography.Text>
                                <Typography.Paragraph  ellipsis={{row:2, expandable:true, symbol: 'more'}}>{productitem.description}</Typography.Paragraph>
                            </Typography.Text>
                        </Typography.Paragraph>}
                        >

                        </Card.Meta>
                        
                    </Card>
                    </Badge.Ribbon>         
                }}


                dataSource={getSortedItems()}
                >
                </List>
            
        </Col>
            
        
        </div>
   

    </Row>
  )
}

function AddToCartButton({item}){
    const addProductToCart=()=>{
        addToCart(item.id).then(res=>{
            message.success(`${item.title} has been added to a cart`)
        })
    }

    return <Button type='link' onClick={()=>{
        addProductToCart();
    }}>
        Add to Cart
    </Button>
    

}
