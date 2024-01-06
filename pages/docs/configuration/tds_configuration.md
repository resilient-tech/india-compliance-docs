---
description: Learn how to configure TDS (Tax Deducted at Source) in ERPNext for Indian statutory compliances. Follow the step-by-step guide to define Tax Withholding Categories, set up Tax Withholding Rates, link TDS categories to suppliers, and apply TDS in Purchase Invoices.

structured_data:
  - "@context": "https://schema.org"
    "@type": "WebPage"
    name: "TDS Configuration - ERPNext Documentation"
    description: "Learn how to configure TDS (Tax Deducted at Source) in ERPNext for Indian statutory compliances. Follow the step-by-step guide to define Tax Withholding Categories, set up Tax Withholding Rates, link TDS categories to suppliers, and apply TDS in Purchase Invoices."
    mainEntityOfPage:
      "@type": "WebPage"
      "@id": "https://docs.indiacompliance.app/docs/configuration/tds_configuration"
---

# TDS Configuration

To set up *TDS* in ERPNext follow the below steps:

- First, you have to define Tax withholding categories, by default 28 categories are already pre-defined as per Indian statutory compliances. But if you want to add a new category then you can create the same by clicking on "New"(button at right top corner)

![tds_defaults](./assets/tds_defaults.png)

- As per category you have to define the Tax withholding rate along with "Single Transaction Threshold" & "Cumulative Transaction Threshold" for the Financial/Fiscal year.

![creating_tax_witholding_category](./assets/creating_tax_witholding_category.png)

- On the same screen you will find another section of "Account Detail" to set company-wise TDS Payable account.

![tds_default_company_account](./assets/tds_default_company_account.png)

- Once you are done with the Tax withholding setup go to Supplier master and assign the Tax withholding category.

![configure_tds_in_party](./assets/configure_tds_in_party.png)

- Now when you create a Purchase invoice against that supplier make sure the "Apply Tax withholding Amount" is checked then only the system will auto fetch TDS Payable amount in the "Taxes & Charges" table based on the Threshold you have defined.

![apply_tds_in_transactions](./assets/apply_tds_in_transactions.png)

The standard report is also available to check monthly payable, just search for the "TDS payable monthly" report for the same.