import React from 'react'
import './Home.css'
import Img2 from '../../images/Orange-coder-logo-1.png'

function Home() {
    return (
        <>

            <section className="home__section mx-auto">
                <div className="wrapper">
                <div className="row carousel__row mx-auto">
                    <div className="col-lg-12 col-12 mx-auto">

                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                      <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                      </ol>
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <div className="carousel_boxes cb_1"></div>
                        </div>
                        <div class="carousel-item">
                          <div className="carousel_boxes cb_2"></div>
                        </div>
                        <div class="carousel-item">
                          <div className="carousel_boxes cb_3"></div>
                        </div>
                      </div>
                      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                      </a>
                    </div>
                    </div>
                </div>     
                </div>   



                {/* TOP HOTS  */}

                <div className="top__hot py-5">
                  <div class="row">
                    <div className="col-lg-10 col-10 mx-auto">
                      <h3 className="p-3 text-center">Top Trending Works !!</h3>
                      <div className="top_hot_grid">
                        <div className="hot_grids grid__1 img-fluid"><p><strong>INR <i class="fas fa-rupee-sign"></i> 235</strong> this is it</p></div>
                        <div className="hot_grids grid__2 img-fluid"><p><strong>INR <i class="fas fa-rupee-sign"></i> 235</strong> this is it</p></div>
                        <div className="hot_grids grid__3 img-fluid"><p><strong>INR <i class="fas fa-rupee-sign"></i> 235</strong> this is it</p></div>
                        <div className="hot_grids grid__4 img-fluid"><p><strong>INR <i class="fas fa-rupee-sign"></i> 235</strong> this is it</p></div>
                        <div className="hot_grids grid__5 img-fluid"><p><strong>INR <i class="fas fa-rupee-sign"></i> 235</strong> this is it</p></div>
                      </div>
                    </div>
                  </div>
                </div>



                {/* HOME - ICONS  */}

                <div className="Home__icons">
                  <div className="row">
                    <div className="icons__col col-lg-10 col-10 mx-auto"> 
                        <div className="icon_boxes icons_box_1">
                          <div className="icon_box"><i class="fas fa-rupee-sign"></i></div>
                          <h3>Finest prices</h3>
                          <p>The carousel is a slideshow for cycling through a series of content</p>
                        </div>
                        <div className="icon_boxes icons_box_2">
                          <div className="icon_box"><i class="fas fa-user-lock"></i></div>
                          <h3>Advanced Protection</h3>
                          <p>The carousel is a slideshow for cycling through a series of content</p>
                        </div>
                        <div className="icon_boxes icons_box_3">
                          <div className="icon_box"><i class="far fa-handshake"></i></div>
                          <h3>Hastle Free Dealing</h3>
                          <p>The carousel is a slideshow for cycling through a series of content</p>
                        </div>
                    </div>
                  </div>
                </div>




                {/* SERVICES */}

                <div className="services__box">
                  <h3 className="text-center">Services We Offer</h3>
                  <div className="Services__grid">

                    <div className="sboxes sbox_0">
                      <div className="sboxes_inner">
                        <i class="fas fa-mobile"></i>
                        <p>Android</p>
                      </div>
                    </div>

                    <div className="sboxes sbox_1">
                      <div className="sboxes_inner">
                        <i class="fas fa-chart-line"></i>
                        <p>Marketing</p>
                      </div>
                    </div>

                    <div className="sboxes sbox_2">
                      <div className="sboxes_inner">
                        <i class="fas fa-laptop"></i>
                        <p>Website</p>
                      </div>
                    </div>

                    <div className="sboxes sbox_3">
                      <div className="sboxes_inner">
                        <i class="fas fa-paint-brush"></i>
                        <p>Designing</p>
                      </div>
                    </div>

                    <div className="sboxes sbox_4">
                      <div className="sboxes_inner">
                        <i class="fas fa-video"></i>
                        <p>Videography</p>
                      </div>
                    </div>

                    <div className="sboxes sbox_5">
                      <div className="sboxes_inner">
                        <i class="fas fa-pencil-alt"></i>
                        <p>Writing</p>
                      </div>
                    </div>

                    <div className="sboxes sbox_6">
                      <div className="sboxes_inner">
                      <i class="fas fa-robot"></i>
                        <p>A.I.</p>
                      </div>
                    </div>

                    <div className="sboxes sbox_7">
                      <div className="sboxes_inner">
                        <i class="fas fa-user-graduate"></i>
                        <p>College Projects</p>
                      </div>
                    </div>

                    <div className="sboxes sbox_8">
                      <div className="sboxes_inner">
                        <i class="fas fa-cogs"></i>
                        <p>Software</p>
                      </div>
                    </div>

                  </div>
                  <a href="#">See More</a>
                </div>



                {/* TOP SALES */}

                <div className="top__hot top__sales best__sellers pt-3 pb-5 mb-5">
                  <div class="row">
                    <div className="col-lg-10 col-10 mx-auto">
                      <h3 className="p-3 text-center">Sellers Of the week !!</h3>
                      <div className="top_hot_grid">
                        <div className="hot_grids grid__1 img-fluid"><p><strong>INR <i class="fas fa-rupee-sign"></i> 235</strong> this is it</p></div>
                        <div className="hot_grids grid__2 img-fluid"><p><strong>INR <i class="fas fa-rupee-sign"></i> 235</strong> this is it</p></div>
                        <div className="hot_grids grid__3 img-fluid"><p><strong>INR <i class="fas fa-rupee-sign"></i> 235</strong> this is it</p></div>
                        <div className="hot_grids grid__4 img-fluid"><p><strong>INR <i class="fas fa-rupee-sign"></i> 235</strong> this is it</p></div>
                        <div className="hot_grids grid__5 img-fluid"><p><strong>INR <i class="fas fa-rupee-sign"></i> 235</strong> this is it</p></div>
                      </div>
                    </div>
                  </div>
                </div>



                {/* BANNER */}

                <div className="banner">
                  <div className="row">
                    <div className="col-lg-11 col-11 banner__col mx-auto">
                      <div className="row banner__row">
                        <div className="col-lg-6 col-6 order-1 para">
                          <h1 className="para__heading pb-5"><strong>Orange Coder </strong>one solution for all problems</h1>
                          <div className="para_box py-3">
                            <p className="para_head"><i class="far fa-check-circle"></i> <strong>Best Budget Ever</strong></p>
                            <p>The carousel is a slideshow for cycling through a series of content</p>
                          </div>
                          <div className="para_box pb-3">
                            <p className="para_head"><i class="far fa-check-circle"></i> <strong>Best Developer Supports</strong></p>
                            <p>The carousel is a slideshow for cycling through a series of content</p>
                          </div>
                          <div className="para_box pb-3">
                            <p className="para_head"><i class="far fa-check-circle"></i> <strong>Click Choose & Ready To Go</strong></p>
                            <p>The carousel is a slideshow for cycling through a series of content</p>
                          </div>
                          <div className="para_box pb-3">
                            <p className="para_head"><i class="far fa-check-circle"></i> <strong>Secure Payments</strong></p>
                            <p>The carousel is a slideshow for cycling through a series of content</p>
                          </div>
                        </div>
                        <div className="col-lg-6 col-6 order-2 imaged">
                          <img className="img-fluid animated" src={Img2} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              {/* FOOTER  */}

              <footer>
                <div className="row foot_out_row">
                  <div className="col-10 mx-auto">
                    <div className="row foot_in_row pt-5">
                      <div className="col-12 side__1">
                        <div className="upper-box">
                          <div className="foot__head__div">
                            <h2>Orange Coder</h2>
                            <div className="footer_logo"><img src={Img2} /></div>
                          </div>
                          <div className="logo-box">
                            <h2>Follow Us On : </h2>
                            <i class="fab fa-facebook-square"></i>
                            <i class="fab fa-twitter-square"></i>
                            <i class="fab fa-instagram"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-3 side__2">
                        <h3>Join Us</h3>
                          <a href="#">Become A Seller</a>
                          <a href="#">Become A Buyer</a>
                          <a href="#">Become A pro member</a>
                          <a href="#">Collab with us</a>
                      </div>
                      <div className="col-3 side__3">
                        <h3>Top Categories</h3>
                        <a href="#">Web Development</a>
                        <a href="#">Android Development</a>
                        <a href="#">Artificial Intelligence</a>
                        <a href="#">Logo Designing</a>
                      </div>
                      <div className="col-3 side__4">
                        <h3>About</h3>
                        <a href="#">Career</a>
                        <a href="#">Services</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>
                      </div>
                      <div className="col-3 side__5">
                        <h3>Support</h3>
                        <a href="#">Collab with us</a>
                        <a href="#">Support</a>
                        <a href="#">Security</a>
                        <div className="contact_foot">
                          <input placeholder="Mail Us" />
                          <a href="#" className="btn btn-warning">Send</a>
                        </div>
                      </div>
                      <div className="footer_bottom d-flex justify-content-center align-items-center">
                        <p>Orange Coder | Copyright &copy; 2020 | All Copyrights Reserved</p>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>


            </section>
        </>
    )
}

export default Home
