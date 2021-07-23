import {
    createReactParamsHook,
    createHashRouter,
    createReactView,
    createReactLink,
} from "@masx200/search-hash-params-router";
import { createElement, useEffect, useState } from "react";
const hashrouter = createHashRouter();
const useParams = createReactParamsHook({
    router: hashrouter,
    useEffect,
    useState,
});
const View = createReactView({
    router: hashrouter,
    createElement,

    useEffect,
    useState,
});
const Link = createReactLink({
    router: hashrouter,
    useEffect,
    useState,
    createElement,
});
export { hashrouter, useParams, View, Link };
