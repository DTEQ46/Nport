import {React, useState, useRef} from 'react'
import styles from '../styles/Menubar.module.css'

function Menubar({toggleNav}) {
    const menuRef = useRef();
    const [menuOpen, setMenuOpen] = useState(false);
    const twist = () => {
        if (!menuOpen) {
            menuRef.current.classList.add(styles.open);
            setMenuOpen(true);
            toggleNav();
        } else {
            menuRef.current.classList.remove(styles.open)
            setMenuOpen(false);
            toggleNav();
        }
    }
  return (
 <div ref={menuRef} className={styles.menuBtn} onClick={twist}>
    <div className={styles.menuBtnBurger}></div>
</div>
  )
}

export default Menubar