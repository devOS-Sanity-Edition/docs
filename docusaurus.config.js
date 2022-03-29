// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "devOS: Sanity Edition Docs",
    tagline: "documenting whatever we decide to throw our way",
    url: "https://docs.devos.one",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "Asoji", // Usually your GitHub org/user name.
    projectName: "docs", // Usually your repo name.

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    remarkPlugins: [
                        [require('docusaurus-remark-plugin-codetabs'), {

                        }],
                    ]
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css")
                }
            })
        ]
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: "devOS: Sanity Edition Docs",
                // logo: {
                //   alt: "My Site Logo",
                //   src: "img/logo.svg"
                // },
                items: [
                    {
                        type: "doc",
                        docId: "intro",
                        position: "left",
                        label: "Docs"
                    }
                    // { to: "/blog", label: "Blog", position: "left" },
                    // {
                    //   href: "https://github.com/facebook/docusaurus",
                    //   label: "GitHub",
                    //   position: "right"
                    // }
                ]
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {
                                label: "Control Patcher",
                                to: "/docs/controlpatcher"
                            },
                            {
                                label: "Yiski",
                                to: "/docs/yiski"
                            }
                        ]
                    }
                    // {
                    //   title: "Community",
                    //   items: [
                    //     {
                    //       label: "Stack Overflow",
                    //       href: "https://stackoverflow.com/questions/tagged/docusaurus"
                    //     },
                    //     {
                    //       label: "Discord",
                    //       href: "https://discordapp.com/invite/docusaurus"
                    //     },
                    //     {
                    //       label: "Twitter",
                    //       href: "https://twitter.com/docusaurus"
                    //     }
                    //   ]
                    // },
                    // {
                    //   title: "More",
                    //   items: [
                    //     {
                    //       label: "Blog",
                    //       to: "/blog"
                    //     },
                    //     {
                    //       label: "GitHub",
                    //       href: "https://github.com/facebook/docusaurus"
                    //     }
                    //   ]
                    // }
                ],
                copyright: `Copyright © ${new Date().getFullYear()} devOS: Sanity Edition. Built with Docusaurus.`
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ['csharp']
            }
        })
};

module.exports = config;
