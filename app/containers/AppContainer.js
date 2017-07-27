import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import { Tabs, Tab, Icon } from 'react-native-elements';

import {
  Animated,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

//import ApplicationTabs from './ApplicationTabs';
import Profile from './Profile';
import Search from './Search';



class AppContainer extends Component {

  constructor() {
  super()
  this.state = {
    selectedTab: 'search',
  }
}

changeTab (selectedTab) {
  this.setState({selectedTab})
}




  render() {

    let tabBarStyle = {
      backgroundColor:"#f7f4f4",
      borderWidth:0
    };
    let sceneStyle = {
      backgroundColor:"white"
    };


    const { selectedTab } = this.state
    return (
      <View style={styles.container}>
      <StatusBar
         backgroundColor="#f7f4f4"
         barStyle="light-content"
       />


      <Tabs tabBarStyle={tabBarStyle} sceneStyle={sceneStyle}>
        <Tab
          //titleStyle={{fontWeight: 'bold', fontSize: 10}}
          //selectedTitleStyle={{marginTop: -1, marginBottom: 6,fontSize:10}}
          selected={selectedTab === 'feed'}
          //title={selectedTab === 'feed' ? 'FEED' : null}
          renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center'}} color={'#777676'} name='home' size={25} />}
          renderSelectedIcon={() => <Icon color={'black'} name='home' size={25} />}
          onPress={() => this.changeTab('feed')}>
            <View>
                <Text>First Tab</Text>
            </View>
        </Tab>

        <Tab
          selected={selectedTab === 'search'}
          renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center'}} color={'#777676'} name='search' size={25} />}
          renderSelectedIcon={() => <Icon color={'black'} name='search' size={25} />}
          onPress={() => this.changeTab('search')}>
            <Search />
        </Tab>

        <Tab
          selected={selectedTab === 'assistant'}
    //       renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center' , borderRadius: 10,
    // borderWidth: 0.5, marginTop:5 ,width:50,
    // borderColor: '#d6d7da'}} color={'white'} backgroundColor='black' border='50' name='mic' size={35} />}
    //       renderSelectedIcon={() => <Icon color={'black'} name='mic' size={25} />}
          onPress={() => this.changeTab('assistant')}>
            <View>
                <Text>assistant Tab</Text>
            </View>
        </Tab>

        <Tab
          selected={selectedTab === 'notification'}
          renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center'}} color={'#777676'} name='notifications' size={25} />}
          renderSelectedIcon={() => <Icon color={'black'} name='notifications' size={25} />}
          onPress={() => this.changeTab('notification')}>
            <View>
                <Text> notification Tab</Text>
            </View>
        </Tab>

        <Tab
          selected={selectedTab === 'profile'}
          renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center'}} color={'#777676'} name='person' size={25} />}
          renderSelectedIcon={() => <Icon color={'black'} name='person' size={25} />}
          onPress={() => this.changeTab('profile')}>
          <Profile />
        </Tab>

      </Tabs>


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
    top: 0,
  },
  assistantBtn:{
    color:"red",
    backgroundColor:"green",
    bottom:40,
    left:200,
    zIndex:200,

    position: 'absolute',

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


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
