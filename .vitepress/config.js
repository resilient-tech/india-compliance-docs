const { getPosts, generatePaginationPages } = require('./theme/serverUtils')
import { SearchPlugin } from "vitepress-plugin-search";
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
        
        themeConfig: {
            posts: await getPosts(),
            pageSize: pageSize,
            website: "https://www.resilient.tech/",
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
            comment: {
                repo: 'airene/vitepress-blog-pure',
                themes: 'github-light',
                issueTerm: 'pathname'
            },
            nav: nav() ,
            sidebar: {
            "/guide/": sidebarGuide(),
            "/blog/": sidebarBlog(),
        },
            
            
        },        

        vite: {
            plugins:[
                SearchPlugin(),
            ]
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
            link: "/guide/introduction",
            activeMatch: "/guide/",
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
                { text: "Introduction", link: "/guide/introduction" },
                { text: "Installation", link: "/guide/installation" },
                { text: "India Compliance Account", link: "/guide/india_compliance_account" },   
                               
            ],
        },
        {
            text: "GST Configuration",
            collapsible: true,
            items: [
                { text: "Setting-Up", link: "/guide/gst_setup" },
                { text: "Sales Transaction", link: "/guide/sales_transaction" },
                { text: "Purchase Transaction", link: "/guide/purchase_transaction" },
                { text: "Other Transaction", link: "/guide/other_transaction" },
                                
            ],
        },
        {   
            text: "e-Waybill & e-Invoice",
            collapsible: true,
            items: [
                { text: "Setting-Up", link: "/guide/gst_settings" },
                { text: "Generating e-Waybill", link: "/guide/generating_e_waybill" },
                { text: "Generating e-Invoice", link: "/guide/generating_e_invoice" },
                { text: "FAQs", link: "/guide/faqs" },
                
            ],
        },
        {
            text: "Other Features",
            collapsible: true,
            items: [
                { text: "GSTIN Verification", link: "/guide/gstin_verification" },
                { text: "Reports and Returns", link: "/guide/gst_reports" },
                { text: "Transaction Validations", link: "/guide/transaction_validations" },
                


                
                
            ],
        },
        {
            text: "Developers Option",
            collapsible: true,
            items: [
                { text: "Migration Guide", link: "/guide/migration-guide" },
                { text: "Sandbox", link: "/guide/sandbox" },
                
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
