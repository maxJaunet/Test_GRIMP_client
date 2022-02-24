import { Grid, Paper, Stack } from '@mui/material';
import Image from 'next/image';
import classes from './Post.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';


interface IProps {
  post: IJobPost
}

const Post: React.FC<IProps> = ({ post }) => {
  const { _id, coverImage, companyLogo, companyName, title, content, contractType, localization, publishedAt } = post;

  const router = useRouter();

  const handleClick = () => {
    router.push(`/${_id}`)
  }

  return (
    <div className={classes.Post}>
      <Grid container>
        <Grid item xs={ 2 } className={ classes.coverBox }>
          <div className={ classes.coverBox }>
            <Image
              src={coverImage ? coverImage : 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
              width="5rem"
              height="4.7rem"
              layout="responsive"
              objectFit='cover'
            />    
          </div>    
        </Grid>
        <Grid item xs={ 1 } className={ classes.logoBox } sx={ { marginLeft: '-2rem', paddingY: "2rem" } }>
          <div className={classes.logo}>
            <Image
              src={companyLogo ? companyLogo : 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
              width="40px"
              height="40px"
              layout="responsive"
              objectFit='cover'
            />
          </div>
          
        </Grid>
        <Grid item xs={9} className={classes.contentBox}>
          <Stack>
            <h3>{ `${companyName} - ${localization}` }</h3>
            <p>{`${ title } - ${contractType}`}</p>
            <p>{ content.slice(0, 50) } ...</p>
            <Link href={ `/${_id}` }><button onClick={handleClick} className={classes.learnMore}>Learn more</button></Link>
            <p>{`plublished - ${publishedAt}`}</p>
          </Stack>
        </Grid>
      </Grid>
    </div>
  )
};
export default Post;