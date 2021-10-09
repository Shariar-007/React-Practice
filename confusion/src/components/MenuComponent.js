import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle, CardText} from "reactstrap";
import DishDetail from './DishDetailComponent'


class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id} onClick={()=> this.onDishSelect(dish)}>
                        <CardImg src={dish.image} alt={dish.name} width="100%"/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                     {menu}
                </div>
                <DishDetail selectedDish={this.state.selectedDish}/>
            </div>
        );
    }
}

export default Menu;
