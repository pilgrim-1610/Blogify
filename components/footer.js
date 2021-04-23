import styles from '../components/abt.module.css'
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { FaGithub , FaFacebook , FaInstagram } from 'react-icons/fa';

const footer = () => {
    return (
        <div>
<footer className={styles.footer}>
        <div className="container">
          <FaInstagram />&nbsp;
          <FaGithub />&nbsp;
          <FaFacebook /></div>
          <div className={styles.contact}>
          Made by Swapnil Biswas</div>
            </footer>
      

</div>
)}
export default footer;