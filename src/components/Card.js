import '../App.css';
import Footer from './footer';
import About from './About';
import ContactButtons from './ContactButtons';
import UserInfo from './UserInfo';



function Card() {
    return (
        <div className='main-container'>         

            <UserInfo />

            <ContactButtons />

            <About />

            <Footer />
        </div>
    )
}

export default Card;