import * as React from "react";
import { Mutation } from "react-apollo";
import { ADD_RESERVATION } from "../../queries"
import { Container, Header, Left, Body, Icon, Title, Button, Text, Content, Form, Item, Input, Label } from "native-base"
import DateTimePicker from "react-native-modal-datetime-picker";
//import { Error } from '../Error'
import { styles } from '../../styles/styles'
import { primaryColor } from '../../styles/colors'
//import moment from "moment";

interface Props {
  navigation: any
}

interface State {
  arrivalPickerVisible: boolean,
  departurePickerVisible: boolean,
  arrivalDate: string,
  departureDate: string,
  name: string,
  hotelName: string
}

export default class AddReservation extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      arrivalPickerVisible: false,
      departurePickerVisible: false,
      arrivalDate: "",
      departureDate: "",
      name: "",
      hotelName: ""
    }
  }

  toggleArrivalPicker = () => {
    this.setState(prevProps => ({
      arrivalPickerVisible: !prevProps.arrivalPickerVisible
    }))
  }

  toggleDeparturePicker = () => {
    this.setState(prevProps => ({
      departurePickerVisible: !prevProps.departurePickerVisible
    }))
  }

  handleNameChange = (text: string) => {
    this.setState({
      name: text
    })
  }

  handleHotelNameChange = (text: string) => {
    this.setState({
      hotelName: text
    })
  }

  handleArrivalDate = (date: any) => {
    this.setState({
      arrivalDate: date.toString()
    })
    this.toggleArrivalPicker()
  }

  handleDepartureDate = (date: any) => {
    this.setState({
      departureDate: date.toString()
    });
    this.toggleDeparturePicker()
    // const selectedDate: string = moment(date).format('L');
    // this.setState({
    //   departureDate: selectedDate
    // }, () => {
    //   this.toggleDeparturePicker()
    // })
  }

  handleFomSubmit = (e: any, addReservation: any) => {
    e.preventDefault()
    addReservation().then((data: any) => {
      console.log(data)
      alert(JSON.stringify(data))
    })
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header
          androidStatusBarColor={primaryColor}
          style={{
            backgroundColor: primaryColor
          }}
        >
          <Left>
            <Button transparent onPress={() => {
              this.props.navigation.goBack();
            }}>
              <Icon
                name="arrow-back"
              />
            </Button>
          </Left>
          <Body>
            <Title>
              Add Reservation
            </Title>
          </Body>
        </Header>
        <Mutation mutation={ADD_RESERVATION} variables={{
          name: this.state.name,
          hotelName: this.state.hotelName,
          arrivalDate: this.state.arrivalDate,
          departureDate: this.state.departureDate
        }}>
          {
            (addReservation, { loading, error, data }) => {
              console.log("Error 8", JSON.stringify(error))
              return (
                <Content padder>
                  <Form>
                    <Item floatingLabel>
                      <Label>Name</Label>
                      <Input value={this.state.name} onChangeText={this.handleNameChange} />
                    </Item>
                    <Item floatingLabel>
                      <Label>Hotel name</Label>
                      <Input value={this.state.hotelName} onChangeText={this.handleHotelNameChange} />
                    </Item>
                    <Item fixedLabel>
                      <Label>Arrival date</Label>
                      <Input value={this.state.arrivalDate} onFocus={() => this.toggleArrivalPicker()} />
                    </Item>
                    <Item fixedLabel>
                      <Label>Departure date</Label>
                      <Input value={this.state.departureDate} onFocus={() => this.toggleDeparturePicker()} />
                    </Item>

                    {(error) ? <Text style={{ color: "red" }}>{error.message}</Text> : null}
                  </Form>
                  <Button block primary onPress={(e) => this.handleFomSubmit(e, addReservation)}>
                    <Text>
                      Add Reservation
                    </Text>
                  </Button>
                </Content>
              )
            }
          }

        </Mutation>
        <DateTimePicker
          isVisible={this.state.arrivalPickerVisible}
          onConfirm={this.handleArrivalDate}
          onCancel={this.toggleArrivalPicker}
        />

        <DateTimePicker
          isVisible={this.state.departurePickerVisible}
          onConfirm={this.handleDepartureDate}
          onCancel={this.toggleDeparturePicker}
        />
      </Container>
    )
  }
}
