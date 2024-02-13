import React, { useState, Component, Fragment, useEffect } from "react";
import { ReactTyped } from "react-typed";

// import BaseLayout from "./BaseLayout";
import { Container, Row, Col, Button } from "reactstrap";
// import { Button } from "@mui/material";

export function HomeLoaderFunction() {
  const [isFlipping, setIsFlipping] = useState(false);
  const [colorClass, setColorClass] = useState("");

  const roles = [
    "ORL, Allergies",
    "Stress, Sommeil, Fatigue",
    "Vitamines, Minéraux et Oligo-éléments",
    "Muscles et Articulations",
    "Troubles féminins, Grossesse, Ménopause",
    "Peau, Cheveaux et Ongles",
  ];

  const colors = ["green", "blue", "red"];

  let i = 0;

  useEffect(() => {
    // animateCard();

    const intervalID = setInterval(() => {
      setIsFlipping((isFlipping) => !isFlipping);
      if (i < 3) {
        setColorClass(colors[i]);
        i++;
      } else {
        if ((i = 3)) {
          i = 0;
        }
      }
    }, 3000);

    return () => clearInterval(intervalID);
  }, []);

  // componentWillUnmount() {
  //   this.cardAnimationInterval && clearInterval(this.cardAnimationInterval);
  // }

  function animateCard() {
    // this.cardAnimationInterval = setInterval(() => {
    setInterval(() => {
      setIsFlipping(!isFlipping);
    }, 5000);
    console.log("isFlipping");
    console.log(isFlipping);
    //   setIsFlipping(
    //     !isFlipping
    //   );
    // },
    // 10000);
  }

  // componentWillUnmount() {
  //   this.setState({ isFlipping: '' });
  // }

  // const { isAuthenticated, user } = this.props.auth;

  return (
    // <BaseLayout
    //   className={`cover ${isFlipping ? "cover-1" : "cover-0"}`}
    //   {...this.props.auth}
    //   headerType="index"
    //   title="Popescu Daniel - Portfolio"
    // >
    <div className={`base-page base-page-${colorClass}`}>
      <Container className="containerClass">
        <div className="main-section">
          <div className="background-image">
            <img src="./static/images/background-index.png" />
          </div>

          {/* <ReactTyped
        startWhenVisible
        strings={[
          "If <strong>startWhenVisible</strong> is <strong>true</strong>, will start when is visible in the dom",
        ]}
        typeSpeed={40}
      /> */}

          <>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper ${isFlipping ? "isFlipping" : ""}`}>
                    <div className="front">
                      <div className="hero-section-content">
                        <h2> Bilan Santé </h2>
                        <div className="hero-section-content-intro">
                          Veuillez découvrir notre vitrine digitale et réalisez
                          un bilan santé gratuit
                        </div>
                      </div>
                      <img
                        className="image"
                        src="./static/images/section-1.jpg"
                      />
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> Bilan Santé </h2>
                        <div className="hero-section-content-intro">
                          Veuillez découvrir notre vitrine digitale et réalisez
                          un bilan santé gratuit
                        </div>
                      </div>
                      <img
                        className="image"
                        src="./static/images/section-2.jpg"
                      />
                      <div className="shadow-custom shadow-custom-2">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="5" className="hero-welcome-wrapper">
                <div className="hero-welcome-bio">
                  {/* <h1>Let's take a look on my work.</h1> */}
                  <Button
                    color="primary"
                    size="lg"
                    style={{ border: "2px solid white" }}
                  >
                    Commencez mon Bilan Santé
                  </Button>
                </div>
                <div className="hero-welcome-text">
                  <h1>
                    {/* <span>
                      Welcome, <b>user.name</b>
                      <br />
                    </span> */}
                    trouvez nos conseils et recommandations sur les sujets
                    suivants :
                  </h1>
                </div>

                <ReactTyped
                  loop
                  typeSpeed={60}
                  backSpeed={60}
                  strings={roles}
                  shuffle={false}
                  backDelay={1000}
                  fadeOut={false}
                  fadeOutDelay={100}
                  loopCount={0}
                  showCursor
                  cursorChar="|"
                  className="self-typed"
                />
              </Col>
            </Row>
          </>
        </div>
      </Container>
    </div>
  );
}

// export default HomeLoader;
