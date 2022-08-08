import styles from '../styles/Desklinks.module.css'
import { useRouter } from 'next/router'
function Desklinks({num, name, link}) {
    const router = useRouter();
    const currentRoute = router.pathname;
  return (
  <a href={link} className={currentRoute === link? styles.contlinkactive:styles.contlinknonactive} >
    <div>{num}</div>
    <div className={currentRoute===link?styles.middleactive:styles.middle}></div>
    <div>{name}</div>
  </a>
  )
}

export default Desklinks