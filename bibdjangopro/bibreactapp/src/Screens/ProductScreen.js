import React , {useEffect,useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
import Rating from '../Components/Rating'
import products from '../products'
import axios from 'axios'

function ProductScreen() {
  const [prod , setProduct]=useState([])
  useEffect(()=> {
      async function fetchProduct(){

        const { data } = await axios.get(`http://localhost:8000/api/products/${params.id}`)
        setProduct(data)
      }
      fetchProduct()


  }, [])





   const params = useParams()
   const product= products.find(p => p._id === params.id)
    
   return (
    <div>
        <Link to='/' className='btn btn-light my-3'>GO BACK </Link>
        <Row>
            <Col md={6}>
                <Image src={product.image} fluid />
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>


                    <ListGroup.Item>
                      <Rating value ={product.rating} text={`${product.numReviews}`} color={'#f8e825'}/>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        Price:DHS {product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        description: {product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                <ListGroup.Item>
                   <Row>
                      <Col>Price:</Col>
                    <Col>
                        <strong>DHS{product.price}</strong>
                    </Col>
                   </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                   <Row>
                      <Col>Status:</Col>
                    <Col>
                    {product.countInStock>0 ? 'In STOCK' : 'Out Of Stock'}
                    </Col>
                   </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Button className='btn-block' type='botton' >
                     Add TO CART 
                    </Button>
                </ListGroup.Item>
                </ListGroup>
              </Card>
              
            </Col>
        </Row>
    </div>
  )
}

export default ProductScreen
