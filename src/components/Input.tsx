import { TextField } from '@mui/material'

const Input = () => {
  return (
    <TextField
        variant="outlined"
        margin="normal"
        inputRef={ref}
        fullWidth
        type='text'
        {...props}
    >
    </TextField>
  )
}

export default Input