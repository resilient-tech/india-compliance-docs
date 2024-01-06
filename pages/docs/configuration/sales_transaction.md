---
description: Learn how to make GST transactions using India Compliance, covering steps for creating Sales Invoices, selecting tax templates, and printing GST tax invoices with detailed item-wise tax breakup.

structured_data:
  - "@context": "https://schema.org"
    "@type": "WebPage"
    name: "Making GST Transactions - India Compliance Documentation"
    description: "Learn how to make GST transactions using India Compliance, covering steps for creating Sales Invoices, selecting tax templates, and printing GST tax invoices with detailed item-wise tax breakup."
    mainEntityOfPage:
      "@type": "WebPage"
      "@id": "https://docs.indiacompliance.app/docs/configuration/sales_transaction"
---

# Making GST Transactions
If you have set up the GSTIN of your Customers and Suppliers, and your tax template, you are ready to go for making GST Ready Invoices!

## Sales Invoice
1. Select the Customer and Item.
2. Check if the GSTIN of your Company and Customer have been correctly set.
3. Check if the HSN Number has been set correctly in the Item.
4. Select  **In State GST** or **Out of State GST** as a tax template.
5. Save and Submit the Invoice.

![GST Invoice](./assets/gst_invoice.gif)

### Printing GST Tax Invoice  
To print Tax Invoices as per GST guidelines, please select **GST Tax Invoice** print format. This print format includes company address, GSTIN numbers, HSN/SAC Code and item-wise tax breakup. While printing, select the correct value of the `Invoice Copy` field to mention whether it is for the Customer, Supplier or Transporter.

## GST Details
Item tax breakup for each item is shown in the GST Details section for the Item table. This ensures better performance, better print formats, and backwards compatibility for changes to GST Accounts.

![Item GST Details](./assets/item_gst_details.png)
