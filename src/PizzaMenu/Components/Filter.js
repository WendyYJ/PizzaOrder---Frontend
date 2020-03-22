import React from "react";
import ".././Style/Filter.scss";
import MenuIcon from "@material-ui/icons/Menu";
import PizzaCard from "./PizzaCard";
import IngredientCard from "./IngredientCard";
import { fetchPizza } from "../../api/pizza";
import { fetchMeats } from "../../api/pizza";
import { fetchSauces } from "../../api/pizza";
import { fetchVeggies } from "../../api/pizza";
import { fetchCheeses } from "../../api/pizza";
import { PIZZAMENU_URL } from "../../routes/URLMap";
import { Button, Container, Pagination, Segment } from "semantic-ui-react";
import { get } from "../../api/axios";
import { showFilter } from '../../redux/actions/filterActions';
import { connect } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";

import ErrorMessage from "../../asset/errorMessage";
class Filter extends React.Component {
  constructor(props) {
    


  
    super(props);

    this.state = {
      pizzas: [],
      meats: [
        { id: "beef", isChecked: false },
        { id: "pork", isChecked: false }
      ],
      sauces: [{ isChecked: false }],
      veggies: [{ isChecked: false }],
      cheeses: [{ isChecked: false }],
      error: null,
      isLoading: false,
      isFiltering: false,
      pagination: {},
   
    };
  }

  

  componentDidMount() {
    this.loadPizzas();
    this.loadMeats();
    this.loadSauces();
    this.loadVeggies();
    this.loadCheeses();
  }
  loadPizzas = page => {
    this.setState({ isLoading: true, pizzas: [] }, () => {
      fetchPizza(page)
        .then(pizzaData => {
          this.setState({
            pizzas: pizzaData.pizzas,
            isLoading: false,
            pagination: pizzaData.pagination
          });
        })
        .catch(error => {
          this.setState({ error, isLoading: false });
        });
    });
  };

  filterPizza = () => {
    console.log(this.state.meats[1].isChecked);
    const meatlist = this.state.meats;
    const veggielist = this.state.veggies;
    const saucelist = this.state.sauces;
    const cheeselist = this.state.cheeses;
    const filterlist = [];
    for (var i = 0; i < meatlist.length; i++) {
      if (meatlist[i].isChecked == true) {
        filterlist.push(meatlist[i].id);
      }
    }
    for (var i = 0; i < saucelist.length; i++) {
      if (saucelist[i].isChecked == true) {
        filterlist.push(saucelist[i].id);
      }
    }
    for (var i = 0; i < veggielist.length; i++) {
      if (veggielist[i].isChecked == true) {
        filterlist.push(veggielist[i].id);
      }
    }
    for (var i = 0; i < cheeselist.length; i++) {
      if (cheeselist[i].isChecked == true) {
        filterlist.push(cheeselist[i].id);
      }
    }
    const filterstring = filterlist.toString();
    console.log(filterlist);
    const url = `http://pizzadeploy-env.dn37p3zqw3.ap-southeast-2.elasticbeanstalk.com/pizza/filter?ingr=${filterstring}`;
    console.log(url);
  
    this.setState({ isLoading: true, isFiltering: true, pizzas: [] }, () => {
      return get(url)
        .then(res => res.data.data)
        .then(pizzas => {
          this.setState({
            pizzas,
            isLoading: false,
            isFiltering: true
          });
        })
        .catch(error => {
          this.setState({ error, isLoading: false });
        });
    });
   
  };

 

  handleOnChange = (event, category) => {
    const id = event.target.id;
    console.log(id);
    const boo1 = event.target.checked;
    if (boo1) {
      category.isChecked = true;
    } else {
      category.isChecked = false;
    }

    console.log(category.isChecked);
  };

  loadMeats = () => {
    this.setState({ isLoading: true, meats: [] }, () => {
      fetchMeats()
        .then(meats => {
          const mappedMeats = meats.map(meat => ({
            id: meat._id,
            meatName: meat.IngredientName,
            isChecked: false
          }));

          this.setState({
            meats: mappedMeats,
            isLoading: false
          });
        })
        .catch(error => {
          this.setState({ error, isLoading: false });
        });
    });
  };

  loadSauces = () => {
    this.setState({ isLoading: true, sauces: [] }, () => {
      fetchSauces()
        .then(sauces => {
          const mappedSauces = sauces.map(sauce => ({
            id: sauce._id,
            sauceName: sauce.IngredientName,
            isChecked: false
          }));

          this.setState({ sauces: mappedSauces, isLoading: false });
        })
        .catch(error => {
          this.setState({ error, isLoading: false });
        });
    });
  };

  loadVeggies = () => {
    this.setState({ isLoading: true, veggies: [] }, () => {
      fetchVeggies()
        .then(veggies => {
          const mappedVeggies = veggies.map(veggie => ({
            id: veggie._id,
            veggieName: veggie.IngredientName,
            isChecked: false
          }));

          this.setState({ veggies: mappedVeggies, isLoading: false });
        })
        .catch(error => {
          this.setState({ error, isLoading: false });
        });
    });
  };

  loadCheeses = () => {
    this.setState({ isLoading: true, cheeses: [] }, () => {
      fetchCheeses()
        .then(cheeses => {
          const mappedCheeses = cheeses.map(cheese => ({
            id: cheese._id,
            cheeseName: cheese.IngredientName,
            isChecked: false
          }));

          this.setState({ cheeses: mappedCheeses, isLoading: false });
        })
        .catch(error => {
          this.setState({ error, isLoading: false });
        });
    });
  };

  handlePageChange = (_, { activePage }) => {
    this.loadPizzas(activePage);
  };

  render() {
    return (
      <section className="maincontainer">
        <div className="headercontainer" >
          <div className="iconcontainer">
            <MenuIcon fontSize="small" className="icon" onClick={this.props.showFilter}/>
          </div>
          <div>
            <h4 onClick={this.props.showFilter}>FILTER</h4>
          </div>
        </div>

        {this.props.showfilter ? (
        <section className="filtercontainer">
          <div className="checkboxcontainer">
            <div className="checkboxlists">
              <h1>MEATS</h1>
              {this.state.meats.map(ingredients => (
                <IngredientCard
                  id={ingredients.id}
                  isChecked={ingredients.isChecked}
                  ingredientName={ingredients.meatName}
                  key={ingredients.id}
                  onChange={event => this.handleOnChange(event, ingredients)}
                />
              ))}
            </div>

            <div className="checkboxlists">
              <h1>SAUCES</h1>
              {this.state.sauces.map(ingredients => (
                <IngredientCard
                  id={ingredients.id}
                  isChecked={ingredients.isChecked}
                  ingredientName={ingredients.sauceName}
                  key={ingredients._id}
                  onChange={event => this.handleOnChange(event, ingredients)}
                />
              ))}
            </div>

            <div className="checkboxlists">
              <h1>CHEESES</h1>
              {this.state.cheeses.map(ingredients => (
                <IngredientCard
                  id={ingredients.id}
                  isChecked={ingredients.isChecked}
                  ingredientName={ingredients.cheeseName}
                  key={ingredients._id}
                  onChange={event => this.handleOnChange(event, ingredients)}
                />
              ))}
            </div>

            <div className="checkboxlists">
              <h1>VEGGIES</h1>
              {this.state.veggies.map(ingredients => (
                <IngredientCard
                  id={ingredients.id}
                  isChecked={ingredients.isChecked}
                  ingredientName={ingredients.veggieName}
                  key={ingredients._id}
                  onChange={event => this.handleOnChange(event, ingredients)}
                />
              ))}
            </div>
          </div>

          <div className="btncontainer">
            <button onClick={() => this.filterPizza()} className="filter-btn">
              FILTER SELECTED
            </button>
          </div>
        </section>
        ):null}
   
        <Segment basic loading={this.state.isLoading}>
      
          <div className="pizzacontainer">
            {this.state.pizzas.map(pizza => (
              <PizzaCard
                pizzaDescription={pizza.Description}
                pizzaImage={pizza.PizzaImage}
                pizzaName={pizza.PizzaName}
                pizzaPrice={pizza.UnitPrice}
                key={pizza._id}
                to={`${PIZZAMENU_URL}/${pizza._id}`}
              />
            ))}
          </div>
          
        </Segment>
        {this.state.pagination && this.state.pagination.page && (
          <Pagination  className="pizza-page" variant="outlined"
            activePage={this.state.pagination.page}
            totalPages={this.state.pagination.pages}
            onPageChange={this.handlePageChange}
          />
        )}
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  showFilter: () => dispatch(showFilter()),
});

const mapStateToProps = (state) => ({
  showfilter: state.filter.showfilter,
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
