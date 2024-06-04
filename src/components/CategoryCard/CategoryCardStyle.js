import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  categoryCardContainer:{
    marginVertical: 7,
    marginHorizontal: 8,
    minHeight: 80,
    backgroundColor: "#f6f6f6",
    borderColor: "#a6a5a5",
    borderWidth: 1,
    borderTopLeftRadius: 50,
    borderBottomStartRadius: 50,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    paddingHorizontal: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center"
  },
  categoryImage:{
    width: 80,
    height: 80,
    resizeMode: "contain",
    borderRadius: 50,
    marginRight: 20
  },
  categoryTitleWrapper:{
    flex: 1
  },
  categoryTitle:{
    fontSize: 24,
    fontStyle: "italic",
    fontWeight: "500"
  }

})