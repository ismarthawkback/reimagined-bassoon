import { Paper, Stack, useMediaQuery, Divider } from '@mui/material'
import React from 'react'
import LoginInfo from '../components/LoginPage-components/LoginInfo'
import LoginForm from '../components/LoginPage-components/LoginForm'

export default function LoginPage() {
  const isMobile = useMediaQuery('(max-width: 860px)')
  return (
    <div>
      <Paper
        elevation={2}
        sx={{
          flex: 1,
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <Stack
          direction={isMobile ? "column-reverse" : "row"}
          sx={{
            alignItems: "center",
          }}
        >
          <LoginInfo />
          <Divider orientation="vertical" variant="middle" flexItem  />
          <LoginForm />
        </Stack>
      </Paper>
    </div>
  );
}
