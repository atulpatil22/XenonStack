import React, { useEffect, useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../Css/Home.css'
import { Link } from 'react-router-dom';
import Apiurl from '../Api'
import axios from 'axios';

export default function Home() {

  var [api,setapi]=useState([])
  useEffect(()=>{
    axios.get(Apiurl +'getAllcategory').then((result)=>{
      console.log(result.data);
      setapi(result.data)
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  return (
  
    <div >
      {/* slider start */}

      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={3000}>
            <img src="./images/h1.jpg" className="d-block w-100" alt="..." style={{ width: "600px", height: "500px" }}/>
          </div>
          <div className="carousel-item" data-bs-interval={3000}>
            <img src="./images/h2.jpg" className="d-block w-100" alt="..." style={{ width: "600px", height: "500px" }}/>
          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
      {/* slider end */}

      {/* Service start */}
      <section id='s2'>
        <div id="d2" className="row" >
          <div className='row justify-content-md-center pb-lg-4 mb-lg-5'>           
            <div className='container text-center'>
              <h2 id='welcome' className='mb-md-2' style={{fontWeight:'bold'}} >Welcome To Inshine </h2>
              <h4  id='wel'className='mb-md-2'  >Your Full Dental Care Clinic  </h4>
              <hr/>
            </div>
          </div>
          <div class="container text-center">
            <div class="row">
            {
              api && api.length>0 && api.map(obj=>         
              <div  class="col-6">
                <div className='d-block mb-4'>
                  <Link to={'/services/' + obj.category_id}>
                    <img  id='img'  style={{borderRadius:300, outerWidth:150,height:150}} src= {obj.image} alt='img' ></img>
                  </Link>
                </div>
                  <h4>{obj.category_name}</h4> <br/>
              </div> 
              )
            }
            </div>
          </div>
        </div>
      </section>
      {/* Service End */}
             {/* Third Section start */}<br/>
             <hr/>
      <div className='text-center'>
        <br />
        
      </div>
      <br/>
          {/* Third Section end */}
    </div>
    
  )
}
