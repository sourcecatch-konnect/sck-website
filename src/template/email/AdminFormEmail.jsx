import * as React from "react";

export function AdminEmail({ formType, answers }) {
  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        maxWidth: "600px",
        margin: "0 auto",
        padding: "48px 24px",
        backgroundColor: "#ffffff",
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
            margin: "0 0 8px 0",
            fontSize: "24px",
            fontWeight: "600",
            color: "#1a1a1a",
            letterSpacing: "-0.5px",
          }}
        >
          New Form Submission
        </h2>
        <p
          style={{
            margin: "0",
            fontSize: "15px",
            color: "#737373",
            paddingBottom: "24px",
            borderBottom: "1px solid #e5e5e5",
          }}
        >
          Form Type:{" "}
          <span style={{ color: "#1a1a1a", fontWeight: "500" }}>
            {formType}
          </span>
        </p>
      </div>

      <div>
        <h3
          style={{
            margin: "0 0 20px 0",
            fontSize: "16px",
            fontWeight: "600",
            color: "#1a1a1a",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            fontSize: "13px",
          }}
        >
          Responses
        </h3>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px !important",
          }}
        >
          {answers.map((a) => (
            <div
              key={a.id}
              style={{
                padding: "16px",
                backgroundColor: "#f9fafb",
                borderRadius: "6px",
                borderLeft: "3px solid #e5e5e5",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#737373",
                  marginBottom: "6px",
                  textTransform: "uppercase",
                  letterSpacing: "0.3px",
                }}
              >
                {a.label}
              </div>
              <div
                style={{
                  fontSize: "15px",
                  color: "#1a1a1a",
                  lineHeight: "1.5",
                }}
              >
                {a.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
