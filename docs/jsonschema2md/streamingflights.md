# Streaming Flights Schema

```txt
https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json
```

Definition for a flights dynamic data

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                    |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [streamingFlights.schema.json](../../out/streamingFlights.schema.json "open original schema") |

## Streaming Flights Type

`object` ([Streaming Flights](streamingflights.md))

# Streaming Flights Properties

| Property                                           | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                |
| :------------------------------------------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [date](#date)                                      | `string`  | Optional | cannot be null | [Streaming Flights](streamingflights-properties-date.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/date")                                   |
| [pitr](#pitr)                                      | `string`  | Optional | cannot be null | [Streaming Flights](streamingflights-properties-pitr.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/pitr")                                   |
| [id](#id)                                          | `string`  | Optional | cannot be null | [Streaming Flights](streamingflights-properties-id.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/id")                                       |
| [callsign\_icao](#callsign_icao)                   | `string`  | Optional | cannot be null | [Streaming Flights](streamingflights-properties-callsign_icao.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/callsign_icao")                 |
| [lat\_deg](#lat_deg)                               | `number`  | Optional | cannot be null | [Streaming Flights](streamingflights-properties-lat_deg.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/lat_deg")                             |
| [lon\_deg](#lon_deg)                               | `number`  | Optional | cannot be null | [Streaming Flights](streamingflights-properties-lon_deg.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/lon_deg")                             |
| [alt\_ft](#alt_ft)                                 | `integer` | Optional | cannot be null | [Streaming Flights](streamingflights-properties-alt_ft.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/alt_ft")                               |
| [proj\_date](#proj_date)                           | `integer` | Optional | cannot be null | [Streaming Flights](streamingflights-properties-proj_date.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/proj_date")                         |
| [proj\_lat\_deg](#proj_lat_deg)                    | `number`  | Optional | cannot be null | [Streaming Flights](streamingflights-properties-proj_lat_deg.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/proj_lat_deg")                   |
| [proj\_lon\_deg](#proj_lon_deg)                    | `number`  | Optional | cannot be null | [Streaming Flights](streamingflights-properties-proj_lon_deg.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/proj_lon_deg")                   |
| [proj\_alt\_ft](#proj_alt_ft)                      | `number`  | Optional | cannot be null | [Streaming Flights](streamingflights-properties-proj_alt_ft.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/proj_alt_ft")                     |
| [nav\_alt\_ft](#nav_alt_ft)                        | `integer` | Optional | cannot be null | [Streaming Flights](streamingflights-properties-nav_alt_ft.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/nav_alt_ft")                       |
| [track\_deg](#track_deg)                           | `integer` | Optional | cannot be null | [Streaming Flights](streamingflights-properties-track_deg.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/track_deg")                         |
| [gs\_kts](#gs_kts)                                 | `integer` | Optional | cannot be null | [Streaming Flights](streamingflights-properties-gs_kts.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/gs_kts")                               |
| [id\_hexcell](#id_hexcell)                         | `string`  | Optional | cannot be null | [Streaming Flights](streamingflights-properties-id_hexcell.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/id_hexcell")                       |
| [flight\_level](#flight_level)                     | `integer` | Optional | cannot be null | [Streaming Flights](streamingflights-properties-flight_level.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/flight_level")                   |
| [nav\_flight\_level](#nav_flight_level)            | `integer` | Optional | cannot be null | [Streaming Flights](streamingflights-properties-nav_flight_level.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/nav_flight_level")           |
| [nav\_heading\_deg](#nav_heading_deg)              | `integer` | Optional | cannot be null | [Streaming Flights](streamingflights-properties-nav_heading_deg.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/nav_heading_deg")             |
| [horizontal\_status](#horizontal_status)           | `string`  | Optional | cannot be null | [Streaming Flights](streamingflights-properties-horizontal_status.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/horizontal_status")         |
| [vertical\_status](#vertical_status)               | `string`  | Optional | cannot be null | [Streaming Flights](streamingflights-properties-vertical_status.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/vertical_status")             |
| [turn\_speed\_deg\_s](#turn_speed_deg_s)           | `integer` | Optional | cannot be null | [Streaming Flights](streamingflights-properties-turn_speed_deg_s.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/turn_speed_deg_s")           |
| [vertical\_speed\_ft\_min](#vertical_speed_ft_min) | `integer` | Optional | cannot be null | [Streaming Flights](streamingflights-properties-vertical_speed_ft_min.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/vertical_speed_ft_min") |
| [aprt\_departure\_icao](#aprt_departure_icao)      | `string`  | Optional | cannot be null | [Streaming Flights](streamingflights-properties-aprt_departure_icao.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/aprt_departure_icao")     |
| [aprt\_arrival\_icao](#aprt_arrival_icao)          | `string`  | Optional | cannot be null | [Streaming Flights](streamingflights-properties-aprt_arrival_icao.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/aprt_arrival_icao")         |
| [is\_leaving](#is_leaving)                         | `boolean` | Optional | cannot be null | [Streaming Flights](streamingflights-properties-is_leaving.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/is_leaving")                       |
| [date\_leaving](#date_leaving)                     | `integer` | Optional | cannot be null | [Streaming Flights](streamingflights-properties-date_leaving.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/date_leaving")                   |

## date

Message datetime

`date`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming Flights](streamingflights-properties-date.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/date")

### date Type

`string`

### date Constraints

**date**: the string must be a date string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## pitr

Message PITR

`pitr`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming Flights](streamingflights-properties-pitr.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/pitr")

### pitr Type

`string`

### pitr Constraints

**date**: the string must be a date string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## id

Flight unique identifier

`id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming Flights](streamingflights-properties-id.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/id")

### id Type

`string`

## callsign\_icao

ICAO callsign

`callsign_icao`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming Flights](streamingflights-properties-callsign_icao.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/callsign_icao")

### callsign\_icao Type

`string`

## lat\_deg

Latitude in degrees at message datetime

`lat_deg`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming Flights](streamingflights-properties-lat_deg.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/lat_deg")

### lat\_deg Type

`number`

## lon\_deg

Longitude in degrees at message datetime

`lon_deg`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming Flights](streamingflights-properties-lon_deg.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/lon_deg")

### lon\_deg Type

`number`

## alt\_ft

Altitude in feet

`alt_ft`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming Flights](streamingflights-properties-alt_ft.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/alt_ft")

### alt\_ft Type

`integer`

## proj\_date

Datetime at 6 seconds projection in order to facilitate interpolations

`proj_date`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming Flights](streamingflights-properties-proj_date.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/proj_date")

### proj\_date Type

`integer`

## proj\_lat\_deg

Latitude at 6 seconds projection in order to facilitate interpolations

`proj_lat_deg`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming Flights](streamingflights-properties-proj_lat_deg.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/proj_lat_deg")

### proj\_lat\_deg Type

`number`

## proj\_lon\_deg

Longitude at 6 seconds projection in order to facilitate interpolations

`proj_lon_deg`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming Flights](streamingflights-properties-proj_lon_deg.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/proj_lon_deg")

### proj\_lon\_deg Type

`number`

## proj\_alt\_ft

Altitude at 6 seconds projection in order to facilitate interpolations

`proj_alt_ft`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming Flights](streamingflights-properties-proj_alt_ft.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/proj_alt_ft")

### proj\_alt\_ft Type

`number`

## nav\_alt\_ft

Target altitude Mode-S

`nav_alt_ft`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming Flights](streamingflights-properties-nav_alt_ft.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/nav_alt_ft")

### nav\_alt\_ft Type

`integer`

## track\_deg

Aircraft's heading. From FlightAware data

`track_deg`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming Flights](streamingflights-properties-track_deg.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/track_deg")

### track\_deg Type

`integer`

## gs\_kts

Groundspeed in knots

`gs_kts`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming Flights](streamingflights-properties-gs_kts.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/gs_kts")

### gs\_kts Type

`integer`

## id\_hexcell

H3 hexcell identifier

`id_hexcell`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming Flights](streamingflights-properties-id_hexcell.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/id_hexcell")

### id\_hexcell Type

`string`

## flight\_level

Flight level as the number of FLXXX

`flight_level`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming Flights](streamingflights-properties-flight_level.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/flight_level")

### flight\_level Type

`integer`

## nav\_flight\_level

Target flight level Mode-S

`nav_flight_level`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming Flights](streamingflights-properties-nav_flight_level.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/nav_flight_level")

### nav\_flight\_level Type

`integer`

## nav\_heading\_deg

Target heading Mode-S

`nav_heading_deg`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming Flights](streamingflights-properties-nav_heading_deg.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/nav_heading_deg")

### nav\_heading\_deg Type

`integer`

## horizontal\_status

Aircraft horizontal manouvre

`horizontal_status`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming Flights](streamingflights-properties-horizontal_status.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/horizontal_status")

### horizontal\_status Type

`string`

## vertical\_status

Aircraft vertical manouvre

`vertical_status`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming Flights](streamingflights-properties-vertical_status.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/vertical_status")

### vertical\_status Type

`string`

## turn\_speed\_deg\_s

Turning speed as degrees per second

`turn_speed_deg_s`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming Flights](streamingflights-properties-turn_speed_deg_s.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/turn_speed_deg_s")

### turn\_speed\_deg\_s Type

`integer`

## vertical\_speed\_ft\_min

Vertical speed as feet per minute

`vertical_speed_ft_min`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming Flights](streamingflights-properties-vertical_speed_ft_min.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/vertical_speed_ft_min")

### vertical\_speed\_ft\_min Type

`integer`

## aprt\_departure\_icao

Departure airport. ICAO format

`aprt_departure_icao`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming Flights](streamingflights-properties-aprt_departure_icao.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/aprt_departure_icao")

### aprt\_departure\_icao Type

`string`

## aprt\_arrival\_icao

Arrival airport. ICAO format

`aprt_arrival_icao`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming Flights](streamingflights-properties-aprt_arrival_icao.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/aprt_arrival_icao")

### aprt\_arrival\_icao Type

`string`

## is\_leaving

Flag true if the aircraft is leaving the defined area

`is_leaving`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Streaming Flights](streamingflights-properties-is_leaving.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/is_leaving")

### is\_leaving Type

`boolean`

## date\_leaving

Expected last datetime after the aircraft leaves te defined area

`date_leaving`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming Flights](streamingflights-properties-date_leaving.md "https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json#/properties/date_leaving")

### date\_leaving Type

`integer`
