import { Grid } from '@mui/material';
import Post from '../JobPost/Post';

interface IProps {
  posts: IJobPost[]
}

const PostList: React.FC<IProps> = ({posts}) => {
   return (
     <div>
       {
         posts ? (
           posts.map((post) => {
            return (
              <Post post={post} key={ parseInt(post._id) } />
             )
           })
         ) : (
             <h2>Sorry, there is no job at the moment</h2>
         )}
      
    </div>
  )
};
export default PostList;