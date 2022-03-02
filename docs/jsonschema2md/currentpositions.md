# Streaming Current Positions Schema

```txt
https://github.com/databeacon/level5-schemas/edit/main/schemas/streaming/currentPositions.schema.json
```

Definition for current positions caché used for streaming calculations

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [currentPositions.schema.json](../../out/streaming/currentPositions.schema.json "open original schema") |

## Streaming Current Positions Type

`object` ([Streaming Current Positions](currentpositions.md))

# Streaming Current Positions Properties

| Property                                           | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                    |
| :------------------------------------------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [date](#date)                                      | `string`  | Optional | cannot be null | [Streaming Current Positions](currentpositions-properties-date.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streaming/currentPositions.schema.json#/properties/date")                                   |
| [id](#id)                                          | `string`  | Optional | cannot be null | [Streaming Current Positions](currentpositions-properties-id.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streaming/currentPositions.schema.json#/properties/id")                                       |
| [callsign\_icao](#callsign_icao)                   | `string`  | Optional | cannot be null | [Streaming Current Positions](currentpositions-properties-callsign_icao.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streaming/currentPositions.schema.json#/properties/callsign_icao")                 |
| [lat\_deg](#lat_deg)                               | `number`  | Optional | cannot be null | [Streaming Current Positions](currentpositions-properties-lat_deg.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streaming/currentPositions.schema.json#/properties/lat_deg")                             |
| [lon\_deg](#lon_deg)                               | `number`  | Optional | cannot be null | [Streaming Current Positions](currentpositions-properties-lon_deg.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streaming/currentPositions.schema.json#/properties/lon_deg")                             |
| [alt\_ft](#alt_ft)                                 | `number`  | Optional | cannot be null | [Streaming Current Positions](currentpositions-properties-alt_ft.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streaming/currentPositions.schema.json#/properties/alt_ft")                               |
| [track\_deg](#track_deg)                           | `number`  | Optional | cannot be null | [Streaming Current Positions](currentpositions-properties-track_deg.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streaming/currentPositions.schema.json#/properties/track_deg")                         |
| [gs\_kts](#gs_kts)                                 | `integer` | Optional | cannot be null | [Streaming Current Positions](currentpositions-properties-gs_kts.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streaming/currentPositions.schema.json#/properties/gs_kts")                               |
| [id\_hexcell](#id_hexcell)                         | `string`  | Optional | cannot be null | [Streaming Current Positions](currentpositions-properties-id_hexcell.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streaming/currentPositions.schema.json#/properties/id_hexcell")                       |
| [vertical\_speed\_ft\_min](#vertical_speed_ft_min) | `integer` | Optional | cannot be null | [Streaming Current Positions](currentpositions-properties-vertical_speed_ft_min.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streaming/currentPositions.schema.json#/properties/vertical_speed_ft_min") |
| [aprt\_departure\_icao](#aprt_departure_icao)      | `string`  | Optional | cannot be null | [Streaming Current Positions](currentpositions-properties-aprt_departure_icao.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streaming/currentPositions.schema.json#/properties/aprt_departure_icao")     |
| [aprt\_arrival\_icao](#aprt_arrival_icao)          | `string`  | Optional | cannot be null | [Streaming Current Positions](currentpositions-properties-aprt_arrival_icao.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streaming/currentPositions.schema.json#/properties/aprt_arrival_icao")         |
| [is\_leaving](#is_leaving)                         | `boolean` | Optional | cannot be null | [Streaming Current Positions](currentpositions-properties-is_leaving.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streaming/currentPositions.schema.json#/properties/is_leaving")                       |
| [date\_leaving](#date_leaving)                     | `integer` | Optional | cannot be null | [Streaming Current Positions](currentpositions-properties-date_leaving.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streaming/currentPositions.schema.json#/properties/date_leaving")                   |

## date

Message datetime

`date`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming Current Positions](currentpositions-properties-date.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streaming/currentPositions.schema.json#/properties/date")

### date Type

`string`

### date Constraints

**date**: the string must be a date string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## id

Flight unique identifier

`id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming Current Positions](currentpositions-properties-id.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streaming/currentPositions.schema.json#/properties/id")

### id Type

`string`

## callsign\_icao

ICAO callsign

`callsign_icao`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming Current Positions](currentpositions-properties-callsign_icao.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streaming/currentPositions.schema.json#/properties/callsign_icao")

### callsign\_icao Type

`string`

## lat\_deg

Latitude in degrees at message datetime

`lat_deg`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming Current Positions](currentpositions-properties-lat_deg.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streaming/currentPositions.schema.json#/properties/lat_deg")

### lat\_deg Type

`number`

## lon\_deg

Longitude in degrees at message datetime

`lon_deg`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming Current Positions](currentpositions-properties-lon_deg.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streaming/currentPositions.schema.json#/properties/lon_deg")

### lon\_deg Type

`number`

## alt\_ft

Altitude in feet

`alt_ft`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming Current Positions](currentpositions-properties-alt_ft.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streaming/currentPositions.schema.json#/properties/alt_ft")

### alt\_ft Type

`number`

## track\_deg

Aircraft's heading. From FlightAware data

`track_deg`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming Current Positions](currentpositions-properties-track_deg.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streaming/currentPositions.schema.json#/properties/track_deg")

### track\_deg Type

`number`

## gs\_kts

Groundspeed in knots

`gs_kts`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming Current Positions](currentpositions-properties-gs_kts.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streaming/currentPositions.schema.json#/properties/gs_kts")

### gs\_kts Type

`integer`

## id\_hexcell

H3 hexcell identifier

`id_hexcell`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming Current Positions](currentpositions-properties-id_hexcell.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streaming/currentPositions.schema.json#/properties/id_hexcell")

### id\_hexcell Type

`string`

## vertical\_speed\_ft\_min

Vertical speed as feet per minute

`vertical_speed_ft_min`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming Current Positions](currentpositions-properties-vertical_speed_ft_min.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streaming/currentPositions.schema.json#/properties/vertical_speed_ft_min")

### vertical\_speed\_ft\_min Type

`integer`

## aprt\_departure\_icao

Departure airport. ICAO format

`aprt_departure_icao`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming Current Positions](currentpositions-properties-aprt_departure_icao.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streaming/currentPositions.schema.json#/properties/aprt_departure_icao")

### aprt\_departure\_icao Type

`string`

## aprt\_arrival\_icao

Arrival airport. ICAO format

`aprt_arrival_icao`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming Current Positions](currentpositions-properties-aprt_arrival_icao.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streaming/currentPositions.schema.json#/properties/aprt_arrival_icao")

### aprt\_arrival\_icao Type

`string`

## is\_leaving

Flag true if the aircraft is leaving the defined area

`is_leaving`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Streaming Current Positions](currentpositions-properties-is_leaving.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streaming/currentPositions.schema.json#/properties/is_leaving")

### is\_leaving Type

`boolean`

## date\_leaving

Expected last datetime after the aircraft leaves te defined area

`date_leaving`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming Current Positions](currentpositions-properties-date_leaving.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streaming/currentPositions.schema.json#/properties/date_leaving")

### date\_leaving Type

`integer`
