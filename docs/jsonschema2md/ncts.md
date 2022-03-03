# Labels predictive NCTs Schema

```txt
https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/batch/ncts.schema.json
```

Definition of the streaming NCTs data

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                  |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [ncts.schema.json](../../out/batch/ncts.schema.json "open original schema") |

## Labels predictive NCTs Type

`object` ([Labels predictive NCTs](ncts.md))

# Labels predictive NCTs Properties

| Property                 | Type      | Required | Nullable       | Defined by                                                                                                                                                                     |
| :----------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                | `string`  | Optional | cannot be null | [Labels predictive NCTs](ncts-properties-id.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/batch/ncts.schema.json#/properties/id")               |
| [id\_flight](#id_flight) | `string`  | Optional | cannot be null | [Labels predictive NCTs](ncts-properties-id_flight.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/batch/ncts.schema.json#/properties/id_flight") |
| [ref\_epoch](#ref_epoch) | `integer` | Optional | cannot be null | [Labels predictive NCTs](ncts-properties-ref_epoch.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/batch/ncts.schema.json#/properties/ref_epoch") |
| [is\_nct](#is_nct)       | `boolean` | Optional | cannot be null | [Labels predictive NCTs](ncts-properties-is_nct.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/batch/ncts.schema.json#/properties/is_nct")       |

## id

NCT label id

`id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Labels predictive NCTs](ncts-properties-id.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/batch/ncts.schema.json#/properties/id")

### id Type

`string`

## id\_flight

FlightAware flight id

`id_flight`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Labels predictive NCTs](ncts-properties-id_flight.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/batch/ncts.schema.json#/properties/id_flight")

### id\_flight Type

`string`

## ref\_epoch

The tail number or registration of the aircraft, if known and it differs from the ident

`ref_epoch`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Labels predictive NCTs](ncts-properties-ref_epoch.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/batch/ncts.schema.json#/properties/ref_epoch")

### ref\_epoch Type

`integer`

## is\_nct

The scheduled in (gate arrival) time (POSIX epoch format)

`is_nct`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Labels predictive NCTs](ncts-properties-is_nct.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/batch/ncts.schema.json#/properties/is_nct")

### is\_nct Type

`boolean`
