# GST Purchase Transactions
GST Purchase Transactions involves the aquisition of goods or services by a business from the supplier. Setup GSTIN of your supplier and the required Tax Templates to the transactions for making GST Ready Invoices!

## Purchase Invoice
1. Select the Supplier and Item.
2. Add Supplier Invoice Number and Supplier Invoice Date.(optional)
2. Check if the GSTIN of your Company and Supplier have been correctly set.
3. Check if the HSN Number has been set correctly in the Item.
4. Select  **In State GST** or **Out of State GST** as a tax template.
5. Save and Submit the Invoice.

![GST Invoice](./assets/gst_purchase_invoice.gif)

## GST Asset Purchase
For purchasing a new asset:
1. Create an Asset Category.
2. Create a related Item with 'Is Fixed Asset' enabled and Asset Category for the item.
3. You can also enable the option 'Auto create Asset on Purchase' to create assets automatically.(Optional)

![Asset Auto Create](./assets/asset_item.png)

4. Then, Follow a Purchase Cycle (Purchase Order, Purchase Invoice and Purchase Receipt etc.) for purchasing an asset.
5. Enter the Asset Location in Items table of the Purchase Receipt or Purchase Invoice through which you are receving the item.
6. On submission of Purchase Receipt, based on the auto creatio n checkbox, Asset will be created automatically.

## GST Expense 
A business may incur day-to-day expenses such as rent, telephone bills, Internet Bill, stationery, petty-cash expenses, and so on, to carry out the operations. These expenses attract GST.

If you are a registered dealer and purchasing from another registered dealer, and paid GST at the time of payment or purchase, you are eligible to claim the Input Tax Credit.

To create a GST Expense Purchase Invoice:

1. Create a Item for the Expense.
2. Create a Purchase Invoice for the Expense.
3. Select the correct Expense Account in the Item.

![GST Expense](./assets/gst_expense.gif)

## Reverse Charge
Setting up reverse charge and posting reverse charge purchase invoices.

- ### Add reverse charge accounts in GST Settings

Add reverse charge accounts for GST as shown in the image below and select the Account Type as "Reverse Charge" as shown in the image below. Instead of separate reverse charge account the Output GST tax account used for sales can also be marked as reverse charge account

![GST Reverse Charge Settings](./assets/gst_reverse_charge_setting.png)

- ### Making purchase invoices liable to reverse charge

To make purchase invoices liable to reverse charge invoices, follow the steps:

* Select Supplier and add items to the invoice as usual
* Enable "Is Reverse Charge" in Purchase Invoice
* If GST paid is eligible for input tax credit, in "Eligibility for ITC" select "ITC on Reverse Charge"
* "Add" taxes using the regular Input Tax account heads

![Reverse Charge](./assets/reverse_charge_add.png)

* "Deduct" the same amount of taxes using the reverse charge accounts so that the net GST payable by the supplier is 0

![Reverse Charge](./assets/reverse_charge_deduct.png)

* Save and Submit

In order to avoid manual selection of accounts and automate this process you can select already generated default Tax Template for Reverse Charge In-State as well Out-State Or to create your own please follow the below steps:

* Create Tax Category for reverse charge

![Reverse Charge Tax Category](./assets/reverse_charge_tax_category.png)

* Update tax category in the relevant supplier masters

![Supplier Tax Category](./assets/supplier_tax_category.png)

* Create Purchase Taxes and Charges template for reverse charge

![Reverse Charge Template](./assets/reverse_charge_template.png)

* Once this configuration is done, on selection of supplier appropriate Purchase Taxes and Charges Template will be applied
