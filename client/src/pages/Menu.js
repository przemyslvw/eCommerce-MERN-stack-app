import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addBasketItem,getBasketItems } from '../actions/basketItem';

const Menu = ({ isAuthenticated,addBasketItem,basketItems,getBasketItems }) => {

	function isProduct (product){
		return basketItems.basketItems
		.find(item => item.name.toString() === product.toString());
	}

	useEffect(() => {
		getBasketItems();
	},[]);


    return (
        <div className="site-main">
		<section className="home_banner_area common-banner">
			<div className="banner_inner">
				<div className="container-fluid no-padding">
					<div className="row fullscreen">

					</div>
				</div>
			</div>
		</section>

		<div className="row banner-bottom common-bottom-banner align-items-center justify-content-center">
			<div className="col-lg-8 offset-lg-4">
				<div className="banner_content">
					<div className="row d-flex align-items-center">
						<div className="col-lg-7 col-md-12">
							<h1>Food Menu</h1>
							<p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards
								especially in the workplace. That’s why it’s crucial that, as women.</p>
						</div>
						<div className="col-lg-5 col-md-12">
							<div className="page-link-wrap">
								<div className="page_link">
									<a href="index.html">Home</a>
									<a href="menu.html">Menu</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    
		<section className="menu_area section_gap">
			<div className="container">
				<div className="row menu_inner">
					<div className="col-lg-5">
						<div className="menu_list">
							<h1>Appetizer</h1>
							<ul className="list">
								<li>
									<h4>Ham & Potato Sandwiches
										<span>$20</span>
									</h4>
									<button 
									style={{ display: !isAuthenticated ? 'none' : "block" }}
									onClick={() => {
										 if(isProduct("Ham & Potato Sandwiches") !== undefined){
										   return alert('There is already this item');
										 }
										addBasketItem("Ham & Potato Sandwiches",20,1,"sku_GYLAa1efDiAXzY");
									}}>
										Add Item
									</button>
								</li>

								<li>
									<h4>
										French bread baguette
										<span>$4</span>
									</h4>
									<button 
									style={{ display: !isAuthenticated ? 'none' : "block" }}
									onClick={() => {
										if(isProduct("French bread baguette")) return alert("There is already this item in basket");
										else addBasketItem("French bread baguette",4,1,"sku_GYLB9FYu9LOQTY")
									}}>
										Add Item
									</button>
								</li>
								<li>
									<h4>
										Cooked ham
										<span>$6</span>
									</h4>
									<button
									style={{ display: !isAuthenticated ? 'none' : "block" }}
									onClick={() => {
										if(basketItems.basketItems.find(item => item.name === "Cooked ham")) return alert("There is already this item in basket");
										else addBasketItem("Cooked ham",6,1,"sku_GYLCIbIlGlpJAk");
									}}>
										Add Item
									</button>
								</li>
								<li>
									<h4>
										Potato salad
										<span>$3</span>
									</h4>
									<button 
									style={{ display: !isAuthenticated ? 'none' : "block" }}
									onClick={() => {
										if(isProduct("Potato salad")) return alert("There is already this item in basket");
										else addBasketItem("Potato salad",3,1,"sku_GYLCV0CtO7jjS8");
									}}>
										Add Item
									</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
        </div>
    )
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	basketItems: state.basketItems
});

export default connect(mapStateToProps, { addBasketItem,getBasketItems })(Menu);