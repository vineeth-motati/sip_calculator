import React from 'react';
import Header from './Header';
import { Container } from './Header';
import Form from './Form';
import Calcy from './Calcy';

let data;

class SIPCalculatorApp extends React.Component {
  state = {
    isDataAvailable: false,
    reRender: 0,
  };
  render() {
    let reRender = this.state.reRender;
    let calcyComponent;
    if (reRender > 0) {
      calcyComponent = <Calcy reRender={this.state.reRender} {...data} />;
    }

    return (
      <div>
        <Header />

        {/* <div className="container"> */}
        <Container>
          <Form
            onSubmit={(formData) => {
              data = formData;
              this.setState((prevState) => ({
                isDataAvailable: true,
                reRender: prevState.reRender + 1,
              }));
            }}
          />
          {calcyComponent}
        </Container>
        {/* </div> */}
      </div>
    );
  }
}
export default SIPCalculatorApp;
