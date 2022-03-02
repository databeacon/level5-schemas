# Streaming PCDs Schema

```txt
https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json
```

Definition of the batch PCDs data

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                  |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [pcds.schema.json](../../out/batch/pcds.schema.json "open original schema") |

## Streaming PCDs Type

`object` ([Streaming PCDs](pcds-1.md))

# Streaming PCDs Properties

| Property                                           | Type      | Required | Nullable       | Defined by                                                                                                                                                                   |
| :------------------------------------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                                          | `string`  | Optional | cannot be null | [Streaming PCDs](pcds-1-properties-id.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/id")                                       |
| [is\_pcd](#is_pcd)                                 | `boolean` | Optional | cannot be null | [Streaming PCDs](pcds-1-properties-is_pcd.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/is_pcd")                               |
| [id\_ownship](#id_ownship)                         | `string`  | Optional | cannot be null | [Streaming PCDs](pcds-1-properties-id_ownship.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/id_ownship")                       |
| [id\_intruder](#id_intruder)                       | `string`  | Optional | cannot be null | [Streaming PCDs](pcds-1-properties-id_intruder.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/id_intruder")                     |
| [date\_ownship](#date_ownship)                     | `integer` | Optional | cannot be null | [Streaming PCDs](pcds-1-properties-date_ownship.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/date_ownship")                   |
| [lat\_deg\_ownship](#lat_deg_ownship)              | `number`  | Optional | cannot be null | [Streaming PCDs](pcds-1-properties-lat_deg_ownship.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/lat_deg_ownship")             |
| [lon\_deg\_ownship](#lon_deg_ownship)              | `number`  | Optional | cannot be null | [Streaming PCDs](pcds-1-properties-lon_deg_ownship.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/lon_deg_ownship")             |
| [proj\_date\_ownship](#proj_date_ownship)          | `integer` | Optional | cannot be null | [Streaming PCDs](pcds-1-properties-proj_date_ownship.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/proj_date_ownship")         |
| [proj\_lat\_deg\_ownship](#proj_lat_deg_ownship)   | `number`  | Optional | cannot be null | [Streaming PCDs](pcds-1-properties-proj_lat_deg_ownship.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/proj_lat_deg_ownship")   |
| [proj\_lon\_deg\_ownship](#proj_lon_deg_ownship)   | `number`  | Optional | cannot be null | [Streaming PCDs](pcds-1-properties-proj_lon_deg_ownship.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/proj_lon_deg_ownship")   |
| [date\_intruder](#date_intruder)                   | `integer` | Optional | cannot be null | [Streaming PCDs](pcds-1-properties-date_intruder.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/date_intruder")                 |
| [lat\_deg\_intruder](#lat_deg_intruder)            | `number`  | Optional | cannot be null | [Streaming PCDs](pcds-1-properties-lat_deg_intruder.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/lat_deg_intruder")           |
| [lon\_deg\_intruder](#lon_deg_intruder)            | `number`  | Optional | cannot be null | [Streaming PCDs](pcds-1-properties-lon_deg_intruder.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/lon_deg_intruder")           |
| [proj\_date\_intruder](#proj_date_intruder)        | `integer` | Optional | cannot be null | [Streaming PCDs](pcds-1-properties-proj_date_intruder.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/proj_date_intruder")       |
| [proj\_lat\_deg\_intruder](#proj_lat_deg_intruder) | `number`  | Optional | cannot be null | [Streaming PCDs](pcds-1-properties-proj_lat_deg_intruder.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/proj_lat_deg_intruder") |
| [proj\_lon\_deg\_intruder](#proj_lon_deg_intruder) | `number`  | Optional | cannot be null | [Streaming PCDs](pcds-1-properties-proj_lon_deg_intruder.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/proj_lon_deg_intruder") |
| [ref\_epoch](#ref_epoch)                           | `integer` | Optional | cannot be null | [Streaming PCDs](pcds-1-properties-ref_epoch.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/ref_epoch")                         |
| [current\_epoch](#current_epoch)                   | `integer` | Optional | cannot be null | [Streaming PCDs](pcds-1-properties-current_epoch.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/current_epoch")                 |
| [current\_distance\_nm](#current_distance_nm)      | `number`  | Optional | cannot be null | [Streaming PCDs](pcds-1-properties-current_distance_nm.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/current_distance_nm")     |
| [warning\_epoch](#warning_epoch)                   | `integer` | Optional | cannot be null | [Streaming PCDs](pcds-1-properties-warning_epoch.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/warning_epoch")                 |
| [warning\_distance\_nm](#warning_distance_nm)      | `number`  | Optional | cannot be null | [Streaming PCDs](pcds-1-properties-warning_distance_nm.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/warning_distance_nm")     |
| [cpa\_ownship\_lat\_deg](#cpa_ownship_lat_deg)     | `number`  | Optional | cannot be null | [Streaming PCDs](pcds-1-properties-cpa_ownship_lat_deg.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/cpa_ownship_lat_deg")     |
| [cpa\_ownship\_lon\_deg](#cpa_ownship_lon_deg)     | `number`  | Optional | cannot be null | [Streaming PCDs](pcds-1-properties-cpa_ownship_lon_deg.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/cpa_ownship_lon_deg")     |
| [cpa\_intruder\_lat\_deg](#cpa_intruder_lat_deg)   | `number`  | Optional | cannot be null | [Streaming PCDs](pcds-1-properties-cpa_intruder_lat_deg.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/cpa_intruder_lat_deg")   |
| [cpa\_intruder\_lon\_deg](#cpa_intruder_lon_deg)   | `number`  | Optional | cannot be null | [Streaming PCDs](pcds-1-properties-cpa_intruder_lon_deg.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/cpa_intruder_lon_deg")   |
| [is\_ownship\_first](#is_ownship_first)            | `number`  | Optional | cannot be null | [Streaming PCDs](pcds-1-properties-is_ownship_first.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/is_ownship_first")           |
| [month](#month)                                    | `integer` | Optional | cannot be null | [Streaming PCDs](pcds-1-properties-month.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/month")                                 |
| [day](#day)                                        | `integer` | Optional | cannot be null | [Streaming PCDs](pcds-1-properties-day.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/day")                                     |
| [hour](#hour)                                      | `integer` | Optional | cannot be null | [Streaming PCDs](pcds-1-properties-hour.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/hour")                                   |

## id

Potential conflict unique identifier

`id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming PCDs](pcds-1-properties-id.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/id")

### id Type

`string`

## is\_pcd

Flag true if is potential conflict

`is_pcd`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Streaming PCDs](pcds-1-properties-is_pcd.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/is_pcd")

### is\_pcd Type

`boolean`

## id\_ownship

Flight id of ownship

`id_ownship`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming PCDs](pcds-1-properties-id_ownship.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/id_ownship")

### id\_ownship Type

`string`

## id\_intruder

Flight id of intruder

`id_intruder`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming PCDs](pcds-1-properties-id_intruder.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/id_intruder")

### id\_intruder Type

`string`

## date\_ownship

Datetime of last position message received from ownship

`date_ownship`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming PCDs](pcds-1-properties-date_ownship.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/date_ownship")

### date\_ownship Type

`integer`

## lat\_deg\_ownship

Latitude in degrees from last position received from ownship

`lat_deg_ownship`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming PCDs](pcds-1-properties-lat_deg_ownship.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/lat_deg_ownship")

### lat\_deg\_ownship Type

`number`

## lon\_deg\_ownship

Longitude in degrees from last position received from ownship

`lon_deg_ownship`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming PCDs](pcds-1-properties-lon_deg_ownship.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/lon_deg_ownship")

### lon\_deg\_ownship Type

`number`

## proj\_date\_ownship

Datetime at 6 seconds projection in order to facilitate interpolations

`proj_date_ownship`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming PCDs](pcds-1-properties-proj_date_ownship.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/proj_date_ownship")

### proj\_date\_ownship Type

`integer`

## proj\_lat\_deg\_ownship

Latitude at 6 seconds projection in order to facilitate interpolations

`proj_lat_deg_ownship`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming PCDs](pcds-1-properties-proj_lat_deg_ownship.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/proj_lat_deg_ownship")

### proj\_lat\_deg\_ownship Type

`number`

## proj\_lon\_deg\_ownship

Longitude at 6 seconds projection in order to facilitate interpolations

`proj_lon_deg_ownship`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming PCDs](pcds-1-properties-proj_lon_deg_ownship.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/proj_lon_deg_ownship")

### proj\_lon\_deg\_ownship Type

`number`

## date\_intruder

Datetime at 6 seconds projection in order to facilitate interpolations

`date_intruder`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming PCDs](pcds-1-properties-date_intruder.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/date_intruder")

### date\_intruder Type

`integer`

## lat\_deg\_intruder

Latitude at 6 seconds projection in order to facilitate interpolations

`lat_deg_intruder`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming PCDs](pcds-1-properties-lat_deg_intruder.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/lat_deg_intruder")

### lat\_deg\_intruder Type

`number`

## lon\_deg\_intruder

Longitude at 6 seconds projection in order to facilitate interpolations

`lon_deg_intruder`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming PCDs](pcds-1-properties-lon_deg_intruder.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/lon_deg_intruder")

### lon\_deg\_intruder Type

`number`

## proj\_date\_intruder

Datetime at 6 seconds projection in order to facilitate interpolations

`proj_date_intruder`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming PCDs](pcds-1-properties-proj_date_intruder.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/proj_date_intruder")

### proj\_date\_intruder Type

`integer`

## proj\_lat\_deg\_intruder

Latitude at 6 seconds projection in order to facilitate interpolations

`proj_lat_deg_intruder`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming PCDs](pcds-1-properties-proj_lat_deg_intruder.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/proj_lat_deg_intruder")

### proj\_lat\_deg\_intruder Type

`number`

## proj\_lon\_deg\_intruder

Longitude at 6 seconds projection in order to facilitate interpolations

`proj_lon_deg_intruder`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming PCDs](pcds-1-properties-proj_lon_deg_intruder.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/proj_lon_deg_intruder")

### proj\_lon\_deg\_intruder Type

`number`

## ref\_epoch

Oldest datime from pair of flights for delay metrics

`ref_epoch`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming PCDs](pcds-1-properties-ref_epoch.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/ref_epoch")

### ref\_epoch Type

`integer`

## current\_epoch

Most recent datetime from the pair of flights

`current_epoch`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming PCDs](pcds-1-properties-current_epoch.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/current_epoch")

### current\_epoch Type

`integer`

## current\_distance\_nm

Distance between the pair measured at current datetime

`current_distance_nm`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming PCDs](pcds-1-properties-current_distance_nm.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/current_distance_nm")

### current\_distance\_nm Type

`number`

## warning\_epoch

Target warning datetime

`warning_epoch`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming PCDs](pcds-1-properties-warning_epoch.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/warning_epoch")

### warning\_epoch Type

`integer`

## warning\_distance\_nm

Target warning distance in NM

`warning_distance_nm`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming PCDs](pcds-1-properties-warning_distance_nm.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/warning_distance_nm")

### warning\_distance\_nm Type

`number`

## cpa\_ownship\_lat\_deg

Latitude in degrees of the CPA for the ownship

`cpa_ownship_lat_deg`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming PCDs](pcds-1-properties-cpa_ownship_lat_deg.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/cpa_ownship_lat_deg")

### cpa\_ownship\_lat\_deg Type

`number`

## cpa\_ownship\_lon\_deg

Longitude in degrees of the CPA for the ownship

`cpa_ownship_lon_deg`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming PCDs](pcds-1-properties-cpa_ownship_lon_deg.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/cpa_ownship_lon_deg")

### cpa\_ownship\_lon\_deg Type

`number`

## cpa\_intruder\_lat\_deg

Longitude in degrees of the CPA for the ownship

`cpa_intruder_lat_deg`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming PCDs](pcds-1-properties-cpa_intruder_lat_deg.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/cpa_intruder_lat_deg")

### cpa\_intruder\_lat\_deg Type

`number`

## cpa\_intruder\_lon\_deg

Longitude in degrees of the CPA for the ownship

`cpa_intruder_lon_deg`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming PCDs](pcds-1-properties-cpa_intruder_lon_deg.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/cpa_intruder_lon_deg")

### cpa\_intruder\_lon\_deg Type

`number`

## is\_ownship\_first

Flag indicating which aircraft is crossing first

`is_ownship_first`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming PCDs](pcds-1-properties-is_ownship_first.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/is_ownship_first")

### is\_ownship\_first Type

`number`

## month

Month as number, extracted from date, used as partition column

`month`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming PCDs](pcds-1-properties-month.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/month")

### month Type

`integer`

## day

Day extracted from date, used as partition column

`day`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming PCDs](pcds-1-properties-day.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/day")

### day Type

`integer`

## hour

Hour extracted from date, used as partition column

`hour`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming PCDs](pcds-1-properties-hour.md "https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json#/properties/hour")

### hour Type

`integer`
