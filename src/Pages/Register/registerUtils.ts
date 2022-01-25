import Input from '@components/Input';
import Select from '@components/Select';
import React from 'react';
import { GenderEnum } from 'types/commonTypes';
import {
  FieldsProps,
  IsFirstOrLastProps,
  SelectOptions,
} from 'types/customTypes';

export type RegisterInitValuesType = {
  name: string;
  gender: GenderEnum | '';
  email: string;
  password: string;
  confirmPassword: string;
  serverError?: '';
};

export const RegisterInitValues: RegisterInitValuesType = {
  name: '',
  gender: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const RegisterFields: FieldsProps<RegisterInitValuesType>[] = [
  {
    name: 'name',
    component: Input as React.ComponentType,
    placeholder: 'Name',
    validate: (value: string) => {
      if (!value) {
        return 'required...';
      }
    },
    isFirst: true,
  },
  {
    name: 'gender',
    component: Select as React.ComponentType,
    placeholder: 'Please Select Gender',
    options: [
      { value: GenderEnum.male, text: 'Male' },
      { value: GenderEnum.female, text: 'Female' },
      { value: GenderEnum.other, text: 'Other' },
    ],
    validate: (value: string) => {
      if (!value) {
        return 'required...';
      }
    },
  },
  {
    name: 'email',
    component: Input as React.ComponentType,
    type: 'email',
    autoComplete: 'email',
    placeholder: 'Email address',
    validate: (value: string) => {
      if (!value) {
        return 'required...';
      }
    },
  },
  {
    name: 'password',
    component: Input as React.ComponentType,
    type: 'password',
    autoComplete: 'new-password',
    placeholder: 'Password',
    validate: (value: string) => {
      password = value;
      if (!value) {
        return 'required...';
      }
      if (confirmPassword && value !== confirmPassword) {
        return 'password and confirm password do not match';
      }
    },
  },
  {
    name: 'confirmPassword',
    component: Input,
    type: 'password',
    autoComplete: 'new-password',
    placeholder: 'Confirm Password',
    validate: (value: string) => {
      confirmPassword = value;
      if (!value) {
        return 'required...';
      }
      if (value !== password) {
        return 'password and confirm password do not match';
      }
    },
    isLast: true,
  },
];
