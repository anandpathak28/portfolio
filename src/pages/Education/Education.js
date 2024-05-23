import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";

const Education = () => {
  return (
    <>
      <div className="education" id="edu">
        <h2 className="col-12 mt-3 mb-1 text-center">Education Details</h2>
        <hr />

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "White", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2010 - 2012"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">MCA</h3>
            <h4 className="vertical-timeline-element-subtitle">
              IAAMS, Ahmedabad
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "White", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2005 - 2006"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">PG D.C.S.</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Saurashtra University, Rajkot
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
