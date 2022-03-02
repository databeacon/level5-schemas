# Exit projection Schema

```txt
https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/nct/properties/projExit
```

Projection for soft-NCTs

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [blender.schema.json\*](../../out/streaming/blender.schema.json "open original schema") |

## projExit Type

`object` ([Exit projection](blender-properties-non-conflicting-flights-properties-exit-projection.md))

# projExit Properties

| Property              | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                                               |
| :-------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [epoch](#epoch)       | `integer` | Optional | cannot be null | [Streaming Blender](blender-properties-non-conflicting-flights-properties-exit-projection-properties-epoch.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/nct/properties/projExit/properties/epoch")                 |
| [location](#location) | `object`  | Optional | cannot be null | [Streaming Blender](blender-properties-non-conflicting-flights-properties-exit-projection-properties-projected-position.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/nct/properties/projExit/properties/location") |

## epoch

Projection epoch

`epoch`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-non-conflicting-flights-properties-exit-projection-properties-epoch.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/nct/properties/projExit/properties/epoch")

### epoch Type

`integer`

## location

4D Projected position

`location`

*   is optional

*   Type: `object` ([Projected position](blender-properties-non-conflicting-flights-properties-exit-projection-properties-projected-position.md))

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-non-conflicting-flights-properties-exit-projection-properties-projected-position.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/nct/properties/projExit/properties/location")

### location Type

`object` ([Projected position](blender-properties-non-conflicting-flights-properties-exit-projection-properties-projected-position.md))
