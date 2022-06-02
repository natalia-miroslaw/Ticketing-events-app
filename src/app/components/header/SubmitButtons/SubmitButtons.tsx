import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../../../../routes/paths';
import { Button } from '@mui/material';

export const SubmitButtons: React.FC = () => {
  const navigate = useNavigate();
  const SignUpClickHandler = () => navigate(Paths.signUpPage);
  const LogInClickHandler = () => navigate(Paths.logInPage);

  return (
    <div>
      <Button variant={'outlined'} onClick={SignUpClickHandler}>
        Sign Up
      </Button>
      <Button onClick={LogInClickHandler}>Log In</Button>
    </div>
  );
};
