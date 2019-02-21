import { createStackNavigator, createAppContainer } from "react-navigation";
import AddReservation from '../AddReservation';
import Reservations from "../Reservations";
import Reservation from "../Reservation";


const NavigationWrap = createStackNavigator(
  {
    ADDRESERVATION: AddReservation,
    RESERVATIONS: Reservations,
    RESERVATION: Reservation
  },

  {
    initialRouteName: "RESERVATIONS",
    headerMode: 'none'
  }
);


export default createAppContainer(NavigationWrap)