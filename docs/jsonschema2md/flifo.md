# Firehose FLIFO Schema

```txt
https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/firehose/flifo.schema.json
```

Definition for firehose static flight information

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [flifo.schema.json](../../out/firehose/flifo.schema.json "open original schema") |

## Firehose FLIFO Type

`object` ([Firehose FLIFO](flifo.md))

# Firehose FLIFO Properties

| Property                         | Type      | Required | Nullable       | Defined by                                                                                                                                                                          |
| :------------------------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [pitr](#pitr)                    | `integer` | Required | cannot be null | [Firehose FLIFO](flifo-properties-pitr.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/firehose/flifo.schema.json#/properties/pitr")                   |
| [id](#id)                        | `string`  | Required | cannot be null | [Firehose FLIFO](flifo-properties-id.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/firehose/flifo.schema.json#/properties/id")                       |
| [ident](#ident)                  | `string`  | Required | cannot be null | [Firehose FLIFO](flifo-properties-ident.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/firehose/flifo.schema.json#/properties/ident")                 |
| [atcident](#atcident)            | `string`  | Optional | cannot be null | [Firehose FLIFO](flifo-properties-atcident.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/firehose/flifo.schema.json#/properties/atcident")           |
| [reg](#reg)                      | `string`  | Optional | cannot be null | [Firehose FLIFO](flifo-properties-reg.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/firehose/flifo.schema.json#/properties/reg")                     |
| [aircrafttype](#aircrafttype)    | `string`  | Optional | cannot be null | [Firehose FLIFO](flifo-properties-aircrafttype.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/firehose/flifo.schema.json#/properties/aircrafttype")   |
| [orig](#orig)                    | `string`  | Optional | cannot be null | [Firehose FLIFO](flifo-properties-orig.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/firehose/flifo.schema.json#/properties/orig")                   |
| [dest](#dest)                    | `string`  | Optional | cannot be null | [Firehose FLIFO](flifo-properties-dest.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/firehose/flifo.schema.json#/properties/dest")                   |
| [status](#status)                | `string`  | Optional | cannot be null | [Firehose FLIFO](flifo-properties-status.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/firehose/flifo.schema.json#/properties/status")               |
| [scheduled\_off](#scheduled_off) | `integer` | Optional | cannot be null | [Firehose FLIFO](flifo-properties-scheduled_off.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/firehose/flifo.schema.json#/properties/scheduled_off") |
| [scheduled\_on](#scheduled_on)   | `integer` | Optional | cannot be null | [Firehose FLIFO](flifo-properties-scheduled_on.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/firehose/flifo.schema.json#/properties/scheduled_on")   |
| [estimated\_off](#estimated_off) | `integer` | Optional | cannot be null | [Firehose FLIFO](flifo-properties-estimated_off.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/firehose/flifo.schema.json#/properties/estimated_off") |
| [estimated\_on](#estimated_on)   | `integer` | Optional | cannot be null | [Firehose FLIFO](flifo-properties-estimated_on.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/firehose/flifo.schema.json#/properties/estimated_on")   |
| [actual\_on](#actual_on)         | `integer` | Optional | cannot be null | [Firehose FLIFO](flifo-properties-actual_on.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/firehose/flifo.schema.json#/properties/actual_on")         |
| [actual\_off](#actual_off)       | `integer` | Optional | cannot be null | [Firehose FLIFO](flifo-properties-actual_off.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/firehose/flifo.schema.json#/properties/actual_off")       |

## pitr

Point in time recovery

`pitr`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Firehose FLIFO](flifo-properties-pitr.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/firehose/flifo.schema.json#/properties/pitr")

### pitr Type

`integer`

## id

FlightAware flight id

`id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Firehose FLIFO](flifo-properties-id.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/firehose/flifo.schema.json#/properties/id")

### id Type

`string`

## ident

Callsign identifying the flight. Typically, ICAO airline code plus IATA/ticketing flight number, or the aircraft registration

`ident`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Firehose FLIFO](flifo-properties-ident.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/firehose/flifo.schema.json#/properties/ident")

### ident Type

`string`

## atcident

Identifier used for ATC, if it differs from flight identifier

`atcident`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Firehose FLIFO](flifo-properties-atcident.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/firehose/flifo.schema.json#/properties/atcident")

### atcident Type

`string`

## reg

The tail number or registration of the aircraft, if known and it differs from the ident

`reg`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Firehose FLIFO](flifo-properties-reg.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/firehose/flifo.schema.json#/properties/reg")

### reg Type

`string`

## aircrafttype

FAA or ICAO aircraft type code

`aircrafttype`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Firehose FLIFO](flifo-properties-aircrafttype.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/firehose/flifo.schema.json#/properties/aircrafttype")

### aircrafttype Type

`string`

## orig

ICAO airport code, waypoint, or latitude/longitude pair

`orig`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Firehose FLIFO](flifo-properties-orig.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/firehose/flifo.schema.json#/properties/orig")

### orig Type

`string`

## dest

ICAO airport code, waypoint, or latitude/longitude pair. May be missing if not known

`dest`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Firehose FLIFO](flifo-properties-dest.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/firehose/flifo.schema.json#/properties/dest")

### dest Type

`string`

## status

Single letter code for current flight status, can be S Scheduled, F Filed, A Active, Z Completed, or X Cancelled

`status`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Firehose FLIFO](flifo-properties-status.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/firehose/flifo.schema.json#/properties/status")

### status Type

`string`

## scheduled\_off

The scheduled out (gate departure) time (POSIX epoch format)

`scheduled_off`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Firehose FLIFO](flifo-properties-scheduled_off.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/firehose/flifo.schema.json#/properties/scheduled_off")

### scheduled\_off Type

`integer`

## scheduled\_on

The scheduled in (gate arrival) time (POSIX epoch format)

`scheduled_on`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Firehose FLIFO](flifo-properties-scheduled_on.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/firehose/flifo.schema.json#/properties/scheduled_on")

### scheduled\_on Type

`integer`

## estimated\_off

The estimated out (gate departure) time (POSIX epoch format)

`estimated_off`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Firehose FLIFO](flifo-properties-estimated_off.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/firehose/flifo.schema.json#/properties/estimated_off")

### estimated\_off Type

`integer`

## estimated\_on

The estimated in (gate arrival) time (POSIX epoch format)

`estimated_on`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Firehose FLIFO](flifo-properties-estimated_on.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/firehose/flifo.schema.json#/properties/estimated_on")

### estimated\_on Type

`integer`

## actual\_on

The actual in (gate arrival) time (POSIX epoch format)

`actual_on`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Firehose FLIFO](flifo-properties-actual_on.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/firehose/flifo.schema.json#/properties/actual_on")

### actual\_on Type

`integer`

## actual\_off

The actual out (gate departure) time (POSIX epoch format)

`actual_off`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Firehose FLIFO](flifo-properties-actual_off.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/firehose/flifo.schema.json#/properties/actual_off")

### actual\_off Type

`integer`
