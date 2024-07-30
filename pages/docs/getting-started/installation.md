---
description: Learn how to install India Compliance on your Frappe site, whether self-hosted or on Frappe Cloud.
og_title : Installation of India Compliance
og_url : https://docs.indiacompliance.app/docs/getting-started/installation

structured_data:
  - "@context": "https://schema.org"
    "@type": "HowTo"
    name: "Installation of India Compliance"
    description: "Step-by-step guide on installing India Compliance on your Frappe site."
    mainEntityOfPage:
      "@type": "WebPage"
      "@id": "https://docs.indiacompliance.app/docs/getting-started/installation"
---

# Installation

## Frappe Cloud

Don`t have a frappe site? New to ERPNext? Not an expert with cloud management? We've got you covered.

- Simply signup with [Frappe Cloud](https://frappecloud.com/dashboard/signup?referrer=99df7a8f) for a free trial and create a new site.
- Select Frappe Version-14 or above and select ERPNext and India Compliance from Apps to Install.

You can get started in a few minutes with a new site and a fresh install to try out the simple and cool features of the App.

Need consultation/support in getting started. [Get help!](mailto:hello@indiacompliance.app)

For Migration guide [Click Here](../developer-guide/migrating-from-v13.md)
For Sandbox Configuration [Click Here](../developer-guide/sandbox.md)

## Docker

Use [this guide](https://github.com/frappe/frappe_docker/blob/main/docs/custom-apps.md) to deploy India Compliance by building your custom image.

Sample Apps JSON

```shell
export APPS_JSON='[
  {
    "url": "https://github.com/frappe/erpnext",
    "branch": "version-15"
  },
  {
    "url": "https://github.com/resilient-tech/india-compliance",
    "branch": "version-15"
  }
]'

export APPS_JSON_BASE64=$(echo ${APPS_JSON} | base64 -w 0)
```

## Manual

Once you've [set up a Frappe site](https://frappeframework.com/docs/v14/user/en/installation/), installing India Compliance is simple:
Download the App using the Bench CLI

```sh
bench get-app https://github.com/resilient-tech/india-compliance.git
```

Install the App on your site

```sh
bench --site [site name] install-app india_compliance
```
