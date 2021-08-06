import {
    createHashRouter,
    createReactParamsHook,
    createReactView,
} from "@masx200/search-hash-params-router";
import { createElement, useEffect, useState } from "react";
import  CustomLink  from "./CustomLink";
export const hashrouter = createHashRouter();
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

export { useParams, View, CustomLink };
