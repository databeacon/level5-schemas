# Streaming NCTs Schema

```txt
https://github.com/databeacon/level5-schemas/schemas/streaming/ncts.schema.json
```

Definition of the streaming NCTs data

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [ncts.schema.json](../../out/streaming/ncts.schema.json "open original schema") |

## Streaming NCTs Type

`object` ([Streaming NCTs](ncts-1.md))

# Streaming NCTs Properties

| Property                                   | Type      | Required | Nullable       | Defined by                                                                                                                                                               |
| :----------------------------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                                  | `string`  | Optional | cannot be null | [Streaming NCTs](ncts-1-properties-id.md "https://github.com/databeacon/level5-schemas/schemas/streaming/ncts.schema.json#/properties/id")                               |
| [id\_flight](#id_flight)                   | `string`  | Optional | cannot be null | [Streaming NCTs](ncts-1-properties-id_flight.md "https://github.com/databeacon/level5-schemas/schemas/streaming/ncts.schema.json#/properties/id_flight")                 |
| [id\_sector](#id_sector)                   | `string`  | Optional | cannot be null | [Streaming NCTs](ncts-1-properties-id_sector.md "https://github.com/databeacon/level5-schemas/schemas/streaming/ncts.schema.json#/properties/id_sector")                 |
| [ref\_epoch](#ref_epoch)                   | `integer` | Optional | cannot be null | [Streaming NCTs](ncts-1-properties-ref_epoch.md "https://github.com/databeacon/level5-schemas/schemas/streaming/ncts.schema.json#/properties/ref_epoch")                 |
| [proj\_exit\_epoch](#proj_exit_epoch)      | `integer` | Optional | cannot be null | [Streaming NCTs](ncts-1-properties-proj_exit_epoch.md "https://github.com/databeacon/level5-schemas/schemas/streaming/ncts.schema.json#/properties/proj_exit_epoch")     |
| [proj\_exit\_lat\_deg](#proj_exit_lat_deg) | `number`  | Optional | cannot be null | [Streaming NCTs](ncts-1-properties-proj_exit_lat_deg.md "https://github.com/databeacon/level5-schemas/schemas/streaming/ncts.schema.json#/properties/proj_exit_lat_deg") |
| [proj\_exit\_lon\_deg](#proj_exit_lon_deg) | `number`  | Optional | cannot be null | [Streaming NCTs](ncts-1-properties-proj_exit_lon_deg.md "https://github.com/databeacon/level5-schemas/schemas/streaming/ncts.schema.json#/properties/proj_exit_lon_deg") |
| [proj\_exit\_alt\_ft](#proj_exit_alt_ft)   | `number`  | Optional | cannot be null | [Streaming NCTs](ncts-1-properties-proj_exit_alt_ft.md "https://github.com/databeacon/level5-schemas/schemas/streaming/ncts.schema.json#/properties/proj_exit_alt_ft")   |
| [any\_pcd](#any_pcd)                       | `boolean` | Optional | cannot be null | [Streaming NCTs](ncts-1-properties-any_pcd.md "https://github.com/databeacon/level5-schemas/schemas/streaming/ncts.schema.json#/properties/any_pcd")                     |
| [is\_nct](#is_nct)                         | `boolean` | Optional | cannot be null | [Streaming NCTs](ncts-1-properties-is_nct.md "https://github.com/databeacon/level5-schemas/schemas/streaming/ncts.schema.json#/properties/is_nct")                       |

## id

FlightAware flight id

`id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming NCTs](ncts-1-properties-id.md "https://github.com/databeacon/level5-schemas/schemas/streaming/ncts.schema.json#/properties/id")

### id Type

`string`

## id\_flight



`id_flight`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming NCTs](ncts-1-properties-id_flight.md "https://github.com/databeacon/level5-schemas/schemas/streaming/ncts.schema.json#/properties/id_flight")

### id\_flight Type

`string`

## id\_sector

Identifier used for ATC, if it differs from flight identifier

`id_sector`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming NCTs](ncts-1-properties-id_sector.md "https://github.com/databeacon/level5-schemas/schemas/streaming/ncts.schema.json#/properties/id_sector")

### id\_sector Type

`string`

## ref\_epoch

The tail number or registration of the aircraft, if known and it differs from the ident

`ref_epoch`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming NCTs](ncts-1-properties-ref_epoch.md "https://github.com/databeacon/level5-schemas/schemas/streaming/ncts.schema.json#/properties/ref_epoch")

### ref\_epoch Type

`integer`

## proj\_exit\_epoch

FAA or ICAO aircraft type code

`proj_exit_epoch`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming NCTs](ncts-1-properties-proj_exit_epoch.md "https://github.com/databeacon/level5-schemas/schemas/streaming/ncts.schema.json#/properties/proj_exit_epoch")

### proj\_exit\_epoch Type

`integer`

## proj\_exit\_lat\_deg

ICAO airport code, waypoint, or latitude/longitude pair

`proj_exit_lat_deg`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming NCTs](ncts-1-properties-proj_exit_lat_deg.md "https://github.com/databeacon/level5-schemas/schemas/streaming/ncts.schema.json#/properties/proj_exit_lat_deg")

### proj\_exit\_lat\_deg Type

`number`

## proj\_exit\_lon\_deg

ICAO airport code, waypoint, or latitude/longitude pair. May be missing if not known

`proj_exit_lon_deg`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming NCTs](ncts-1-properties-proj_exit_lon_deg.md "https://github.com/databeacon/level5-schemas/schemas/streaming/ncts.schema.json#/properties/proj_exit_lon_deg")

### proj\_exit\_lon\_deg Type

`number`

## proj\_exit\_alt\_ft

Single letter code for current flight status, can be S Scheduled, F Filed, A Active, Z Completed, or X Cancelled

`proj_exit_alt_ft`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming NCTs](ncts-1-properties-proj_exit_alt_ft.md "https://github.com/databeacon/level5-schemas/schemas/streaming/ncts.schema.json#/properties/proj_exit_alt_ft")

### proj\_exit\_alt\_ft Type

`number`

## any\_pcd

The scheduled out (gate departure) time (POSIX epoch format)

`any_pcd`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Streaming NCTs](ncts-1-properties-any_pcd.md "https://github.com/databeacon/level5-schemas/schemas/streaming/ncts.schema.json#/properties/any_pcd")

### any\_pcd Type

`boolean`

## is\_nct

The scheduled in (gate arrival) time (POSIX epoch format)

`is_nct`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Streaming NCTs](ncts-1-properties-is_nct.md "https://github.com/databeacon/level5-schemas/schemas/streaming/ncts.schema.json#/properties/is_nct")

### is\_nct Type

`boolean`
