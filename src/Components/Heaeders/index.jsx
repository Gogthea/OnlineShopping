import { HomeFilled,ShoppingCartOutlined } from '@ant-design/icons'
import { Menu, Badge, Drawer,Form, Table, InputNumber, Button, Input, Checkbox, Typography, message } from 'antd'
import { React,useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { getCart } from '../../API';

export default function Headers() {
    const Nav = useNavigate();
    const onMenuClick = (items)=>{
        Nav(`/${items.key}`)
    }
   
  return (
    <div className='headers' style={{display:'flex', justifyContent:'space-between', alignItems:'center',boxShadow: '1px 4px 4px #00000049'}}>
        <Menu
    className='appMenu'
    style={{padding:'20px 20px', fontSize:'18px'}}
    onClick={onMenuClick}
    mode='horizontal'
    items={[
        {
            label:<HomeFilled/>,
            key:''
        },
        {
            label:'Men',
            key:'men',
            children:[{
                label:'Men s Shirts',
                key:'mens-shirts',
            },
            {
                label:'Men s Shoes',
                key:'mens-shoes',
            },
            {
                label:'Men s Watches',
                key:'mens-watches',
            },
        ], 
        },
        {
            label:'Women',
            key:'women',
            children:[{
                label:'Women s Dresses',
                key:'womens-dresses',
            },
            {
                label:'Women s Shoes',
                key:'womens-shoes',
            },
            {
                label:'Women s Dresses',
                key:'womens-watches',
            },
            {
                label:'Women s Bags',
                key:'womens-bags',
            },
            {
                label:'Women s Jewellery',
                key:'womens-jewellery',
            },
        ]
        },
        {
            label:'Products',
            key:'products'
        },
        {
            label:'Cart',
            key:'cart'
        },
    ]}


    />
    <AppCart/>
    

    </div> 
  );
}

function AppCart(){
    const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
    const [checkoutDrawerOpen, setCheckoutDrawerOpen] = useState(false)
    const [cartitems, setCartItems] = useState([])
    useEffect(()=>{
        getCart().then(res=>{
            setCartItems(res.products)

        } ) 

    },[]);

const onConfirmOrder=(values)=>{
    setCartDrawerOpen(false)
    setCheckoutDrawerOpen(false)
    message.success('Your order has been placed successfully.')

};






    return <div>
        <Badge onClick={()=>{
            setCartDrawerOpen(true)

        }} 
        style={{margin: '0 85px 0 0'}} count={cartitems.length}>
        <ShoppingCartOutlined style={{margin: '0 90px 0 0', fontSize:'25px', cursor:'pointer'}}/>
        </Badge>
        <Drawer open={cartDrawerOpen} onClose={()=>{
            setCartDrawerOpen(false)
        }} 
        title="Your Cart"
        contentWrapperStyle={{ width: 500}}
        
        >
            <Table
            pagination={false}
            columns={[
                {
                    title:'Title',
                    dataIndex:'title',
                },
                {
                    title:'Price',
                    dataIndex:'price',
                    render:(value)=>{
                        
                        return <span>${value}</span>
                    }
                    
                },
                {
                    title:'Quantity',
                    dataIndex:'quantity',
                    render:(value, record)=>{
                           
                        return <InputNumber min={0}
                            onChange={(value)=>{
                                setCartItems(x=> x.map(cart=>{                                           
                                    if(record.id === cart.id){
                                        cart.total = cart.price * value
                                        

                                    }
                                    return cart;

                                }))

                            }}></InputNumber>
                    }
                },
                {
                    title:'Total',
                    dataIndex:'total',
                    render:(value)=>{
                        
                        return <span>${value}</span>
                    }
                },
                
            ]}
            dataSource={cartitems}
            summary={(data)=>{
                const total = data.reduce((pre, current)=>{
                    return pre+current.total
                },0)
                return <span> Total: {total}</span>
            }}
            />
            <Button onClick={()=>{
                setCheckoutDrawerOpen(true)

            }} type='primary'>Checkout Your Cart</Button>
        </Drawer>
        <Drawer open={checkoutDrawerOpen} onClose={()=>{
            setCheckoutDrawerOpen(false)
            
        }}
        title="Confirm Order"
        >
            <Form onFinish={onConfirmOrder}>
                <Form.Item
                rules={
                    [
                        {
                            required:true,
                            message:'Please enter your full name'

                        }
                    ]
                }
                label='Full Name'
                name='fullname'
                >
                    <Input placeholder='Enter your full name'/>
                </Form.Item>
                <Form.Item
                rules={[
                    {
                        required:true,
                        message:'Please enter your Email'
                    }
                ]}
                label='Email'
                name='email'
                >
                    <Input placeholder='Enter your email'/>
                </Form.Item>
                <Form.Item
                rules={[
                    {
                        required:true,
                        message:'Please Enter your Address'
                    }
                ]}
                label='Address' 
                name='address'
                >
                    <Input placeholder='Enter your Address'/>
                </Form.Item>
                <Form.Item>
                    <Checkbox type='secondary' defaultChecked >Cash On Delivary</Checkbox>
                </Form.Item>
                <Typography.Paragraph>More method Comming soon </Typography.Paragraph>

                <Button type='primary' htmlType='submit'>Confirm Order</Button>

            </Form>

        </Drawer>
        </div>

}
