  class SpecialHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = ` <div class="header">
        <!--Start: Header Info -->
        <div class="container">
          <div class="row">
            <div class="col-md-12 header_warper">
              <!-- Start : Logo -->
              <div class="header_top_left">
                <div class="social-nav">
                  <ul class="header_socil list-inline pull-left">
                    <li>
                      <a href="#"><i class="fa fa-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-linkedin"></i></a>
                    </li>
                  </ul>
                </div>
                <!-- End: social-nav -->
              </div>
              <!-- End :   -->
              <div class="header_top_right list-unstyled">
                <ul>
                  <li>
                    <i class="fa fa-envelope-o"></i>
                    <span class="top-title">info@switchon.com</span>
                  </li>
                  <!-- End: Opening time -->
                  <li>
                    <i class="fa fa-phone"></i>
                    <span class="top-title">+91 98214 85410</span>
                  </li>
                  <!-- End: Opening time -->
                  <li class="pop">
                    <i class="fa fa-clock-o"></i>
                    <span class="top-title pop1">Mon-Sat : 10am - 06pm</span>
                  </li>
                  <!-- End: Opening time -->
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End: Header Info -->

      <!-- Start: header navigation -->
      <div class="navigation">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="repire_logo">
                <a href="#"><img src="images/logo.png" alt="Riamend" /></a>
              </div>
              <div id="navigation">
                <ul>
                  <li><a class="active" href="index.html">Home</a></li>
                  <li><a href="about.html">About Us</a></li>
                  <li class="has-sub">
                    <a href="#" title="page">Our Service</a>
                    <ul>
                      <li><a href="laptoprepair.html" title="Gallery">Laptop Repair</a></li>

                      <li><a href="#" title="Services">CCTV Camera</a></li>
                      <li><a href="#" title="Gallery">Hardware Component</a></li>
                      <li><a href="#" title="Services">More</a></li>
                    </ul>
                  </li>
                
                  <li><a href="expert.html" title="Gallery">Experts</a></li>

                 

                  <li><a href="gallery.html" title="Gallery">Our Gallery</a></li>
                  <li><a href="contact.html" title="Contact">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
          <!--/ row -->
        </div>
        <!--/ container -->
      </div>`;
    }
  }

  class SpecialFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<footer class="footer-section">
        <div class="container">
          <div class="row">
            <!-- Start: About -->
            <div class="col-md-3 col-xs-12">
              <div class="widget">
                <h5>About us</h5>
                <p class="footer_para">
                  Our team of experts is dedicated to helping you find the perfect
                  laptop and keeping it in top condition.t
                </p>
                <form class="footer_subs">
                  <input
                    class="form-input"
                    placeholder="Enter Your Email Address"
                    type="text"
                  />
                  <button type="submit" class="form-button"></button>
                </form>
              </div>
            </div>
            <!-- End: About -->
            <!-- Start: Helpful Link -->
            <div class="col-md-3 col-xs-12">
              <div class="widget">
                <h5>Helpful Link</h5>
                <ul class="recent-post helpful_post">
                  <li>
                    <h6><a href="#">Home</a></h6>
                  </li>
                  <li>
                    <h6><a href="#">About Us</a></h6>
                  </li>
                  <li>
                    <h6><a href="#">Our Blog</a></h6>
                  </li>
                  <li>
                    <h6><a href="#">Contact Us</a></h6>
                  </li>
                </ul>
              </div>
            </div>
            <!-- End: Helpful Link -->

            <!-- Start: Latest post -->
            <div class="col-md-3 col-xs-12">
              <div class="widget">
                <h5>Our Services</h5>
                <ul class="recent-post">
                  <li>
                    <h6><a href="#">Laptop Sale & Repair</a></h6>
                  </li>
                  <li>
                    <h6><a href="#">CCTV Camera</a></h6>
                  </li>
                  <li>
                    <h6><a href="#">Hardware Parts</a></h6>
                  </li>
                  <li>
                    <h6><a href="#">Mobile Accessories</a></h6>
                  </li>
                </ul>
              </div>
            </div>
            <!-- End: Latest post -->
            <!-- Start: CONTACT INFO -->
            <div class="col-md-3 col-xs-12">
              <div class="widget">
                <h5>Contact Us</h5>
                <!-- Contact -->
                <ul class="recent-post foot_contact_wid">
                  <li>
                    <h6><a href="#">A Block Sec-22, Noida (201301) </a></h6>
                  </li>
                  <li>
                    <h6><a href="#">Email : info@switchon.com</a></h6>
                  </li>
                  <li>
                    <h6><a href="#">Phone: +91 98214 85410</a></h6>
                  </li>
                  <li>
                    <h6><a href="#">Hours : Mon-Sat: 10AM-06PM</a></h6>
                  </li>
                </ul>
              </div>
            </div>
            <!-- End: CONTACT INFO -->
            <!-- Start:Subfooter -->
            <div class="subfooter">
              <div class="row">
                <div class="col-md-11 col-xs-10">
                  <div class="copyright_text">
                    @2024 Switch On - Design By <a href="#">Webroj</a>
                  </div>
                </div>
                <div class="col-md-1 col-xs-2">
                  <a class="scrollup" href="#"></a>
                </div>    
              </div>
            </div>
            <!-- End:Subfooter -->
          </div>
        </div>
      </footer>`;
    }
  }
  customElements.define("special-header", SpecialHeader);
  customElements.define("special-footer", SpecialFooter);
