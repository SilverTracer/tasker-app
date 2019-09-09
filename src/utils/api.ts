import API from './api_controller';

// Auth calls
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
);

// Tasks calls
export const tasksGetRequest = new API<{}>(
  'GET',
  `${process.env.API_URL}/api/tasks/`,
  'application/json',
  10000,
);

export const tasksPutRequest = new API<{}>(
  'PUT',
  `${process.env.API_URL}/api/tasks/`,
  'application/json',
  10000,
);

export const taskDeleteRequest = new API<{}>(
  'DELETE',
  `${process.env.API_URL}/api/tasks/{id}`,
  'application/json',
  10000,
);

export const taskCompletionToggle = new API<{}>(
  'POST',
  `${process.env.API_URL}/api/tasks/{id}`,
  'application/json',
  10000,
);
