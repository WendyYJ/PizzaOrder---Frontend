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
			pizzas: [],
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
		fetchPizza(page).then(pizzaData=>{
			this.setState({pizzas:pizzaData.
				pizzas, isLoading:false,
			pagination:pizzaData.pagination});
	
	}).catch(error=>{
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
