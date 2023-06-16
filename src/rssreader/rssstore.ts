import { reactive } from "@vue/reactivity";
//import { watch } from "@vue/runtime-core";

type RSSDATA = {
    title: string;
    content: {
        link: string;
        title: string;
        description: string;
    }[];
    description: string;
};

const rssstore = reactive({
    error: new Map<string, any>(),
    data: new Map<string, RSSDATA>(),
});
export { rssstore };
// if (process.env.NODE_ENV === "development") {
//     watch(
//         () => {
//             const { data, error } = rssstore;
//             return {
//                 data: Object.fromEntries(data),
//                 error: Object.fromEntries(error),
//             };
//         },
//         (value) => console.log(value)
//     );
// }
