import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
	<a href="/">
		<img
			className="logo"
			alt="logo"
			src="https://scontent.fdel27-5.fna.fbcdn.net/v/t39.30808-6/302275887_487537640050648_5998956273504369200_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=GJIBgjRzYjEAX9DmIaT&_nc_ht=scontent.fdel27-5.fna&oh=00_AfCqQpUXMBilwvZqacv-FruIGsvvus3Ae9ZAmoClq3YLfw&oe=659D51AE"
		></img>
	</a>
);

const Header = () => {
	return (
		<div className="header">
			<Title />
			<div className="nav-items">
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Contact</li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	);
};
const restaurantList = [
	{
		info: {
			id: "96483",
			name: "Pinki Chole Bhandar",
			cloudinaryImageId: "uyyiawn7tihdhfaf6lqm",
			locality: "Boundary Road",
			areaName: "Lal Kurti",
			costForTwo: "₹149 for two",
			cuisines: ["North Indian", "Indian", "Desserts"],
			avgRating: 4.3,
			veg: true,
			parentId: "15583",
			avgRatingString: "4.3",
			totalRatingsString: "10K+",
			sla: {
				deliveryTime: 21,
				lastMileTravel: 1.7,
				serviceability: "SERVICEABLE",
				slaString: "21 mins",
				lastMileTravelString: "1.7 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-01-06 21:00:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "v1695133679/badges/Pure_Veg111.png",
						description: "pureveg",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: "pureveg",
									imageId: "v1695133679/badges/Pure_Veg111.png",
								},
							},
						],
					},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹120 OFF",
				subHeader: "ABOVE ₹199",
				discountTag: "FLAT DEAL",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-d0c3b931-3a41-4cb4-96dd-5f29af446de6",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/pinki-chole-bhandar-boundary-road-lal-kurti-meerut-96483",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "310674",
			name: "Chandni Chowk Restaurant",
			cloudinaryImageId: "70112623b1945e5f8490cdb5f739949e",
			locality: "Bank Road",
			areaName: "Begambagh",
			costForTwo: "₹350 for two",
			cuisines: ["North Indian", "South Indian", "Fast Food", "Chinese"],
			avgRating: 4.2,
			veg: true,
			parentId: "57831",
			avgRatingString: "4.2",
			totalRatingsString: "100+",
			sla: {
				deliveryTime: 29,
				lastMileTravel: 1.3,
				serviceability: "SERVICEABLE",
				slaString: "29 mins",
				lastMileTravelString: "1.3 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-01-06 23:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹120 OFF",
				subHeader: "ABOVE ₹199",
				discountTag: "FLAT DEAL",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-d0c3b931-3a41-4cb4-96dd-5f29af446de6",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/chandni-chowk-restaurant-bank-road-begambagh-meerut-310674",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "551490",
			name: "Bakingo",
			cloudinaryImageId: "0c53fd8f62e3d25ba56d1b4cfe572cef",
			locality: "Gurudwara Road\n",
			areaName: "Shastri Nagar",
			costForTwo: "₹299 for two",
			cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
			avgRating: 4.6,
			parentId: "3818",
			avgRatingString: "4.6",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 28,
				lastMileTravel: 4.2,
				serviceability: "SERVICEABLE",
				slaString: "28 mins",
				lastMileTravelString: "4.2 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-01-07 00:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹120 OFF",
				subHeader: "ABOVE ₹199",
				discountTag: "FLAT DEAL",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-d0c3b931-3a41-4cb4-96dd-5f29af446de6",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/bakingo-gurudwara-road-shastri-nagar-meerut-551490",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "136458",
			name: "Ram Lal Chole Bhature (D.N.College)",
			cloudinaryImageId: "db8kfrsbgojxnsqcmgre",
			locality: "City Railway Station ROAd",
			areaName: "OPPOSITE D.N COLLAGE",
			costForTwo: "₹150 for two",
			cuisines: ["North Indian", "Indian", "Street Food"],
			avgRating: 4.2,
			veg: true,
			parentId: "15381",
			avgRatingString: "4.2",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 31,
				lastMileTravel: 1.7,
				serviceability: "SERVICEABLE",
				slaString: "31 mins",
				lastMileTravelString: "1.7 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-01-06 17:00:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "v1695133679/badges/Pure_Veg111.png",
						description: "pureveg",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: "pureveg",
									imageId: "v1695133679/badges/Pure_Veg111.png",
								},
							},
						],
					},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹120 OFF",
				subHeader: "ABOVE ₹199",
				discountTag: "FLAT DEAL",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-d0c3b931-3a41-4cb4-96dd-5f29af446de6",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/ram-lal-chole-bhature-d-n-college-city-railway-station-road-opposite-d-n-collage-meerut-136458",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "113499",
			name: "Arora's Bakers and Snacks",
			cloudinaryImageId: "xkm4ykjlhv1xp1qrmq1d",
			locality: "Puspak Kunj",
			areaName: "Civil Lines, Saket",
			costForTwo: "₹199 for two",
			cuisines: ["Bakery", "Snacks"],
			avgRating: 4.2,
			veg: true,
			parentId: "15479",
			avgRatingString: "4.2",
			totalRatingsString: "5K+",
			sla: {
				deliveryTime: 19,
				lastMileTravel: 1.9,
				serviceability: "SERVICEABLE",
				slaString: "19 mins",
				lastMileTravelString: "1.9 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-01-06 21:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹120 OFF",
				subHeader: "ABOVE ₹199",
				discountTag: "FLAT DEAL",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-d0c3b931-3a41-4cb4-96dd-5f29af446de6",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/aroras-bakers-and-snacks-puspak-kunj-civil-lines-saket-meerut-113499",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "136584",
			name: "Pappi Vaishno Dhaba",
			cloudinaryImageId: "qj4jdetsfr0krkvff5zg",
			locality: "Kabari Bazaar",
			areaName: "Near Metro Plaza",
			costForTwo: "₹250 for two",
			cuisines: ["North Indian", "Chinese", "Snacks"],
			avgRating: 4.1,
			veg: true,
			parentId: "453633",
			avgRatingString: "4.1",
			totalRatingsString: "5K+",
			sla: {
				deliveryTime: 23,
				lastMileTravel: 2.2,
				serviceability: "SERVICEABLE",
				slaString: "23 mins",
				lastMileTravelString: "2.2 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-01-06 23:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹120 OFF",
				subHeader: "ABOVE ₹199",
				discountTag: "FLAT DEAL",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-d0c3b931-3a41-4cb4-96dd-5f29af446de6",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/pappi-vaishno-dhaba-kabari-bazaar-near-metro-plaza-meerut-136584",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
];
const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
	// console.log(restaurant); //restaurant object
	// const { name, cuisines, cloudinaryImageId, avgRating } = restaurant.info; //destructuring
	return (
		<div className="card">
			<img
				src={
					"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
					cloudinaryImageId
				}
			></img>
			<h2>{name}</h2>
			<h3>{cuisines.join(", ")}</h3>
			<h4>{avgRating} stars</h4>
		</div>
	);
};
const Body = () => {
	return (
		<div className="restaurant-list">
			{/* <RestaurantCard {...restaurantList[0].info} />
			<RestaurantCard {...restaurantList[1].info} />
			<RestaurantCard {...restaurantList[2].info} />
			<RestaurantCard {...restaurantList[3].info} />
			<RestaurantCard {...restaurantList[4].info} />
			<RestaurantCard {...restaurantList[5].info} /> */}
			{restaurantList.map((restaurant) => {
				return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />;
			})}
		</div>
	);
};

const Footer = () => {
	return <h4>Footer</h4>;
};

const AppLayout = () => {
	return (
		<>
			{" "}
			<Header />
			<Body />
			<Footer />
		</>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
