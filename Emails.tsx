import React from "react";
import { Text, View,FlatList,StyleSheet, TouchableOpacity} from "react-native";
import useEmails from "./useEmails";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';


const styles = StyleSheet.create({

    text:{flex:1,
        padding:10,
        borderWidth:1,
        fontSize:20,
        fontWeight:'bold',
        backgroundColor:'white'
    },
    FloatingButton:{
        backgroundColor:'white',
        borderWidth:0.8,
        position:'absolute',
        width:170,
        height:55,
        borderRadius:100,
        bottom:45,
        right:20,
        textAlign:'center',
        alignContent:'center',
        fontSize:26,
        fontWeight:'bold',
        padding:5,
        paddingTop:10
    }
 
});


const Emails =({navigation})=>{
    const {navigate} = navigation;


    const {isloading,emails,error}=useEmails();
    return(
    <View>
<FlatList
        data={emails}
        renderItem={({item}) =>
        <View>
            <TouchableOpacity onPress={()=>{
                navigate('Email-info',{item:item});
            }}>
        <Text style={styles.text}>
            Subject : {item.title}</Text>
            </TouchableOpacity>
        </View>
        }
      />
        {/* /* <ScrollView>
            {emails.map(item =>
                <View>
                    <Text style={{flexWrap:'wrap'}}>
                        {item.title}
                    </Text>

                </View>

            )}
            </ScrollView> */ }

    <TouchableOpacity >
        <Text style={styles.FloatingButton} 
        onPress={()=>{
                navigate('Composing')
        }       
        }>Compose +</Text>
        
    </TouchableOpacity>
 
    </View>

    );
}


export default Emails;