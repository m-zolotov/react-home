import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import ArticleList from "./components/ArticleList";
import {articles} from "./fixtures";

export default class App extends Component {
    render() {
      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React App</h1>
        </header>
        <ArticleList articles={articles}/>
      </div>
    );
  }
}