'use client';
import AuthForm from '@/components/AuthForm';
import { signInSchema } from '@/lib/validations';
import React from 'react';

const Page = () => (
  <AuthForm
    type="SIGN_IN"
    schema={signInSchema}
    defaultValues={{ email: '', password: '' }}
    onSumbit={() => {}}
  />
);
export default Page;
