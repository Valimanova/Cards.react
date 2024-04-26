import { useState } from 'react'
import data from './db.json'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'reactstrap';
import { Card, CardBody, CardTitle, CardText} from "reactstrap";

function App() {
  return (
    <>
      <div className='container-fluid'>
        <Row>
        <Col lg={12} md={12}> 
       <header className='header d-flex'>
       <div className='logo'>
          <img src="../public/Group 40.png" alt="logo" />
        </div>
        <div  className='head text-center'>
        <h1>Cards</h1>
        </div>
       </header>
        </Col>
        </Row>
        <Row>
        {data.map(item=>{
          return(
            <Col sm={12} md={item.col}  key={item.id}>
                 <Card>
      <img
        alt="Card cap"
        src={item.url}
        width="100%"
        height="150px"
      />
      <CardBody>
        <CardText>
        <CardTitle tag="h5">{item.title}</CardTitle>
        <CardText>
          <p className='txt'> {item.describtion}</p>
        </CardText>
        </CardText>
      </CardBody>
    </Card>
            </Col>
          )
        })}
        </Row>
      </div>
    </>
  )
}

export default App
