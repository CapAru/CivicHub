import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const SubmitIssue = () => {
  return (
    <div className="page-container">
      <div className="form-container">
        <h1>SUBMIT A NEW ISSUE</h1>
        <div
          className="form-section"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <div className="map-btn" style={{ textAlign: "center" }}>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
            >
              <iframe
                className="map-iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29473.59193429757!2d88.28982744716636!3d22.571659637486697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02782e54099073%3A0xe230e1d0af8fa119!2sShibpur%2C%20Howrah%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1736610069849!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </a>
            <span>TAG LOCATION</span>
          </div>
          <div className="upload-btn" style={{ textAlign: "center" }}>
            <FontAwesomeIcon icon={faUpload} style={{ fontSize: "24px" }} />
            <span>
              UPLOAD EVIDENCE
              <br />
              (jpeg/jpg, png)
            </span>
          </div>
        </div>
        <div
          className="input-container"
          style={{ textAlign: "center", width: "100%" }}
        >
          <input
            type="text"
            placeholder="Title*"
            required
            style={{ width: "94%", padding: "10px", marginBottom: "10px" }}
          />
        </div>
        <div
          className="textarea-container"
          style={{ textAlign: "center", width: "100%" }}
        >
          <textarea
            rows="4"
            placeholder="Description"
            required
            style={{ width: "94%", padding: "10px", marginBottom: "10px" }}
          ></textarea>
        </div>
        <div
          className="button-container"
          style={{ textAlign: "center", width: "100%" }}
        >
          <button
            className="submit-btn"
            style={{ padding: "10px 20px", cursor: "pointer" }}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitIssue;
