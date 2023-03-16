import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { IconButton } from "@mui/material";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-section1">
        <div className="footer-column">
          <h5>Column1</h5>
          <ul>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>Column2</h5>
          <ul>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>Column3</h5>
          <ul>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>Column4</h5>
          <ul>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
          </ul>
        </div>
      </section>
      <section className="footer-section2">
        <div className="footer-copyright">
          Copyright &#169; Food Blog | Created
          by Alina . Irfan . Hamid
        </div>
        <div className="footer-icon">
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >
            <EmailIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >
            <WhatsAppIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >
            <LinkedInIcon />
          </IconButton>
        </div>
      </section>
    </div>
  );
}

export default Footer;
