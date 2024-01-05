# Lower Deduction Certificate

According to the tax withholding category, a person responsible for making payments is required to deduct tax at source at prescribed rates. Instead of receiving tax on your income from you at a later date, the government wants the payers to deduct tax beforehand and deposit it with the government. However, this scheme of deducting tax at source may cause issues for a few taxpayers who may not have taxable income for that fiscal year.

Therefore, for such taxpayers, the government provides an option to obtain a certificate confirming either a lower rate or NIL rate of TDS compared to the rate specified in the tax withholding category.

## Prerequisites

Before creating and using a Lower Deduction Certificate, it is advised to create and study the following first:

- Supplier
- Tax Withholding Category

## How to create a Lower Deduction Certificate

- Go to the Lower Deduction Certificate list and click on New.
- Enter the Certificate No.
- Select the Section Code.
- Enter the Fiscal Year.
- Select the Supplier having a valid PAN number. PAN number will be auto-fetched on the selection of Supplier.
- Enter Valid From and Valid Up To dates.
- Enter the rate of TDS as per the certificate and the certificate limit.
- Click on Save.

![lower-deduction-certificate](./assets/lower_deduction_certificate.png)

## Using Lower Deduction Certificate

### Use in Purchase Invoice

In the following example, we have selected TDS category as 'TDS - 194D - Individual' which has a rate of 5%.

![tax-withholding-category](./assets/tax_withholding_category.png)

Set the Tax Withholding Category for the Supplier in the supplier master. Then upon selecting that Supplier, a checkbox will become visible in the Purchase Invoice to select whether to apply tax or not and the TDS category will be auto-fetched.

![supplier-with-tax-withholding-category](./assets/supplier_with_tax_withholding_category.png)

Let's create an invoice for 20,000. Saving the invoice automatically calculates tax and appends it in the Purchase Taxes and Charges table. Although the tax category assigned to the supplier has a tax rate of 5%, the prevailing tax rate is 1% which is mentioned in the Lower Deduction Certificate.

![lower-tax-withholding-in-purchase-invoice](./assets/lower_tax_withholding_in_purchase_invoice.png)
