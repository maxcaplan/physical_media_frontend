/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query owned_albums {\n    owned_albums {\n      id\n      album {\n        id\n        name\n        description\n        artists {\n          id\n          name\n          origin\n          description\n        }\n        producers {\n          id\n          name\n        }\n        genres {\n          id\n          name\n        }\n        labels {\n          id\n          name\n        }\n        length\n        tracks {\n          id\n          name\n          length\n          side\n          position\n        }\n      }\n      condition\n    }\n  }\n": typeof types.Owned_AlbumsDocument,
    "\n  query wishlist_albums {\n    wishlist_albums {\n      id\n      album {\n        id\n        name\n        description\n        artists {\n          id\n          name\n          origin\n          description\n        }\n        producers {\n          id\n          name\n        }\n        genres {\n          id\n          name\n        }\n        labels {\n          id\n          name\n        }\n        length\n        tracks {\n          id\n          name\n          length\n          side\n          position\n        }\n      }\n      listings\n      ranking\n    }\n  }\n": typeof types.Wishlist_AlbumsDocument,
};
const documents: Documents = {
    "\n  query owned_albums {\n    owned_albums {\n      id\n      album {\n        id\n        name\n        description\n        artists {\n          id\n          name\n          origin\n          description\n        }\n        producers {\n          id\n          name\n        }\n        genres {\n          id\n          name\n        }\n        labels {\n          id\n          name\n        }\n        length\n        tracks {\n          id\n          name\n          length\n          side\n          position\n        }\n      }\n      condition\n    }\n  }\n": types.Owned_AlbumsDocument,
    "\n  query wishlist_albums {\n    wishlist_albums {\n      id\n      album {\n        id\n        name\n        description\n        artists {\n          id\n          name\n          origin\n          description\n        }\n        producers {\n          id\n          name\n        }\n        genres {\n          id\n          name\n        }\n        labels {\n          id\n          name\n        }\n        length\n        tracks {\n          id\n          name\n          length\n          side\n          position\n        }\n      }\n      listings\n      ranking\n    }\n  }\n": types.Wishlist_AlbumsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query owned_albums {\n    owned_albums {\n      id\n      album {\n        id\n        name\n        description\n        artists {\n          id\n          name\n          origin\n          description\n        }\n        producers {\n          id\n          name\n        }\n        genres {\n          id\n          name\n        }\n        labels {\n          id\n          name\n        }\n        length\n        tracks {\n          id\n          name\n          length\n          side\n          position\n        }\n      }\n      condition\n    }\n  }\n"): typeof import('./graphql').Owned_AlbumsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query wishlist_albums {\n    wishlist_albums {\n      id\n      album {\n        id\n        name\n        description\n        artists {\n          id\n          name\n          origin\n          description\n        }\n        producers {\n          id\n          name\n        }\n        genres {\n          id\n          name\n        }\n        labels {\n          id\n          name\n        }\n        length\n        tracks {\n          id\n          name\n          length\n          side\n          position\n        }\n      }\n      listings\n      ranking\n    }\n  }\n"): typeof import('./graphql').Wishlist_AlbumsDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
