import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Container, Form, Button } from "react-bootstrap";
import {useDispatch} from 'react-redux';
import {registerUser} from '../../action'
import "./register.css";
function Register() {

  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      tel : "",
      address: "",
    },
  });
  const onSubmit = (data) => {dispatch(registerUser())};
  return (
    <main>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
        {errors.firstName && <span style={{color : 'red'}}>*</span>}
            <Controller
              name="firstName"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Form.Control className="mb-3"
                  {...field}
                  type="text"
                  placeholder="نام"
                />
              )}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          {errors.lastName && <span style={{color : 'red'}}>*</span>}
            <Controller
              name="lastName"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Form.Control className="mb-3"
                  {...field}
                  type="text"
                  placeholder="نام خانوادگی"
                />
              )}
            />
          </Form.Group>
          <Form.Group className="mb-3">
          {errors.address && <span style={{color : 'red'}}>*</span>}
            <Controller
              name="address"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Form.Control className="mb-3"
                  {...field}
                  type="text"
                  placeholder="آدرس"
                />
              )}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          {errors.tel && <span style={{color : 'red'}}>*</span>}
            <Controller
              name="tel"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Form.Control className="mb-3"
                  {...field}
                  type="text"
                  placeholder="شماره تلفن"
                />
              )}
            />
          </Form.Group>
          <Form.Group className="mb-3">
          {errors.email && <span style={{color : 'red'}}>*</span>}
            <Controller
              name="email"
              control={control}
              rules={{pattern: /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/i}}
              render={({ field }) => (
                <Form.Control className="mb-3"
                  {...field}
                  type="email"
                  placeholder="example@example.com"
                />
              )}
            />
          </Form.Group>
          <Button type="submite" className="bg-orange">ثبت نام</Button>
        </Form>
      </Container>
    </main>
  );
}

export default Register;
