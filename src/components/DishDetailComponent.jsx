import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
 constructor(props) {
  super(props);
  this.state = {
   dish: this.props.selectedDish,
  };
 }

 renderDish(dish) {
  if (dish != null) {
   return (
    <Card>
     <CardImg top src={dish.image} alt={dish.name} />
     <CardBody>
      <CardTitle>{dish.name}</CardTitle>
      <CardText>{dish.description}</CardText>
     </CardBody>
    </Card>
   );
  }
  // else return <div></div>;
 }

 renderComments(dish) {
  if (dish != null) {
   const dishComments = dish.comments.map((elem) => {
    return (
     <div>
      <br />
      <p>{elem.comment}</p>
      --- <span>{elem.author}, </span>
      <span>{elem.date}</span>
     </div>
    );
   });

   return (
    <div>
     <h4>Comments</h4>
     <div>{dishComments}</div>
    </div>
   );
  }
  // else return <div></div>;
 }

 render() {
  return (
   <div className="row">
    <div className="col-12 col-md-5 mt-4">{this.renderDish(this.props.selectedDish)}</div>
    <div className="col-12 col-md-5 mt-4">{this.renderComments(this.props.selectedDish)}</div>
   </div>
  );
 }
}

export default DishDetail;
