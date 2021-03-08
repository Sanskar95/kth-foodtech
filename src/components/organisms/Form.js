import React from 'react';
import './Form.css';
import CardButton from '../atoms/CardButton';
import 'aos/dist/aos.css';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: '',
      name: '',
      email: '',
      mailErrorMessage: ' ',
      sendMailMessage: '',
      nameErrorMessage: '',
    };
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMailBlur = this.handleMailBlur.bind(this);
    this.handleNameBlur = this.handleNameBlur.bind(this);
  }

  render() {
    return (
      <div className="form-container" data-aos="fade-down">
        <h1 className="text-center">

          Please feel free to contact us.
        </h1>
        <form className="registration-form">
          <div>
            <label className="col-one-half">
              <div className="span-container">
                <span className="label-text">Name</span>
                <span className="error-message">{this.state.nameErrorMessage}</span>
              </div>
              <input type="text" value={this.state.name} onChange={this.handleNameChange} onBlur={this.handleNameBlur} />
            </label>
            <label className="col-one-half">
              <div className="span-container">
                <span className="label-text">Email</span>
                <span className="error-message">{this.state.mailErrorMessage}</span>
              </div>
              <input type="email" value={this.state.email} onChange={this.handleEmailChange} onBlur={this.handleMailBlur} />
            </label>
            <label>
              <span className="label-text">Message</span>
              <textarea id="test-mailing" name="test-mailing" onChange={this.handleTextareaChange} required value={this.state.feedback} />
            </label>
          </div>
          <div className="myButton">
            <p className="send-email">{this.state.sendMailMessage}</p>
            <CardButton type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit}>
              Send
            </CardButton>
          </div>
        </form>
      </div>
    );
  }

  handleTextareaChange(event) {
    this.setState({ feedback: event.target.value });
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
    if (event.target.value.indexOf('@') > -1) {
      this.setState({ mailErrorMessage: '' });
    }
  }
  handleMailBlur(e) {
    if (e.target.value.length > 0) {
      if (e.target.value.indexOf('@') === -1) {
        this.setState({
          mailErrorMessage: `"${e.target.value}" address is invalid.`,
        });
      } else if (e.target.value.indexOf('@') > -1) {
        if (e.target.value.indexOf('@') + 1 === e.target.value.length) {
          this.setState({
            mailErrorMessage: `Invalid email address. "${e.target.value}" address is incomplete.`,
          });
        } else this.setState({ mailErrorMessage: '' });
      } else this.setState({ mailErrorMessage: '' });
    } else this.setState({ mailErrorMessage: '' });
  }
  handleNameBlur(e) {
    if (e.target.value.length > 0) {
      if (e.target.value.length < 3) {
        this.setState({
          nameErrorMessage: 'Name should consist of at least 3 letters',
        });
      } else this.setState({ nameErrorMessage: '' });
    } else this.setState({ nameErrorMessage: '' });
  }

  handleSubmit(e) {
    e.preventDefault();
    const inputMail = document.querySelector(`input[type="email"]`);
    const inputName = document.querySelector(`input[type="text"]`);
    if (inputName.value.length < 3) {
      this.setState({
        nameErrorMessage: 'Name should consist of at least 3 letters.',
      });
    }
    if (inputMail.value.length === 0) {
      this.setState({ mailErrorMessage: `Invalid email address.` });
    }

    if (inputName.value.length > 3 && inputMail.value.length !== 0 && this.state.mailErrorMessage === '' && this.state.nameErrorMessage === '') {
      const templateId = 'template_eCSPuxEA';
      this.sendFeedback(templateId, {
        message_html: this.state.feedback,
        from_name: this.state.name,
        reply_to: this.state.email,
      });
    }
  }

  sendFeedback(templateId, variables) {
    window.emailjs
      .send('gmail', templateId, variables)
      .then((res) => {
        this.setState({ sendMailMessage: 'Email successfully sent!' });
        setTimeout(() => {
          this.setState({ feedback: '' });
          this.setState({ name: '' });
          this.setState({ email: '' });
          this.setState({ sendMailMessage: '' });
        }, 2000);
      })
      .catch((err) => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err));
  }
}
