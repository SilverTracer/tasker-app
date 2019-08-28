import API from './api_controller';

export const signUpRequest = new API<{}>(
  'POST',
  `${process.env.API_URL}/auth/signup`,
  'application/json',
  10000,
);

export const signInRequest = new API<{}>(
  'POST',
  `${process.env.API_URL}/auth/signin`,
  'application/json',
  10000,
)
