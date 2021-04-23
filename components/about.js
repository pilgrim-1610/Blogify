import styles from './abt.module.css'
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import {useRouter} from 'next/router'
import {parseCookies} from 'nookies'
import cookie from 'js-cookie'



const about = () => {
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
    <div>

      <Image  className={styles.img}  src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" width="150" height="150" roundedCircle />
      </div>
{     
   (user.role == 'admin' || user.role == 'root') &&

      <div className={styles.btn}>
      <Button  variant="primary">Upload</Button>
       
     
      </div>}
<section className={styles.Name}>
<div>
<h2>

John Doe</h2>
</div>
</section>
<section className={styles.Name}>
  <h2> ABOUT</h2>
  <div className=" col-sm-12 ">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis magna mauris, non placerat tellus aliquet sodales. 
  Phasellus convallis massa ut nibh fringilla posuere. Curabitur ultricies, orci eget euismod fringilla, tellus urna molestie 
  dui, maximus porttitor mi nisi sed mi. Integer rhoncus elit vel placerat tempus. Ut sodales orci volutpat est dictum, 
  laoreet auctor sem condimentum. Proin maximus nibh sed elit tincidunt, at ullamcorper lacus sollicitudin. Mauris egestas, 
  purus et volutpat condimentum, nibh ex condimentum elit, sed faucibus libero augue vel dolor. Donec sodales nec mauris id sodales.
   Nulla dignissim magna ac aliquam aliquam. Quisque tempor sem finibus ligula mattis, vel pharetra lectus aliquet.
   </div>
</section>
</div>
  )}
  export default about