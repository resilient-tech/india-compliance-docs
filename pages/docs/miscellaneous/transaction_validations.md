---
description: Explore the powerful validations provided by India Compliance in ERPNext to ensure correct compliance with Indian tax regulations. Learn about missing fields, PIN code validation, HSN code verification, e-Waybill validity, e-Waybill applicability, duplicate IRN checks, and proper GST account routing.

structured_data:
  - "@context": "https://schema.org"
    "@type": "WebPage"
    name: "India Compliance Validations - ERPNext Documentation"
    description: "Explore the powerful validations provided by India Compliance in ERPNext to ensure correct compliance with Indian tax regulations. Learn about missing fields, PIN code validation, HSN code verification, e-Waybill validity, e-Waybill applicability, duplicate IRN checks, and proper GST account routing."
    mainEntityOfPage:
      "@type": "WebPage"
      "@id": "https://docs.indiacompliance.app/docs/miscellaneous/transaction_validations"
---

# Validations

India Compliance comes with Powerful validations to ensure correct compliance.  
All the validations are in accordance with the law and regularly updated.


## Missing Fields
Missing fields could be the reason for the failure of an e-Invoice or e-Waybill.
India Compliance ensures all fields are valid before submitting the data.
Mode Of Transport, Transporter Name or ID is entered or not; all the fields in address like state number, and pin code, are present.

## Pincode
The master database of the e-invoicing system has a state master which validates the PIN codes against the states. If a particular PIN code does not exist, it will match the first three digits of the PIN code with the PIN code to the state mapping pattern as defined by the postal department. Only after proper validation, an IRN will be generated.

## HSN Code
According to the GST Law, your itemized invoices must contain the HSN Code related to that item. India Compliance checks the validity of the HSN Code and ensures correct HSN with minimum code digit is present.

![Invalid HSN](./assets/invalid_hsn.png)

## Validity of e-Waybill
An e-way bill is valid for a particular period, which is based on the distance travelled by the goods. Validity is calculated from the date and time of generation of the e-way bill.
API checks validity before cancelling or updating.

## e-Waybill Applicability
There are some cases where the e-Waybill is not applicable.API checks for applicability before making a request.
For Non-GST-Items, e-waybills are not required. Warnings before generating e-Waybill for an invoice with Non-GST-Items.

## Duplicate IRN
If a taxpayer has already generated an IRN for a particular invoice number, then an IRN cannot be generated again on the same invoice number.API automatically updates IRN if IRN is already generated.

## Proper GST Account
Proper routing of GST Transactions to valid GST Accounts is very important.
India Compliance checks if the correct GST Account is selected for a particular transaction.

![Invalid Account](./assets/invalid_account.png)
