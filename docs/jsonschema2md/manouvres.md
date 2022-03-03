# Manouvres (historical data) Schema

```txt
https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/batch/manouvres.schema.json
```

Definition of the manouvres historical data

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [manouvres.schema.json](../../out/batch/manouvres.schema.json "open original schema") |

## Manouvres (historical data) Type

`object` ([Manouvres (historical data)](manouvres.md))

# Manouvres (historical data) Properties

| Property        | Type      | Required | Nullable       | Defined by                                                                                                                                                                            |
| :-------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [id](#id)       | `string`  | Optional | cannot be null | [Manouvres (historical data)](manouvres-properties-id.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/batch/manouvres.schema.json#/properties/id")       |
| [month](#month) | `integer` | Optional | cannot be null | [Manouvres (historical data)](manouvres-properties-month.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/batch/manouvres.schema.json#/properties/month") |
| [day](#day)     | `integer` | Optional | cannot be null | [Manouvres (historical data)](manouvres-properties-day.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/batch/manouvres.schema.json#/properties/day")     |
| [hour](#hour)   | `integer` | Optional | cannot be null | [Manouvres (historical data)](manouvres-properties-hour.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/batch/manouvres.schema.json#/properties/hour")   |

## id

Potential conflict unique identifier

`id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Manouvres (historical data)](manouvres-properties-id.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/batch/manouvres.schema.json#/properties/id")

### id Type

`string`

## month

Month as number, extracted from date, used as partition column

`month`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Manouvres (historical data)](manouvres-properties-month.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/batch/manouvres.schema.json#/properties/month")

### month Type

`integer`

## day

Day extracted from date, used as partition column

`day`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Manouvres (historical data)](manouvres-properties-day.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/batch/manouvres.schema.json#/properties/day")

### day Type

`integer`

## hour

Hour extracted from date, used as partition column

`hour`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Manouvres (historical data)](manouvres-properties-hour.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/batch/manouvres.schema.json#/properties/hour")

### hour Type

`integer`
