# Streaming FLIFO Schema

```txt
https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/flifo.schema.json
```

Definition for a flights static data

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [flifo.schema.json](../../out/streaming/flifo.schema.json "open original schema") |

## Streaming FLIFO Type

`object` ([Streaming FLIFO](flifo-1.md))

# Streaming FLIFO Properties

| Property                                      | Type      | Required | Nullable       | Defined by                                                                                                                                                                                          |
| :-------------------------------------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [date](#date)                                 | `integer` | Optional | cannot be null | [Streaming FLIFO](flifo-1-properties-date.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/flifo.schema.json#/properties/date")                               |
| [id](#id)                                     | `string`  | Optional | cannot be null | [Streaming FLIFO](flifo-1-properties-id.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/flifo.schema.json#/properties/id")                                   |
| [callsign\_icao](#callsign_icao)              | `string`  | Optional | cannot be null | [Streaming FLIFO](flifo-1-properties-callsign_icao.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/flifo.schema.json#/properties/callsign_icao")             |
| [callsign\_iata](#callsign_iata)              | `number`  | Optional | cannot be null | [Streaming FLIFO](flifo-1-properties-callsign_iata.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/flifo.schema.json#/properties/callsign_iata")             |
| [ac\_type](#ac_type)                          | `string`  | Optional | cannot be null | [Streaming FLIFO](flifo-1-properties-ac_type.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/flifo.schema.json#/properties/ac_type")                         |
| [aprt\_departure\_icao](#aprt_departure_icao) | `string`  | Optional | cannot be null | [Streaming FLIFO](flifo-1-properties-aprt_departure_icao.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/flifo.schema.json#/properties/aprt_departure_icao") |
| [aprt\_arrival\_icao](#aprt_arrival_icao)     | `string`  | Optional | cannot be null | [Streaming FLIFO](flifo-1-properties-aprt_arrival_icao.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/flifo.schema.json#/properties/aprt_arrival_icao")     |
| [status](#status)                             | `string`  | Optional | cannot be null | [Streaming FLIFO](flifo-1-properties-status.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/flifo.schema.json#/properties/status")                           |
| [scheduled\_off](#scheduled_off)              | `integer` | Optional | cannot be null | [Streaming FLIFO](flifo-1-properties-scheduled_off.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/flifo.schema.json#/properties/scheduled_off")             |
| [scheduled\_on](#scheduled_on)                | `integer` | Optional | cannot be null | [Streaming FLIFO](flifo-1-properties-scheduled_on.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/flifo.schema.json#/properties/scheduled_on")               |
| [estimated\_off](#estimated_off)              | `integer` | Optional | cannot be null | [Streaming FLIFO](flifo-1-properties-estimated_off.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/flifo.schema.json#/properties/estimated_off")             |
| [estimated\_on](#estimated_on)                | `integer` | Optional | cannot be null | [Streaming FLIFO](flifo-1-properties-estimated_on.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/flifo.schema.json#/properties/estimated_on")               |
| [actual\_on](#actual_on)                      | `integer` | Optional | cannot be null | [Streaming FLIFO](flifo-1-properties-actual_on.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/flifo.schema.json#/properties/actual_on")                     |
| [actual\_off](#actual_off)                    | `integer` | Optional | cannot be null | [Streaming FLIFO](flifo-1-properties-actual_off.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/flifo.schema.json#/properties/actual_off")                   |

## date

Message dateime

`date`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming FLIFO](flifo-1-properties-date.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/flifo.schema.json#/properties/date")

### date Type

`integer`

## id

Flight unique identifier

`id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming FLIFO](flifo-1-properties-id.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/flifo.schema.json#/properties/id")

### id Type

`string`

## callsign\_icao

Callsign identifying the flight as airline ICAO code

`callsign_icao`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming FLIFO](flifo-1-properties-callsign_icao.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/flifo.schema.json#/properties/callsign_icao")

### callsign\_icao Type

`string`

## callsign\_iata

Callsign identifying the flight as IATA/ticketing flight number

`callsign_iata`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming FLIFO](flifo-1-properties-callsign_iata.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/flifo.schema.json#/properties/callsign_iata")

### callsign\_iata Type

`number`

## ac\_type

FAA or ICAO aircraft type code

`ac_type`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming FLIFO](flifo-1-properties-ac_type.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/flifo.schema.json#/properties/ac_type")

### ac\_type Type

`string`

## aprt\_departure\_icao

ICAO airport code, waypoint, or latitude/longitude pair

`aprt_departure_icao`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming FLIFO](flifo-1-properties-aprt_departure_icao.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/flifo.schema.json#/properties/aprt_departure_icao")

### aprt\_departure\_icao Type

`string`

## aprt\_arrival\_icao

ICAO airport code, waypoint, or latitude/longitude pair. May be missing if not known

`aprt_arrival_icao`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming FLIFO](flifo-1-properties-aprt_arrival_icao.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/flifo.schema.json#/properties/aprt_arrival_icao")

### aprt\_arrival\_icao Type

`string`

## status

Single letter code for current flight status, can be S Scheduled, F Filed, A Active, Z Completed, or X Cancelled

`status`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming FLIFO](flifo-1-properties-status.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/flifo.schema.json#/properties/status")

### status Type

`string`

## scheduled\_off

The scheduled out (gate departure) time (POSIX epoch format)

`scheduled_off`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming FLIFO](flifo-1-properties-scheduled_off.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/flifo.schema.json#/properties/scheduled_off")

### scheduled\_off Type

`integer`

## scheduled\_on

The scheduled in (gate arrival) time (POSIX epoch format)

`scheduled_on`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming FLIFO](flifo-1-properties-scheduled_on.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/flifo.schema.json#/properties/scheduled_on")

### scheduled\_on Type

`integer`

## estimated\_off

The estimated out (gate departure) time (POSIX epoch format)

`estimated_off`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming FLIFO](flifo-1-properties-estimated_off.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/flifo.schema.json#/properties/estimated_off")

### estimated\_off Type

`integer`

## estimated\_on

The estimated in (gate arrival) time (POSIX epoch format)

`estimated_on`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming FLIFO](flifo-1-properties-estimated_on.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/flifo.schema.json#/properties/estimated_on")

### estimated\_on Type

`integer`

## actual\_on

The actual in (gate arrival) time (POSIX epoch format)

`actual_on`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming FLIFO](flifo-1-properties-actual_on.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/flifo.schema.json#/properties/actual_on")

### actual\_on Type

`integer`

## actual\_off

The actual out (gate departure) time (POSIX epoch format)

`actual_off`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming FLIFO](flifo-1-properties-actual_off.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/flifo.schema.json#/properties/actual_off")

### actual\_off Type

`integer`
