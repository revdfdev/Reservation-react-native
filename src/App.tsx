import * as React from "react";
import { StatusBar } from "react-native";
import { primaryColor } from './styles/colors';
import ApolloApp from './components/ApolloApp';


export default class App extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor(primaryColor);
  }

  render() {
    return <ApolloApp />
  }
}