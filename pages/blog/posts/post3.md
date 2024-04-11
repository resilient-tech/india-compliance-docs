---
date: 2024-04-11
title: Managing Customisations and Fixtures
category: Tutorial
author: Smit Vora
description: Best practices to manage custom fields and fixtures in Frappe Framework.
tags:
- Customisation

og_title: Blog | Managing Customisations and Fixtures
og_url : https://docs.indiacompliance.app/blog/posts/post3
---
<PostDetail>

Frappe provides simple ways to export fixtures and custom fields. This is particularly useful when one is migrating from one instance to another or when setting up a new instance.

Various ways to export custom fields are:
- [Exporting fixtures](https://frappeframework.com/docs/user/en/guides/app-development/how-to-create-custom-fields-during-app-installation)
- [Export Customisations](https://frappeframework.com/docs/user/en/guides/app-development/exporting-customizations)

These methods are simple ways to ensure all custom fields are exported in the custom app. 

But with this ease comes a responsibility to ensure the export of only the custom fields relevant to the custom app. This ensures the custom app is clean and maintainable.

:::info
Ensure that only relevant custom fields are exported to the custom app.
:::


## What happens when these custom fields are exported?

When exporting custom fields, the system creates a JSON file with **all** the custom fields and fixtures. 

Fixtures are exported to the `fixtures` folder in the custom app. Whereas, customisations are exported to the `custom` folder in the custom app.

On [migration](https://github.com/frappe/frappe/blob/develop/frappe/migrate.py#L126), (i.e `bench migrate`), the system reads these files and creates the custom fields or fixtures in the database if they are missing. This ensures that these fixtures and custom fields are always present in the database.

## When is `migrate` triggered?

It's triggered whenever `bench migrate` or `bench update` is run. Precisely, it's triggered every time the app is updated.

## What is the issue if all custom fields are exported?

With multi-app architecture, it's common to have multiple custom apps. These apps might have custom fields (including the India Compliance App).

If there are changes to custom fields in one app, this may not correctly reflect as old fixtures are restored every time there is an update. This can lead to issues in the normal functioning of the app.

Even when a custom field is removed from the original app, it will still show up on the site. This could break the functionality of the app.

This wasn't originally an issue, as there were limited custom fields (as part of core functionality, as everything was managed from one app).

## Does this mean Fixtures and Customisations are obsolete?

No, they are still instrumental. But they need to be used with caution.

It is very useful when one wishes to have a default setup for the app. This should be ideally used only for one-time setup.

## Best Practices

### Option 1

Export only relevant custom fields and fixtures. This is difficult to manage every time there is a change in the custom fields.

### Option 2

Export fixtures and customisations to a separate app. This way, one can uninstall the app once done with the setup. This could be useful for setting up a new instance.

However, with this approach too, one needs to ensure that they are exporting only the relevant custom fields as it may be difficult to track changes to other custom fields.

### Option 3

Manage custom fields directly from the code. This is the most recommended approach.

**Benefits**
- Full control over the custom fields
- Easy to track changes
- Only manage relevant properties
- Manage custom fields in `after_install` and `before_uninstall` ensuring the database stays clean

The following steps can be followed to manage custom fields directly from the code:

<Steps>
<Step title="Define custom fields">

Reference: [Custom Fields](https://github.com/resilient-tech/india-compliance/blob/develop/india_compliance/gst_india/constants/custom_fields.py#L91) from India Compliance App.

```python
CUSTOM_FIELDS = {
    ("Purchase Order", "Purchase Receipt", "Purchase Invoice"): [
        {
            "fieldname": "supplier_gstin",
            "label": "Supplier GSTIN",
            "fieldtype": "Data",
            "insert_after": "address_display",
            "fetch_from": "supplier_address.gstin",
            "print_hide": 1,
            "read_only": 1,
            "translatable": 0,
        },
    ]
}
```
</Step>

<Step title="API to create custom fields">

Reference: [API Usage](https://github.com/resilient-tech/india-compliance/blob/develop/india_compliance/gst_india/setup/__init__.py#L39)

```python
from frappe.custom.doctype.custom_field.custom_field import (
    create_custom_fields
)

def after_install():
    create_custom_fields(CUSTOM_FIELDS)

```
</Step>
<Step title="Setup hooks">

Reference: `after_install` [Hook](https://github.com/resilient-tech/india-compliance/blob/develop/india_compliance/hooks.py#L12)
</Step>
</Steps>

Similarly, one may replicate this for `before_uninstall` to remove custom fields.

Field updates can be managed directly using [patches](https://github.com/resilient-tech/india-compliance/blob/develop/india_compliance/patches.txt#L6).

This approach ensures that only relevant custom fields are created and managed. This also ensures the database is clean and only relevant custom fields are created.

</PostDetail>
