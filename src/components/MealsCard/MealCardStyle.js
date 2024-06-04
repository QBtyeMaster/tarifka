import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mealCardContainer: {
    marginHorizontal: 10,
    marginVertical: 5,
    flex: 1,
    position: "relative"
  },
  mealImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    borderRadius: 20,
    marginRight: 20,
  },
  mealInfo:{
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
  },
  mealInfoText:{
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "500",
    fontStyle: "italic",
    textAlign: "right"
  }
});
