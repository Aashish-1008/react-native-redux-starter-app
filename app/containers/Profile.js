import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import { Tabs, Tab, Icon,Avatar,Grid,Row,Button } from 'react-native-elements';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import FacebookTabBar from './FacebookTabBar';





import {
  Animated,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';



class Profile extends Component {

  constructor() {
  super()
  this.state = {
    "name": 'Adrienne',
  }
}

  render() {
    let editProfileBtn = {
      width:150,
      height:25,
      borderRadius:25,
      backgroundColor:"#D3D3D3",
    };
    return (
  <View style={styles.container}>

    <Grid>
      <Row  style={{flex:2}}>
          <View style={{flex: 1,flexDirection: 'row'}}>


              <View style={{flex: 3,flexDirection: 'column'}}>
                <Avatar  rounded source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"}}
                    containerStyle={{flex:3 , marginLeft: 25, marginTop: 20}}
                    width={125} height={125}
                    onPress={() => console.log("Works!")} activeOpacity={1} />

                <View style={{flex: 1,alignItems: 'center'}}>
                    <Text style={{fontSize:15,marginLeft:10,marginRight:5}} style={styles.usernameStyle}>{this.state.name}</Text>
                </View>

              </View>


              <View style={{flex: 4}}>

              <View style={{flex: 3,flexDirection: 'column'}}>
                <View style={{alignItems: 'center',flex:3 ,marginRight:10,marginLeft:5 ,marginTop: 20,flexDirection: 'row'}}>
                    <View style={{flex:1 ,flexDirection: 'column', alignItems: 'center'}}>
                      <Text style={styles.label}>30</Text>
                      <Text style={styles.label}>Posts</Text>
                    </View>
                    <View style={{flex:1 ,flexDirection: 'column', alignItems: 'center'}}>
                      <Text style={styles.label}>30</Text>
                      <Text style={styles.label}>Followers</Text>
                    </View>
                    <View style={{flex:1 ,flexDirection: 'column', alignItems: 'center'}}>
                      <Text style={styles.label}>100</Text>
                      <Text style={styles.label}>Following</Text>
                    </View>
                </View>

                <View style={{flex: 2,alignItems: 'center'}}>
                  <Button buttonStyle={editProfileBtn} color={'black'} title='Edit your profile' />
                </View>

              </View>


              </View>

          </View>
  </Row>

  <Row style={{backgroundColor:"white",flex:4}}>
  <ScrollableTabView
  style={{marginTop: 20, }}
  initialPage={0}
  renderTabBar={() => <FacebookTabBar />}
  >
  <ScrollView tabLabel="ios-paper" style={styles.tabView}>
    <View style={styles.card}>
      <Text></Text>
    </View>
  </ScrollView>
  <ScrollView tabLabel="ios-bookmark" style={styles.tabView}>
    <View style={styles.card}>
      <Text>Friends</Text>
    </View>
  </ScrollView>
</ScrollableTabView>
  </Row>



</Grid>


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
  usernameStyle:{
    fontWeight: 'bold',
    fontSize:14,
    lineHeight:20,
    color:"black"
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


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
