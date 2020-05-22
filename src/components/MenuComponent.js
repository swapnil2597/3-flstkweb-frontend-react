import React, { Component } from "react";
// import DishDetail from "../components/DishDetailComponent";
// import { Media } from "reactstrap";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";
import "../App.css";
import { renderIntoDocument } from "react-dom/test-utils";

class Menu extends Component {
 constructor(props) {
  super(props);
  this.state = {};
 }

 render() {
  const menu = this.props.dishes.map((dish) => {
   return (
    <div className="col-12 col-md-5 mt-4">
     <Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay className="card-overlay">
       <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
     </Card>
    </div>
   );
  });

  return (
   <div className="container">
    <div className="row">{menu}</div>
    {/* <div className="">
     <DishDetail selectedDish={this.state.selectedDish} />
    </div> */}
   </div>
  );
 }
}

export default Menu;
