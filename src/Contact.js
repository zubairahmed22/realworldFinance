import React from 'react'

export const Contact = () => {
  return (
    <>
    <section className="inner-intro bg-img light-color overlay-before parallax-background">
    <div className="container">
      <div className="row title">
<h1>contact</h1>
      </div>
    </div>
  </section>
 
  <div class="container contact-form pt-80 pt-xs-60 mt-up">
      <div class="row">
        <div class="col-sm-12">
          <h4>GET IN TOUCH</h4>
          
         
          <form class="contact-form mt-45" id="contact">           
           
            <div id="success">
              <div role="alert" class="alert alert-success"> <strong>Thanks</strong> for using our template. Your message has been sent. </div>
            </div>
            
            <div class="row">
              <div class="col-sm-6">
                <div class="form-field">
                  <input class="input-sm form-full" id="name" type="text" name="form-name" placeholder="Your Name"/>
                </div>
                <div class="form-field">
                  <input class="input-sm form-full" id="email" type="text" name="form-email" placeholder="Email" />
                </div>
                <div class="form-field">
                  <input class="input-sm form-full" id="sub" type="text" name="form-subject" placeholder="Subject"/>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-field">
                  <textarea class="form-full" id="message" rows="7" name="form-message" placeholder="Your Message" ></textarea>
                </div>
              </div>
              <div class="col-sm-12 mt-30">
                <button class="btn-text" type="button" id="submit" name="button"> Send Message </button>
              </div>
            </div>
          </form>
          
        </div>
      </div>
    </div>
    </>
  )
}
