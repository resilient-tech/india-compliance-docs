import { defineConfig } from "vitepress";
import { version } from "../../package.json";

export default defineConfig({
    lang: "en-UK",
    title: "India Compliance",
    description: "Documentation and User Guide for India Compliance App",

    lastUpdated: true,
    cleanUrls: "without-subfolders",

    themeConfig: {
        nav: nav(),

        sidebar: {
            "/guide/": sidebarGuide(),
            "/config/": sidebarConfig(),
        },

        editLink: {
            pattern:
                "https://github.com/resilient-tech/india-compliance-docs/edit/main/docs/:path",
            text: "Edit this page on GitHub",
        },

        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/resilient-tech/india-compliance/",
            },
        ],

        footer: {
            message: "Powered by Resilient Tech",
            copyright: "Copyright © 2022",
        },

        algolia: {
            appId: "8J64VVRP8K",
            apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
            indexName: "vitepress",
        },
    },
});

function nav() {
    return [
        {
            text: "Docs",
            link: "/guide/getting-started",
            activeMatch: "/guide/",
        },
        { text: "Team", link: "team", activeMatch: "/guide/" },
    ];
}

function sidebarGuide() {
    return [
        {
            text: "Introduction",
            collapsible: true,
            items: [
                { text: "Getting Started", link: "/guide/getting-started" },
                { text: "Configuration", link: "/guide/configuration" },
                { text: "Sandbox", link: "/guide/sandbox" },
            ],
        },
        {
            text: "Writing",
            collapsible: true,
            items: [
                { text: "Markdown", link: "/guide/markdown" },
                { text: "Asset Handling", link: "/guide/asset-handling" },
                { text: "Frontmatter", link: "/guide/frontmatter" },
                { text: "Using Vue in Markdown", link: "/guide/using-vue" },
                { text: "API Reference", link: "/guide/api" },
            ],
        },
        {
            text: "Theme",
            collapsible: true,
            items: [
                { text: "Introduction", link: "/guide/theme-introduction" },
                { text: "Nav", link: "/guide/theme-nav" },
                { text: "Sidebar", link: "/guide/theme-sidebar" },
                { text: "Prev Next Link", link: "/guide/theme-prev-next-link" },
                { text: "Edit Link", link: "/guide/theme-edit-link" },
                { text: "Last Updated", link: "/guide/theme-last-updated" },
                { text: "Layout", link: "/guide/theme-layout" },
                { text: "Home Page", link: "/guide/theme-home-page" },
                { text: "Team Page", link: "/guide/theme-team-page" },
                { text: "Footer", link: "/guide/theme-footer" },
                { text: "Search", link: "/guide/theme-search" },
                { text: "Carbon Ads", link: "/guide/theme-carbon-ads" },
            ],
        },
        {
            text: "Migrations",
            collapsible: true,
            items: [
                {
                    text: "Migration Guide",
                    link: "/guide/migration-guide",
                },
            ],
        },
    ];
}

function sidebarConfig() {
    return [
        {
            text: "Config",
            items: [
                { text: "Introduction", link: "/config/introduction" },
                { text: "App Configs", link: "/config/app-configs" },
                { text: "Theme Configs", link: "/config/theme-configs" },
                {
                    text: "Frontmatter Configs",
                    link: "/config/frontmatter-configs",
                },
            ],
        },
    ];
}
