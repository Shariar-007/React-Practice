import React, {Component} from "react";
import {Navbar, NavbarBrand} from 'reactstrap';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import DishDetail from './DishDetailComponent'
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import {Switch, Route, Redirect} from "react-router-dom";

class Main extends Component {
    constructor(pros) {
        super(pros);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }

    onDishSelect(dishId) {
        this.setState({selectedDish: dishId});
    }

    render() {

        const HomePage = () => {
            return (
                <Home/>
            );
        }


        return (
            <div>
                <Header/>
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>}/>
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
