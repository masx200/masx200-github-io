export const config = {
    runtime: "experimental-edge",
};

export default (req) => {
    return new Response(
        JSON.stringify({
            headers: Object.fromEntries(req.headers),

            url: req.url,

            method: req.method,
        })
    );
};
