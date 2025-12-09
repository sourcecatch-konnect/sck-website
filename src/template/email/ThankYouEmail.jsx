import * as React from "react";

export function ThankYouEmail({ name }) {
  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        maxWidth: "600px",
        margin: "0 auto",
        padding: "48px 24px",
        backgroundColor: "#999999",
        color: "#1a1a1a",
      }}
    >
      <div
        style={{
          marginBottom: "32px",
        }}
      >
        <img
          src="https://www.sckonnect.in/_next/image?url=%2Fsck-logo.png&w=640&q=75"
          alt="SCK Logo"
          style={{
            height: "40px",
            marginBottom: "32px",
          }}
        />
        <h2
          style={{
            margin: "0",
            fontSize: "24px",
            fontWeight: "600",
            color: "#1a1a1a",
            letterSpacing: "-0.5px",
            borderBottom: "1px solid #e5e5e5",
            paddingBottom: "24px",
          }}
        >
          Thank you for your enquiry
        </h2>
      </div>

      <div style={{ lineHeight: "1.6", fontSize: "16px", color: "#525252" }}>
        <p style={{ margin: "0 0 20px 0" }}>Hey {name || "there"},</p>

        <p style={{ margin: "0 0 20px 0" }}>
          We've received your details and our team will get back to you shortly.
          We really appreciate your interest in working with us.
        </p>
      </div>

      <div
        style={{
          marginTop: "40px",
          paddingTop: "24px",
          borderTop: "1px solid #e5e5e5",
        }}
      >
        <p
          style={{
            margin: "0",
            fontSize: "15px",
            color: "#737373",
            lineHeight: "1.5",
          }}
        >
          Regards,
          <br />
          <span style={{ fontWeight: "500", color: "#1a1a1a" }}>Team SCK</span>
        </p>
      </div>
    </div>
  );
}
