import * as React from "react";
import { Container, Content, Header, Title, Body, Text, List, ListItem, Left, Right, Button, Icon } from "native-base";
import { View } from "react-native";
import { Query } from "react-apollo";
import { GET_ALL_RESERVATIONS } from "../../queries"
import { styles } from "../../styles/styles";
import { primaryColor } from "../../styles/colors";


const Reservations = (props: any) => (
  <Container style={styles.container}>
    <Header
      androidStatusBarColor={primaryColor}
      style={{
        backgroundColor: primaryColor
      }}>
      <Body>
        <Title>
          Reservations
          </Title>
      </Body>
      <Right>
        <Button transparent onPress={(e: any) => {
          props.navigation.push("ADDRESERVATION");
        }}>
          <Text>Add</Text>
        </Button>
      </Right>
    </Header>
    <Content padder>
      <Query query={GET_ALL_RESERVATIONS}>
        {
          ({ loading, error, data }) => {
            if (loading) return <View style={{ flex: 1, flexDirection: 'column', alignContent: 'center', justifyContent: "center" }}><Text>Loading...</Text></View>
            if (error) return <View style={{ flex: 1, flexDirection: 'column', alignContent: 'center', justifyContent: "center" }}><Text>Error</Text></View>

            return (
              <List>
                {(data.getAllReservations.length > 0) ? data.getAllReservations.map((reservation: any) => (
                  <ListItem key={reservation._id}>
                    <Left>
                      <Text>{reservation.name}</Text>
                    </Left>
                    <Right>
                      <Button transparent onPress={() => {
                        props.navigation.push("RESERVATION", {
                          id: reservation._id
                        })
                      }}>
                        <Icon name="arrow-forward" />
                      </Button>
                    </Right>
                  </ListItem>
                )) : null}
              </List>
            )
          }
        }
      </Query>
    </Content>
  </Container>
);

export default Reservations;
