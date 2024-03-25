/**
 * @description This file contains all the endpoint constants
 */

export const ENDPOINT = {
  // Auth
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  LOGOUT: '/auth/logout',
  // User
  GET_USER: '/user',
  UPDATE_USER: '/user',
  DELETE_USER: '/user',
  // Post
  GET_POSTS: '/post',
  GET_POST: '/post/:id',
  CREATE_POST: '/post',
  UPDATE_POST: '/post/:id',
  DELETE_POST: '/post/:id',
  // Comment
  GET_COMMENTS: '/comment',
  GET_COMMENT: '/comment/:id',
  CREATE_COMMENT: '/comment',
  UPDATE_COMMENT: '/comment/:id',
  DELETE_COMMENT: '/comment/:id',
};