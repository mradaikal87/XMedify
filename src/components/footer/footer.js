import React from "react";
import styles from "./footer.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

const Footer = ({ logoText, links, socialLinks, copyright }) => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.topSection}>
          {/* Logo Section */}
          <div className={styles.logo}>
            <a href="/">
              <img src="/logo.png" alt="logo" width={92} height={27} />
            </a>
            {/* Social Media Section */}
            <div className={styles.socialIcons}>
              {socialLinks.facebook && (
                <a href={socialLinks.facebook}>
                  <FaFacebookF />
                </a>
              )}
              {socialLinks.twitter && (
                <a href={socialLinks.twitter}>
                  <FaTwitter />
                </a>
              )}
              {socialLinks.youtube && (
                <a href={socialLinks.youtube}>
                  <FaYoutube />
                </a>
              )}
              {socialLinks.pinterest && (
                <a href={socialLinks.pinterest}>
                  <FaPinterestP />
                </a>
              )}
            </div>
          </div>

          {/* Links Section */}
          <div className={styles.linksContainer}>
            {links.map((col, i) => (
              <ul key={i} className={styles.linkColumn}>
                {col.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
