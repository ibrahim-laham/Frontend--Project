import {
  BsFacebook,
  BsYoutube,
  BsReddit,
  BsTwitter,
  BsInstagram,
} from "react-icons/bs";

import Stack from "react-bootstrap/Stack";

import Logo from "../Assets/logo3_transparent.png";

export default function Footer() {
  return (
    <Stack
      style={{ backgroundColor: "#060b1f" }}
      gap={2}
      className="text-warning p-5 h-25 position-relative bottom-0"
    >
      <div className="d-flex flex-row justify-content-center gap-5 fs-1 ">
        <BsFacebook />
        <BsYoutube />
        <BsReddit />
        <BsTwitter />
        <BsInstagram />
      </div>
      <div>
        <p>
          The content of this Website is copyright protected and belongs to
          I&#x26;B
        </p>
        <img
          style={{ width: "5vw" }}
          className="rounded"
          src={Logo}
          alt="logo"
        ></img>
        <p>Germany | &#x20AC;</p>
      </div>
    </Stack>
  );
}
