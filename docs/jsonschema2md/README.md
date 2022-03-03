# README

## Top-level Schemas

*   [Aggregations](./aggregations.md "KPI aggregations for Sierra5 supervisor tool") – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json`

*   [Airports](./airports.md "Definition for the airports cache table used as ETL helper") – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/airports.schema.json`

*   [Batch Flights](./flights.md "Definition for a flights dynamic batch data") – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/batch/flights.schema.json`

*   [Blender](./blender.md "Asynchronous topics merging") – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/blender.schema.json`

*   [Firehose FLIFO](./flifo.md "Definition for firehose static flight information") – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/firehose/flifo.schema.json`

*   [Firehose Positions](./positions.md "Definition for a firehose positions data") – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/firehose/positions.schema.json`

*   [Flight data](./flight.md) – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/flight.schema.json`

*   [Labels predictive NCTs](./ncts.md "Definition of the streaming NCTs data") – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/batch/ncts.schema.json`

*   [Manouvres (historical data)](./manouvres.md "Definition of the manouvres historical data") – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/batch/manouvres.schema.json`

*   [Non-conflicting status](./nct.md) – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/nct.schema.json`

*   [Point 4D](./point4d.md "A time-space position on earth") – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/point4d.schema.json`

*   [Potential conflict](./pcd.md) – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/pcd.schema.json`

*   [Streaming Current Positions](./currentpositions.md "Definition for current positions caché used for streaming calculations") – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/currentPositions.schema.json`

*   [Streaming FLIFO](./flifo-1.md "Definition for a flights static data") – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/flifo.schema.json`

*   [Streaming Flights](./flights-1.md "Definition for a flights dynamic data") – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/flights.schema.json`

*   [Streaming NCTs](./ncts-1.md "Definition of the streaming NCTs data") – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/ncts.schema.json`

*   [Streaming PCDs](./pcds.md "Definition of the streaming PCDs data") – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/pcds.schema.json`

*   [Streaming PCDs](./pcds-1.md "Definition of the batch PCDs data") – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/batch/pcds.schema.json`

## Other Schemas

### Objects

*   [Flight positions](./flight-properties-flight-positions.md) – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/flight.schema.json#/properties/points4d`

*   [Flight positions](./pcd-properties-ownship-flight-properties-flight-positions.md) – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/pcd.schema.json#/properties/ownship/properties/points4d`

*   [Flight positions](./pcd-properties-intruder-flight-properties-flight-positions.md) – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/pcd.schema.json#/properties/intruder/properties/points4d`

*   [Flight positions](./flight-properties-flight-positions.md) – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/flight.schema.json#/properties/points4d`

*   [Flight positions](./pcd-properties-ownship-flight-properties-flight-positions.md) – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/pcd.schema.json#/properties/ownship/properties/points4d`

*   [Flight positions](./pcd-properties-intruder-flight-properties-flight-positions.md) – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/pcd.schema.json#/properties/intruder/properties/points4d`

*   [Intruder flight](./pcd-properties-intruder-flight.md) – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/pcd.schema.json#/properties/intruder`

*   [Intruder flight](./pcd-properties-intruder-flight.md) – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/pcd.schema.json#/properties/intruder`

*   [Ownship flight](./pcd-properties-ownship-flight.md) – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/pcd.schema.json#/properties/ownship`

*   [Ownship flight](./pcd-properties-ownship-flight.md) – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/pcd.schema.json#/properties/ownship`

*   [Untitled object in Aggregations](./aggregations-properties-multisectors-items.md) – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/multisectors/items`

*   [Untitled object in Aggregations](./aggregations-properties-multisectors-items-properties-aggregations-items.md) – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/multisectors/items/properties/aggregations/items`

### Arrays

*   [Flights data](./blender-properties-flights-data.md) – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/blender.schema.json#/properties/flights`

*   [Potential conflicts detected](./flight-properties-potential-conflicts-detected.md) – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/flight.schema.json#/properties/pcds`

*   [Potential conflicts detected](./flight-properties-potential-conflicts-detected.md) – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/flight.schema.json#/properties/pcds`

*   [Untitled array in Aggregations](./aggregations-properties-multisectors.md "Type of airport") – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/multisectors`

*   [Untitled array in Aggregations](./aggregations-properties-multisectors-items-properties-aggregations.md) – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/multisectors/items/properties/aggregations`

## Version Note

The schemas linked above follow the JSON Schema Spec version: `https://json-schema.org/draft/2020-12/schema`
