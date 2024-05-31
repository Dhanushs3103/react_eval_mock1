### Create an e-commerce website-

-create a navbar with home, about , products, login in it.
-you should have,
  -home page.
  -about page.
  -products page.
  -login page.
  -single product page

- In home page just a text like - "Home Page".
- in about also same.
- in products page their should be products in grid layout
  - each product should have image, title, price and category.
  - And a view button to view the product.
  - API_URL for product data `https://fakestoreapi.com/products`
- in single product page it should have image, title, price, rating, category and description.
-Impliment routing to navigate between the pages and use dynamic routes and link for single product page.
- Auth related things should be at AuthContextProvider so create a context for it. [use reqres.in `https://reqres.in/api/login` for authentication purpose.]

- Implement private routing -
  - home and about are public route
  - products , login and single product pages should be private i.e., only authenticated users only use these pages.