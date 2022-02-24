import { Paper } from '@mui/material';
import PostForm from '../components/PostForm/PostForm';

const admin = () => {
   return (
     <div>
       <Paper sx={{marginX: 'auto', width: '50%', padding: '2rem'}}>
        <PostForm />
       </Paper>
     </div>
  )
};
export default admin;