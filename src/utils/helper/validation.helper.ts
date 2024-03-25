// This file contains all the validation rules for the application

/**
 * This object contains all the regex rules for validation
 */
export const REGEX = {
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
  PHONE: /^\d{10}$/,
  NAME: /^[a-zA-Z ]{2,}$/,
  NUMBER: /^[0-9]*$/,
  URL: /^(http|https):\/\/[^ "]+$/
}

/**
 * This object contains all the maximum length allowed for each field
 */
export const MAX_LENGTH = {
  DEFAULT: 255,
  NAME: 50,
  EMAIL: 50,
  PASSWORD: 50,
  PHONE: 10,
  NUMBER: 10,
  URL: 200
}

/**
 * This object contains all the minimu length allowed for each field
 */
export const MIN_LENGTH = {
  NAME: 2,
  EMAIL: 2,
  PASSWORD: 8,
  PHONE: 10,
  NUMBER: 1,
  URL: 10
}

/**
 * This object contains all the error message of each field
 */
export const MESSAGES = {
  DEFAULT: {
    REQUIRED: 'This field is required',
    INVALID: 'This field is invalid',
    MAX_LENGTH: `You can not enter more than ${MAX_LENGTH.DEFAULT} characters`,
  },
  EMAIL: {
    REQUIRED: 'Email is required',
    INVALID: 'Invalid email',
    MAX_LENGTH: `You can not enter more than ${MAX_LENGTH.EMAIL} characters`,
  },
}

// <!-- Array Validation Rules -->

// Validate if the array is empty
export const isArray = (value: any[]) => {
  return Array.isArray(value)
}

// check if the array has minimum length
export const isArrayMinLength = (value: any[], min: number) => {
  return value.length >= min ? undefined : `Minimum ${min} items required`;
}

// check if the array has maximum length
export const isArrayMaxLength = (value: any[], max: number) => {
  return value.length <= max ? undefined : `Maximum ${max} items allowed`;
}

// check if the array has minimum and maximum length
export const isArrayLength = (value: any[], min: number, max: number) => {
  return value.length >= min && value.length <= max ? undefined : `Minimum ${min} and Maximum ${max} items allowed`;
}

// check if the array is empty or not
export const isEmptyArray = (value: any[]) => {
  return value.length === 0;
}

// <!-- Object Validation Rules -->

// check if the object has minimum length
export const isObjectMinLength = (value: any, min: number) => {
  return Object.keys(value).length >= min ? undefined : `Minimum ${min} items required`;
}

// check if the object has maximum length
export const isObjectMaxLength = (value: any, max: number) => {
  return Object.keys(value).length <= max ? undefined : `Maximum ${max} items allowed`;
}

// check if the object has minimum and maximum length
export const isObjectLength = (value: any, min: number, max: number) => {
  return Object.keys(value).length >= min && Object.keys(value).length <= max ? undefined : `Minimum ${min} and Maximum ${max} items allowed`;
}

// check if the object is empty or not
export const isEmptyObject = (value: any) => {
  return Object.keys(value).length === 0;
}
