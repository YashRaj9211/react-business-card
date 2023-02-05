import '../App.css';

function ContactButtons() {
    return (
        <div className="Contact-buttons">
            <button className="button Email">
                <i class="fa-solid fa-envelope"></i>
                <div>Email</div>
            </button>

            <button className="button Linkedin">
                <i class="fa-brands fa-linkedin"></i>
                <div>LinkedIn</div>
            </button>
        </div>
    )
}

export default ContactButtons;