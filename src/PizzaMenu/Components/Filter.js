import React from 'react';
import '.././Style/Filter.scss';
import MenuIcon from '@material-ui/icons/Menu';
import PizzaCard from './PizzaCard';
import IngredientCard from './IngredientCard'
import { fetchPizza } from '../../api/pizza'
import { fetchMeats } from '../../api/pizza'
import { fetchSauces } from '../../api/pizza'
import { fetchViggies } from '../../api/pizza'
import { fetchCheeses } from '../../api/pizza'
import { PIZZAMENU_URL} from '../../routes/URLMap';
import { Button, Container, Pagination, Segment } from 'semantic-ui-react';

import ErrorMessage from '../../asset/errorMessage';
class Filter extends React.Component {
	constructor(props) {
		const mockImage = 'https://sdtimes.com/wp-content/uploads/2018/03/jW4dnFtA_400x400.jpg';
        super(props);

        this.state = {
			
			pizzas: 
			[
			// 	{code:1,name:"pizza1",description:"11111",pizzaImage:mockImage,price:16.00},
			// {code:2,name:"pizza2",description:"11111",pizzaImage:mockImage,price:16.00},
			// {code:3,name:"pizza3",description:"11111",pizzaImage:mockImage,price:16.00},
			// {code:3,name:"pizza3",description:"11111",pizzaImage:mockImage,price:16.00},
			// {code:4,name:"pizza3",description:"11111",pizzaImage:mockImage,price:16.00},
			// {code:5,name:"pizza3",description:"11111",pizzaImage:mockImage,price:16.00},
	
		],
		meats:[],
		sauces:[],
		viggies:[],
		cheeses:[],
            error: null,
			isLoading: false,
			pagination:{},
    
        };
    }
	
	componentDidMount() {
		this.loadPizzas();
		this.loadMeats();
		this.loadSauces();
		this.loadViggies();
		this.loadCHeeses();
}
loadPizzas=page=>{
	this.setState({isLoading:true,pizzas:[]},()=>{
		fetchPizza(page)
		.then(pizzaData=>{
			this.setState({pizzas:pizzaData.pizzas, 
				isLoading:false,
			pagination:pizzaData.pagination});
	
	})
	.catch(error=>{
		this.setState({error,isLoading:false});

	})
	
});
};

loadMeats=()=>{
	this.setState({isLoading:true,meats:[]},()=>{
		fetchMeats()
		.then(meats=>{
			this.setState({meats, isLoading:false});
	
	})
	.catch(error=>{
		this.setState({error,isLoading:false});

	})
	
});
};

loadSauces=()=>{
	this.setState({isLoading:true,sauces:[]},()=>{
		fetchSauces()
		.then(sauces=>{
			this.setState({sauces, isLoading:false});
	
	})
	.catch(error=>{
		this.setState({error,isLoading:false});

	})
	
});
};

loadViggies=()=>{
	this.setState({isLoading:true,viggies:[]},()=>{
		fetchViggies()
		.then(viggies=>{
			this.setState({viggies, isLoading:false});
	
	})
	.catch(error=>{
		this.setState({error,isLoading:false});

	})
	
});
};


loadCHeeses=()=>{
	this.setState({isLoading:true,cheeses:[]},()=>{
		fetchCheeses()
		.then(cheeses=>{
			this.setState({cheeses, isLoading:false});
	
	})
	.catch(error=>{
		this.setState({error,isLoading:false});

	})
	
});
};



handlePageChange=(_,{activePage})=>{
this.loadPizzas(activePage);
};
	render() {
		
	return (
		<section className="maincontainer">
		<div className="headercontainer">
		   <div className="iconcontainer">
			  <MenuIcon   fontSize="small" className="icon"/>
		   </div>
		   <div>
			  <h4>FILTER</h4>
		   </div>
		</div>
		<section className="filtercontainer">
			
		<div className="checkboxcontainer">
	

<div className="checkboxlists">
<h1>MEATS</h1>
{this.state.meats.map(ingredients => (
	<IngredientCard
		
		
		ingredientName={ingredients.IngredientName}
	
		key={ingredients._id}

   
	/>
))}

</div>




<div className="checkboxlists">
<h1>SAUCES</h1>
{this.state.sauces.map(ingredients => (
	<IngredientCard
		
		
		ingredientName={ingredients.IngredientName}
	
		key={ingredients._id}

   
	/>
))}

</div>



<div className="checkboxlists">
<h1>CHEESES</h1>
{this.state.cheeses.map(ingredients => (
	<IngredientCard
		
		
		ingredientName={ingredients.IngredientName}
	
		key={ingredients._id}

   
	/>
))}

</div>







<div className="checkboxlists">
<h1>VIGGIES</h1>
{this.state.viggies.map(ingredients => (
	<IngredientCard
		
		
		ingredientName={ingredients.IngredientName}
	
		key={ingredients._id}

   
	/>
))}

</div>






			</div>

		   {/* <div className="checkboxcontainer">
			  <div className="listcontainer">
				 <h1>SAUCE</h1>
				 <div>
					<input type="checkbox" id="cb_0" ></input>
					<label for="cb_0">
					Marinara
					</label>
				 </div>
				 <div>
					<input type="checkbox" id="cb_1" ></input>
					<label for="cb_1">
					Icing
					</label>
				 </div>
				 <div>
					<input type="checkbox" id="cb_2" ></input>
					<label for="cb_2">
					Barbeque
					</label>
				 </div>
				 <div>
					<input type="checkbox" id="cb_3" ></input>
					<label for="cb_3">
					Cheese
					</label>
				 </div>
				 <div>
					<input type="checkbox" id="cb_4" ></input>
					<label for="cb_4">
					Ranch
					</label>
				 </div>
				 <div>
					<input type="checkbox" id="cb_5" ></input>
					<label for="cb_5">
					Olive oil
					</label>
				 </div>
				 <div>
					<input type="checkbox" id="cb_6" ></input>
					<label for="cb_6">
					Garlic
					</label>
				 </div>
			  </div>
			  <div className="listcontainer">
				 <h1>CHEESE</h1>
				 <div>
					<input type="checkbox" id="cb_7" ></input>
					<label for="cb_7">
					Mozzarella
					</label>
				 </div>
				 <div>
					<input type="checkbox" id="cb_8" ></input>
					<label for="cb_8">
					Goat cheese
					</label>
				 </div>
				 <div>
					<input type="checkbox" id="cb_9" ></input>
					<label for="cb_9">
					Mascarpone
					</label>
				 </div>
				 <div>
					<input type="checkbox" id="cb_10" ></input>
					<label for="cb_10">
					Feta cheese
					</label>
				 </div>
				 <div>
					<input type="checkbox" id="cb_11" ></input>
					<label for="cb_11">
					Gorgonzola
					</label>
				 </div>
				 <div>
					<input type="checkbox" id="cb_12" ></input>
					<label for="cb_12">
					Cheddar
					</label>
				 </div>
				 <div>
					<input type="checkbox" id="cb_13" ></input>
					<label for="cb_13">
					Parmigano
					</label>
				 </div>
			  </div>
			  <div className="listcontainer">
				 <h1>METAS</h1>
				 <div>
					<input type="checkbox" id="cb_14" ></input>
					<label for="cb_14">
					Pepperoni
					</label>
				 </div>
				 <div>
					<input type="checkbox" id="cb_15" ></input>
					<label for="cb_15">
					Grilled chicken
					</label>
				 </div>
				 <div>
					<input type="checkbox" id="cb_16" ></input>
					<label for="cb_16">
					Ham
					</label>
				 </div>
				 <div>
					<input type="checkbox" id="cb_17" ></input>
					<label for="cb_17">
					Beef
					</label>
				 </div>
				 <div>
					<input type="checkbox" id="cb_18" ></input>
					<label for="cb_18">
					Italian sausage
					</label>
				 </div>
				 <div>
					<input type="checkbox" id="cb_19" ></input>
					<label for="cb_19">
					Bacon
					</label>
				 </div>
				 <div>
					<input type="checkbox" id="cb_20" ></input>
					<label for="cb_20">
					Meatballs
					</label>
				 </div>
			  </div>
			  <div className="listcontainer">
				 <h1>VEGGIES</h1>
				 <div>
					<input type="checkbox" id="cb_21" ></input>
					<label for="cb_21">
					Onions
					</label>
				 </div>
				 <div>
					<input type="checkbox" id="cb_22" ></input>
					<label for="cb_22">
					Mushrooms
					</label>
				 </div>
				 <div>
					<input type="checkbox" id="cb_23" ></input>
					<label for="cb_23">
					Black olives
					</label>
				 </div>
				 <div>
					<input type="checkbox" id="cb_24" ></input>
					<label for="cb_24">
					Tomatoes
					</label>
				 </div>
				 <div>
					<input type="checkbox" id="cb_25" ></input>
					<label for="cb_25">
					Pineapple
					</label>
				 </div>
				 <div>
					<input type="checkbox" id="cb_26" ></input>
					<label for="cb_26">
					Peppers
					</label>
				 </div>
				 <div>
					<input type="checkbox" id="cb_27" ></input>
					<label for="cb_27">
					Aubergines
					</label>
				 </div>
				 <div>
					<input type="checkbox" id="cb_28" ></input>
					<label for="cb_28">
					Garlic
					</label>
				 </div>
				 <div>
					<input type="checkbox" id="cb_29" ></input>
					<label for="cb_29">
					Broccoli
					</label>
				 </div>
			  </div>
		   </div> */}
		   <div className="btncontainer">
			  <button className="filter-btn">FILTER SELECTED</button>
		   </div>
		</section>
		{/* <ErrorMessage error={this.state.error} /> */}
		<Segment basic loading={this.state.isLoading}>
			
		<div className="pizzacontainer">
		{this.state.pizzas.map(pizza => (
                            <PizzaCard
                                pizzaDescription={pizza.Description}
                                pizzaImage={pizza.pizzaImage}
								pizzaName={pizza.PizzaName}
								pizzaPrice={pizza.UnitPrice}
								key={pizza._id}
								to={`${PIZZAMENU_URL}/${pizza._id}`}
                           
                            />
                        ))}
		</div>
		</Segment>
		{this.state.pagination&&this.state.pagination.page&&<Pagination
		activePage={this.state.pagination.page}
		totalPages={this.state.pagination.pages}
		onPageChange={this.handlePageChange}
		/>
		}
	 </section>
	 
		
	);
}
}








export default Filter;
