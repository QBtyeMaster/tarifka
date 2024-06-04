import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  mealImageContainer:{
    position:"relative",
    shadowColor: "#000000",
    shadowOffset: {width: 1, height: 4},
    shadowOpacity: 0.7,
    shadowRadius: 5,
    marginBottom: 25
  },
  headerMealImage:{
    width: "100%",
    height: 250,
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30
  },
  headerImageMask:{
    width: "100%",
    height: 100,
    position: "absolute",
    top: 0,
    left: 0
  },
  headerMealTitleWrapper:{
    width: "100%",
    position: "absolute",
    left: 0,
    bottom: 0,
    backgroundColor: "#ffffffaa",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#a2a2a2",

  },
  headerMealTitle:{
    paddingVertical: 15,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    fontStyle: "italic"
  },
  mealInfoContainer:{
    flex: 1,
    padding: 15

  },
  maeldetailHeadTitle:{
    fontFamily: "Tangerine-Bold",
    color: "#bf4a2a",
    textAlign: "center",
    fontSize: 50,
    fontStyle: "italic",
    marginBottom: 10
  },
  instructionsTitle:{
    fontSize: 18,
    paddingBottom: 50
  },
  ingredientTitle:{
    fontSize: 18,
  },
  youtubeButton:{
    padding: 15,
    backgroundColor: "#ca2027",
    textAlign: "center",
    marginBottom: 80,
  },
  youtubeButtonText:{
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
  }
})