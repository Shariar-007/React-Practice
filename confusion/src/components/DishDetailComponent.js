import React, {Component} from "react";
import {Card, CardBody, CardImg, CardText, CardTitle, List, Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link} from 'react-router-dom';

// import dateFormat from "dateformat";

// function renderComments(comments) {
//     console.log(comments);
//     const commentList = comments.map((comment) => {
//         return (
//             <li>
//                 <p>{comment.comment}</p>
//                 <h6>{comment.author}, {new Intl.DateTimeFormat("en-US", {
//                     year: 'numeric',
//                     month: 'short',
//                     day: '2-digit'
//                 }).format(new Date(Date.parse(comment.date)))}</h6>
//             </li>
//         );
//     });
//
//     if (comments?.length > 0) {
//         return (
//             <List type="unstyled">
//                 <h4>Comments</h4>
//                 {commentList}
//             </List>
//         );
//     } else {
//         return (
//             <div></div>
//         );
//     }
// }


// function RenderDish(dish) {
//     console.log(dish)
//     if (dish != null) {
//         return (
//             <Card>
//                 <CardImg top src={dish.image} alt={dish.name} width="200px"/>
//                 <CardBody>
//                     <CardTitle>{dish.name}</CardTitle>
//                     <CardText>{dish.description}</CardText>
//                 </CardBody>
//             </Card>
//         );
//     }
//     return <div></div>
// }

const DishDetail = (props) => {
    if (props.dish != null) {
        const commentList = props.comments.map((comment) => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <h6>{comment.author}, {new Intl.DateTimeFormat("en-US", {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit'
                    }).format(new Date(Date.parse(comment.date)))}</h6>
                </li>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {/*<RenderDish dish={props.dish} />*/}
                        <Card>
                            <CardImg top src={props.dish.image} alt={props.dish.name} width="200px"/>
                            <CardBody>
                                <CardTitle>{props.dish.name}</CardTitle>
                                <CardText>{props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {/*<renderComments comments={props.comments} />*/}
                        <List type="unstyled">
                            <h4>Comments</h4>
                            {props.comments?.length > 0 ? commentList : ''}
                        </List>
                    </div>
                </div>
            </div>
        );
    } else
        return (
            <div></div>
        );
}

export default DishDetail;
