import "./_testimonial.scss";
import React, { type FC } from "react";
import { type TestimonialProps } from "./Testimonial.type";

const Testimonial: FC<TestimonialProps> = ({
  comment,
  userName,
  position,
  className,
}) => {
  return (
    <div className={`testimonial ${className}`}>
      <div className="testimonialUser">
        <div className="testimonialUserName">{userName}</div>
        <div className="testimonialUserPos">{position}</div>
      </div>
      <div className="testimonialComment">{comment}</div>
    </div>
  );
};

export default Testimonial;
