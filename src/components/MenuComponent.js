import React from "react";
// import DishDetail from "../components/DishDetailComponent";
// import { Media } from "reactstrap";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import "../App.css";
// import { renderIntoDocument } from "react-dom/test-utils";

function RenderMenuItem({ dish, onClick }) {
 return (
  <Card onClick={() => onClick(dish.id)}>
   <CardImg width="100%" src={dish.image} alt={dish.name} />
   <CardImgOverlay>
    <CardTitle>{dish.name}</CardTitle>
   </CardImgOverlay>
  </Card>
 );
}

const Menu = (props) => {
 const menu = props.dishes.map((dish) => {
  return (
   <div className="col-12 col-md-5 mt-4" key={dish.id}>
    <RenderMenuItem dish={dish} onClick={props.onClick} />
   </div>
  );
 });

 return (
  <div className="container">
   <div className="row">{menu}</div>
  </div>
 );
};

export default Menu;
