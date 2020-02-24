import React from 'react';
import '.././Style/Information.scss';
import icon1 from '../../asset/img/aboutus1.png';
import icon2 from '../../asset/img/aboutus2.png';
import icon3 from '../../asset/img/aboutus3.png';

function Information(props){
	return (
        <section className="maincontainer">
            <div className="bigcontainer">
            <div className="infoheader">
       <h1>We are pizza maker, and our mission is to make<br/>
       cool pizza which feeds all your senses</h1>
       <p>We perfer to rely on instinct and feel, measuring by hand, not by the gram. This
           is the authentic way to make pizza. Sure it's a little unrefined, but we're proud of that.<br/>
           it's pizza like this which feeds your sense of sharing, adding flavour to those 
           occasions when you get together with friends and family<br/>
           And really, isn't that what it's all about? Because when pizza feeds all your senses,
           it's not just great, it's sensational.
       </p>
       </div>


       <div className="infobody">

<div className="topcontainer">
           <div className="carefulcontainer">
           <img src={icon1} height="50px" width="30px"></img>
       <h1>We're Careful</h1>
       <p>
           The curst is stored in a separate container, on a<br/>
           seoarate shelf in our fridge. The cheese, marinara<br/>
           sauce and pepperoni are stored in a designated kit,<br/>
           and every pizza is freshly backed on designated<br/>
           parchment paper in our ovens.

       </p>
       </div>

       <div className="carefulcontainer">
       <img src={icon2}height="50px" width="30px"></img>
       <h1>We're Certified</h1>
       <p>
           Our cheese-only and cheese-and-pepperoni<br/>
           gluten-free pizzas are prepared using the procedures<br/>
           certified by the Gluten Intolerance Group(GIG),<br/>
           and we take specific caution when making these<br/>
           pizzas.

       </p>
       </div>

       <div className="carefulcontainer">
       <img src={icon3} height="50px" width="30px"></img>
       <h1>We're Creative</h1>
       <p>
           For those simply looking to reduce gluten in their<br/>
           diet, we offer a Great Your Own pizza option.<br/>
           The cheese, pepperoni and marinara come from our<br/>
           gluten-free kit, but all additional toppings are stored<br/>
           at our standard make table.

       </p>
       </div>
       </div>


       <div className="bottomcontainer">

<div className="leftcontainer">
    <h1>From classic pizzaria profiles,<br/>
    to innovative ethnic selections or<br/>
    flavourful health conscious<br/>
    choices, all our products reflect<br/>
     our customers' desires.</h1>
</div>

<div className="rightcontainer">
    <p>With more than 40 recipes and more toppings than any other pizza franchise,<br/>
    our selection is unmatched. Our innovative menu ranges from basics, like classic<br/>
    pepperoni or ham and pineapple, to gourmet originals, like our primo pollo and<br/>
    grilled veggie and goat cheese. </p>

    <p>We know that better pizza starts with better quality, fresh ingredients. Our<br/>
   pepperoni is dry-cured, our mozzarella is rennet-free, our seafood is certified and<br/>
   none of our products contain artificial colours, flavours. With an extensive array of<br/>
    superior toppings, four distinct crusts and nine savoury sauces, we offer the choices<br/>
    our consumers demand-creating strong customer loyalty that leads to improve<br/>
    profitability </p>
</div>


       </div>
       </div>
       </div>
            </section>
        );
    }
    


    export default Information;
