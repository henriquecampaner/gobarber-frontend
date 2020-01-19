import React from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';

import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('You need to enter your name'),
  email: Yup.string()
    .email('Valid email required')
    .required('You need to enter your email'),
  password: Yup.string()
    .min(6, 'At least 6 characters')
    .required('Password Required'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Your name" />
        <Input name="email" type="email" placeholder="Your e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Your secret password"
        />

        <button type="submit">Create Account</button>
        <Link to="/">Already have an account? </Link>
      </Form>
    </>
  );
}
