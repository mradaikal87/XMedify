import React, { useState } from "react";
import styles from "./header.module.css";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header({ data, theme = "dark", position = "relative" }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
       className={`${styles.header} ${styles[theme]} ${styles[position]}`}
      
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <nav className={styles.nav}>
            <a href="/">
              <img src="/logo.png" alt="logo" width={92} height={27} />
            </a>

            {/* Hamburger button */}
            <button
              className={styles.hamburger}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </nav>

          {/* Mobile menu */}
          <ul className={`${styles.menuList} ${isOpen ? styles.showMenu : ""}`}>
            {data?.map((item, i) => (
              <li key={i}>
                {item.menu && <a href={item.link}>{item.menu}</a>}
                {item.button && (
                  <button
                    className={styles.button}
                    onClick={() => {
                      navigate(item.link);
                      setIsOpen(false); // close menu after click
                    }}
                  >
                    {item.button}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
