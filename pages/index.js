import Link from 'next/link'
import baseUrl from '../helpers/baseUrl'

import Jumbo from '../components/jumbotron'
import About from '../components/about'

import Blog from '../components/blog'
import Footer from '../components/footer'
import React from 'react';

import styles from '../components/abt.module.css'
//import '../node_modules/materialize-css/dist/css/materialize.min.css'

import Contact from '../components/contact' 


const Home = ({products})=>{

  const productList = products.map(product=>{
  console.log(products)
  return(
    <div className="card" key={product._id}>
        <div className="card-image">
          <img src={product.mediaUrl} />
          <span className="card-title ">{product.name}</span>
        
        </div>
        
        <div className="card-action">
          <Link href={'/product/[id]'} as={`/product/${product._id}`}><a>View </a></Link>
        </div>
      </div>
    
  )
})
console.log(products)
return(
  <div>
    
    <Jumbo />   
    <About />
    <Blog />
    <div className={styles.rootcard} >
    {productList}
  </div> 
    <Contact />
    <Footer />
</div>

)
}

export async function getStaticProps() {
const res = await fetch(`${baseUrl}/api/products`)
const data = await res.json()
return {
    props: {products:data} // will be passed to the page component as props
  }
}
export default Home