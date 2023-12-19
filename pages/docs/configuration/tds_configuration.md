# TDS Configuration

To setup *TDS* in ERPNext follow below steps:

- First you have to define Tax withholding categories, by default 28 categories are already pre-defined as per Indian statutory compliances. But if you want to add new category then you can create the same by clicking on "New"(button at right top corner)

![tds_defaults](./assets/tds_defaults.png)

- As per category you have to define Tax withholding rate along with "Single Transaction Threshold" & "Cumulative Transaction Threshold" for Financial/Fiscal year.

![creating_tax_witholding_category](./assets/creating_tax_witholding_category.png)

- In same screen you will find another section of "Account Detail" to set company-wise TDS Payable account.

![tds_default_company_account](./assets/tds_default_company_account.png)

- Once you are done with Tax withholding setup go to Supplier master and assign Tax withholding category.

![configure_tds_in_party](./assets/configure_tds_in_party.png)

- Now when you create a Purchase invoice against that supplier make sure "Apply Tax withholding Amount" is checked then only system will auto fetch TDS Payable amount in "Taxes & Charges" table based on Threshold you have defined.

![apply_tds_in_transactions](./assets/apply_tds_in_transactions.png)

Standard report is also available to check monthly payable, just search for "TDS payable monthly" report for the same.