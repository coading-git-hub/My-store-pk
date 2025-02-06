// import type { StructureResolver} from 'sanity/structure'


// https://www.sanity.io/docs/structure-builder-cheat-sheet
// export const structure: StructureResolver = (S) =>
//   S.list()
//     .title('Content')
//     .items(S.documentTypeListItems())

    // import type {StructureResolver} from '../../../my-app/src/sanity/schemaTypes'

    // export const structure : StructureResolver= (S:any) =>
    //   S.list()
    //     .title('Content')
    //     .items(S.documentTypeListItems());
  // ///////////////////////////////////////////////////

//  import { StructureBuilder } from 'sanity/desk';

// export const structure = (S: StructureBuilder) =>
//   S.list()
//     .title('Content')
//     .items(S.documentTypeListItems());
import * as DeskTool from "@sanity/desk-tool";
console.log(DeskTool);


import type {StructureResolver}  from  "@sanity/desk-tool";

export const structure: StructureResolver = (S:any) =>
  S.list()
    .title('Content')
    .items(S.documentTypeListItems());


// 