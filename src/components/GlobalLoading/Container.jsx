import React from "react";

import { useSelector } from "react-redux";

import GlobalLoading from "./Index";

function GlobalLoadingContainer() {
  const isLoading = useSelector((state) => state.ui.globalLoading);

  const willRender = isLoading ? <GlobalLoading /> : null;

  return willRender;
}

export default GlobalLoadingContainer;
