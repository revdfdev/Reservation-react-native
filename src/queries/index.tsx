import { gql } from 'apollo-boost';


// QUERIES
export const GET_ALL_RESERVATIONS = gql`
query{
  getAllReservations{
    _id,
    name
  }
}`;


export const GET_RESERVATION = gql`
query($_id: ID!){
  getReservation(_id: $_id) {
    _id,
    name,
    hotelName,
    arrivalDate,
    departureDate
  }
}`;


// MUTATIONS
export const ADD_RESERVATION = gql`
mutation($name: String!, $hotelName: String!, $arrivalDate: String!,  $departureDate: String!) {
  addReservation(name: $name, hotelName: $hotelName, arrivalDate: $arrivalDate, departureDate: $departureDate) {
    _id,
    name,
    hotelName
  },
}
`