import React, {Component} from "react";
import {Card, CardBody, CardHeader, CardImg, CardImgOverlay, CardText, CardTitle, List} from "reactstrap";
import dateFormat from "dateformat";

class DishDetail extends Component {

    renderComments(comments) {
        const commentList = comments.map((comment) => {
            return (
                <div className="col-12">
                    <p>{comment.comment}</p>
                    <h5>--{comment.author}, {dateFormat(comment.date, "mmm dS, yyyy")}</h5>
                </div>
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

    render() {
        if (this.props.selectedDish != null)
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={this.props.selectedDish.image} alt={this.props.selectedDish.name}/>
                            <CardBody>
                                <CardTitle>{this.props.selectedDish.name}</CardTitle>
                                <CardText>{this.props.selectedDish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.selectedDish.comments)}
                    </div>
                </div>
            );
        else
            return (
                <div></div>
            );
    }
}

export default DishDetail;
