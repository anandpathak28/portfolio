import React from "react";
import "./Project.css";
import Spin from "react-reveal/Spin";

const Project = () => {
  return (
    <>
      <div className="container project" id="proj">
        <h2 className="col-12 mt-3 mb-1 text-center">Top Recent Projects</h2>
        <hr />
        <p className="pb-3 text-center">
          👉 here are my top recent projects during my tenure
        </p>
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Booking App</span>
                  <img
                    src="https://img.freepik.com/free-photo/people-portrait-with-plane-flying-sky_23-2149520423.jpg?size=626&ext=jpg&ga=GA1.1.1887574231.1711843200&semt=ais"
                    alt="project"
                  />
                </div>
                <div className="card-image-overlay m-auto mt-3">
                  <span className="card-detail-badge">ReactJS</span>
                  <span className="card-detail-badge">ExpressJS</span>
                  <span className="card-detail-badge">NodeJS</span>
                  <span className="card-detail-badge">Postgress</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Travel & Lifestyle</h5>
                  </div>
                  <a className="ad-btn" href="view">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Ecommerce</span>
                  <img
                    src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1712707200&semt=ais"
                    alt="project"
                  />
                </div>
                <div className="card-image-overlay m-auto mt-3">
                  <span className="card-detail-badge">ReactJS</span>
                  <span className="card-detail-badge">Laravel</span>
                  <span className="card-detail-badge">MySQL</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Avashyak App</h5>
                  </div>
                  <a className="ad-btn" href="#">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">KidLib</span>
                  <img
                    src="https://i.pinimg.com/736x/d9/af/1a/d9af1af7b3d9ffc783e029d13e082846.jpg"
                    alt="project"
                  />
                </div>
                <div className="card-image-overlay m-auto mt-3">
                  <span className="card-detail-badge">React Native</span>
                  <span className="card-detail-badge">SpringBoot</span>
                  <span className="card-detail-badge">MySQL</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Kids Library</h5>
                  </div>
                  <a className="ad-btn" href="#">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Shikshit</span>
                  <img
                    src="https://img.freepik.com/free-photo/learning-education-ideas-insight-intelligence-study-concept_53876-120116.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1712707200&semt=ais"
                    alt="project"
                  />
                </div>
                <div className="card-image-overlay m-auto mt-3">
                  <span className="card-detail-badge">React Native</span>
                  <span className="card-detail-badge">ExpressJS</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Online Education</h5>
                  </div>
                  <a className="ad-btn" href="#">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">ICS</span>
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/012/494/550/small/inventory-control-system-concept-professional-manager-and-worker-are-checking-goods-and-stock-supply-inventory-management-with-goods-demand-vector.jpg"
                    alt="project"
                  />
                </div>
                <div className="card-image-overlay m-auto mt-3">
                  <span className="card-detail-badge">VB 6.0</span>
                  <span className="card-detail-badge">SQL Server</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Store Inventory Control</h5>
                  </div>
                  <a className="ad-btn" href="#">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Project;
