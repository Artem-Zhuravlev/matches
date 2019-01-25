import React, { Component } from "react";
import Stripes from "../../../Resources/images/stripes.png";
import { Tag } from "../../ui/misc";
import Reveal from "react-reveal/Reveal";

import HomeCards from "./Cards";

class MeetPlayers extends Component {
  state = {
    show: false
  };

  render() {
    return (
      <Reveal
        fraction={0.7}
        onReveal={() => {
          this.setState({
            show: true
          });
        }}
      >
        <div
          className="home_meetplayers"
          style={{
            background: `#fff url(${Stripes})`
          }}
        >
          <div className="container">
            <div className="home_meetplayers_wrapper">
              <div className="home_card_wrapper">
                <HomeCards show={this.state.show} />
              </div>
              <div className="home_text_wrapper">
                <div>
                  <Tag
                    bck="#0e1731"
                    color="#fff"
                    size="100px"
                    marginBottom="20px"
                    add={{ display: "inline-block" }}
                  >
                    Meet
                  </Tag>
                </div>
                <div>
                  <Tag
                    bck="#0e1731"
                    color="#fff"
                    size="100px"
                    marginBottom="20px"
                    add={{ display: "inline-block" }}
                  >
                    The
                  </Tag>
                </div>
                <div>
                  <Tag
                    bck="#0e1731"
                    color="#fff"
                    size="100px"
                    marginBottom="20px"
                    add={{ display: "inline-block" }}
                  >
                    Players
                  </Tag>
                </div>
                <div>
                  <Tag
                    bck="#fff"
                    color="#0e1731"
                    size="27px"
                    marginBottom="27px"
                    border="1px solid #0e1731"
                    add={{
                      display: "inline-block"
                    }}
                    link={true}
                    linkto="/the_team"
                  >
                    Meet them here
                  </Tag>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    );
  }
}

export default MeetPlayers;
