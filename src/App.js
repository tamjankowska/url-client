import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Navbar from './components/Navbar.js'
import axios from 'axios'
import { nanoid } from 'nanoid'

export default function App() {
  const [url, setUrl] = useState('')
  const [newUrl, setNewUrl] = useState('')  
  const [prefixUrl, setPrefixUrl] = useState('')
  const [urlId, setUrlId] = useState(nanoid(10))

  // need to capture original url to be able to set redirect from shortened url to original (both stored in model: lookup model instance by nanoid)

  const createUrl = async (event) => {
    setUrl(event.target.value)
    console.log(event)
    await axios.post('/urls/create', {
      originalUrl: url 
    }).then((res) => {
      if (res.status === 200){
        setPrefixUrl('https://www.jisc.ac.uk')
        setUrlId()
        setNewUrl(prefixUrl + urlId)
        return newUrl // useEffect/setTimeOut needed to ensure url is being retrieved only after the other values have been set
      }
    }).catch((error) => {
      console.log(error)
    })}

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
          type="url"
          label="url"
          id="inputUrl"
          placeholder="Enter your url"
          // Need an on-change handler
          />
        <Button
          onClick={ createUrl }
        >
        Submit
        </Button>

        <Typography style={{ padding: 30 }}>
          { newUrl ? `https://jisc.ac.uk/${newUrl}` : 'create your shortened url...'} 
          {/* Ideally the ternary above would only contain the url without the hardcoded prefix */}
        </Typography>
      </Box>
    </>
  )
}