# Untitled object in Aggregations Schema

```txt
https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/multisectors/items/properties/aggregations/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [aggregations.schema.json\*](../../out/rest/aggregations.schema.json "open original schema") |

## items Type

`object` ([Details](aggregations-properties-multisectors-items-properties-aggregations-items.md))

# items Properties

| Property                 | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                  |
| :----------------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id\_window](#id_window) | `string`  | Optional | cannot be null | [Aggregations](aggregations-properties-multisectors-items-properties-aggregations-items-properties-id_window.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/multisectors/items/properties/aggregations/items/properties/id_window") |
| [start](#start)          | `integer` | Optional | cannot be null | [Aggregations](aggregations-properties-multisectors-items-properties-aggregations-items-properties-start.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/multisectors/items/properties/aggregations/items/properties/start")         |
| [end](#end)              | `integer` | Optional | cannot be null | [Aggregations](aggregations-properties-multisectors-items-properties-aggregations-items-properties-end.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/multisectors/items/properties/aggregations/items/properties/end")             |
| [occ](#occ)              | `integer` | Optional | cannot be null | [Aggregations](aggregations-properties-multisectors-items-properties-aggregations-items-properties-occ.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/multisectors/items/properties/aggregations/items/properties/occ")             |
| [n\_pcds](#n_pcds)       | `integer` | Optional | cannot be null | [Aggregations](aggregations-properties-multisectors-items-properties-aggregations-items-properties-n_pcds.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/multisectors/items/properties/aggregations/items/properties/n_pcds")       |
| [n\_ncts](#n_ncts)       | `integer` | Optional | cannot be null | [Aggregations](aggregations-properties-multisectors-items-properties-aggregations-items-properties-n_ncts.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/multisectors/items/properties/aggregations/items/properties/n_ncts")       |
| [workload](#workload)    | `integer` | Optional | cannot be null | [Aggregations](aggregations-properties-multisectors-items-properties-aggregations-items-properties-workload.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/multisectors/items/properties/aggregations/items/properties/workload")   |

## id\_window

Window identifier

`id_window`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Aggregations](aggregations-properties-multisectors-items-properties-aggregations-items-properties-id_window.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/multisectors/items/properties/aggregations/items/properties/id_window")

### id\_window Type

`string`

## start

Window epoch start

`start`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Aggregations](aggregations-properties-multisectors-items-properties-aggregations-items-properties-start.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/multisectors/items/properties/aggregations/items/properties/start")

### start Type

`integer`

## end

Window epoch end

`end`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Aggregations](aggregations-properties-multisectors-items-properties-aggregations-items-properties-end.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/multisectors/items/properties/aggregations/items/properties/end")

### end Type

`integer`

## occ

Occupancy KPI measured as the number of aircraft that have occupied the multisector within the time window

`occ`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Aggregations](aggregations-properties-multisectors-items-properties-aggregations-items-properties-occ.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/multisectors/items/properties/aggregations/items/properties/occ")

### occ Type

`integer`

### occ Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## n\_pcds

Number of PCDs that occured in the multisector within the time window

`n_pcds`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Aggregations](aggregations-properties-multisectors-items-properties-aggregations-items-properties-n_pcds.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/multisectors/items/properties/aggregations/items/properties/n_pcds")

### n\_pcds Type

`integer`

### n\_pcds Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## n\_ncts

Number of NCTs entering the multisector within the time window

`n_ncts`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Aggregations](aggregations-properties-multisectors-items-properties-aggregations-items-properties-n_ncts.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/multisectors/items/properties/aggregations/items/properties/n_ncts")

### n\_ncts Type

`integer`

### n\_ncts Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## workload

Estimated ACTO workload

`workload`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Aggregations](aggregations-properties-multisectors-items-properties-aggregations-items-properties-workload.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/multisectors/items/properties/aggregations/items/properties/workload")

### workload Type

`integer`

### workload Constraints

**maximum**: the value of this number must smaller than or equal to: `1`

**minimum**: the value of this number must greater than or equal to: `0`
