import { Component } from "react";


export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      creditCard: "",
      zipCode: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { total } = this.props;
    const { firstName, lastName, email, creditCard, zipCode } = this.state;

    if (!firstName || !lastName || !email || !creditCard || !zipCode) {
      alert("Input is not valid.");

    } else if (creditCard.length !== 16) {
      window.alert(`Input is not valid.
      Credit card number is not valid.`);

    } else if (zipCode.length !== 5) {
      alert(`Input is not valid.
      Zip code is not valid.`);
    } else {
      alert(
        `Yay! Purchase complete! You will be charged $${total.toFixed(2)}`,
      );
    }
  };

  handleChange = (e) => {

    this.setState({
        [e.target.name]: e.target.value,
     });
  };

  render() {
    const { firstName, lastName, email, creditCard, zipCode } = this.state;
    return (
      <form className="Form" onSubmit={this.handleSubmit}>

        <h2>Checkout</h2>

        <label htmlFor={"firstName"}>First Name</label>
        <input
          id={"firstName"}
          name="firstName"
          value={firstName}
          onChange={this.handleChange}
        />
        <label htmlFor={"lastName"}>Last Name</label>
        <input
          id={"lastName"}
          name="lastName"
          value={lastName}
          onChange={this.handleChange}
        />
        <label htmlFor={"email"}>Email</label>
        <input
          id={"email"}
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <label htmlFor={"creditCard"}>Credit Card</label>
        <input
          id={"creditCard"}
          name="creditCard"
          value={creditCard}
          onChange={this.handleChange}
        />
        <label htmlFor={"zipCode"}>Zip Code</label>
        <input
          id={"zipCode"}
          name="zipCode"
          value={zipCode}
          onChange={this.handleChange}
        />
        <button type="submit">Buy Now</button>
      </form>
    );
  }
}
