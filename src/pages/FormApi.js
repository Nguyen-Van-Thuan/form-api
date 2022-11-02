import axios from 'axios';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';

const FormApi = () => {
  const defaultValues = {
    title: '',
    author: '',
    description: ''
  }
  const { handleSubmit, control, formState: { errors } } = useForm({ defaultValues });
  const onSubmit = data => {
    try {
      axios({
        method: 'post',
        url: 'http://localhost:3004/posts',
        data
      }).then(function (response) {
        console.log(response.data);
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='container'>
      <h1 className="mt-5 my-4 text-center">My Blogs</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup >
          <Label
            for="exampleTitle"
          >
            Title
          </Label>
          <Col>
            <Controller
              id='exampleTitle'
              name="title"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Input
                type="text"
                {...field}
              />}
            />
            {errors.title && <span>This is required.</span>}
          </Col>
        </FormGroup>
        <FormGroup>
          <Label
            for="exampleAuthor"
          >
            Author
          </Label>
          <Col>
            <Controller
              id="exampleAuthor"
              name="author"
              control={control}
              render={({ field }) => <Input
                type="text"
                {...field}
              />}
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Label
            for="exampleText"
          >
            Text Area
          </Label>
          <Col>
            <Controller
              id="exampleText"
              name="description"
              control={control}
              render={({ field }) => <Input
                type="textarea"
                {...field}
              />}
            />
          </Col>
        </FormGroup>
        <FormGroup
        >
          <Col>
            <Button>
              Submit
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  )
}

export default FormApi