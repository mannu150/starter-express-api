const express = require('express')
const app = express()
const x = [
	{
		"id": 1,
		"name": "Black Leather Jacket",
		"brand": "ShopStore",
		"tag": ["Men", "Clothing"],
		"size": "XS",
		"occasion": "mattis",
		"color": "#6cb58f",
		"saleDiscount": 22,
		"price": 1399,
		"rating": 3.6,
		"image": "/api/v1/assets/black_jacket.jpg"
	},
	{
		"id": 2,
		"name": "Denim Jacket",
		"brand": "ShopStore",
		"tag": ["Men", "Clothing"],
		"size": "S",
		"occasion": "odio",
		"color": "#af294b",
		"saleDiscount": 21,
		"price": 1199,
		"rating": 3.7,
		"image": "/api/v1/assets/denim_jacket.jpg"
	},
	{
		"id": 3,
		"name": "praesent id",
		"brand": "Feeney-Bogisich",
		"tag": ["Men", "Clothing"],
		"size": "XL",
		"occasion": "bibendum",
		"color": "#c8a971",
		"saleDiscount": 22,
		"price": 13.82,
		"rating": 2,
		"image": "/api/v1/assets/benjamin-rascoe-KF-q_SGqswg-unsplash.jpg"
	},
	{
		"id": 4,
		"name": "in blandit",
		"brand": "Walter-Christiansen",
		"tag": ["Men", "Clothing"],
		"size": "L",
		"occasion": "quisque",
		"color": "#5fcd16",
		"saleDiscount": 41,
		"price": 43.75,
		"rating": 4,
		"image": "/api/v1/assets/phil-monte-4V4t0JcOM5E-unsplash.jpg"
	},
	{
		"id": 5,
		"name": "tellus nisi",
		"brand": "Champlin-Jerde",
		"tag": ["Men", "Clothing"],
		"size": "M",
		"occasion": "dui",
		"color": "#e969c0",
		"saleDiscount": 21,
		"price": 27.9,
		"rating": 4,
		"image": "/api/v1/assets/dami-adebayo-k6aQzmIbR1s-unsplash.jpg"
	},
	{
		"id": 6,
		"name": "malesuada",
		"brand": "Weissnat-Veum",
		"tag": ["Men", "Shoes"],
		"size": "XL",
		"occasion": "sapien",
		"color": "#fb375e",
		"saleDiscount": 26,
		"price": 56.76,
		"rating": 2,
		"image": "/api/v1/assets/irene-kredenets-dwKiHoqqxk8-unsplash.jpg"
	},
	{
		"id": 7,
		"name": "rutrum nulla",
		"brand": "Ryan-Ernser",
		"tag": ["Women", "Clothing"],
		"size": "L",
		"occasion": "nulla",
		"color": "#2da567",
		"saleDiscount": 38,
		"price": 77.42,
		"rating": 2,
		"image": "/api/v1/assets/freestocks-8hAsLeE6Fbo-unsplash.jpg"
	},
	{
		"id": 8,
		"name": "lacus",
		"brand": "Greenholt, Torp and Grady",
		"tag": ["Men", "Shoes"],
		"size": "XS",
		"occasion": "nullam",
		"color": "#060571",
		"saleDiscount": 50,
		"price": 47.31,
		"rating": 5,
		"image": "/api/v1/assets/revolt-164_6wVEHfI-unsplash.jpg"
	},
	{
		"id": 9,
		"name": "quis odio",
		"brand": "Cassin and Sons",
		"tag": ["Men", "Clothing"],
		"size": "XL",
		"occasion": "morbi",
		"color": "#3f79e3",
		"saleDiscount": 24,
		"price": 58.31,
		"rating": 2,
		"image": "/api/v1/assets/faith-yarn-Wr0TpKqf26s-unsplash.jpg"
	},
	{
		"id": 10,
		"name": "congue",
		"brand": "Mann-Wyman",
		"tag": ["Women", "Clothing"],
		"size": "2XL",
		"occasion": "et",
		"color": "#d8e3fb",
		"saleDiscount": 42,
		"price": 77.64,
		"rating": 1,
		"image": "/api/v1/assets/dom-hill-nimElTcTNyY-unsplash.jpg"
	},
	{
		"id": 11,
		"name": "diam",
		"brand": "Kreiger-Kunde",
		"tag": ["Men", "Clothing"],
		"size": "L",
		"occasion": "ac",
		"color": "#f737da",
		"saleDiscount": 10,
		"price": 75.2,
		"rating": 2,
		"image": "/api/v1/assets/black_jacket.jpg"
	},
	{
		"id": 12,
		"name": "orci mauris",
		"brand": "O'Conner-Fahey",
		"tag": ["Men", "Clothing"],
		"size": "2XL",
		"occasion": "faucibus",
		"color": "#d07c7e",
		"saleDiscount": 31,
		"price": 42.75,
		"rating": 4,
		"image": "/api/v1/assets/chris-lynch-pRdi2no2fvs-unsplash.jpg"
	},
	{
		"id": 13,
		"name": "mauris",
		"brand": "Shanahan, Orn and Hessel",
		"tag": ["Men", "Clothing"],
		"size": "M",
		"occasion": "tincidunt",
		"color": "#e140d0",
		"saleDiscount": 25,
		"price": 16.53,
		"rating": 1,
		"image": "/api/v1/assets/dami-adebayo-k6aQzmIbR1s-unsplash.jpg"
	},
	{
		"id": 14,
		"name": "ut mauris",
		"brand": "Schmitt, Rodriguez and Ratke",
		"tag": ["Men", "Clothing"],
		"size": "3XL",
		"occasion": "rutrum",
		"color": "#ad699f",
		"saleDiscount": 44,
		"price": 76.82,
		"rating": 1,
		"image": "/api/v1/assets/phil-monte-4V4t0JcOM5E-unsplash.jpg"
	},
	{
		"id": 15,
		"name": "non",
		"brand": "Schmitt LLC",
		"tag": ["Women", "Clothing"],
		"size": "M",
		"occasion": "congue",
		"color": "#7ebd58",
		"saleDiscount": 21,
		"price": 32.38,
		"rating": 5,
		"image": "/api/v1/assets/freestocks-8hAsLeE6Fbo-unsplash.jpg"
	},
	{
		"id": 16,
		"name": "pede",
		"brand": "Lindgren-Abshire",
		"tag": ["Men", "Shoes"],
		"size": "2XL",
		"occasion": "nibh",
		"color": "#bdf1ad",
		"saleDiscount": 39,
		"price": 66.82,
		"rating": 5,
		"image": "/api/v1/assets/irene-kredenets-dwKiHoqqxk8-unsplash.jpg"
	},
	{
		"id": 17,
		"name": "tristique",
		"brand": "Sipes, Anderson and Kuhlman",
		"tag": ["Men", "Clothing"],
		"size": "M",
		"occasion": "sit",
		"color": "#81d2d1",
		"saleDiscount": 13,
		"price": 42.37,
		"rating": 1,
		"image": "/api/v1/assets/faith-yarn-Wr0TpKqf26s-unsplash.jpg"
	},
	{
		"id": 18,
		"name": "donec",
		"brand": "Witting and Sons",
		"tag": ["Men", "Shoes"],
		"size": "L",
		"occasion": "sodales",
		"color": "#20ff62",
		"saleDiscount": 46,
		"price": 27.23,
		"rating": 4,
		"image": "/api/v1/assets/revolt-164_6wVEHfI-unsplash.jpg"
	},
	{
		"id": 19,
		"name": "vel accumsan",
		"brand": "Littel, Kerluke and Adams",
		"tag": ["Women", "Clothing"],
		"size": "M",
		"occasion": "morbi",
		"color": "#cce701",
		"saleDiscount": 30,
		"price": 11.2,
		"rating": 4,
		"image": "/api/v1/assets/dom-hill-nimElTcTNyY-unsplash.jpg"
	},
	{
		"id": 20,
		"name": "lacinia",
		"brand": "Grant, O'Kon and Pacocha",
		"tag": ["Men", "Clothing"],
		"size": "3XL",
		"occasion": "sapien",
		"color": "#a51fc5",
		"saleDiscount": 23,
		"price": 49.66,
		"rating": 3,
		"image": "/api/v1/assets/benjamin-rascoe-KF-q_SGqswg-unsplash.jpg"
	},
	{
		"id": 21,
		"name": "justo nec",
		"brand": "Crist, Zieme and Haag",
		"tag": ["Men", "Clothing"],
		"size": "XL",
		"occasion": "a",
		"color": "#603895",
		"saleDiscount": 25,
		"price": 70.76,
		"rating": 5,
		"image": "/api/v1/assets/dami-adebayo-k6aQzmIbR1s-unsplash.jpg"
	},
	{
		"id": 22,
		"name": "vulputate",
		"brand": "Cremin, Auer and Leannon",
		"tag": ["Men", "Clothing"],
		"size": "L",
		"occasion": "et",
		"color": "#112c28",
		"saleDiscount": 15,
		"price": 52.82,
		"rating": 5,
		"image": "/api/v1/assets/black_jacket.jpg"
	},
	{
		"id": 23,
		"name": "pede ullamcorper",
		"brand": "Schmidt Group",
		"tag": ["Men", "Clothing"],
		"size": "XS",
		"occasion": "ultrices",
		"color": "#0ac8fe",
		"saleDiscount": 13,
		"price": 16.6,
		"rating": 3,
		"image": "/api/v1/assets/chris-lynch-pRdi2no2fvs-unsplash.jpg"
	},
	{
		"id": 24,
		"name": "penatibus",
		"brand": "Deckow-Waelchi",
		"tag": ["Men", "Clothing"],
		"size": "2XL",
		"occasion": "id",
		"color": "#1977a3",
		"saleDiscount": 12,
		"price": 54.99,
		"rating": 4,
		"image": "/api/v1/assets/phil-monte-4V4t0JcOM5E-unsplash.jpg"
	},
	{
		"id": 25,
		"name": "sit amet",
		"brand": "Heaney, D'Amore and Hamill",
		"tag": ["Women", "Clothing"],
		"size": "XS",
		"occasion": "odio",
		"color": "#89b5b2",
		"saleDiscount": 24,
		"price": 19.43,
		"rating": 4,
		"image": "/api/v1/assets/freestocks-8hAsLeE6Fbo-unsplash.jpg"
	},
	{
		"id": 26,
		"name": "phasellus",
		"brand": "Bergnaum, Mueller and Rempel",
		"tag": ["Men", "Shoes"],
		"size": "L",
		"occasion": "rutrum",
		"color": "#8d278c",
		"saleDiscount": 13,
		"price": 66.07,
		"rating": 1,
		"image": "/api/v1/assets/irene-kredenets-dwKiHoqqxk8-unsplash.jpg"
	},
	{
		"id": 27,
		"name": "aliquam quis",
		"brand": "McClure-Prohaska",
		"tag": ["Men", "Clothing"],
		"size": "XL",
		"occasion": "mi",
		"color": "#34a70d",
		"saleDiscount": 22,
		"price": 38.88,
		"rating": 5,
		"image": "/api/v1/assets/faith-yarn-Wr0TpKqf26s-unsplash.jpg"
	},
	{
		"id": 28,
		"name": "diam cras",
		"brand": "Pfeffer, Brakus and Emard",
		"tag": ["Men", "Shoes"],
		"size": "XL",
		"occasion": "pede",
		"color": "#5249ec",
		"saleDiscount": 31,
		"price": 32.06,
		"rating": 3,
		"image": "/api/v1/assets/revolt-164_6wVEHfI-unsplash.jpg"
	},
	{
		"id": 29,
		"name": "at",
		"brand": "Strosin-Aufderhar",
		"tag": ["Women", "Clothing"],
		"size": "S",
		"occasion": "libero",
		"color": "#66b97f",
		"saleDiscount": 14,
		"price": 70.11,
		"rating": 3,
		"image": "/api/v1/assets/dom-hill-nimElTcTNyY-unsplash.jpg"
	},
	{
		"id": 30,
		"name": "duis bibendum",
		"brand": "Schulist-Pollich",
		"tag": ["Women", "Clothing"],
		"size": "L",
		"occasion": "in",
		"color": "#dd8b19",
		"saleDiscount": 34,
		"price": 55.11,
		"rating": 2,
		"image": "/api/v1/assets/dom-hill-nimElTcTNyY-unsplash.jpg"
	},
	{
		"id": 31,
		"name": "eu",
		"brand": "Heidenreich, Turner and Beahan",
		"tag": ["Men", "Clothing"],
		"size": "L",
		"occasion": "arcu",
		"color": "#fc5831",
		"saleDiscount": 22,
		"price": 11.81,
		"rating": 2,
		"image": "/api/v1/assets/dami-adebayo-k6aQzmIbR1s-unsplash.jpg"
	},
	{
		"id": 32,
		"name": "imperdiet nullam",
		"brand": "Smith-Labadie",
		"tag": ["Men", "Clothing"],
		"size": "3XL",
		"occasion": "cubilia",
		"color": "#98f649",
		"saleDiscount": 25,
		"price": 39.83,
		"rating": 1,
		"image": "/api/v1/assets/black_jacket.jpg"
	},
	{
		"id": 33,
		"name": "mus",
		"brand": "Mayert and Sons",
		"tag": ["Men", "Clothing"],
		"size": "2XL",
		"occasion": "convallis",
		"color": "#7a1f0b",
		"saleDiscount": 29,
		"price": 28.16,
		"rating": 2,
		"image": "/api/v1/assets/benjamin-rascoe-KF-q_SGqswg-unsplash.jpg"
	},
	{
		"id": 34,
		"name": "sit amet",
		"brand": "Fritsch and Sons",
		"tag": ["Men", "Clothing"],
		"size": "S",
		"occasion": "lectus",
		"color": "#dd38ad",
		"saleDiscount": 39,
		"price": 67.85,
		"rating": 2,
		"image": "/api/v1/assets/phil-monte-4V4t0JcOM5E-unsplash.jpg"
	},
	{
		"id": 35,
		"name": "lobortis",
		"brand": "Gorczany, Mante and Carter",
		"tag": ["Men", "Shoes"],
		"size": "XS",
		"occasion": "vel",
		"color": "#590095",
		"saleDiscount": 43,
		"price": 66.74,
		"rating": 5,
		"image": "/api/v1/assets/irene-kredenets-dwKiHoqqxk8-unsplash.jpg"
	},
	{
		"id": 36,
		"name": "ac",
		"brand": "Hodkiewicz-Bosco",
		"tag": ["Women", "Clothing"],
		"size": "2XL",
		"occasion": "blandit",
		"color": "#f7fef6",
		"saleDiscount": 24,
		"price": 61.13,
		"rating": 1,
		"image": "/api/v1/assets/freestocks-8hAsLeE6Fbo-unsplash.jpg"
	},
	{
		"id": 37,
		"name": "congue eget",
		"brand": "McGlynn Group",
		"tag": ["Men", "Clothing"],
		"size": "L",
		"occasion": "cubilia",
		"color": "#739cd9",
		"saleDiscount": 42,
		"price": 57.41,
		"rating": 2,
		"image": "/api/v1/assets/faith-yarn-Wr0TpKqf26s-unsplash.jpg"
	},
	{
		"id": 38,
		"name": "libero",
		"brand": "Schmitt, Rath and Cassin",
		"tag": ["Men", "Shoes"],
		"size": "XS",
		"occasion": "orci",
		"color": "#e144de",
		"saleDiscount": 29,
		"price": 75.1,
		"rating": 2,
		"image": "/api/v1/assets/revolt-164_6wVEHfI-unsplash.jpg"
	},
	{
		"id": 39,
		"name": "tempor",
		"brand": "Schamberger-Morar",
		"tag": ["Women", "Clothing"],
		"size": "XL",
		"occasion": "fusce",
		"color": "#df1245",
		"saleDiscount": 19,
		"price": 52.36,
		"rating": 5,
		"image": "/api/v1/assets/dom-hill-nimElTcTNyY-unsplash.jpg"
	},
	{
		"id": 40,
		"name": "nullam molestie",
		"brand": "Harris LLC",
		"tag": ["Women", "Clothing"],
		"size": "3XL",
		"occasion": "consequat",
		"color": "#004d76",
		"saleDiscount": 24,
		"price": 47.51,
		"rating": 5,
		"image": "/api/v1/assets/dom-hill-nimElTcTNyY-unsplash.jpg"
	},
	{
		"id": 41,
		"name": "blandit",
		"brand": "Skiles, Wiegand and Conroy",
		"tag": ["Men", "Clothing"],
		"size": "L",
		"occasion": "ipsum",
		"color": "#6a03fc",
		"saleDiscount": 44,
		"price": 20.61,
		"rating": 1,
		"image": "/api/v1/assets/dami-adebayo-k6aQzmIbR1s-unsplash.jpg"
	},
	{
		"id": 42,
		"name": "ultricies",
		"brand": "O'Hara-Boyle",
		"tag": ["Men", "Clothing"],
		"size": "S",
		"occasion": "volutpat",
		"color": "#1131d0",
		"saleDiscount": 33,
		"price": 60.36,
		"rating": 2,
		"image": "/api/v1/assets/phil-monte-4V4t0JcOM5E-unsplash.jpg"
	},
	{
		"id": 43,
		"name": "curae",
		"brand": "Ryan-Schmitt",
		"tag": ["Men", "Clothing"],
		"size": "XL",
		"occasion": "dui",
		"color": "#32b09d",
		"saleDiscount": 12,
		"price": 13.87,
		"rating": 3,
		"image": "/api/v1/assets/chris-lynch-pRdi2no2fvs-unsplash.jpg"
	},
	{
		"id": 44,
		"name": "mollis molestie",
		"brand": "Lowe, Gislason and Orn",
		"tag": ["Men", "Clothing"],
		"size": "S",
		"occasion": "nibh",
		"color": "#22b478",
		"saleDiscount": 20,
		"price": 10.47,
		"rating": 5,
		"image": "/api/v1/assets/black_jacket.jpg"
	},
	{
		"id": 45,
		"name": "augue luctus",
		"brand": "Harvey-Beier",
		"tag": ["Men", "Shoes"],
		"size": "2XL",
		"occasion": "nunc",
		"color": "#962152",
		"saleDiscount": 49,
		"price": 41.01,
		"rating": 1,
		"image": "/api/v1/assets/irene-kredenets-dwKiHoqqxk8-unsplash.jpg"
	},
	{
		"id": 46,
		"name": "elementum",
		"brand": "Swaniawski, Kshlerin and Stiedemann",
		"tag": ["Women", "Clothing"],
		"size": "S",
		"occasion": "ut",
		"color": "#86ba3e",
		"saleDiscount": 25,
		"price": 10.15,
		"rating": 5,
		"image": "/api/v1/assets/freestocks-8hAsLeE6Fbo-unsplash.jpg"
	},
	{
		"id": 47,
		"name": "id justo",
		"brand": "Haley Inc",
		"tag": ["Men", "Clothing"],
		"size": "3XL",
		"occasion": "ultrices",
		"color": "#b5c411",
		"saleDiscount": 22,
		"price": 46.23,
		"rating": 3,
		"image": "/api/v1/assets/benjamin-rascoe-KF-q_SGqswg-unsplash.jpg"
	},
	{
		"id": 48,
		"name": "in est",
		"brand": "Brown, Wolff and Gaylord",
		"tag": ["Men", "Shoes"],
		"size": "3XL",
		"occasion": "ut",
		"color": "#f33a23",
		"saleDiscount": 47,
		"price": 67.68,
		"rating": 4,
		"image": "/api/v1/assets/revolt-164_6wVEHfI-unsplash.jpg"
	},
	{
		"id": 49,
		"name": "est",
		"brand": "Jast, Gutkowski and Flatley",
		"tag": ["Men", "Clothing"],
		"size": "3XL",
		"occasion": "sit",
		"color": "#b1c3e6",
		"saleDiscount": 32,
		"price": 55.33,
		"rating": 4,
		"image": "/api/v1/assets/chris-lynch-pRdi2no2fvs-unsplash.jpg"
	}
]

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send(JSON.stringify(x))
})
app.listen(process.env.PORT || 3000)