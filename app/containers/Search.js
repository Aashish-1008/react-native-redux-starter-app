import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import { Tabs, Tab, Icon,Avatar,Grid,Row,Button,SearchBar } from 'react-native-elements';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import FacebookTabBar from './FacebookTabBar';

import Search from 'react-native-search-box';
const rowHeight = 40;


import {
  Animated,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableHightLight,
} from 'react-native';



class Search1 extends Component {

  state = {
    data: {
      "A": [
        {
          "name": "Anh Tuan Nguyen",
          "age": 28
        },
        {
          "name": "An Nhien",
          "age": 20
        },
      ],
      "Z": [
        {
          "name": "Zue Dang",
          "age": 22
        },
        {
          "name": "Zoom Jane",
          "age": 30
        },
      ]
    },
    onChangeText : () => {
        return new Promise((resolve, reject) => {
            console.log('onChangeText');
            resolve();
        });
    },
  }

    renderRow = (item, sectionId, index) => {
      return (
        <TouchableHightLight
          style={{
            height: rowHeight,
            justifyContent: 'center',
            alignItems: 'center'}}
        >
          <Text>{item.name}</Text>
        </TouchableHightLight>
      );
    }



  render() {
    // inside your render function
    return (
      <View style={{ flex: 1}}>
      <Search
        ref="search_box"
        onChangeText={this.state.onChangeText}
        backgroundColor={"white"}
        placeholderTextColor= {"black"}
        titleCancelColor = {"black"}
    tintColorSearch = {"black"}
    tintColorDelete= {"black"}
      />

      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: 0,
    left: 0,
    right: 0,
    top: 0
  },
  label:{
    fontSize:12,
    lineHeight:20,
    color:"black"
  },
  searchBarStyle:{
    borderTopWidth:0,
    borderBottomWidth:0,
    opacity:0.5,
    elevation:1,
    backgroundColor:'white'
  }
});


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    count:state.searchedRecipes.count
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Search1);
