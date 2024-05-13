import React from "react";
import { Link } from "react-router-dom";
function BlogPost({
  image,
  title,
  author,
  publishedDate,
  category,
  detail,
  sizeClass,
}) {
  return (
    <>
      <div className="h-entry">
        <img className={`img-fluid rounded ${sizeClass}`} src={image} />
        <h2 className="font-size-regular">
          <Link to="/" className="text-black text-decoration-none mb-3">
            {title}
          </Link>
          <div className="meta  mb-3">
            by {author}
            <span className="mx-1">.</span>
            {publishedDate}
            <span className="mx-1">.</span>
            <Link to="/" className="text-decoration-none">
              {category}
            </Link>
          </div>
          <p className="today-paragragh">{detail}</p>
        </h2>
      </div>
    </>
  );
}
export default BlogPost;
