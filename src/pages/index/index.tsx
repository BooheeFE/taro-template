import Taro, { Component, Config } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import s from "./index.scss";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config: Config = {
    navigationBarTitleText: "首页"
  };

  render() {
    return (
      <View className={s.index}>
        <Text>Hello world!</Text>
      </View>
    );
  }
}
