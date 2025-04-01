"use client"; // Add this at the top to mark this file as a Client Component

import Link from "next/link";

export default function Page() {
  return (
    <div
      style={{
        backgroundColor: "#8B9AA7", // Light greyish background
        minHeight: "100vh", // Full viewport height
        padding: "20px", // Add padding for spacing
        color: "white", // White text for contrast
        fontFamily: "Arial, sans-serif", // Clean font
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "36px",
          color: "black",
        }}
      >
        Hello World!
      </h1>
      <p
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "20px",
          color: "black",
        }}
      >
        This is a simple web page
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <p>
          Link to week 2:{" "}
          <Link href="week-2">
            <span className="link-style">Week 2</span>
          </Link>
        </p>
        <p>
          Link to week 3:{" "}
          <Link href="week-3">
            <span className="link-style">Week 3</span>
          </Link>
        </p>
        <p>
          Link to week 4:{" "}
          <Link href="week-4">
            <span className="link-style">Week 4</span>
          </Link>
        </p>
        <p>
          Link to week 5:{" "}
          <Link href="week-5">
            <span className="link-style">Week 5</span>
          </Link>
        </p>
        <p>
          Link to week 6:{" "}
          <Link href="week-6">
            <span className="link-style">Week 6</span>
          </Link>
        </p>
        <p>
          Link to week 7:{" "}
          <Link href="week-7">
            <span className="link-style">Week 7</span>
          </Link>
        </p>
        <p>
          Link to week 8:{" "}
          <Link href="week-8">
            <span className="link-style">Week 8</span>
          </Link>
        </p>
        <p>
          Link to week 9:{" "}
          <Link href="week-9">
            <span className="link-style">Week 9</span>
          </Link>
        </p>
        <p>
          Link to week 10:{" "}
          <Link href="week-10">
            <span className="link-style">Week 10</span>
          </Link>
        </p>
      </div>

      <style jsx>{`
        .link-style {
          color: white;
          font-size: 16px;
          transition: color 0.3s, font-size 0.3s;
        }

        .link-style:hover {
          color: black;
          font-size: 18px;
        }
      `}</style>
    </div>
  );
}
