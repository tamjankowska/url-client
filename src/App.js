import React from 'react'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Navbar from './components/Navbar.js'

export default function App() {
  return (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <Navbar />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <TextField
          style={{ padding: 20 }}
          margin="dense"
          variant="outlined"
          id="inputUrl"
          placeholder="Enter your url"
          />

        <Typography style={{ padding: 30 }}>
          Your shortened url...
        </Typography>
      </Box>
    </>
  )
}