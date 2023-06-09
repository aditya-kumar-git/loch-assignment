import { LochLogoIcon } from "src/Assets/Icons";
import "./_signUpTestimonials.scss";
import React, { type FC } from "react";
import { Testimonial } from "src/Components/atom";

const SignUpTestimonials: FC = () => {
  let position = { top: 0, left: 0, x: 0, y: 0 };

  const mouseDownHandler = function (event: any) {
    const ele = document.getElementById("container");

    if (ele) {
      ele.style.cursor = "grabbing";
      ele.style.userSelect = "none";
    }

    position = {
      left: ele ? ele.scrollLeft : 0,
      top: ele ? ele.scrollTop : 0,
      x: event.clientX,
      y: event.clientY,
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };
  const mouseMoveHandler = function (event: any) {
    const ele = document.getElementById("container");
    const dx = event.clientX - position.x;
    const dy = event.clientY - position.y;

    if (ele) {
      ele.scrollTop = position.top - dy;
      ele.scrollLeft = position.left - dx;
    }
  };
  const mouseUpHandler = function () {
    const ele = document.getElementById("container");
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
    if (ele) {
      ele.style.cursor = "grab";
      ele.style.removeProperty("user-select");
    }
  };

  return (
    <div className="signUpTestimonialsContainer">
      <div className="signUpTestimonialsHeader">Testimonials</div>
      <div className="signUpTestimonials">
        <img className="signUpTIcons" src={LochLogoIcon} alt="LochLogoIcon" />
        <div
          id="container"
          onMouseDown={mouseDownHandler}
          className="signUpTComments"
        >
          <Testimonial
            userName="Jack F"
            position="Ex Blackrock PM"
            className="signUpTCommentsXmargin"
            comment="“Love how Loch integrates portfolio analytics and whale watching into one unified app.”"
          />
          <Testimonial
            userName="Yash P"
            position="Research, 3poch Crypto Hedge Fund"
            className="signUpTCommentsXmargin"
            comment="“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”"
          />
          <Testimonial
            userName="Shiv S"
            position="Co-Founder Magik Labs"
            className="signUpTCommentsXmargin"
            comment="“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpTestimonials;
