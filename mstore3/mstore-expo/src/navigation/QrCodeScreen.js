/** @format */

import React, { PureComponent } from "react";

import { UserProfile } from "@containers";

class QrCodeScreen extends PureComponent {
  render() {
    const { navigation } = this.props;

    return <UserProfile navigation={navigation} />;
  }
}

export default QrCodeScreen;
