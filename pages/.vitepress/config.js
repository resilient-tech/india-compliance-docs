import Unocss from 'unocss/vite'
import { defineConfig } from 'vitepress'
import { version } from '../../package.json'


export default defineConfig({
    lang: "en-UK",
    title: "India Compliance",
    description: "Documentation and User Guide for India Compliance App",

    ignoreDeadLinks: true,
    lastUpdated: true,
    cleanUrls: "without-subfolders",

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
            copyright: "Copyright © 2022",
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
                { text: "Other Transaction", link: "/docs/configuration/other_transaction" }
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
            text: "Miscellaneous",
            collapsible: true,
            collapsed: true,
            items: [
                { text: "Audit Trail", link: "/docs/miscellaneous/audit_trail" },
                { text: "GSTIN Verification", link: "/docs/miscellaneous/gstin_verification" },
                { text: "Reports and Returns", link: "/docs/miscellaneous/gst_reports" },
                { text: "Transaction Validations", link: "/docs/miscellaneous/transaction_validations" }
            ]
        },
        {
            text: "Developer Guide",
            collapsible: true,
            collapsed: true,
            items: [
                { text: "Migration Guide", link: "/docs/developer-guide/migration-guide" },
                { text: "Sandbox", link: "/docs/developer-guide/sandbox" },
                { text: "E-Invoice QR", link: "/docs/developer-guide/e_invoice_qr" },
            ]
        },

    ];
}
