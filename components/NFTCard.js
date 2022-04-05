import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, assets, SHADOWS } from "../constants";
import { CircleButton, RectButton } from "./Buttons";
import { SubInfo, ETHPrice, NFTTitle } from "./SubInfo";
import { useState } from "react";
const NFTCard = ({ data }) => {
  const [iconFilled, setIconFilled] = useState(false);
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
          source={data.image}
        />
        <CircleButton
          handlePress={() => setIconFilled((prevState) => !prevState)}
          imgURL={iconFilled ? assets.heart_filled : assets.heart}
          right={10}
          top={10}
        />
      </View>
      <SubInfo />
      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
      </View>
      <View
        style={{
          marginTop: SIZES.font,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 13,
          marginHorizontal: 15,
        }}
      >
        <ETHPrice price={data.price} />
        <Text></Text>
        <RectButton
          minWidth={120}
          fontSize={SIZES.font}
          handlePress={() => navigation.navigate("Details", { data })}
        />
      </View>
    </View>
  );
};

export default NFTCard;
