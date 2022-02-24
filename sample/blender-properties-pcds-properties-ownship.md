# Untitled object in Streaming Blender Schema

```txt
https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/pcds/properties/ownship
```

Ownship position and CPA

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [blender.schema.json\*](../out/blender.schema.json "open original schema") |

## ownship Type

`object` ([Details](blender-properties-pcds-properties-ownship.md))

# ownship Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                  |
| :-------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)             | `string` | Optional | cannot be null | [Streaming Blender](blender-properties-pcds-properties-ownship-properties-id.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/pcds/properties/ownship/properties/id")             |
| [location](#location) | `object` | Optional | cannot be null | [Streaming Blender](blender-properties-pcds-properties-ownship-properties-location.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/pcds/properties/ownship/properties/location") |
| [cpa](#cpa)           | `object` | Optional | cannot be null | [Streaming Blender](blender-properties-pcds-properties-ownship-properties-cpa.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/pcds/properties/ownship/properties/cpa")           |

## id



`id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-pcds-properties-ownship-properties-id.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/pcds/properties/ownship/properties/id")

### id Type

`string`

## location

4D Projected position

`location`

*   is optional

*   Type: `object` ([Details](blender-properties-pcds-properties-ownship-properties-location.md))

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-pcds-properties-ownship-properties-location.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/pcds/properties/ownship/properties/location")

### location Type

`object` ([Details](blender-properties-pcds-properties-ownship-properties-location.md))

## cpa

4D Projected position

`cpa`

*   is optional

*   Type: `object` ([Details](blender-properties-pcds-properties-ownship-properties-cpa.md))

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-pcds-properties-ownship-properties-cpa.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/pcds/properties/ownship/properties/cpa")

### cpa Type

`object` ([Details](blender-properties-pcds-properties-ownship-properties-cpa.md))
