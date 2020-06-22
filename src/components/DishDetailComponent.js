import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";

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
     -- - <span> {elem.author}, </span> <span> {new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "2-digit" }).format(new Date(Date.parse(elem.date)))} </span>
    </div>
   );
  });

  class AddComment extends Component {
   constructor(props) {
    super(props);

    this.state = {
     isCommentModalOpen: false,
    };

    this.toggleCommentModal = this.toggleCommentModal.bind(this);
    this.handleDishComment = this.handleDishComment.bind(this);
   }

   toggleCommentModal() {
    this.setState({
     isCommentModalOpen: !this.state.isCommentModalOpen,
    });
   }

   handleDishComment(event) {
    this.toggleCommentModal();
    alert("Rating: " + this.rating.value + " Author: " + this.author.value + " Comment: " + this.comment.value);
    event.preventDefault();
   }

   render() {
    return (
     <div>
      <Button className="btn btn-lg btn-dark mt-3" onClick={this.toggleCommentModal}>
       <span className="fa fa-pencil"></span>&nbsp; Comment
      </Button>
      <Modal isOpen={this.state.isCommentModalOpen} toggle={this.toggleCommentModal}>
       <ModalHeader className=" bg-warning" toggle={this.toggleCommentModal}>
        Add Comment
       </ModalHeader>
       <ModalBody>
        <Form onSubmit={this.handleDishComment}>
         <FormGroup select>
          <Label htmlFor="rating">Rating</Label>
          <Input type="select" id="rating" name="rating" innerRef={(input) => (this.rating = input)}>
           <option>1</option>
           <option>2</option>
           <option>3</option>
           <option>4</option>
           <option>5</option>
          </Input>
         </FormGroup>
         <FormGroup>
          <Label htmlFor="author">Comment Author</Label>
          <Input type="text" id="author" name="author" innerRef={(input) => (this.author = input)} />
         </FormGroup>
         <FormGroup>
          <Label htmlFor="comment">Your Comment</Label>
          <Input type="textarea" name="comment" id="comment" innerRef={(input) => (this.comment = input)} />
         </FormGroup>

         <Button className="ml-auto" type="submit" value="submit" color="primary">
          Submit Comment
         </Button>
        </Form>
       </ModalBody>
      </Modal>
     </div>
    );
   }
  }

  return (
   <div>
    <h4> Comments </h4> <div> {dishComments} </div>
    <div>
     <AddComment />
    </div>
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
     <Breadcrumb>
      <BreadcrumbItem>
       <Link to="/menu"> Menu </Link>
      </BreadcrumbItem>
      <BreadcrumbItem active> {props.dish.name} </BreadcrumbItem>
     </Breadcrumb>
     <div className="col-12">
      <h3> {props.dish.name} </h3> <hr />
     </div>
    </div>
    <div className="row">
     <div className="col-12 col-md-5 mt-4">
      <RenderDish dish={props.dish} />
     </div>
     <div className="col-12 col-md-5 mt-4">
      <RenderComments comments={props.comments} />
     </div>
    </div>
   </div>
  );
 } else return <div> </div>;
};

export default DishDetail;
