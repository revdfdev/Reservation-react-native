import * as React from "react";
import { Text } from "native-base";

export const Error = (error: any) => <Text style={{
  color: "red"
}}>{error.message}</Text>