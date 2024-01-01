---
description: FAQs on e-Invoice and e-Waybill.

structured_data:
  - "@context": "https://schema.org"
    "@type": "WebPage"
    name: "FAQs for India compliance"

    description: "FAQs on e-Invoice and e-Waybill."

    mainEntityOfPage:
      "@type": "WebPage"
      "@id": "https://docs.indiacompliance.app/docs/ewaybill-and-einvoice/faqs"
---

# FAQs

### e-Invoice and e-Waybill both are applicable to us. How do these settings interact with each other?

We have a seamless integration for you where both are applicable to you. Following points shall help you understand the same in detail.

- `Automatically Generate e-Waybill on Invoice Submission` option will be mandatory, If `Automatically Generate e-Invoice on Invoice Submission` setting is enabled.

- While generating e-Invoice, e-Waybill shall be generated automatically if applicable and required fields (Transport Details) are present. In case, data is not available, and e-Waybill is not generated or only Part A of e-Waybill is generated, you shall be able to generate or update e-Waybill from e-Waybill menu items.

- For cancellation of e-Invoice, e-Waybill needs to be cancelled first. We have got you covered here to. While you cancel the e-Invoice, and if e-Waybill is available and valid, both e-Invoice and e-Waybill will be cancelled simultaneously.

### What if we generate e-Waybill before the e-Invoice?

e-Invoice has been designed to automate your GSTR-1 and e-Waybill process. You should first create e-Invoice and then generate e-Waybill only if its not generated along with e-Invoice.

### What should we do if the validity of e-Invoice has expired and still we would like to cancel it?

e-Invoice is a legal record. Cancelling your invoice (although e-Invoice is not cancellable) for updates or errors or returns is not a good practice in such cases.

You should adjust the difference with a credit or debit note over and above this invoice.
