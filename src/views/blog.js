import React from "react";
import BlogPost from "../Components/BlogPost/BlogPost";
import Header from "../Components/Header";
import house from "../assets/img/house.jpg.webp";
import car from "../assets/img/car.jpg.webp";
import "..//assets/css/blog.css";
import mbljpg from "../assets/img/mbljpg.webp";
import Footer from "../Components/Footer/Footer";

function Blog() {
  return (
    <>
      <Header title={"Blog"} />
      <div className="container blog-container">
        <div className="row mt-3">
          <div className="col-md-8">
            <div className="row mb-3">
              <div className=" col-md-6 col-lg-6">
                <BlogPost
                  image={car}
                  sizeClass={"blog-img-resize"}
                  title={"Many people selling online"}
                  author={"Mark Spiker"}
                  publishedDate={" Jan 18, 2019"}
                  category={"New"}
                  detail={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius."
                  }
                />
              </div>
              <div className=" col-md-6 col-lg-6">
                <BlogPost
                  image={house}
                  sizeClass={"blog-img-resize"}
                  title={"Many people selling online"}
                  author={"Mark Spiker"}
                  publishedDate={" Jan 18, 2019"}
                  category={"New"}
                  detail={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius."
                  }
                />
              </div>
              <div className=" col-md-6 col-lg-6">
                <BlogPost
                  image={mbljpg}
                  sizeClass={"blog-img-resize"}
                  title={"Many people selling online"}
                  author={"Mark Spiker"}
                  publishedDate={" Jan 18, 2019"}
                  category={"New"}
                  detail={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius."
                  }
                />
              </div>
              <div className=" col-md-6 col-lg-6">
                <BlogPost
                  image={car}
                  sizeClass={"blog-img-resize"}
                  title={"Many people selling online"}
                  author={"Mark Spiker"}
                  publishedDate={" Jan 18, 2019"}
                  category={"New"}
                  detail={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius."
                  }
                />
              </div>
              <div className=" col-md-6 col-lg-6">
                <BlogPost
                  image={house}
                  sizeClass={"blog-img-resize"}
                  title={"Many people selling online"}
                  author={"Mark Spiker"}
                  publishedDate={" Jan 18, 2019"}
                  category={"New"}
                  detail={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius."
                  }
                />
              </div>
              <div className=" col-md-6 col-lg-6">
                <BlogPost
                  image={mbljpg}
                  sizeClass={"blog-img-resize"}
                  title={"Many people selling online"}
                  author={"Mark Spiker"}
                  publishedDate={" Jan 18, 2019"}
                  category={"New"}
                  detail={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius."
                  }
                />
              </div>
              <div className=" col-md-6 col-lg-6">
                <BlogPost
                  image={car}
                  sizeClass={"blog-img-resize"}
                  title={"Many people selling online"}
                  author={"Mark Spiker"}
                  publishedDate={" Jan 18, 2019"}
                  category={"New"}
                  detail={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius."
                  }
                />
              </div>
              <div className=" col-md-6 col-lg-6">
                <BlogPost
                  image={house}
                  sizeClass={"blog-img-resize"}
                  title={"Many people selling online"}
                  author={"Mark Spiker"}
                  publishedDate={" Jan 18, 2019"}
                  category={"New"}
                  detail={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius."
                  }
                />
              </div>
              <div className=" col-md-6 col-lg-6">
                <BlogPost
                  image={car}
                  sizeClass={"blog-img-resize"}
                  title={"Many people selling online"}
                  author={"Mark Spiker"}
                  publishedDate={" Jan 18, 2019"}
                  category={"New"}
                  detail={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius."
                  }
                />
              </div>
              <div className=" col-md-6 col-lg-6">
                <BlogPost
                  image={mbljpg}
                  sizeClass={"blog-img-resize"}
                  title={"Many people selling online"}
                  author={"Mark Spiker"}
                  publishedDate={" Jan 18, 2019"}
                  category={"New"}
                  detail={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius."
                  }
                />
              </div>
            </div>
          </div>
          <div className="col-md-3 ml-auto">
            <div className="search">
              <form>
                <h1 className=" fs-3">Search</h1>
                <br></br>
                <input
                  className="form-control"
                  type="text"
                  placeholder="search keyboard and hit enter...."
                />
              </form>
              <div className="popular-heading">
                <h1 className="mt-3 fs-5 ">Popular Posts</h1>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Quaerat rerum voluptatibus veritatis</p>
                <p>Maiores sapiente veritatis reprehenderit</p>
                <p>Natus eligendi nobis</p>
              </div>
              <div className="popular-heading">
                <h1 className="mt-3 fs-5 ">Recent Comments</h1>
                <p>
                  Joefrey <em>in</em> Lorem ipsum dolor sit amet
                </p>
                <p>
                  Joefrey <em>in</em> Quaerat rerum voluptatibus veritatis
                </p>
                <p>
                  Joefrey <em>in</em> Maiores sapiente
                </p>
                <p>
                  Joefrey <em>in</em> Natus eligendi nobiss
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Blog;
