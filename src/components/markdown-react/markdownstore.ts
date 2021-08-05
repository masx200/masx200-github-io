import { reactive } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
const markdownstore = reactive({
    error: new Map<string, any>(),
    data: new Map<string, string>(),
});
export { markdownstore };
if (process.env.NODE_ENV === "development") {
    watch(
        () => {
            const { data, error } = markdownstore;
            return {
                data: Object.fromEntries(data),
                error: Object.fromEntries(error),
            };
        },
        (value) => console.log(value)
    );
}
