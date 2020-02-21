import React from 'react';
import '.././Style/Filter.css';
import MenuIcon from '@material-ui/icons/Menu';


function Filter(props){
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
		   </div>
		   <div className="btncontainer">
			  <button className="filter-btn">FILTER SELECTED</button>
		   </div>
		</section>
		<div className="pizzacontainer">
		   <div className="pizza">
			  <span class="dot"></span>
			  <h4>Kimchi BBQ chicken</h4>
			  <p>descriptdsasjdankasnd <br/>ksandkjasndnkasnd
				 <br/>ksandkjasndnkasnd<br/>ksandkjasndnkasnd
			  </p>
			  <h3>$21.00</h3>
		   </div>
		   <div className="pizza">
			  <span class="dot"></span>
			  <h4>Kimchi BBQ chicken</h4>
			  <p>descriptdsasjdankasnd <br/>ksandkjasndnkasnd
				 <br/>ksandkjasndnkasnd<br/>ksandkjasndnkasnd
			  </p>
			  <h3>$21.00</h3>
		   </div>
		   <div className="pizza">
			  <span class="dot"></span>
			  <h4>Kimchi BBQ chicken</h4>
			  <p>descriptdsasjdankasnd <br/>ksandkjasndnkasnd
				 <br/>ksandkjasndnkasnd<br/>ksandkjasndnkasnd
			  </p>
			  <h3>$21.00</h3>
		   </div>
		   <div className="pizza">
			  <span class="dot"></span>
			  <h4>Kimchi BBQ chicken</h4>
			  <p>descriptdsasjdankasnd <br/>ksandkjasndnkasnd
				 <br/>ksandkjasndnkasnd<br/>ksandkjasndnkasnd
			  </p>
			  <h3>$21.00</h3>
		   </div>
		</div>
	 </section>
		
	);
}








export default Filter;
