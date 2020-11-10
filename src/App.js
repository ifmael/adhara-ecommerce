import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import MainContainer from "components/commons/layout/MainContainer";
import AccountBox from "components/commons/layout/AccountBox";
import { SignIn, SignUp, Customers, Products } from "pages";
import "./styles/App.scss";

const client = new ApolloClient({
  uri: "http://localhost:3005/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <div className="ecommerce">
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <AccountBox>
                <SignIn />
              </AccountBox>
            </Route>
            <Route path="/join" exact>
              <AccountBox>
                <SignUp />
              </AccountBox>
            </Route>
            <Route path="/customers" exact>
              <MainContainer>
                <Customers />
              </MainContainer>
            </Route>
            <Route path="/products" exact>
              <MainContainer>
                <Products />
              </MainContainer>
            </Route>
          </Switch>
        </Router>
      </ApolloProvider>
    </div>
  );
};

export default App;
