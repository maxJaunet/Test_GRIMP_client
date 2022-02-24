import Header from './Header/Header';
import classes from './Layout.module.css'
import Footer from './Footer/Footer';

const Layout = ({children}) => {
   return (
     <div className={ classes.Layout }>
      <Header />
      <main className={classes.bodySection}>{children}</main>
      <Footer />
    </div>
  )
};
export default Layout;