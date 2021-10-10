import React, {Component} from "react";
import {Card, CardBody, CardImg, CardText, CardTitle, List} from "reactstrap";
// import dateFormat from "dateformat";

   function renderComments(comments) {
        const commentList = comments.map((comment) => {
            return (
                <li>
                    <p>{comment.comment}</p>
                    {/*<h5>--{comment.author}, {dateFormat(comment.date, "mmm dS, yyyy")}</h5>*/}
                    <h5>--{comment.author}, {new Intl.DateTimeFormat("en-US", {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit'
                    }).format(new Date(Date.parse(comment.date)))}</h5>
                </li>
            );
        });

        if (comments != null)
            return (
                <List type="unstyled">
                    <h4>Comments</h4>
                    {commentList}
                </List>
            );
        else
            return (
                <div></div>
            );
    }


    function RenderDish(dish){
       return (
           <Card>
               <CardImg top src={dish.image} alt={dish.name}/>
               <CardBody>
                   <CardTitle>{dish.name}</CardTitle>
                   <CardText>{dish.description}</CardText>
               </CardBody>
           </Card>
       );
    }

    const DishDetail = (props) => {
        if (props.selectedDish != null)
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {RenderDish(props.selectedDish)}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {renderComments(props.selectedDish.comments)}
                        </div>
                    </div>
                </div>
            );
        else
            return (
                <div></div>
            );
    }

export default DishDetail;
