This project was the result of a tutorial series from egghead.io that demonstrates a simple e-commerce app built with [Next.js](https://nextjs.org/) that integrates with a test [Stripe](https://stripe.com/) account that provides checkout functionality.

A live version of the application has been deployed with [Vercel](https://vercel.com/) and can be found [here](https://space-jelly-swag.vercel.app/).

## Description
The app is basic but provides a main store page showing a selection of products that can be added to a shopping cart, a dynamic product page for each product, a cart page that allows the user to amend item quantities, and a checkout feature that redirects to Stripe checkout.

Features demonstrated by this app include:
- Working with the Next.js framework to provide static and dynamic pages for products and the cart
- Using environment variables to securely supply API keys for Stripe checkout
- Management of product data in Stripe
- Global state management of the shopping cart using the custom React hook useCart and React Context
- Persistance of cart state in localStorage
- Deployment of the app via Github and Vercel

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.

## Links
Tutorial series:
[Create an eCommerce Store with Next.js and Stripe Checkout](https://egghead.io/courses/create-an-ecommerce-store-with-next-js-and-stripe-checkout-562c)