import axios from "axios";
import { useState } from "react";
import { Button, MenuItem, Stack, TextField } from '@mui/material';
import classes from './PostForm.module.css'

interface IState {
  jobPost: IJobPost
}

const PostForm = () => {
  const [inputValue, setInputValue] = useState<IState['jobPost']>({
    coverImage: '',
    companyLogo: '',
    companyName: '',
    title: '',
    content: '',
    contractType: 'permanent',
    localization: '',
    publishedAt: new Date().toLocaleDateString()
  });
  
  const [isDataSubmited, setIsDataSubmited] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInputValue(prevValue => {
      return ({
        ...prevValue,
        [name]: value
      })
    })
  }

  const submitHandler = (e) => {
    console.log(inputValue)
    axios.post('http://localhost:5000/jobPost', inputValue)
      .then((data) => {
  
        setInputValue({
          coverImage: '',
          companyLogo: '',
          companyName: '',
          title: '',
          content: '',
          contractType: 'permanent',
          localization: '',
          publishedAt: new Date().toLocaleDateString()
        })

        setIsDataSubmited(true);
        setTimeout(() => {
          setIsDataSubmited(false)
        }, 4000)
      })
    }

  return (
    <div>
      <h2>Ajoutez une nouvelle offre</h2>
      { isDataSubmited && (
        <div style={ { backgroundColor: '#4BB543', color: 'white' } }>
          <h3>Data successfully submited</h3>
        </div>
      )}
      <form action="/" onSubmit={ submitHandler }>
        <Stack spacing={2}>
          <TextField 
            label="Cover Image"
            placeholder="Image Link (URL)"
            type="url"
            onChange={ handleChange } 
            name="coverImage"
            value={inputValue.coverImage}
          />
          <TextField
            label="Company Logo"
            placeholder="Image Link (URL)"
            type="url"
            value={ inputValue.companyLogo }
            onChange={ handleChange }
            name="companyLogo"
          /> 
          <TextField 
            label="companyName"
            type="text" 
            value={inputValue.companyName} 
            onChange={ handleChange }  
            name="companyName"
          />
          <TextField 
            label="Job Title"
            type="text" 
            value={inputValue.title} 
            onChange={ handleChange }  
            name="title"
          />
          <TextField
            label="Job Description"  
            type="text" 
            value={inputValue.content} 
            onChange={ handleChange }
            name="content"
            multiline
            rows={3}
          />
          <TextField
            select
            name="contracType"
            value={inputValue.contractType}
            label="ContractType"
            onChange={handleChange}
          >
            <MenuItem value={'permanent'}>Permanent</MenuItem>
            <MenuItem value={'temporary'}>Temporary</MenuItem>
            <MenuItem value={'internship'}>Internship</MenuItem>
          </TextField>
          
          <TextField 
            label="Location"
            placeholder="Ex: City, Region..."
            type="text" 
            value={inputValue.localization} 
            onChange={ handleChange }  
            name="localization"
          />
          <Button variant="contained" type="submit">Add</Button>
        </Stack>
      </form>
    </div>
  )
};
export default PostForm;