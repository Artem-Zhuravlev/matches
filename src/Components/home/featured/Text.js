import React, { Component } from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";

import FeaturedPlayer from "../../../Resources/images/featured_player.png";

class Text extends Component {
  state = {};

  animateNumber = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        rotate: 0
      }}
      enter={{
        opacity: [1],
        rotate: [360],
        timing: {
          duration: 1000,
          ease: easePolyOut
        }
      }}
    >
      {({ opacity, rotate }) => {
        return (
          <div
            className="featured_number"
            style={{
              opacity,
              transform: `translate(270px, 70px) rotateY(${rotate}deg)`
            }}
          >
            3
          </div>
        );
      }}
    </Animate>
  );

  animateFirst = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        rotate: 0,
        x: 503,
        y: 450
      }}
      enter={{
        opacity: [1],
        x: [281],
        y: [323],
        rotate: [360],
        timing: {
          duration: 500,
          ease: easePolyOut
        }
      }}
    >
      {({ opacity, x, y }) => {
        return (
          <div
            className="featured_first"
            style={{
              opacity,
              transform: `translate(${x}px, ${y}px)`
            }}
          >
            Legue
          </div>
        );
      }}
    </Animate>
  );

  animateSecond = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        rotate: 0,
        x: 503,
        y: 438
      }}
      enter={{
        opacity: [1],
        x: [281],
        y: [438],
        rotate: [360],
        timing: {
          duration: 500,
          delay: 300,
          ease: easePolyOut
        }
      }}
    >
      {({ opacity, x, y }) => {
        return (
          <div
            className="featured_second"
            style={{
              opacity,
              transform: `translate(${x}px, ${y}px)`
            }}
          >
            Chanpionships
          </div>
        );
      }}
    </Animate>
  );

  animatePlayer = () => (
    <Animate
      show={true}
      start={{
        opacity: 0
      }}
      enter={{
        opacity: [1],
        timing: {
          duration: 500,
          delay: 300,
          ease: easePolyOut
        }
      }}
    >
      {({ opacity }) => {
        return (
          <div
            className="featured_player"
            style={{
              opacity,
              background: `url(${FeaturedPlayer})no-repeat`,
              transform: `translate(550px, 201px)`
            }}
          />
        );
      }}
    </Animate>
  );

  render() {
    return (
      <div className="featured_text">
        {this.animatePlayer()}
        {this.animateNumber()}
        {this.animateFirst()}
        {this.animateSecond()}
      </div>
    );
  }
}

export default Text;
