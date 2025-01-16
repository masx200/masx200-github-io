import { createElement, useEffect, useState } from "react";

import { createReactLink } from "@masx200/search-hash-params-router";

import { hashrouter } from "./router";

export const Link = createReactLink({
    router: hashrouter,
    useEffect,
    useState,
    createElement,
});
