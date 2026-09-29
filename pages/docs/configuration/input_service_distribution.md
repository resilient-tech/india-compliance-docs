---
description: Learn how to distribute common Input Tax Credit to your branches using the Input Service Distributor (ISD) mechanism in India Compliance, through the ISD Distribution Invoice and ISD Recipient Invoice.

og_title : Input Service Distributor (ISD) - India Compliance Documentation
og_url : https://docs.indiacompliance.app/docs/configuration/input_service_distribution

structured_data:
  - "@context": "https://schema.org"
    "@type": "WebPage"
    name: "Input Service Distributor (ISD) - India Compliance Documentation"
    description: "Learn how to distribute common Input Tax Credit to your branches using the Input Service Distributor (ISD) mechanism in India Compliance, through the ISD Distribution Invoice and ISD Recipient Invoice."
    mainEntityOfPage:
      "@type": "WebPage"
      "@id": "https://docs.indiacompliance.app/docs/configuration/input_service_distribution"
---

# Input Service Distributor (ISD)

An Input Service Distributor is the office that books purchase invoices for
services consumed by multiple branches. The ITC of these purchases is
distributed to those branches through ISD invoices.

## Setting Up

To set up ISD, follow the below steps:

1. Set the **Default ISD Provisional Account** in the Company.
2. Verify the ISD defaults in GST Settings. **Distribute Expense with ISD
   Credit** distributes the invoice amount along with the taxes. **Auto Create
   ISD Recipient Invoice for Intra-Company Distributions** creates the recipient
   side for you.
3. Create a Company Address with the **GST Category** set as **Input Service
   Distributor**.
4. Book the Purchase Invoices for common services with this address as the
   Billing Address.

![Creating an ISD-applicable Purchase Invoice](./assets/isd_create_purchase_invoice.gif)

::: info
Book a separate Purchase Invoice for the items that are ineligible for ITC.
:::

## Distribution from Purchase Invoice

To distribute credit to multiple recipients at once, follow the below steps:

1. Open the submitted Purchase Invoice with **Is ISD Applicable** enabled.
2. Click **Create > ISD Distribution Invoices**.
3. Set the Posting Date in the dialog.
4. Edit the recipient addresses, and remove the addresses that are not
   recipients.
5. Enter the **Turnover Amount (Prev. Yr.)** against each recipient.
6. Click **Create ISD Distribution Invoices**.

![Distribute ITC to Recipient Branches dialog](./assets/isd_distribution_dialog.gif)

Review each draft that is created. **Source Items** shows the item-wise split,
**Taxes** shows the ITC reduced on the distributor side, **Distributed Expense**
shows the expense being distributed, and **ISD Provisional Amount** shows the
amount lying in the clearing account. Submit the invoice, and open the
**Connections** tab to view the ISD Recipient Invoice.

The distribution ratio is calculated from **Turnover Records**, which are
updated on every submission.

::: info
For a Multi-Company setup, check **Is Against Party** in the dialog and select
the **Party Type**, **Party** (the internal Customer or Supplier) and the
recipient address. The ISD Recipient Invoice is not created automatically here.
Create it from **Create > ISD Recipient Invoice**, verify the prefilled values
and Submit.
:::

## Direct Invoice Creation

To distribute credit to a single recipient, follow the below steps:

1. Create a new ISD Distribution Invoice.
2. Add the Company, Distribution Address, Recipient Address and Posting Date.
3. Select the Purchase Invoice. **Source Items** gets fetched automatically.
4. Add the **Recipient Branch Turnover** and the **Total Turnover**, which is
   the sum of the turnovers of all recipients.
5. Review **Source Items**, and check **Taxes** for the impact on the
   distributor and on the recipient.
6. Save and Submit the Invoice.

![Creating an ISD Distribution Invoice directly](./assets/isd_direct_invoice_creation.gif)

The ISD Recipient Invoice is created and submitted automatically, where **Auto
Create ISD Recipient Invoice for Intra-Company Distributions** is enabled in GST
Settings.

::: info
For a Multi-Company setup, check **Is Against Party** and select the Customer or
Supplier along with its address. Create the recipient side from **Create > ISD
Recipient Invoice**.
:::

## External Company

Where your Input Service Distributor is not managed in this ERPNext instance,
the recipient branch can book the credit on its own. To do so, follow the below
steps:

1. Create a new ISD Recipient Invoice.
2. Leave the **ISD Distribution Invoice Reference** blank.
3. Enter the **External ISD Invoice Number**.
4. Fill in the source items and the taxes.
5. Save and Submit the Invoice.

![Creating an ISD Recipient Invoice for an external company](./assets/isd_external_branch.gif)

## Credit Notes

To reverse a distribution, follow the below steps:

1. Open the submitted ISD Distribution Invoice.
2. Click **Create > Credit Note**, and Submit.
3. Create the Credit Note on the recipient side in the same way.
