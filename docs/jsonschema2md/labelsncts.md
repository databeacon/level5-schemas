# Labels predictive NCTs Schema

```txt
https://github.com/databeacon/level5-schemas/schemas/labelsNCTs.schema.json
```

Definition of the streaming NCTs data

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [labelsNCTs.schema.json](../../out/labelsNCTs.schema.json "open original schema") |

## Labels predictive NCTs Type

`object` ([Labels predictive NCTs](labelsncts.md))

# Labels predictive NCTs Properties

| Property                 | Type      | Required | Nullable       | Defined by                                                                                                                                                       |
| :----------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                | `string`  | Optional | cannot be null | [Labels predictive NCTs](labelsncts-properties-id.md "https://github.com/databeacon/level5-schemas/schemas/labelsNCTs.schema.json#/properties/id")               |
| [id\_flight](#id_flight) | `string`  | Optional | cannot be null | [Labels predictive NCTs](labelsncts-properties-id_flight.md "https://github.com/databeacon/level5-schemas/schemas/labelsNCTs.schema.json#/properties/id_flight") |
| [ref\_epoch](#ref_epoch) | `integer` | Optional | cannot be null | [Labels predictive NCTs](labelsncts-properties-ref_epoch.md "https://github.com/databeacon/level5-schemas/schemas/labelsNCTs.schema.json#/properties/ref_epoch") |
| [is\_nct](#is_nct)       | `boolean` | Optional | cannot be null | [Labels predictive NCTs](labelsncts-properties-is_nct.md "https://github.com/databeacon/level5-schemas/schemas/labelsNCTs.schema.json#/properties/is_nct")       |

## id

NCT label id

`id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Labels predictive NCTs](labelsncts-properties-id.md "https://github.com/databeacon/level5-schemas/schemas/labelsNCTs.schema.json#/properties/id")

### id Type

`string`

## id\_flight

FlightAware flight id

`id_flight`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Labels predictive NCTs](labelsncts-properties-id_flight.md "https://github.com/databeacon/level5-schemas/schemas/labelsNCTs.schema.json#/properties/id_flight")

### id\_flight Type

`string`

## ref\_epoch

The tail number or registration of the aircraft, if known and it differs from the ident

`ref_epoch`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Labels predictive NCTs](labelsncts-properties-ref_epoch.md "https://github.com/databeacon/level5-schemas/schemas/labelsNCTs.schema.json#/properties/ref_epoch")

### ref\_epoch Type

`integer`

## is\_nct

The scheduled in (gate arrival) time (POSIX epoch format)

`is_nct`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Labels predictive NCTs](labelsncts-properties-is_nct.md "https://github.com/databeacon/level5-schemas/schemas/labelsNCTs.schema.json#/properties/is_nct")

### is\_nct Type

`boolean`
