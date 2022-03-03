import { compile, compileFromFile } from 'json-schema-to-typescript';
import fs from 'fs';

// compile from file
compileFromFile('./schemas/streaming/blender/blender.schema.json').then((ts) => fs.writeFileSync('blender.d.ts', ts));
