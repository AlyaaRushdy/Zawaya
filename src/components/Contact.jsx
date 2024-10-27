import { useState } from "react";
import InputGroup from "./reusable/InputGroup";
import ContactInfo from "./reusable/ContactInfo";

function Contact() {
  const [validated, setValidated] = useState(false);
  const initState = {
    fullName: "",
    email: "",
    subject: "",
    message: "",
  };
  const [data, setData] = useState(initState);

  const handleChange = (e) => {
    const state = { ...data };
    state[e.target.id] = e.target.value.trimStart();
    setData(state);
  };

  const handleSubmit = (e) => {
    const form = e.target.form;

    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
    }

    setValidated(true);
  };

  return (
    <>
      <section className="py-5" id="contact">
        <div className="container">
          <div className="mb-4">
            <h2 className="fw-bold">Contact Us</h2>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <ContactInfo
                fa_tag={"fa-solid fa-location-dot"}
                heading={"Address"}
                href={"https://maps.app.goo.gl/HdgTFa4bUw1AaDEs9"}
                link_text={
                  "185 Moustafa Kamel Axis, New Cairo 1, Cairo Governorate"
                }
              />
              <ContactInfo
                fa_tag={"fa-solid fa-phone"}
                heading={"Call Us"}
                href={"tel:+201119990170"}
                link_text={"+20-111-999-0170"}
              />
              <ContactInfo
                fa_tag={"fa-regular fa-envelope"}
                heading={"Email Us"}
                href={"mailto:zawayaessam@gmail.com"}
                link_text={"zawayaessam@gmail.com"}
              />
              <ContactInfo
                fa_tag={"fa-brands fa-facebook-f"}
                heading={"Facebook"}
                href={"https://www.facebook.com/Construction.decor.service/"}
                link_text={"Zawaya Decor"}
              />

              <div className="mb-4">
                <iframe
                  style={{ border: "0", width: "100%", height: "250px" }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.53097157617!2d31.442617600000002!3d30.050311100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583dff34e4656b%3A0xac3083564bf6f26d!2sZawaya%20decor!5e0!3m2!1sen!2seg!4v1727670560020!5m2!1sen!2seg"
                  frameBorder="0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="col-lg-8">
              <form
                noValidate
                className={
                  validated
                    ? "col-11 col-md-9 mx-auto needs-validation was-validated"
                    : "col-11 col-md-9 mx-auto needs-validation"
                }
              >
                <InputGroup
                  data={data}
                  errorMessage={"Please enter your name"}
                  handleChange={handleChange}
                  id={"fullName"}
                  name={"fullName"}
                  type={"text"}
                  labelText={"Full Name"}
                />
                <InputGroup
                  data={data}
                  errorMessage={"Please enter a valid email"}
                  handleChange={handleChange}
                  id={"email"}
                  name={"email"}
                  type={"email"}
                  labelText={"Email Address"}
                />
                <InputGroup
                  data={data}
                  errorMessage={"Please enter a subject"}
                  handleChange={handleChange}
                  id={"subject"}
                  name={"subject"}
                  type={"text"}
                  labelText={"Subject"}
                />
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    value={data.message}
                    rows={10}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    required
                  ></textarea>
                  <div className="invalid-feedback">
                    Please enter your message
                  </div>
                </div>

                <div className="mb-3 text-center">
                  <button
                    type="submit"
                    className="btn btn-primary px-5 py-2"
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
