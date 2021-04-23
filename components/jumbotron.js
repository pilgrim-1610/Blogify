
import styles from './abt.module.css'

import Button from 'react-bootstrap/Button'
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import {useRouter} from 'next/router'
import {parseCookies} from 'nookies'
import cookie from 'js-cookie'
const jumbo = () => {
  const router = useRouter()
  const cookieuser = parseCookies()
  const user =  cookieuser.user ? JSON.parse(cookieuser.user) : ""

  function isActive(route){
    if(route== router.pathname){
        return "active"
    }
    else ""
 }
    return (
      <div>
<Jumbotron className={styles.jumbotron}>
{
            (user.role == 'admin' || user.role == 'root') &&
<p>
  <Button variant="primary">Upload</Button>
</p>}
</Jumbotron>
</div>
    )}
    export default jumbo;