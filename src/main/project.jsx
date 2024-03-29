import React, { Component } from "react";
// import { Link } from "react-router-dom";
import DelayLink from "react-delay-link";

class Project extends Component {
  state = {};
  render() {
    const project = this.props.project;
    return (
      <DelayLink
        delay={500}
        to={`/${project.link}`}
        clickAction={this.props.fadeOut}
      >
        <div id={project.id} className={project.className}>
          {project.label}
        </div>
      </DelayLink>
    );
  }
}

export default Project;
