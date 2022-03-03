# README

## Top-level Schemas

*   [Aggregations](./aggregations.md "KPI aggregations for Sierra5 supervisor tool") – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json`

*   [Airports](./airports.md "Definition for the airports cache table used as ETL helper") – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/airports.schema.json`

*   [Batch Flights](./flights.md "Definition for a flights dynamic batch data") – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/batch/flights.schema.json`

*   [Blender](./blender.md "Asynchronous topics merging") – `/blender.schema.json`

*   [Firehose FLIFO](./flifo.md "Definition for firehose static flight information") – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/firehose/flifo.schema.json`

*   [Firehose Positions](./positions.md "Definition for a firehose positions data") – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/firehose/positions.schema.json`

*   [Labels predictive NCTs](./ncts.md "Definition of the streaming NCTs data") – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/batch/ncts.schema.json`

*   [Manouvres (historical data)](./manouvres.md "Definition of the manouvres historical data") – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/batch/manouvres.schema.json`

*   [Streaming Current Positions](./currentpositions.md "Definition for current positions caché used for streaming calculations") – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/currentPositions.schema.json`

*   [Streaming FLIFO](./flifo-1.md "Definition for a flights static data") – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/flifo.schema.json`

*   [Streaming Flights](./flights-1.md "Definition for a flights dynamic data") – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/flights.schema.json`

*   [Streaming NCTs](./ncts-1.md "Definition of the streaming NCTs data") – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/ncts.schema.json`

*   [Streaming PCDs](./pcds.md "Definition of the streaming PCDs data") – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/pcds.schema.json`

*   [Streaming PCDs](./pcds-1.md "Definition of the batch PCDs data") – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/batch/pcds.schema.json`

## Other Schemas

### Objects

*   [Flight data](./blender-defs-flight-data.md) – `/blender.schema.json#/$defs/flight`

*   [Flight positions](./blender-defs-flight-data-properties-flight-positions.md) – `/blender.schema.json#/$defs/flight/properties/points4d`

*   [Flight positions](./blender-defs-pcdflightsyncedinfo-properties-flight-positions.md) – `/blender.schema.json#/$defs/pcdFlightSyncedInfo/properties/points4d`

*   [Flight positions](./blender-defs-flight-data-properties-flight-positions.md) – `/blender.schema.json#/$defs/flight/properties/points4d`

*   [Flight positions](./blender-defs-pcdflightsyncedinfo-properties-flight-positions.md) – `/blender.schema.json#/$defs/pcdFlightSyncedInfo/properties/points4d`

*   [Flight positions](./blender-defs-pcdflightsyncedinfo-properties-flight-positions.md) – `/blender.schema.json#/$defs/pcdFlightSyncedInfo/properties/points4d`

*   [Flight positions](./blender-defs-pcdflightsyncedinfo-properties-flight-positions.md) – `/blender.schema.json#/$defs/pcdFlightSyncedInfo/properties/points4d`

*   [Non-conflicting status](./blender-defs-non-conflicting-status.md) – `/blender.schema.json#/$defs/nct`

*   [Point 4D](./blender-defs-point-4d.md "A time-space position on earth") – `/blender.schema.json#/$defs/point4d`

*   [Potential conflict detected](./blender-defs-potential-conflict-detected.md) – `/blender.schema.json#/$defs/pcd`

*   [Untitled object in Aggregations](./aggregations-properties-multisectors-items.md) – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/multisectors/items`

*   [Untitled object in Aggregations](./aggregations-properties-multisectors-items-properties-aggregations-items.md) – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/multisectors/items/properties/aggregations/items`

*   [Untitled object in Blender](./blender-defs-pcdflightsyncedinfo.md) – `/blender.schema.json#/$defs/pcdFlightSyncedInfo`

### Arrays

*   [Flights data](./blender-properties-flights-data.md) – `/blender.schema.json#/properties/flights`

*   [Potential conflicts detected](./blender-defs-flight-data-properties-potential-conflicts-detected.md) – `/blender.schema.json#/$defs/flight/properties/pcds`

*   [Potential conflicts detected](./blender-defs-flight-data-properties-potential-conflicts-detected.md) – `/blender.schema.json#/$defs/flight/properties/pcds`

*   [Untitled array in Aggregations](./aggregations-properties-multisectors.md "Type of airport") – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/multisectors`

*   [Untitled array in Aggregations](./aggregations-properties-multisectors-items-properties-aggregations.md) – `https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/rest/aggregations.schema.json#/properties/multisectors/items/properties/aggregations`

## Version Note

The schemas linked above follow the JSON Schema Spec version: `https://json-schema.org/draft/2020-12/schema`
