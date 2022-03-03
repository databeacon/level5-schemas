# Airports Schema

```txt
https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/airports.schema.json
```

Definition for the airports cache table used as ETL helper

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                    |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [airports.schema.json](../../out/airports.schema.json "open original schema") |

## Airports Type

`object` ([Airports](airports.md))

# Airports Properties

| Property                                 | Type     | Required | Nullable       | Defined by                                                                                                                                                                         |
| :--------------------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ident](#ident)                          | `string` | Optional | cannot be null | [Airports](airports-properties-ident.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/airports.schema.json#/properties/ident")                         |
| [type](#type)                            | `string` | Optional | cannot be null | [Airports](airports-properties-type.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/airports.schema.json#/properties/type")                           |
| [name](#name)                            | `string` | Optional | cannot be null | [Airports](airports-properties-name.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/airports.schema.json#/properties/name")                           |
| [latitude\_deg](#latitude_deg)           | `string` | Optional | cannot be null | [Airports](airports-properties-latitude_deg.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/airports.schema.json#/properties/latitude_deg")           |
| [longitude\_deg](#longitude_deg)         | `string` | Optional | cannot be null | [Airports](airports-properties-longitude_deg.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/airports.schema.json#/properties/longitude_deg")         |
| [elevation\_ft](#elevation_ft)           | `string` | Optional | cannot be null | [Airports](airports-properties-elevation_ft.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/airports.schema.json#/properties/elevation_ft")           |
| [continent](#continent)                  | `string` | Optional | cannot be null | [Airports](airports-properties-continent.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/airports.schema.json#/properties/continent")                 |
| [iso\_country](#iso_country)             | `string` | Optional | cannot be null | [Airports](airports-properties-iso_country.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/airports.schema.json#/properties/iso_country")             |
| [iso\_region](#iso_region)               | `string` | Optional | cannot be null | [Airports](airports-properties-iso_region.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/airports.schema.json#/properties/iso_region")               |
| [municipality](#municipality)            | `string` | Optional | cannot be null | [Airports](airports-properties-municipality.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/airports.schema.json#/properties/municipality")           |
| [scheduled\_service](#scheduled_service) | `string` | Optional | cannot be null | [Airports](airports-properties-scheduled_service.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/airports.schema.json#/properties/scheduled_service") |
| [gps\_code](#gps_code)                   | `string` | Optional | cannot be null | [Airports](airports-properties-gps_code.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/airports.schema.json#/properties/gps_code")                   |
| [iata\_code](#iata_code)                 | `string` | Optional | cannot be null | [Airports](airports-properties-iata_code.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/airports.schema.json#/properties/iata_code")                 |

## ident

Identifier code

`ident`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Airports](airports-properties-ident.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/airports.schema.json#/properties/ident")

### ident Type

`string`

## type

Type of airport

`type`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Airports](airports-properties-type.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/airports.schema.json#/properties/type")

### type Type

`string`

## name

Airport name

`name`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Airports](airports-properties-name.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/airports.schema.json#/properties/name")

### name Type

`string`

## latitude\_deg

Airport location latitude in degrees

`latitude_deg`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Airports](airports-properties-latitude_deg.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/airports.schema.json#/properties/latitude_deg")

### latitude\_deg Type

`string`

## longitude\_deg

Airport location longitude in degrees

`longitude_deg`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Airports](airports-properties-longitude_deg.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/airports.schema.json#/properties/longitude_deg")

### longitude\_deg Type

`string`

## elevation\_ft

Airport location altitude in ft

`elevation_ft`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Airports](airports-properties-elevation_ft.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/airports.schema.json#/properties/elevation_ft")

### elevation\_ft Type

`string`

## continent

Airport location continent

`continent`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Airports](airports-properties-continent.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/airports.schema.json#/properties/continent")

### continent Type

`string`

## iso\_country

Airport localtion ISO country identifier

`iso_country`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Airports](airports-properties-iso_country.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/airports.schema.json#/properties/iso_country")

### iso\_country Type

`string`

## iso\_region

Airport location ISO region identifier

`iso_region`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Airports](airports-properties-iso_region.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/airports.schema.json#/properties/iso_region")

### iso\_region Type

`string`

## municipality

Airport location municipality

`municipality`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Airports](airports-properties-municipality.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/airports.schema.json#/properties/municipality")

### municipality Type

`string`

## scheduled\_service

Flag indicating service scheduling

`scheduled_service`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Airports](airports-properties-scheduled_service.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/airports.schema.json#/properties/scheduled_service")

### scheduled\_service Type

`string`

### scheduled\_service Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value   | Explanation |
| :------ | :---------- |
| `"yes"` |             |
| `"no"`  |             |

## gps\_code

GPS code

`gps_code`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Airports](airports-properties-gps_code.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/airports.schema.json#/properties/gps_code")

### gps\_code Type

`string`

## iata\_code

IATA airport code

`iata_code`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Airports](airports-properties-iata_code.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/airports.schema.json#/properties/iata_code")

### iata\_code Type

`string`
