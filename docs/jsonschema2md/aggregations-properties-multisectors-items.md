# Untitled object in Aggregations Schema

```txt
https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/multisectors/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [aggregations.schema.json\*](../../out/rest/aggregations.schema.json "open original schema") |

## items Type

`object` ([Details](aggregations-properties-multisectors-items.md))

# items Properties

| Property                      | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                            |
| :---------------------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [airspace](#airspace)         | `string`  | Optional | cannot be null | [Aggregations](aggregations-properties-multisectors-items-properties-airspace.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/multisectors/items/properties/airspace")         |
| [name](#name)                 | `string`  | Optional | cannot be null | [Aggregations](aggregations-properties-multisectors-items-properties-name.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/multisectors/items/properties/name")                 |
| [capacity](#capacity)         | `integer` | Optional | cannot be null | [Aggregations](aggregations-properties-multisectors-items-properties-capacity.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/multisectors/items/properties/capacity")         |
| [disclaimer](#disclaimer)     | `string`  | Optional | cannot be null | [Aggregations](aggregations-properties-multisectors-items-properties-disclaimer.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/multisectors/items/properties/disclaimer")     |
| [aggregations](#aggregations) | `array`   | Optional | cannot be null | [Aggregations](aggregations-properties-multisectors-items-properties-aggregations.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/multisectors/items/properties/aggregations") |

## airspace

Airspace identifier (ACC, FIR, ect...)

`airspace`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Aggregations](aggregations-properties-multisectors-items-properties-airspace.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/multisectors/items/properties/airspace")

### airspace Type

`string`

## name

Multisector name or identifier, e.g. B13

`name`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Aggregations](aggregations-properties-multisectors-items-properties-name.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/multisectors/items/properties/name")

### name Type

`string`

## capacity

Multi sector defined capacity

`capacity`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Aggregations](aggregations-properties-multisectors-items-properties-capacity.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/multisectors/items/properties/capacity")

### capacity Type

`integer`

## disclaimer

Notes regarding sectorisation; e.g. 'B1 excl.'

`disclaimer`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Aggregations](aggregations-properties-multisectors-items-properties-disclaimer.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/multisectors/items/properties/disclaimer")

### disclaimer Type

`string`

## aggregations



`aggregations`

*   is optional

*   Type: `object[]` ([Details](aggregations-properties-multisectors-items-properties-aggregations-items.md))

*   cannot be null

*   defined in: [Aggregations](aggregations-properties-multisectors-items-properties-aggregations.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/multisectors/items/properties/aggregations")

### aggregations Type

`object[]` ([Details](aggregations-properties-multisectors-items-properties-aggregations-items.md))
