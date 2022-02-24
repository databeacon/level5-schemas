# Untitled string in Streaming Blender Schema

```txt
https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/verticalStatus
```

Aircraft vertical manouvre type

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                 |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [blender.schema.json\*](../out/blender.schema.json "open original schema") |

## verticalStatus Type

`string`

## verticalStatus Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"ascending"`  |             |
| `"descending"` |             |
| `"cruising"`   |             |
