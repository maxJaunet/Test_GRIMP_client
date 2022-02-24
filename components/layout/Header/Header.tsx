import Link from 'next/link';
import classes from './Header.module.css'

const Header = () => {
  return (
     <div className={classes.Header}>
      <ul>
        <li><Link href='/'>All Jobs</Link></li>
        <li><Link href='/login'>Admin</Link></li>
      </ul>
    </div>
  )
};
export default Header;