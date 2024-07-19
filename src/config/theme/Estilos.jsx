import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'white',
        marginTop:15
    },
    containerResult: {
        flex: 3,
        backgroundColor: 'red',
        marginBottom:30,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    container: {
        flex: 1,
    },
    switchContainer: {
        position: 'absolute',
        top: 40, // Ajusta según sea necesario
        left: 10, // Ajusta según sea necesario
        transform: [{ rotate: '0deg' }],
    },
    modeText:{
        transform: [{ rotate: '0 deg' }],
        top:10,
        left:20,
        fontWeight:'500'
    },
    buttonsContainter:{
        flex:5,
        paddingTop:20
    },
    mainResult:{
        color: 'black',
        fontSize: 80,
        textAlign:"right",
        fontWeight:"bold"
    },
    subResult:{
        color: 'black',
        fontSize: 35,
        textAlign: "right",
        fontWeight:'300'
    },
    button:{
        height: 70,
        width: 70,
        backgroundColor: 'red',
        borderRadius: 35,
        justifyContent: "center",
        marginHorizontal: 10,
    },
    buttonText:{
        color: 'black',
        fontSize: 30,
        fontWeight: "500",
        textAlign: "center"
    },
    row:{
        flexDirection: "row",
        justifyContent: "center",
        marginVertical:5,
    }

})