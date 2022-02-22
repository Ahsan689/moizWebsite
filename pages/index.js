import { useEffect,useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/header'
// import styles from '../styles/Home.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Footer } from '../components/footer';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, []);


  const params = {
    // slidesPerView : 2,
    // centeredSlides: true,
    loop: true,
    // effect: 'coverflow',
    // freeMode: true,
    speed: 1000,
    spaceBetween : 40,
    // activeSlideKey:'0', 
    
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true
    // },
    
    // Responsive breakpoints
    breakpoints: {
        1024:{
            slidesPerView : 3
        },
        768:{
            slidesPerView : 2
        },
        640:{
            slidesPerView : 2

        },
        320:{
            slidesPerView : 1
        }
    }
}

 

  
 
  return (
          <>
            <Header/>

            {/* <!-- ======= Hero Section ======= --> */}
            <section id="hero" className="d-flex align-items-center justify-content-start">
              <div className="container" data-aos="fade-up">
                <div className="row " data-aos="fade-up" data-aos-delay={150}>
                  <div className="col-xl-8 col-lg-8 justify-content-start">
                    <h1>Welcome</h1>
                    
                  </div>
                </div>
                <div className='row'>
                <div className="col-xl-6 col-lg-8  text-left">
                   
                    <h2>Lorem ipsum dolor sit amet.<br/>
                    Lorem ipsum dolor sit amet.</h2>
                    
                  </div>

                </div>
                <div className='row'>
                  <div className='col-xl-5'>
                  <div className="text-left mt-4">
                      <button style={{borderRadius:20}} className='btn hero-btn-outline-secondary text-white' type="button">Explore Here</button>
                    </div>
                  </div>
                </div>
                
              </div>
            </section>
            {/* <!-- ======= Hero Section ======= --> */}

        <main id="main">
        {/* ======= About Section ======= */}
        <section id="about" className="about" style={{backgroundColor:'black'}}>
          <div className="container" data-aos="fade-up">
            <div className="row">
            <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-left" data-aos-delay={100}  data-aos-once="true">
               <video className='' style={{height:280}} controls autoPlay muted src='assets/img/pexels-mart-production-8462444.mp4'/>

              </div>
              <div style={{paddingLeft:30}} className="col-lg-5 pt-4 pt-lg-0 order-1 order-lg-2 content" data-aos="fade-right" data-aos-delay={100}  data-aos-once="true">
                <h1 className='text-white '>Our History</h1>
                <p className="fst-italic text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in ipsum vitae arcu posuere feugiat sit amet id arcu. Nullam scelerisque tellus ac vulputate aliquam. Nunc ut sagittis sapien. Duis in faucibus risus, vel volutpat justo.
                </p>
                
                <div style={{marginLeft:-50}} className="row gy-4 mt-0 justify-content-center" data-aos="zoom-in" data-aos-delay={250} data-aos-once="true">
                <div className="col-xl-2 col-md-4">
                    <div style={{backgroundImage: 'linear-gradient(to right, #830eb7, #a200ac, #b900a1, #cd0095, #dc098a)'}} className="icon-box">
                      {/* <i className="ri-store-line" /> */}
                      <h3 ><a href>10</a></h3>
                    </div>
                  </div>
                  <div className="col-xl-2 col-md-4">
                    <div className="icon-box">
                      {/* <i className="ri-bar-chart-box-line" /> */}
                      <h3><a href>5</a></h3>
                    </div>
                  </div>
                  <div className="col-xl-2 col-md-4">
                    <div className="icon-box">
                      {/* <i className="ri-calendar-todo-line" /> */}
                      <h3><a href>8</a></h3>
                    </div>
                  </div>
                  <div className="col-xl-2 col-md-4">
                    <div className="icon-box">
                      {/* <i className="ri-paint-brush-line" /> */}
                      <h3><a href>5</a></h3>
                    </div>
                  </div>
                  <div className="col-xl-2 col-md-4">
                    <div className="icon-box">
                      {/* <i className="ri-database-2-line" /> */}
                      <h3><a href>8</a></h3>
                    </div>
                  </div>
                  <div style={{paddingLeft:50}} className="text-left mt-4">
                    <button style={{borderRadius:20}} className='btn btn-outline-secondary' type="button">view history</button>
                  </div>
                  
                </div>
                
              </div>
              
            </div>
          </div>
        </section>{/* End About Section */}

        <section id="videos" className="about" style={{backgroundImage: 'linear-gradient(to right, #830eb7, #a200ac, #b900a1, #cd0095, #dc098a)',padding: '5% 0'}}>
          <div className="container-fluid justify-content-center" data-aos="fade-up">
            <Swiper {...params}>
                <iframe className='video_content'  autoPlay muted src='assets/img/production ID_5051308.mp4'/>
                
                <iframe className='video_content'  autoPlay muted src='assets/img/video.mp4'/>
                <iframe className='video_content'  autoPlay muted src='assets/img/Musicians And Dancers On The Street.mp4'/>
                {/* <iframe className='video_content'  controls autoPlay muted src='assets/img/video.mp4'/> */}
                
              {/* <div>
                <video width={'100%'} height={'100%'} controls autoPlay muted src='assets/img/production ID_4990397.mp4'/>
              </div> */}
              {/* <div>
                <iframe src='assets/img/production ID_5051308.mp4'/>
              </div> */}

            </Swiper>

            
          </div>
        </section>

        <section id="Pictures" className="about bg-dark" style={{padding: '5% 0'}}>
          <div className="container justify-content-center" data-aos="fade-up">
            <div className="row">
              <div className='col-md-4' >
                <div style={{backgroundImage:'url(assets/img/b-image.jpg)',backgroundPosition:'center center',backgroundSize:'cover',height:300}} >
                  {/* <img src='assets/img/doll.png'/> */}
                  <h2 className='px-3 text-white text-left'>Best Trainers</h2>
                  <p className=' px-3 text-white text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div className='col-md-4' >
                <div style={{backgroundImage:'url(assets/img/shutter-o.png)',backgroundSize:'cover',backgroundPosition:'center',height:'300px',backgroundRepeat:'no-repeat'}}>
                <h2 className='px-3 text-white text-left'>Online School</h2>
                <p className='px-3 text-white text-left'>Lorem ipsum dolor sit amet, .</p>
                </div>
                {/* <img height={'95%'} style={{width:350}} src='assets/img/images.jpg'/> */}
              </div>
              <div className='col-md-4' >
                <div style={{backgroundImage:'url(assets/img/wnew.jpg)',backgroundPosition:'center',backgroundSize:'cover',height:300}}>
              <h2 className='px-3 text-white text-left'>Free Week</h2>
              <p className='px-3 text-white text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              {/* <img height={'95%'} style={{width:350}} /> */}
              </div>
              

            </div>
             
           
          </div>
        </section>
      

        {/* ======= Cta Section ======= */}
        {/* End Cta Section */}
        

       

        {/*  */}
      </main>

        {/* <Footer/> */}



          </>
    // 
  )
}
