import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../components/Slider";
import Layout from "./../components/Layout/Layout";
import "../styles/homepage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const img1 =
    "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
  const img2 =
    "https://images.unsplash.com/photo-1510936994138-07e06c7c5add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
  const img3 =
    "https://images.unsplash.com/photo-1560209617-059c0bd661ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
  const img4 =
    "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
  const img5 =
    "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
  const img6 =
    "https://images.unsplash.com/photo-1413708617479-50918bc877eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
  const img7 =
    "https://plus.unsplash.com/premium_photo-1671247953201-2fdc17af6692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
  const img8 =
    "https://tse2.mm.bing.net/th?id=OIP.aFJK4kKkItsFxIY3CDBWLQHaE8&pid=Api&P=0";
  return (
    <Layout>
      <Slider />
      <div className="home-cat row d-flex align-items-center justify-content-center">
        <h1>Category</h1>
        <div className="col-sm-3">
          <div className="Imagecontainer">
            <img src={img1} alt="Rent" style={{ width: "100%" }} />
            <button className="btn" onClick={() => navigate("/category/books")}>
              Books & Pdfs
            </button>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="Imagecontainer">
            <img src={img2} alt="Rent" style={{ width: "100%" }} />
            <button
              className="btn"
              onClick={() => navigate("/category/stationary")}
            >
              Stationary
            </button>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="Imagecontainer">
            <img src={img3} alt="Rent" style={{ width: "100%" }} />
            <button
              className="btn"
              onClick={() => navigate("/category/mobiles")}
            >
              Mobiles
            </button>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="Imagecontainer">
            <img src={img4} alt="Rent" style={{ width: "100%" }} />
            <button
              className="btn"
              onClick={() => navigate("/category/laptops")}
            >
              Laptops
            </button>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="Imagecontainer">
            <img src={img5} alt="Rent" style={{ width: "100%" }} />
            <button
              className="btn"
              onClick={() => navigate("/category/electronics")}
            >
              Electronincs
            </button>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="Imagecontainer">
            <img src={img6} alt="Rent" style={{ width: "100%" }} />
            <button
              className="btn"
              onClick={() => navigate("/category/wearables")}
            >
              Wearable
            </button>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="Imagecontainer">
            <img src={img7} alt="Rent" style={{ width: "100%" }} />
            <button
              className="btn"
              onClick={() => navigate("/category/furnitures")}
            >
              Furniture
            </button>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="Imagecontainer">
            <img src={img8} alt="Rent" style={{ width: "100%" }} />
            <button
              className="btn"
              onClick={() => navigate("/category/others")}
            >
              Others
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
