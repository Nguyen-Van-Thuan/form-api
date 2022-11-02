import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row } from 'reactstrap'

const BlogContent = () => {
  const [listPost, setListPost] = useState()

  useEffect(() => {
    try {
      axios({
        method: 'get',
        url: 'http://localhost:3004/posts',
      }).then(function (response) {
        setListPost(response.data)
      })
    } catch (error) {
      console.log(error);
    }
  }, [])
  console.log(listPost, "listPost");

  return (
    <div className='container mt-5'>
      <Row>
        {listPost && listPost.map((item, index) => {
          return (
            <Col key={index} className="my-4">
              <Card
                style={{
                  width: '18rem'
                }}
              >
                <img
                  alt="Sample"
                  src="https://picsum.photos/300/200"
                />
                <CardBody>
                  <CardTitle tag="h5">
                    {item.title}
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 mt-2 text-muted"
                    tag="h6"
                  >
                    {item.author}
                  </CardSubtitle>
                  <CardText>
                    {item.description}
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          )
        })}

      </Row>
    </div>
  )
}

export default BlogContent