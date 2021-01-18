import React, { Component } from 'react';
import { Header, Footer, PersonalInjury, ContentBottom } from '../components';
import { ContactContent } from '../styled-components/pages/contact';
import { PageWrapper, ContentWrapper, Content, Input, TextArea, BigGoldButton } from '../styled-components/global';
import { MessageForm, MessageFormWrap, MessageLinks, MessageDisclaimer } from '../styled-components/components/messageForm';
let initialState = {
  name: "",
  email: "",
  phone: "",
  zip: "",
  contactemail: false,
  contactphone: false,
  description: "",
  disclaimer: false
}

class Contact extends Component {
    constructor(props){
      super(props);
      this.state = initialState
    }
    submitForm = (e) => {
      e.preventDefault();
      console.log(this.state);
      fetch('/emailer', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.state)
      })
      .then(res => res.json())
      .then(res => {
        alert("An email has been submitted to the associates at Nelson Rozier. Someone will be in contact with you shortly.")
        this.resetState();
      })
      .catch(err => {
        alert("Something went wrong. Please contact Nelson Rozier directly via email or telephone. We are sorry for the inconvenience.")
        this.resetState();
      })
    }
    resetState = () => {
      this.setState(initialState)
    }
    updateState = (e, prop) => {
      let obj = {};
      obj[prop] = e.currentTarget.value;
      this.setState(obj);
    }
    updateCheckbox = (prop) => {
      let obj = {};
      obj[prop] = !this.state[prop]
      this.setState(obj)
    }
    render(){
      const {name, email, phone, zip, contactemail, contactphone, description, disclaimer } = this.state;
      const buttonDisabled = disclaimer == true && email ? false : true;
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <PersonalInjury/>
                <Content>
                  <h1>Contact</h1>
                  <p>While this website provides general information, it does not constitute legal advice. The best way to get guidance on your specific legal issue is to contact a lawyer. To schedule a meeting with an attorney, please call or complete the intake form below.</p>
                  <form onSubmit={this.submitForm}>
                    <p>Fields marked with an * are required</p>
                    <p><strong>Name</strong></p>
                    <Input
                      placeholder="Name"
                      type="text"
                      value={name}
                      onChange={(e) => {this.updateState(e, "name")}}
                    />
                    <p><strong>Email *</strong></p>
                    <Input
                      placeholder="Email Address*"
                      type="email"
                      value={email}
                      required
                      onChange={(e) => {this.updateState(e, "email")}}
                    />
                    <p><strong>Phone</strong></p>
                    <Input
                      placeholder="Phone"
                      type="phone"
                      value={phone}
                      onChange={(e) => {this.updateState(e, "phone")}}
                    />
                    <p><strong>Zip</strong></p>
                    <Input
                      placeholder="Zip"
                      type="zip"
                      value={zip}
                      onChange={(e) => {this.updateState(e, "zip")}}
                    />
                    <strong>US States</strong>
                    select list of states
                    <strong>How Would You Like To Be Contacted?</strong>
                    <span>Check all that apply.</span>
                    Phone
                    Email
                    <input
                      required
                      type="checkbox"
                      id="contactphone"
                      name="contactphone"
                      checked={contactphone}
                      onChange={() => {this.updateCheckbox("contactphone")}}
                    />
                    <label htmlFor="contactphone">Phone</label>
                    <input
                      required
                      type="checkbox"
                      id="contactemail"
                      name="contactemail"
                      checked={contactemail}
                      onChange={() => {this.updateCheckbox("contactemail")}}
                    />
                    <label htmlFor="contactemail">Email</label>

                    <p><strong>Brief Description of Your Legal Issue</strong></p>
                    <TextArea
                      placeholder="Description"
                      type="description"
                      value={description}
                      onChange={(e) => {this.updateState(e, "description")}}
                    />
                    <MessageLinks>
                      <a href="/disclaimer">Disclaimer</a> | <a href="/privacy">Privacy Policy</a>
                    </MessageLinks>
                    <MessageDisclaimer>
                      <input
                        required
                        type="checkbox"
                        id="disclaimer"
                        name="disclaimer"
                        checked={disclaimer}
                        onChange={() => {this.updateCheckbox("disclaimer")}}
                      />
                      <label htmlFor="disclaimer">I Have Read The Disclaimer *</label>
                      <BigGoldButton className={buttonDisabled ? "buttonDisabled" : ""} type="submit">Send This Message</BigGoldButton>
                    </MessageDisclaimer>
                  </form>
                </Content>
                <ContentBottom className="mobileBottom"/>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Contact;
