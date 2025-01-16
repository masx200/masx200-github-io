//@ts-ignore
import React, { useEffect, useMemo } from "react";

import rssfeedxml from "./rssfeedxml";
import { Rssviewer } from "./Rssviewer";
import { getrssmain } from "./getrssmain";

//@ts-ignore
/* eslint-disable react/prop-types */
("use strict");

//@ts-ignore
//@ts-ignore

export default React.memo(Rssreader);
function Rssreader(props: {
    params: Record<string, string> & { sitename?: string };
}) {
    const rssmain = useMemo(() => {
        return getrssmain();
    }, []);
    const { sitename } = props.params;

    const rssfeedurl: string | undefined = sitename
        ? Reflect.get(rssfeedxml, sitename)
        : undefined;

    useEffect(() => {
        // document.title = "React router App-" + "rssreader";
        if ("undefined" !== typeof props.params.sitename) {
            document.title =
                "React router App-" + "rssreader-" + props.params.sitename;
        } else {
            document.title = "React router App-" + "rssreader";
        }
    }, [sitename]);
    return (
        <div className="">
            {rssmain}
            {rssfeedurl && sitename ? (
                //@ts-ignore
                <Rssviewer src={rssfeedurl} name={sitename} />
            ) : null}
        </div>
    );
}
