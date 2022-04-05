import { View, Text, SafeAreaView, FlatList } from "react-native";
import { useState } from "react";
import { COLORS, NFTData } from "../constants/index";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";
const Home = () => {
  const [nftData, setNFTData] = useState(NFTData);
  const onSearch = (text) => {
    if (text.length === 0) setNFTData(NFTData);
    const filteredData = NFTData.filter((item) => {
      return item.name.toLowerCase().includes(text.toLowerCase());
    });
    if (filteredData.length === 0) {
      setNFTData([]);
      return;
    } else {
      setNFTData(filteredData);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <HomeHeader onSearch={onSearch} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          {nftData?.length > 0 ? (
            <FlatList
              data={nftData}
              renderItem={({ item }) => {
                return <NFTCard data={item} />;
              }}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <>
              <Text style={{ color: COLORS.white }}>No Data Found</Text>
            </>
          )}
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }}></View>
          <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
