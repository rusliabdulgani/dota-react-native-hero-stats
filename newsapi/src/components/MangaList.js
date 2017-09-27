import React from 'react';
import {StyleSheet, Image} from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Title} from 'native-base';
import { connect } from 'react-redux';
import { Col, Row, Grid } from 'react-native-easy-grid';

import { getManga } from '../actions/mangalistActions'

class MangaList extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            sources: []
        }
    }

    componentDidMount () {
       this.props.getManga()
    }

    render () {
        console.log('====================++++++',this.props.mangalist[0])
        const url= `https://api.opendota.com`
        return (
          <Container>
          <Header>
            <Title>Dota 2 Hero</Title>
          </Header>
          <Content>
            <List>
              { this.props.mangalist.map( dota => {

                return (
                  <ListItem>
                    <Thumbnail square size={80} source={{ uri: `${url}${dota.img}` }} />
                    <Body>
                    <Text>{dota.localized_name}</Text>
                    <Text note>Roles: {dota.roles.join()}</Text>
                  </Body>
                  </ListItem>
                  ) 
              })
              }
            </List>
          </Content>
        </Container>
        );
    }


}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
    listImage: {
        width: 150,
        height: 130
    }
  });

  const mapStateToProps = (state) => ({
    mangalist: state.mangalist
  })
  
  const mapDispatchToProps = dispatch => ({
    getManga: () => dispatch(getManga())
  })

  export default connect(mapStateToProps, mapDispatchToProps)(MangaList)

