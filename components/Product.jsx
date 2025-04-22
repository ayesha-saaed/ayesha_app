
import { View, Text, ScrollView, Button } from "react-native";

function Product(props) {
  let name = props.name;
  let price = props.price;
  let color = props.color;

  return (
    <ScrollView>
    <Text>{name}</Text>
    <Text>{
        `pric:${price}
        with color:${color}`
    }
    </Text>
    </ScrollView>
      
    
  );
}

export default Product;
