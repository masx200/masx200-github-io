export function Rssdatarenderer({
    link,
    rssstate,
    rssfeedurl,
    data,
    rssstatetitle,
    rssstatedescription,
}: {
    data:
        | Readonly<{
              readonly link: string;
              readonly title: string;
              lastBuildDate: string;
              readonly content: readonly {
                  readonly link: string;
                  readonly title: string;
                  readonly description: string;
                  readonly pubDate: string;
              }[];
              readonly description: string;
          }>
        | undefined;
    link?: string;
    rssstatetitle?: string;
    rssstatedescription?: string;
    rssfeedurl?: string;
    rssstate?:
        | readonly {
              readonly link: string;
              readonly title: string;
              readonly description: string;
              readonly pubDate: string;
          }[]
        | undefined;
}) {
    return (
        <>
            <div>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <h5>{rssfeedurl}</h5>
                </a>
            </div>
            <div style={{ maxWidth: "100%" }}>
                <h3>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <b>{rssstatetitle}</b>
                    </a>
                </h3>
                <p>{rssstatedescription}</p>
                <p>构建时间:{data?.lastBuildDate}</p>
                <ul className="mui-table-view">
                    {rssstate
                        ? rssstate.map((e, index) => (
                              <li
                                  className="mui-table-view-cell mui-media"
                                  key={index}
                                  /* style="width: 100%;" */
                                  /* 每个项目占一行,防止一行多个项目 */
                                  style={{ width: " 100%" }}
                              >
                                  <div className="mui-media-body">
                                      <a
                                          href={e.link}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                      >
                                          <b>{e.title}</b>
                                      </a>
                                      <a
                                          href={e.link}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                      >
                                          <p className="mui-ellipsis">
                                              {e.link}
                                          </p>
                                      </a>
                                      <p className="mui-ellipsis">
                                          发布时间:{e.pubDate}
                                      </p>
                                      <details>
                                          <summary>详情</summary>
                                          <p
                                              className="mui-ellipsis"
                                              style={{
                                                  whiteSpace: "normal",
                                                  wordBreak: "break-all",
                                                  wordWrap: "break-word",
                                              }}
                                          >
                                              {e.description}
                                          </p>
                                      </details>
                                  </div>
                              </li>
                          ))
                        : null}
                </ul>
            </div>
        </>
    );
}
