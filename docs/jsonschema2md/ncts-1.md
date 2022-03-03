# Streaming NCTs Schema

```txt
https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/ncts.schema.json
```

Definition of the streaming NCTs data

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [ncts.schema.json](../../out/streaming/ncts.schema.json "open original schema") |

## Streaming NCTs Type

`object` ([Streaming NCTs](ncts-1.md))

# Streaming NCTs Properties

| Property                                   | Type      | Required | Nullable       | Defined by                                                                                                                                                                                   |
| :----------------------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                                  | `string`  | Optional | cannot be null | [Streaming NCTs](ncts-1-properties-id.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/ncts.schema.json#/properties/id")                               |
| [id\_flight](#id_flight)                   | `string`  | Optional | cannot be null | [Streaming NCTs](ncts-1-properties-id_flight.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/ncts.schema.json#/properties/id_flight")                 |
| [id\_sector](#id_sector)                   | `string`  | Optional | cannot be null | [Streaming NCTs](ncts-1-properties-id_sector.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/ncts.schema.json#/properties/id_sector")                 |
| [ref\_epoch](#ref_epoch)                   | `integer` | Optional | cannot be null | [Streaming NCTs](ncts-1-properties-ref_epoch.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/ncts.schema.json#/properties/ref_epoch")                 |
| [proj\_exit\_epoch](#proj_exit_epoch)      | `integer` | Optional | cannot be null | [Streaming NCTs](ncts-1-properties-proj_exit_epoch.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/ncts.schema.json#/properties/proj_exit_epoch")     |
| [proj\_exit\_lat\_deg](#proj_exit_lat_deg) | `number`  | Optional | cannot be null | [Streaming NCTs](ncts-1-properties-proj_exit_lat_deg.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/ncts.schema.json#/properties/proj_exit_lat_deg") |
| [proj\_exit\_lon\_deg](#proj_exit_lon_deg) | `number`  | Optional | cannot be null | [Streaming NCTs](ncts-1-properties-proj_exit_lon_deg.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/ncts.schema.json#/properties/proj_exit_lon_deg") |
| [proj\_exit\_alt\_ft](#proj_exit_alt_ft)   | `number`  | Optional | cannot be null | [Streaming NCTs](ncts-1-properties-proj_exit_alt_ft.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/ncts.schema.json#/properties/proj_exit_alt_ft")   |
| [is\_nct](#is_nct)                         | `boolean` | Optional | cannot be null | [Streaming NCTs](ncts-1-properties-is_nct.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/ncts.schema.json#/properties/is_nct")                       |

## id

NCT unique identifier

`id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming NCTs](ncts-1-properties-id.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/ncts.schema.json#/properties/id")

### id Type

`string`

## id\_flight

Flight unique identifier

`id_flight`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming NCTs](ncts-1-properties-id_flight.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/ncts.schema.json#/properties/id_flight")

### id\_flight Type

`string`

## id\_sector

Sector identifier. Null for soft-ncts

`id_sector`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming NCTs](ncts-1-properties-id_sector.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/ncts.schema.json#/properties/id_sector")

### id\_sector Type

`string`

## ref\_epoch

Reference epoch, extracted from the aircraft position

`ref_epoch`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming NCTs](ncts-1-properties-ref_epoch.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/ncts.schema.json#/properties/ref_epoch")

### ref\_epoch Type

`integer`

## proj\_exit\_epoch

Projected or sector exit epoch

`proj_exit_epoch`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming NCTs](ncts-1-properties-proj_exit_epoch.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/ncts.schema.json#/properties/proj_exit_epoch")

### proj\_exit\_epoch Type

`integer`

## proj\_exit\_lat\_deg

Projected or sector exit latitude in degrees

`proj_exit_lat_deg`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming NCTs](ncts-1-properties-proj_exit_lat_deg.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/ncts.schema.json#/properties/proj_exit_lat_deg")

### proj\_exit\_lat\_deg Type

`number`

## proj\_exit\_lon\_deg

Projected or sector exit longitude in degrees

`proj_exit_lon_deg`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming NCTs](ncts-1-properties-proj_exit_lon_deg.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/ncts.schema.json#/properties/proj_exit_lon_deg")

### proj\_exit\_lon\_deg Type

`number`

## proj\_exit\_alt\_ft

Projected or sector exit in altitude

`proj_exit_alt_ft`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming NCTs](ncts-1-properties-proj_exit_alt_ft.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/ncts.schema.json#/properties/proj_exit_alt_ft")

### proj\_exit\_alt\_ft Type

`number`

## is\_nct

Flag for NCT activation and de-activation

`is_nct`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Streaming NCTs](ncts-1-properties-is_nct.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/ncts.schema.json#/properties/is_nct")

### is\_nct Type

`boolean`
