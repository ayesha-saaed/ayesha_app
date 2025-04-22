import{View, Text, Scrollview, button} from "react-native"
import Product from "./components/Product"
import Category from "./components/Category.jsx"
import { StyleSheet } from "react-native-web"

const styles = StyleSheet.create({

  textLarge :{
    fontsize:80,
    
    color:"red"

  },
  container:{
    borderStyle:"dotted",
    borderColor:"red",
    borderWidht:2,
    padding:15,
    textAlign:"center",
    marginTop:50

  }
}

)
function App(){
  return(<Scrollview>
    <Product
    name="Airpods"
    price="3100"
    color="white"
  ></Product>
  <Product>
  name="Iphone"
    price="300000"
    color="Black"
  </Product>
  <Product>
  name="laptop"
    price="120000"
    color="white"
  </Product>

  <button
  title="Buy"
  color="red"
  ></button>

  <Category />
    <Text style={styles.textLarge}>Add to cart</Text>
    <Text style={styles.container}>confirm the order</Text>
    <Text style={[styles.textLarge,styles.container]}>Thanks for ordering</Text>
    

  
  
    </Scrollview>)


}
export default App