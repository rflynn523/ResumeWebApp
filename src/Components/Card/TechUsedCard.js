import React from "react";
import Tooltip from "../Tooltip/Tooltip";

class TechUsedCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bg-slate bg-opacity-10 backdrop-blur-lg p-4 md:p-5 rounded-lg shadow-lg">
        <div className="text-xl font-bold mb-4 border-2 rounded-full flex items-center justify-center p-2">
          {this.props.title}
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-4 justify-evenly">
          {this.props.logos.map((logo, logoIndex) => {
            return (
              <Tooltip key={logoIndex} text={logo.tooltip}>
                <img
                  src={logo.image}
                  alt={`Image ${logoIndex + 1}`}
                  className="size-12 sm:size-16 object-contain"
                />
              </Tooltip>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TechUsedCard;
