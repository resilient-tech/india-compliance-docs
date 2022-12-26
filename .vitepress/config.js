const { getPosts, generatePaginationPages } = require('./theme/serverUtils')
import { defineConfig } from "vitepress";


async function config() {
    const pageSize = 3
    await generatePaginationPages(pageSize)
    return {        
        lang: "en-UK",
        title: "India Compliance",
        description: "Documentation and User Guide for India Compliance App",

        ignoreDeadLinks:true,
        lastUpdated: true,
        cleanUrls: "without-subfolders",
        
        themeConfig: {
            posts: await getPosts(),
            pageSize: pageSize,
            website: "https://www.resilient.tech/",

            editLink: {
            pattern:
                "https://github.com/resilient-tech/india-compliance-docs/edit/main/:path",
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

            comment: {
                repo: 'resilient-tech/india-compliance',
                themes: 'github-light',
                issueTerm: 'pathname'
            },

            nav: nav() ,

            algolia: {
                appId: "8J64VVRP8K",
                apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
                indexName: "vitepress",
            },

            sidebar: {
            "docs/guide/": sidebarGuide(),
            "/blog/": sidebarBlog(),
            },      
            
        },   

        vite: {
            //build: { minify: false }
            //server: { port: 5000 },
        },
        /*
      optimizeDeps: {
          keepNames: true
      }
      */
    }
}

module.exports = config()

function nav() {
    return [
        {
            text: "Docs",
            link: "docs/guide/getting-started/introduction",
            activeMatch: "/getting-started/",
        },
        { text: "Team", link: "team", activeMatch: "/team/" },
        { text: "Blog", link: "blog/index", activeMatch: "/blog/"}
    ];
}

function sidebarGuide() {
    return [
        {
            text: "Getting Started",
            collapsible: true,
            items: [
                { text: "Introduction", link: "docs/guide/getting-started/introduction" },
                { text: "Installation", link: "docs/guide/getting-started/installation" },
                { text: "India Compliance Account", link: "docs/guide/getting-started/india_compliance_account" },   
                               
            ],
        },
        {
            text: "GST Configuration",
            collapsible: true,
            items: [
                { text: "Setting-Up", link: "docs/guide/gst-configuration/gst_setup" },
                { text: "Sales Transaction", link: "docs/guide/gst-configuration/sales_transaction" },
                { text: "Purchase Transaction", link: "docs/guide/gst-configuration/purchase_transaction" },
                { text: "Other Transaction", link: "docs/guide/gst-configuration/other_transaction" },
                                
            ],
        },
        {   
            text: "e-Waybill & e-Invoice",
            collapsible: true,
            items: [
                { text: "Setting-Up", link: "docs/guide/e-invoice-and-eway/gst_settings" },
                { text: "Generating e-Waybill", link: "docs/guide/e-invoice-and-eway/generating_e_waybill" },
                { text: "Generating e-Invoice", link: "docs/guide/e-invoice-and-eway/generating_e_invoice" },
                { text: "FAQs", link: "docs/guide/e-invoice-and-eway/faqs" },
                
            ],
        },
        {
            text: "Other Features",
            collapsible: true,
            items: [
                { text: "GSTIN Verification", link: "docs/guide/other-features/gstin_verification" },
                { text: "Reports and Returns", link: "docs/guide/other-features/gst_reports" },
                { text: "Transaction Validations", link: "docs/guide/other-features/transaction_validations" },
                


                
                
            ],
        },
        {
            text: "Developers Option",
            collapsible: true,
            items: [
                { text: "Migration Guide", link: "docs/guide/developer-option/migration-guide" },
                { text: "Sandbox", link: "docs/guide/developer-option/sandbox" },
                
            ],
        },
       
    ];
}

function sidebarBlog() {
    return [
        {
            text: "",
            collapsible: true,
            items: [
                { text: "Recent", link: "/blog/" },
                { text: "Archives", link: "/blog/pages/archives" },
                { text: "Tags", link: "/blog/pages/tags" },                
            ],
        },
    ];
}