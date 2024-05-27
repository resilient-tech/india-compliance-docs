---
date: 2024-05-27
title: E-commerce Sales Transaction through E-commerce operators
category: Article
author: Priyansh Shah
description: This blog guides you to how to report E-commerce transactions in GSTR-1 using ERPNext / India Compliance
tags:
- ERPNEXT
- INDIA COMPLIANCE

og_title: Blog | Report E-commerce transactions in GSTR-1
og_url : https://docs.indiacompliance.app/blog/posts/post4
---
<PostDetail>

### What is Table 14 in GSTR-1 filing?
- Sales through e-commerce operators on which they are liable to collect TCS under Section 52 or pay tax under Section 9(5) of the CGST Act.


Table 14 has two sections.

- Liable to collect tax u/s 52(TCS)
- Liable to pay tax u/s 9(5)

---

### To perform E-commerce Sales Transaction through E-commerce operators follow the steps listed below: 

## First Step

First, you need to enable `Enable Sales through E-commerce Operators` in GST Seetings to perform E-commerce Sales Transaction via E-commerce operators.


![GST Settings](../assets/e_commerce_gst_settings.png)

## Creating Sales Invoice, Sales Order, Delivery Note

To perform E-commerce sales transactions, you need to create a Sales Invoice, Sales Order, or Delivery Note.

When creating documents for the above-mentioned doctypes, go to the GST Details section and enter the E-commerce GSTIN of your E-commerce operator. Depending on whether the transaction is subject to reverse charge or not, you will see the E-commerce Supply Type of your transaction.

![](../assets/ecommerce_supply_type.png) 


E-commerce Suppy Type can be one of: 
- Liable to collect tax u/s 52(TCS)
- Liable to pay tax u/s 9(5)

## Report GSTR-1

You can view all your E-commerce transaction under Table 14 of GSTR-1 in the GSTR-1 report by settings appropriate filters.

![GSTR-1 Report](../assets/gstr1_report.png)

You can also download Excel and JSON files to fill out your GSTR-1 returns.

## GSTR-3B

For invoices subject to reverse charge, the details in GSTR-3B will be found in `3.1.1 Supplies notified under section 9(5) of the CGST Act` in GSTR-3B return of GST portal.

For invoices not subject to reverse charge, the details in GSTR-3B will be in `3.1 Tax on outward and reverse charge inward supplies` in GSTR-3B return of GST portal. Inside this section, your transactions will be included where the Nature of Supplies is Outward taxable supplies.

![GSTR-3B](../assets/gstr3b.png)
</PostDetail>
