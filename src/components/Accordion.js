import React, { Fragment } from "react";
import Faq from "react-faq-component";
import data from "./data";
import styled from "styled-components";
export default function App() {

  return (
    <AccordionContainer>
      <header className="section-header">
        <h3>Tez-tez verilən suallar</h3>
      </header>
      <Fragment>
        <Faq
          data={data}
          styles={{
            bgColor: "white",
            titleTextColor: "#48482a",
            rowTitleColor: "#78789a",
            rowTitleTextSize: "large",
            rowContentColor: "#48484a",
            rowContentTextSize: "16px",
            rowContentPaddingTop: "10px",
            rowContentPaddingBottom: "10px",
            rowContentPaddingLeft: "160px",
            rowContentPaddingRight: "160px",
            rowContentMarginLeft: "40px",
            arrowColor: "red",
          }}
          config={{
            animate: true,
          }}
        />
      </Fragment>
    </AccordionContainer>
  );
}

const AccordionContainer = styled.div`
padding: 50px;




  .section-header h3 {
    font-size: 36px;
    color: black;
    text-align: center;
    font-weight: 700;
    font-family: "Montserrat", sans-serif;
  }
  .icon {
    background: #fceef3;
  }
  .section-header p {
    text-align: center;
    margin: auto;
    font-size: 15px;
    color: #535074;
    width: 50%;
  }
  a {
    text-decoration: none;
  }
`;
