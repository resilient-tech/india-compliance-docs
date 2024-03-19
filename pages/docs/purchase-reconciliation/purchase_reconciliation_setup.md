---
description: Learn how to set up the Purchase Reconciliation Tool in ERPNext.

og_title : Setting up Purchase Reconciliation Tool
og_url : https://docs.indiacompliance.app/docs/purchase-reconciliation/purchase_reconciliation_setup

structured_data:
  - "@context": "https://schema.org"
    "@type": "WebPage"
    name: "Setting up Purchase Reconciliation Tool"
    description: "Learn how to set up the Purchase Reconciliation Tool in ERPNext."

    mainEntityOfPage:
      "@type": "WebPage"
      "@id": "https://docs.indiacompliance.app/docs/purchase-reconciliation/purchase_reconciliation_setup"
---


# Setting up Purchase Reconciliation Tool

## Configuration on GST Portal

We need to enable API access from GST Portal.

<Steps>
<Step title="Log in to GST Portal">

Go to gst.gov.in and login to your GST Account.
</Step>
<Step title="Manage API Access">

Click on `My Profile` and then `Manage API Access`.
</Step>
<Step title="Enable API Request">

Click on `Yes`, specify the duration for which you wish to keep session active and click on `Confirm`.
</Step>
</Steps>

::: tip
Keep the session active for a longer duration (30 days) to avoid frequent OTP authentications. This will be helpful for auto reconciliation feature.
:::

![Enable API Access](./assets/enable_api_access.png)

## Update Credentials in ERP

Setup the credentials in GST Settings for the GST Returns API. 

Unlike with e-Invoice and e-Waybill, the GST Returns API authenticates with OTP and **does not** require a password. You also need not create a new user for this. 

You must use the same username that you use to log into the GST Portal at gst.gov.in.

![GST Settings for Returns Credentials](./assets/gst_settings_for_returns_credentials.png)

With this, you are ready to use the Purchase Reconciliation Tool.