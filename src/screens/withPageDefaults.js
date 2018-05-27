/** @flow */

import React, { PureComponent } from "react";
import type { DefaultPageProps } from "../types";

export default function withPageDefaults(Screen: any) {
  class DefaultPage extends PureComponent<DefaultPageProps> {
    render() {
      return <Screen {...this.props} />;
    }
  }
}
