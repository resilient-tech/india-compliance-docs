---
description: Learn to add an e-Invoice QR code to custom and standard print formats with step-by-step instructions, including code snippets and configurations for both scenarios.

og_title : Guide to Add e-Invoice QR Code in Print Formats
og_url : https://docs.indiacompliance.app/docs/developer-guide/e_invoice_qr

structured_data:
  - "@context": "https://schema.org"
    "@type": "WebPage"
    name: "Guide to Add e-Invoice QR Code in Print Formats"
    description: "Learn to add an e-Invoice QR code to custom and standard print formats with step-by-step instructions, including code snippets and configurations for both scenarios."
    mainEntityOfPage:
      "@type": "WebPage"
      "@id": "https://docs.indiacompliance.app/docs/developer-guide/e_invoice_qr"
---

# Guide to Add e-Invoice QR Code in Print Formats

This guide provides instructions on how to add an e-Invoice QR code to print formats. It covers both custom print formats and standard print formats.

## Custom Print Format

To add a QR code to a custom print format, use the following code snippet:

```
{% if doc.irn %}
{% set e_invoice_log = frappe.db.get_value(
 "e-Invoice Log", doc.irn, ("invoice_data", "signed_qr_code"), as_dict=True
) %}

{%- set invoice_data = dict(json.loads(e_invoice_log.invoice_data)) -%}

<img src="data:image/png;base64,{{ get_qr_code(e_invoice_log.signed_qr_code, scale=2) }}" class="qrcode">
{% endif %}

```

::: tip
You can also check out the implementation in the [Standard e-Invoice print format](https://github.com/resilient-tech/india-compliance/blob/4bd775ab656f81fc6764cc1dc6587d11e0097afd/india_compliance/gst_india/print_format/e_invoice/e_invoice.html#L109) for further guidance.
:::

## Standard Print Format

To add an e-Invoice QR code to a standard print format, follow these steps:

##### 1. Create a Web Template for the QR Code

- Open the Web Template List using the awesome bar and add a new Web Template.
- Enter the name of the Web Template as "e-Invoice QR Code"
- Select Type as "Component"
- Select Module as "Printing"
- Copy the following code snippet into the template field:

```
<img src="data:image/png;base64,{{ get_qr_code(qr_text, scale=2) }}" class="qrcode">
```

##### 2. Add the following fields in the child table "Fields"

- Label: QR Text
- Fieldname: qr_text
- Field Type: Text

![web template fields](./assets/web_template_fields.png)

##### 3. Adding the fields in print format

- Go to the print format where you want to add the QR Code. and click on `Edit Format`.
- Add a custom HTML section.
- Insert the following code snippet into the custom HTML section:

```

{% if doc.irn %}
{% set e_invoice_log = frappe.db.get_value(
 "e-Invoice Log", doc.irn, ("invoice_data", "signed_qr_code"), as_dict=True
) %}

{%- set invoice_data = dict(json.loads(e_invoice_log.invoice_data)) -%}


 {{ web_block('e-Invoice QR Code', values={'qr_text': e_invoice_log.signed_qr_code }) }}
{% endif %}


```

![print format](./assets/customise_print_format.png)

::: warning
Make sure the name mentioned in `web_block` exactly matches the name of your Web Template.
:::

## Guide to Add QR Code in Print Designer

To add a QR code to a print designer, follow these steps:

- In the Print Designer, navigate to the left sidebar and select the "Barcode" option.
- Go to the desired location within your print format where you want to place the QR code and click there. You will get a dialog - box to choose the width and height for your QR code.
- Adjust the width and height of the QR code to fit your requirements, then click "Confirm".
- Double-click on the Barcode area to access the Barcode dialog.
- In the Barcode dialog, select the relevant doctype from which you will get your field to encode in the QR code.
- If it is a hidden field, toggle "Hidden Fields" on the top right side of the Barcode dialog.
- Choose the field you want to encode in the QR code.
- In the Format input field, select the "QR Code" option and click "Confirm".
- Save the print format, and your print format will now include the QR code.