---
date: 2025-09-22
title: GST 2.0 Tax Updates - Streamline Item Tax Changes with GST HSN Code
category: Article
author: Karm Soni
description: Learn how to efficiently update GST tax rates for multiple items using the new GST HSN Code bulk update feature in India Compliance for GST 2.0 compliance
tags:
  - GST HSN Code
  - GST 2.0
  - Tax Updates
  - Item Tax Template
  - Bulk Updates

og_title: Blog | GST 2.0 Tax Updates - Streamline Item Tax Changes with GST HSN Code
og_url: https://docs.indiacompliance.app/blog/posts/gst_2_0_tax_updates
---

<PostDetail>

With GST 2.0, the Government of India has changed GST rates for many items. Instead of updating each item one by one (which can take hours!), you can update all items under the same HSN code at once using the **Update Taxes for Items** feature in India Compliance.

This guide will show you exactly how to do this in 4 simple steps.

![Update Taxes for Items](../assets/update_taxes_for_items.gif)

## Why Use This Feature?

GST 2.0 has changed rates for many HSN codes. This feature helps you:

- Update all items with the same hsn code at once instead of one by one
- Save hours of manual work
- Make sure all items under the same HSN code have correct tax rates

## How to Update Taxes in 4 Simple Steps

### Step 1: Find Your HSN Code

- Go to the **GST HSN Code** list and find the HSN code that has new tax rates under GST 2.0.
- Click on the HSN code to open it.

### Step 2: Update the Tax Rates

Now you need to update the old and new tax rates. This is the most important step:

#### For Old Tax Rates
- Find the old tax rate row
- **Remove the date** from the `Valid From` field (make it empty)
- This keeps the old rate for past transactions only

#### For New Tax Rates
- Add a new row with the new GST 2.0 tax rate
- **Add today's date** (or your preferred date) in the `Valid From` field
- This makes the new rate apply from today onwards

::: warning Important
- **Old taxes**: Remove the date from `Valid From` field
- **New taxes**: Add date in `Valid From` field
- This ensures old transactions keep old rates and new transactions use new rates
:::

### Step 3: Save the Document

Click the **Save** button to save your changes.

### Step 4: Update All Items at Once

- Click the **"Update Taxes for Items"** button. This will automatically update all items that use this HSN code.

## Summary

Updating taxes for GST 2.0 is now simple with the **Update Taxes for Items** feature:

1. **Find** your HSN Code
2. **Update** tax rates (remove date from old, add date to new)
3. **Save** the document
4. **Click** "Update Taxes for Items"

This saves hours of manual work and ensures all your items have the correct GST 2.0 tax rates!

</PostDetail>