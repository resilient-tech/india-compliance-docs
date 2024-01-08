---
description: Learn to efficiently generate and cancel e-Invoices in ERPNext for Indian tax compliance. Follow step-by-step processes for automatic and manual e-Invoice generation, along with cancellation procedures.

og_title : e-Invoice Generation and Cancellation
og_url : https://docs.indiacompliance.app/docs/ewaybill-and-einvoice/generating_e_invoice

structured_data:
  - "@context": "https://schema.org"
    "@type": "WebPage"
    name: "e-Invoice Generation and Cancellation - ERPNext Documentation"
    description: "Learn to efficiently generate and cancel e-Invoices in ERPNext for Indian tax compliance. Follow step-by-step processes for automatic and manual e-Invoice generation, along with cancellation procedures."
    mainEntityOfPage:
      "@type": "WebPage"
      "@id": "https://docs.indiacompliance.app/docs/ewaybill-and-einvoice/generating_e_invoice"
---

# e-Invoice

e-Invoice is an electronic invoice required to be generated on [e-Invoice Portal](https://einvoice1.gst.gov.in/) for all invoices except for supplies made to unregistered customers. To comply with the same, India Compliance offers an easy, quick and reliable solution to generate e-Invoice.

## Prerequisites
- [GSP credentials in ERPNext](gst_settings#gsp-credentials)
- [India Compliance Account](../getting-started/india_compliance_account#account-creation)
- API should be enabled under GST Settings.
- [e-Invoice Configration](gst_settings#e-invoice-settings) 

## Generating e-Invoice

e-Invoice would be generated automatically on submission of Invoice if it applies to you. After the generation IRN will be updated on the invoice and QR will be generated.

### Manual Trigger

In case you would like to manually trigger the generation, you can do so after the submission of the Invoice. e-invoice menu options will come up. Once you click on the Generate button, e-Invoice generation will be triggered.

![Generating e-Invoice](./assets/generating_e_invoice.gif)

## Cancelling e-Invoice

You can cancel e-Invoice from the e-Invoice menu options if it's within the validity period.

**Click on e-Invoice menu --> Click Cancel button --> Give reasons for cancellation in the dialog --> and confirm to cancel the e-Invoice.**

![Cancelling e-Invoice](./assets/cancelling_e_invoice.gif)
