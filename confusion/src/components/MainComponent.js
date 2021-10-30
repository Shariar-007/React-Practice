import React, {Component} from "react";
import {Navbar, NavbarBrand} from 'reactstrap';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent'
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import {Switch, Route, Redirect} from "react-router-dom";
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions_';
import {LEADERS} from '../shared/leaders';
import About from "./AboutComponent";


class Main extends Component {
    constructor(pros) {
        super(pros);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS,
            // selectedDish: null
        }
    }

    // onDishSelect(dishId) {
    //     this.setState({selectedDish: dishId});
    // }

    render() {

        const HomePage = () => {
            return (
                <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                      promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                      leader={this.state.leaders.filter((leader) => leader.featured)[0]}/>
            );
        }

        const DishWithId = ({match}) => {
            return (
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
            );
        }

        const AboutPage = () => {
            return (
                <About leaders={this.state.leaders}/>
            );
        }


        return (
            <div>
                <Header/>
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                    <Route path='/menu/:dishId' component={DishWithId}/>
                    <Route exact path="/contactus" component={Contact}/>
                    <Route exact path="/aboutus" component={AboutPage}/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </div>
            // <div>
            //     <Header/>
            //     <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
            //     <DishDetail selectedDish={this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0]}/>
            //     <Footer/>
            // </div>
        );
    }
}

export default Main;
