import React, { useEffect } from "react";

import "./App.scss";

// Routing
import { Switch, Route, Redirect } from "react-router-dom";

// Firebase
import { onStateChanged } from "./Firebase/auth";
import { setUserDB } from "./Firebase/db";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { setUser, selectUser } from "./Redux/userSlice";
import { selectData } from "./Redux/dataSlice";

// Public or Private Routes
import PrivateRoute from "./Components/PrivatePublicCompenent/PrivateRoute";
import PublicRoute from "./Components/PrivatePublicCompenent/PublicRoute";

// Pages
import Homepage from "./Components/Pages/homepage.jsx";
import ResetPasswordPage from "./Components/Pages/Sign-in/reset-password.page";
import SignInPage from "./Components/Pages/Sign-in/Sign-in.page";
import SignUpPage from "./Components/Pages/Sign-in/Sign-up.page";
import Products from "./Components/Templates/Products/Products.component";
import CartPage from "./Components/Pages/Cart/cart.page";
import CategoryPage from "./Components/Pages/Category/category.page";
import SearchPage from "./Components/Pages/Search/search.page";

// Components
import Header from "./Components/Templates/Header/header.component";
import Message from "./Components/Templates/Message/message.component";
import Footer from "./Components/Templates/Footer/footer.component";

const App = () => {
  // NOTE: IMPLEMENTATION OF CONDITIONAL DISPLAY OF CART ICON IS YET TO BE DONE

  const ProductsData = useSelector(selectData);
  const { hats, men, women, shoes } = ProductsData.products;
  const dispatch = useDispatch();

  useEffect(() => {
    onStateChanged(function (callReturn) {
      if (callReturn) {
        const { email } = callReturn;
        setUserDB(email, {
          email: email,
          products: {
            total: 0,
            cart: {},
          },
        });
        dispatch(
          setUser({ authenticated: true, user: JSON.stringify(callReturn) })
        );
      } else dispatch(setUser({ authenticated: false, user: null }));
    });
  });

  const userState = useSelector(selectUser);
  // const user = JSON.parse(userState.user);

  return (
    <div className="App">
      <Header authenticated={userState.authenticated} />

      <Message />

      <Switch>
        <Route path="/Aurora_Store/" exact>
          <Homepage />
        </Route>

        {/* <Route path="/Aurora_Store/hats" exact>
          <Products category="Hats" products={hats} />;
        </Route>
        <Route path="/Aurora_Store/shoes" exact>
          <Products category="shoes" products={shoes} />;
        </Route>
        <Route path="/Aurora_Store/men" exact>
          <Products category="Men" products={men} />;
        </Route>
        <Route path="/Aurora_Store/women" exact>
          <Products category="Women" products={women} />;
        </Route> */}

        <Route exact path="/Aurora_Store/shop/:category">
          <CategoryPage />
        </Route>

        {/* Different Links of Menu */}
        <Route path="/Aurora_Store/shop" exact>
          <Products category="Hats" products={hats} max={5} />;
          <Products category="shoes" products={shoes} max={5} />;
          <Products category="Women" products={women} max={5} />;
          <Products category="Men" products={men} max={5} />;
        </Route>

        <Route path="/Aurora_Store/search" exact>
          <SearchPage />
        </Route>

        <PublicRoute
          path="/Aurora_Store/sign-in"
          exact
          authenticated={userState.authenticated}
          component={SignInPage}
        ></PublicRoute>

        <PublicRoute
          path="/Aurora_Store/sign-up"
          exact
          authenticated={userState.authenticated}
          component={SignUpPage}
        ></PublicRoute>

        <PublicRoute
          path="/Aurora_Store/sign-in/reset-password"
          exact
          authenticated={userState.authenticated}
          component={ResetPasswordPage}
        ></PublicRoute>

        <PrivateRoute
          path="/Aurora_Store/cart"
          exact
          authenticated={userState.authenticated}
          component={CartPage}
        ></PrivateRoute>

        {/* MessageHandler.showMessage(
        "You need to be signed to add product in cart",
        "Sign in"
      ); */}
        <Redirect to="/Aurora_Store" />
      </Switch>

      <Footer />
    </div>
  );
};

export default App;
