import * as React from "react";
import { Container, Header, Content, Left, Body, Title, Icon, Text, Card, Button, CardItem } from "native-base";
import { styles } from "../../styles/styles";
import { View } from 'react-native';
import { primaryColor } from "../../styles/colors";
import { Query } from 'react-apollo';
import { GET_RESERVATION } from '../../queries'



const Reservation = (props: any) => {
  const { navigation } = props;
  const id = navigation.getParam("id", "");
  console.log("ID", id)
  return (
    <Query query={GET_RESERVATION} variables={{ _id: id }}>
      {
        ({ loading, error, data }) => {
          if (loading) return <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: "center" }}><Text>Loading...</Text></View>
          if (error) return <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: "center" }}><Text>Error</Text></View>
          console.log(data)
          return (
            <Container style={styles.container}>
              <Header androidStatusBarColor={primaryColor}
                style={{
                  backgroundColor: primaryColor
                }}>
                <Left>
                  <Button transparent onPress={() => props.navigation.goBack()}>
                    <Icon name="arrow-back" />
                  </Button>
                </Left>
                <Body>
                  <Title>
                    Reservation
                  </Title>
                </Body>
              </Header>
              <Content padder>
                <Card>
                  <CardItem header bordered>
                    <Text>Customer name</Text>
                  </CardItem>
                  <CardItem bordered>
                    <Body>
                      <Text>{`MR' ${data.getReservation.name}`}</Text>
                    </Body>
                  </CardItem>
                  <CardItem header bordered>
                    <Text>Hotel name</Text>
                  </CardItem>
                  <CardItem bordered>
                    <Body>
                      <Text>
                        {data.getReservation.hotelName}
                      </Text>
                    </Body>
                  </CardItem>
                  <CardItem header bordered>
                    <Text>Arrival</Text>
                  </CardItem>
                  <CardItem bordered>
                    <Body>
                      <Text>
                        {data.getReservation.arrivalDate}
                      </Text>
                    </Body>
                  </CardItem>
                  <CardItem header bordered>
                    <Text>Departure</Text>
                  </CardItem>
                  <CardItem bordered>
                    <Body>
                      <Text>
                        {data.getReservation.departureDate}
                      </Text>
                    </Body>
                  </CardItem>
                </Card>
              </Content>
            </Container>
          )
        }
      }
    </Query>
  );
}

export default Reservation;