import Unocss from 'unocss/vite'
import { defineConfig } from 'vitepress'
import { version } from '../../package.json'


export default defineConfig({
    lang: "en-UK",

    // common meta(head) tags
    head: [

        ['link', { rel: 'icon', href: 'https://docs.indiacompliance.app/favicon.ico' }],

        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['meta', { name: 'author', content: 'Resilient Tech' }],
        ['meta', { name: 'keywords', content: 'India Compliance, Resilient Tech, ERP, ERPNext, Frappe, GSTR2A/2B, Reconciliation Tool, e-Invoice, e-Waybill, GST, India' }],
        ['meta', { name: 'robots', content: 'index, follow' }],
        ['meta', { name: 'copyright', content: 'Copyright © 2024, Resilient Tech' }],
        ['meta', { name: 'revisit-after', content: '7 days' }],
        
        ['meta', { name: 'og:type', content: 'website' }],
        ['meta', { name: 'og:image', property: 'og:image', content: 'https://docs.indiacompliance.app/assets/OG-Share.jpg' }],
        ['meta', { name: 'og:image:alt', content: 'India Compliance Logo' }],
        ['meta', { name: 'og:image:width', content: '1200' }],
        ['meta', { name: 'og:image:height', content: '675' }],

        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { name: 'twitter:image', content: 'https://docs.indiacompliance.app/assets/OG-Share.jpg' }],
        // NOTE  : It converts <HOST>/docs/configuration/assets to <HOST>/assets
        ['meta', { name: 'twitter:image:alt', content: 'India Compliance Logo' }],
        ['meta', { name: 'twitter:image:width', content: '1200' }],
        ['meta', { name: 'twitter:image:height', content: '675' }],

    ],


    // index page meta(head) tags
    title: "India Compliance",
    description: "Documentation and User Guide for India Compliance App",
    og_title:"India Compliance",
    og_url:"https://docs.indiacompliance.app/",

    ignoreDeadLinks: true,
    lastUpdated: true,
    cleanUrls: "without-subfolders",

    // for specific page  meta(head) tags
    transformPageData(pageData) {
        pageData.frontmatter.head = []
        pageData.frontmatter.head.push(
            ['meta',
                {
                    name: 'og:title',
                    content: `${pageData?.frontmatter?.og_title ? pageData.frontmatter.og_title : "India Compliance"}`
                }
            ],
            ['meta',
                {
                    name: 'og:description',
                    content: `${pageData?.description ? pageData.description : "Documentation and User Guide for India Compliance App"}`
                }
            ],
            ['meta',
                {
                    name: 'og:url',
                    content: `${pageData?.frontmatter?.og_url ? pageData.frontmatter.og_url : "https://docs.indiacompliance.app/"}`
                }
            ],
            ['meta',
                {
                    name: 'twitter:title',
                    content: `${pageData?.frontmatter?.og_title ? pageData.frontmatter.og_title : "India Compliance"}`
                }
            ],
            ['meta',
                {
                    name: 'twitter:description',
                    content: `${pageData?.description ? pageData.description : "Documentation and User Guide for India Compliance App"}`
                }
            ],
            ['meta',
                {
                    name: 'twitter:url',
                    content: `${pageData?.frontmatter?.og_url ? pageData.frontmatter.og_url : "https://docs.indiacompliance.app/"}`
                }
            ],
        )
    },

    sitemap: {
        hostname: 'https://docs.indiacompliance.app/',
        lastmodDateOnly: false
    },

    themeConfig: {
        editLink: {
            pattern:
                "https://github.com/resilient-tech/india-compliance-docs/edit/main/pages/:path",
            text: "Edit this page on GitHub",
        },

        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/resilient-tech/india-compliance/",
            },
        ],

        footer: {
            message: "<a href=https://www.resilient.tech/> Powered by Resilient Tech <a> ",
            copyright: "Copyright © 2024",
        },

        comment: {
            repo: 'resilient-tech/india-compliance',
            themes: 'github-light',
            issueTerm: 'pathname'
        },

        nav: nav(),

        sidebar: {
            "/docs/": sidebarDocs(),
        },

        blog: {
            title: 'India Compliance Blog',
            description: 'Exploring implementation strategies for India',
        },

        search: {
            provider: "algolia",
            options: {
                appId: "RFULW5EJJD",
                apiKey: "1037e3c97bcd3fc44e18ce6ddcac5965",
                indexName: "indiacompliance"
            }
        }

    },

    vite: {
        plugins: [
            Unocss({
                configFile: '../../unocss.config.ts',
            }),
        ],
        build: {
            ssr: false,
        },
    },

})

function nav() {
    return [
        {
            text: "Docs",
            link: "/docs/getting-started/introduction",
            activeMatch: "/docs/",
        },
        { text: "Blog", link: "blog/index", activeMatch: "/blog/" }
    ];
}

function sidebarDocs() {
    return [
        {
            text: "Getting Started",
            collapsible: true,
            items: [
                { text: "Introduction", link: "/docs/getting-started/introduction" },
                { text: "Installation", link: "/docs/getting-started/installation" },
                { text: "India Compliance Account", link: "/docs/getting-started/india_compliance_account" }

            ]
        },
        {
            text: "Configuration",
            collapsible: true,
            items: [
                { text: "Setting Up", link: "/docs/configuration/gst_setup" },
                { text: "Sales Transaction", link: "/docs/configuration/sales_transaction" },
                { text: "Purchase Transaction", link: "/docs/configuration/purchase_transaction" },
                { text: "TDS Configuration", link: "/docs/configuration/tds_configuration" },
                { text: "Other Transaction", link: "/docs/configuration/other_transaction" },
            ]
        },
        {
            text: "e-Waybill And e-Invoice",
            collapsible: true,
            items: [
                { text: "Setting Up", link: "/docs/ewaybill-and-einvoice/gst_settings" },
                { text: "Generating e-Waybill", link: "/docs/ewaybill-and-einvoice/generating_e_waybill" },
                { text: "Generating e-Invoice", link: "/docs/ewaybill-and-einvoice/generating_e_invoice" },
                { text: "FAQs", link: "/docs/ewaybill-and-einvoice/faqs" }
            ]
        },
        {
            text: "Purchase Reconciliation",
            collapsible: true,
            items: [
                { text: "Setting Up", link: "/docs/purchase-reconciliation/purchase_reconciliation_setup" },
                { text: "Reconciling Purchase", link: "/docs/purchase-reconciliation/reconciling_purchase" },
                { text: "Auto Reconcile", link: "/docs/purchase-reconciliation/auto_reconcile" }
            ]
        },
        {
            text: "Miscellaneous",
            collapsible: true,
            collapsed: true,
            items: [
                { text: "Audit Trail", link: "/docs/miscellaneous/audit_trail" },
                { text: "GSTIN Verification", link: "/docs/miscellaneous/gstin_verification" },
                { text: "Reports and Returns", link: "/docs/miscellaneous/gst_reports" },
                { text: "Transaction Validations", link: "/docs/miscellaneous/transaction_validations" },
                { text: "Lower Deduction Certificate", link: "/docs/miscellaneous/lower_deduction_certificate" },
            ]
        },
        {
            text: "Developer Guide",
            collapsible: true,
            collapsed: true,
            items: [
                { text: "Multi Site Setup", link: "/docs/developer-guide/multi-site-setup" },
                { text: "Migrating from V13", link: "/docs/developer-guide/migrating-from-v13" },
                { text: "Migration Guide", link: "/docs/developer-guide/migration-guide" },
                { text: "Sandbox", link: "/docs/developer-guide/sandbox" },
                { text: "E-Invoice QR", link: "/docs/developer-guide/e_invoice_qr" },
            ]
        },

    ];
}
