---
description: Learn how to validate GSTIN and UIN information using India Compliance. Explore the steps to enable auto-GSTIN verification, set up GSP credentials, enable API features, and autofill party information based on GSTIN.

structured_data:
  - "@context": "https://schema.org"
    "@type": "WebPage"
    name: "GSTIN Verification - India Compliance Documentation"
    description: "Discover how to validate GSTIN and UIN information using India Compliance. Follow the steps to enable auto-GSTIN verification, set up GSP credentials, enable API features, and autofill party information based on GSTIN."
    mainEntityOfPage:
      "@type": "WebPage"
      "@id": "https://docs.indiacompliance.app/docs/miscellaneous/gstin_verification"
---


# GSTIN Verification
Whenever you do business with a new party, you can validate the GSTIN/UIN information provided by the party. It is recommended to validate GSTIN information while creating a party ledger. It ensures that the information entered in the Party ledger is authentic, and you can then make corrections immediately if needed.

India Compliance facilitates quick online validation of GSTIN and UIN related information.

### Steps to Enable Auto-GSTIN Verification
- [Setup GSP Credentials](../ewaybill-and-einvoice/gst_settings#gsp-credentials) 
- Enable API Features under GST Settings.
- Enable **`Autofill Party Information based on GSTIN`** fron GST Settings Tab.

![Enable Other Features](./assets/gst_settings.png)

## How to Validate GSTIN ?
**When creating a new Customer/Supplier/Address using the *Quick Entry form*,other fields will be automatically fetched based on the GSTIN Number entered.**

![Create Party Quick Entry](./assets/create_party_quick_entry.gif)
