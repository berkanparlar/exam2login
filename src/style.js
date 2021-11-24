import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#faeeb4"
    },
    ust: {
        width: 410,
        height: 300,
        backgroundColor: "#F9DBBD",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    logo: {
        width: 200,
        height: 200,
        marginLeft: 90,
        marginTop: -300,
    },
    goQuestion:{
        width:300,
        height:400,
        backgroundColor:"white",
        marginTop:-38,
        marginLeft: 57,
        borderRadius: 20,
    },
    goQuestionMain:{
        flex:3,
    },
    goQuestionMainHeader:{
        flex:0.5,
        alignItems:"center",
    },
    goQuestionMainContent:{
        flex:1.5,
        alignItems: 'center'
    },
    goQuestionMainFooter:{
        flex:1,
        alignItems:'center'
    },
    mainHeader:{
        fontWeight:"bold",
        color: "black",
        marginTop:30,
    },
    mainContent:{
        marginTop:10,
        fontSize:12.5,
    },
    ınButton:{
        width:200,
        height:50,
        backgroundColor:"#faeeb4",
        borderRadius: 20,
        marginTop:50,
        alignItems:'center',
        justifyContent:'center',
    },
    buttonText:{
        fontSize:20,
        color:"black"
    },
    upButton:{
        width:200,
        height:50,
        borderColor:"#faeeb4",
        borderWidth:2.5,
        borderRadius: 20,
        marginTop:30,
        alignItems:'center',
        justifyContent:'center',
    },
    buttonText:{
        fontSize:20,
        color:"black",
    },
    iconSizeT:{
        width:30,
        height:30,
        marginTop:25,
        marginLeft:30
    },
    iconSizeG:{
        width:30,
        height:30,
        marginTop:25,
        marginLeft:30
    },
    iconSizeF:{
        width:30,
        height:30,
        marginTop:25,
        marginLeft:10
    }
});
