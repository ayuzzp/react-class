const Footer=()=>{
    return(
        <>
        <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>MyApp</h2>
          <p>Innovating the future, one step at a time.</p>
        </div>

        <div className="footer-right">
          <div className="footer-column">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <a href="#">Help Center</a>
            <a href="#">Contact</a>
            <a href="#">FAQ</a>
          </div>

          <div className="footer-column">
            <h4>Follow Us</h4>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} MyApp | All Rights Reserved.
      </div>
    </footer>
        </>
    )
}
export default Footer;