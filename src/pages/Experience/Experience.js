import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Experience.css";
import { SiReact } from "react-icons/si";

const Experience = () => {
  return (
    <>
      <div className="work" id="exp">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center">Work Experience</h2>
        </div>
        <hr />

        <VerticalTimeline lineColor="#138781">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#138781", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #138781" }}
            date="Mar'2022 - Sep'2023"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<SiReact />}
          >
            <h3 className="vertical-timeline-element-title">
              FrontEnd Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              INFOSYS, Pune
            </h4>
            <p>
              Worked on the existing Travel and Lifestyle Web Application of
              American Express with Micro-Frontends architecture.
              <br />
              As a team member of Frontend developers, worked on User stories
              and Defects assigned to me.
              <br /> Deployment through Jenkins, GIT operations.
              <br />
              Attended Scrum meetings, PI planning calls and Retrospectives.
              <br />
              Also was analyzing Tester’s observations (UAT) and replied them
              directly.
              <br />
              Worked on-behalf of QA for Testing of existing modules for 2
              months.
              <br />
              Conducting internal meeting “stand-up calls” on a daily basis and
              maintaining excel sheet for updated work progress & sending the
              same to the HODs.
              <br />
              Also participated in “Innovative Ideas” for current app and
              received two appreciations from American Express & Infosys
              directors for the same.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#138781", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #138781" }}
            date="Sep'2009 - Feb'2022"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<SiReact />}
          >
            <h3 className="vertical-timeline-element-title">Lead Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              CorEmage Infotech Pvt Ltd, Jamnagar
            </h4>
            <p>
              Was working as Lead Developer (later on promoted as a Director).
              <br />
              Manage/scheduling working of developers and provide the tasks/
              targets.
              <br />
              Direct dealing with Clients / Principals who are providing the
              work, on a day to day basis, and also providing them work
              commitment/ assurance with expected outcome/timely delivery.
              <br />
              Responsible for managing UI architecture. Provide training of new
              technologies/new concept to the developers.
              <br />
              Arrange PI planning meetings, retrospectives and Sprint planning.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#138781", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #138781" }}
            date="Jun'2006 - Aug'2009"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<SiReact />}
          >
            <h3 className="vertical-timeline-element-title">
              Sr.Executive (IT)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              United Liner Agencies of (India) Pvt Ltd, Jamnagar
            </h4>
            <p>
              Looked after of entire Computer Hardware / Software / Networking
              Developed various in-house software as per company need.
              <br />
              Looked after ISO-9001:2008 documentation and audits Maintenance of
              ERP system of the company. <br />
              Trained newly joined employees. <br />
              General accounting and inventory maintenance. <br />
              Procurements / Negotiations with external parties for electronic
              equipment. <br />
              Maintained daily records for goods and transportation
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
