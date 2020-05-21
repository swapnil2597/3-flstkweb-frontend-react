import React, { Component } from "react";
// import { Media } from "reactstrap";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";
import { renderIntoDocument } from "react-dom/test-utils";

class Menu extends Component {
 constructor(props) {
  super(props);
  this.state = {
   selectedDish: null,
  };
 }

 onDishSelect(dish) {
  this.setState({ selectedDish: dish });
 }

 renderDish(dish) {
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
    <div className="row">
     <div className="col-12 col-md-5 mt-4">
      <Card>
       <CardImg top src={dish.image} alt={dish.name} />
       <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
       </CardBody>
      </Card>
     </div>
     <div className="col-12 col-md-5 mt-4">
      <h4>Comments</h4>
      <div>{dishComments}</div>
     </div>
    </div>
   );
  }
  // else return <div></div>;
 }

 render() {
  const menu = this.props.dishes.map((dish) => {
   return (
    <div className="col-12 col-md-5 mt-4">
     <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
       <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
     </Card>
    </div>
   );
  });

  return (
   <div className="container">
    <div className="row">{menu}</div>
    <div className="">{this.renderDish(this.state.selectedDish)}</div>
   </div>
  );
 }
}

export default Menu;
