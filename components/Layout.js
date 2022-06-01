import Navbar from './Navbar'
import Footer from './Footer'
const Layout = ({children}) => {
    return ( 
        <>
            <Navbar />
            {/*leaving space for navbar*/}
            <div className='h-0 pt-16'></div>

            {children}
            
            <Footer />
       </>
    );
}

export default Layout;