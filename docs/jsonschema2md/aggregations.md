# Aggregations Schema

```txt
https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json
```

KPI aggregations for Sierra5 supervisor tool

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [aggregations.schema.json](../../out/rest/aggregations.schema.json "open original schema") |

## Aggregations Type

`object` ([Aggregations](aggregations.md))

# Aggregations Properties

| Property                      | Type     | Required | Nullable       | Defined by                                                                                                                                                                                |
| :---------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [epoch](#epoch)               | `string` | Optional | cannot be null | [Aggregations](aggregations-properties-epoch.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/epoch")               |
| [multisectors](#multisectors) | `array`  | Optional | cannot be null | [Aggregations](aggregations-properties-multisectors.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/multisectors") |

## epoch

Identifier code

`epoch`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Aggregations](aggregations-properties-epoch.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/epoch")

### epoch Type

`string`

## multisectors

Type of airport

`multisectors`

*   is optional

*   Type: `object[]` ([Details](aggregations-properties-multisectors-items.md))

*   cannot be null

*   defined in: [Aggregations](aggregations-properties-multisectors.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/multisectors")

### multisectors Type

`object[]` ([Details](aggregations-properties-multisectors-items.md))
