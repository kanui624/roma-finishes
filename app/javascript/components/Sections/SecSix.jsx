import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

class SecSix extends React.Component {
  render() {
    return (
      <div className="container-fluid" id="footer">
        <div className="container cont-footer">
          <footer className="footer">
            <ul className="footer-ul">
              <InstagramIcon className="social-li-insta" />
              <FacebookIcon className="social-li-fb" />
              <LinkedInIcon className="social-li-linked" />
              <li className="footer-li copy-rights ml-auto">
                <>Copyright © 2020 </>
                <>Roma Blasting </>
                <> - All Rights Reserved</>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    );
  }
}

export default SecSix;
