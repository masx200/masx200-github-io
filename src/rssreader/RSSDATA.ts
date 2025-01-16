export type RSSDATA = Readonly<{
    title: string;
    lastBuildDate: string;
    link: string;
    content: {
        link: string;
        title: string;
        description: string;
        pubDate: string;
    }[];
    description: string;
}>;
