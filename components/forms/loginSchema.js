import * as yup from 'yup';

export const Schema = yup
  .object({
    email: yup
      .string()
      .required('Email is required')
      .matches(/^\S/, 'First character cannot be space ')
      .email('Please enter a valid email'),

    password: yup
      .string()
      .required('Password is required')
      .matches(/^\S/, 'First character cannot be space ')
      .min(8, 'Seems a bit short...')
      .max(16, 'Should not exceed more than 16 characters'),
  })
  .required();
