---
description: Learn how to setup same India Compliance Account in multiple sites.

og_title : Setup Same India Compliance Account in Multiple Sites
og_url : https://docs.indiacompliance.app/docs/developer-guide/e_invoice_qr

structured_data:
  - "@context": "https://schema.org"
    "@type": "WebPage"
    name: "Setup Same India Compliance Account in Multiple Sites"
    description: "Learn how to setup same India Compliance Account in .multiple sites"
    mainEntityOfPage:
      "@type": "WebPage"
      "@id": "https://docs.indiacompliance.app/docs/developer-guide/e_invoice_qr"
---

# Multi-Site Setup

This guide provides instructions on how to setup the same India Compliance account in multiple sites.

## FAQs

### Can I use the same India Compliance account in multiple sites?
Yes, there is no restriction on using the same India Compliance account for multiple sites/gstins. However, there can be only one registered or billing GSTIN per account.

### How do I setup the same India Compliance account in multiple sites?
Easy! You can **login** to the same India Compliance account in any number of sites.

### We are a software company and have multiple clients. Is there a better way to manage to set up the same India Compliance account in multiple sites?
Yes, you can setup the API Secret in global config and disable India Compliance Account for all sites. Follow the steps below to setup the India Compliance account through global config.

## Setup India Compliance Account through global config

<steps>
<step title="Create India Compliance Account">

Create a [new](../getting-started/india_compliance_account#account-creation) India Compliance account in the first site.
</step>
<step title="Extract API Secret">

You can access the API key for your India Compliance account by executing the following in the **System Console**.

```python
log(frappe.get_doc("GST Settings").get_password("api_secret"))
```
</step>

<step title="Setup API Secret in Global Config">

Once you have access to this secret, you can just set this secret as the `ic_api_secret` in the site config of all your client installations. Execute the following in the **bench directory**.

```sh
bench set-config -g ic_api_secret [yourapisecret]
```
</step>

<step title="Disable India Compliance Account">

You can disable the India Compliance Account in all your client installations by executing the following in the **bench directory**.

```sh
bench --site [site-name-here] execute india_compliance.install.disable_ic_account_page
```
</step>

<step title="Verify Setup">

You can verify the setup by checking if API options are visible in the GST Settings of any site.
</step>
</steps>
