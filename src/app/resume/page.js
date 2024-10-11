import React from "react";

function Page() {
  return (
    <iframe
      src="/resume.pdf"
      width="100%"
      className="h-full w-full min-h-screen"
      title="Resume"
      style={{ border: "none" }}
    ></iframe>
  );
}

export default Page;
