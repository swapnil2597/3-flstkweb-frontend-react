import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({ dish }) {
 if (dish != null) {
  return (
   <Card>
    <CardImg top src={dish.image} alt={dish.name} />
    <CardBody>
     <CardTitle> {dish.name} </CardTitle> <CardText> {dish.description} </CardText>
    </CardBody>
   </Card>
  );
 }
 // else return <div></div>;
}

function RenderComments({ comments }) {
 if (comments != null) {
  const dishComments = comments.map((elem) => {
   return (
    <div>
     <br />
     <p> {elem.comment} </p>
     --- <span> {elem.author}, </span>
     <span> {new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "2-digit" }).format(new Date(Date.parse(elem.date)))} </span>
    </div>
   );
  });

  return (
   <div>
    <h4> Comments </h4> <div> {dishComments} </div>
   </div>
  );
 }
 // else return <div></div>;
}

const DishDetail = (props) => {
 if (props.dish != null) {
  return (
   <div className="container">
    <div className="row">
     <div className="col-12 col-md-5 mt-4">
      <RenderDish dish={props.dish} />
     </div>
     <div className="col-12 col-md-5 mt-4">
      <RenderComments comments={props.dish.comments} />
     </div>
    </div>
   </div>
  );
 } else return <div></div>;
};

export default DishDetail;
