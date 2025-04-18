/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AddAlbumInput = {
  artist_ids: InputMaybe<Array<Scalars['Int']['input']>>;
  description: InputMaybe<Scalars['String']['input']>;
  genre_ids: InputMaybe<Array<Scalars['Int']['input']>>;
  label_ids: InputMaybe<Array<Scalars['Int']['input']>>;
  length: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  producer_ids: InputMaybe<Array<Scalars['Int']['input']>>;
  release_data: InputMaybe<Scalars['String']['input']>;
  tracks: InputMaybe<Array<AddTrackInput>>;
};

export type AddArtistInput = {
  description: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  origin: InputMaybe<Scalars['String']['input']>;
};

export type AddGenreInput = {
  name: Scalars['String']['input'];
};

export type AddLabelInput = {
  name: Scalars['String']['input'];
};

export type AddOwnedAlbumInput = {
  album_input: AddAlbumInput;
  condition: InputMaybe<Condition>;
};

export type AddProducerInput = {
  name: Scalars['String']['input'];
};

export type AddTrackInput = {
  album_id: Scalars['Int']['input'];
  length: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  position: Scalars['Int']['input'];
  side: InputMaybe<Scalars['Int']['input']>;
};

export type AddWishlistAlbumInput = {
  album_input: AddAlbumInput;
  listings: InputMaybe<Array<Scalars['String']['input']>>;
  ranking: InputMaybe<Scalars['Int']['input']>;
};

export type Album = {
  __typename?: 'Album';
  artists: Maybe<Array<Artist>>;
  description: Maybe<Scalars['String']['output']>;
  genres: Maybe<Array<Genre>>;
  id: Scalars['Int']['output'];
  labels: Maybe<Array<Label>>;
  length: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  producers: Maybe<Array<Producer>>;
  release_date: Maybe<Scalars['String']['output']>;
  tracks: Maybe<Array<Track>>;
};

export type Artist = {
  __typename?: 'Artist';
  albums: Maybe<Array<Album>>;
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  origin: Maybe<Scalars['String']['output']>;
};

export type ArtistAlbumInput = {
  album_id: Scalars['Int']['input'];
  artist_id: Scalars['Int']['input'];
};

export type ArtistAlbumRelation = {
  __typename?: 'ArtistAlbumRelation';
  album_id: Scalars['Int']['output'];
  artist_id: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
};

export enum Condition {
  G = 'G',
  M = 'M',
  Nm = 'NM',
  P = 'P',
  Vg = 'VG',
  Vgp = 'VGP'
}

export type Genre = {
  __typename?: 'Genre';
  albums: Maybe<Array<Album>>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type GenreAlbumInput = {
  album_id: Scalars['Int']['input'];
  genre_id: Scalars['Int']['input'];
};

export type GenreAlbumRelation = {
  __typename?: 'GenreAlbumRelation';
  album_id: Scalars['Int']['output'];
  genre_id: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
};

export type Label = {
  __typename?: 'Label';
  albums: Maybe<Array<Album>>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type LabelAlbumInput = {
  album_id: Scalars['Int']['input'];
  label_id: Scalars['Int']['input'];
};

export type LabelAlbumRelation = {
  __typename?: 'LabelAlbumRelation';
  album_id: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  label_id: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  add_artist: Artist;
  add_artist_to_album: Maybe<ArtistAlbumRelation>;
  add_genre: Genre;
  add_genre_to_album: Maybe<GenreAlbumRelation>;
  add_label: Label;
  add_label_to_album: Maybe<LabelAlbumRelation>;
  add_owned_album: OwnedAlbum;
  add_producer: Producer;
  add_producer_to_album: Maybe<ProducerAlbumRelation>;
  add_track: Track;
  add_wishlist_album: WishlistAlbum;
  delete_artist: Maybe<Artist>;
  delete_genre: Maybe<Genre>;
  delete_label: Maybe<Label>;
  delete_owned_album: Maybe<OwnedAlbum>;
  delete_producer: Maybe<Producer>;
  delete_track: Maybe<Track>;
  delete_wishlist_album: Maybe<WishlistAlbum>;
  remove_artist_from_album: Maybe<ArtistAlbumRelation>;
  remove_genre_from_album: Maybe<GenreAlbumRelation>;
  remove_label_from_album: Maybe<LabelAlbumRelation>;
  remove_producer_from_album: Maybe<ProducerAlbumRelation>;
  update_artist: Maybe<Artist>;
  update_genre: Maybe<Genre>;
  update_label: Maybe<Label>;
  update_owned_album: Maybe<OwnedAlbum>;
  update_producer: Maybe<Producer>;
  update_track: Maybe<Track>;
  update_wishlist_album: Maybe<WishlistAlbum>;
};


export type MutationAdd_ArtistArgs = {
  input: AddArtistInput;
};


export type MutationAdd_Artist_To_AlbumArgs = {
  input: ArtistAlbumInput;
};


export type MutationAdd_GenreArgs = {
  input: AddGenreInput;
};


export type MutationAdd_Genre_To_AlbumArgs = {
  input: GenreAlbumInput;
};


export type MutationAdd_LabelArgs = {
  input: AddLabelInput;
};


export type MutationAdd_Label_To_AlbumArgs = {
  input: LabelAlbumInput;
};


export type MutationAdd_Owned_AlbumArgs = {
  input: AddOwnedAlbumInput;
};


export type MutationAdd_ProducerArgs = {
  input: AddProducerInput;
};


export type MutationAdd_Producer_To_AlbumArgs = {
  input: ProducerAlbumInput;
};


export type MutationAdd_TrackArgs = {
  input: AddTrackInput;
};


export type MutationAdd_Wishlist_AlbumArgs = {
  input: AddWishlistAlbumInput;
};


export type MutationDelete_ArtistArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDelete_GenreArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDelete_LabelArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDelete_Owned_AlbumArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDelete_ProducerArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDelete_TrackArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDelete_Wishlist_AlbumArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemove_Artist_From_AlbumArgs = {
  input: ArtistAlbumInput;
};


export type MutationRemove_Genre_From_AlbumArgs = {
  input: GenreAlbumInput;
};


export type MutationRemove_Label_From_AlbumArgs = {
  input: LabelAlbumInput;
};


export type MutationRemove_Producer_From_AlbumArgs = {
  input: ProducerAlbumInput;
};


export type MutationUpdate_ArtistArgs = {
  input: UpdateArtistInput;
};


export type MutationUpdate_GenreArgs = {
  input: UpdateGenreInput;
};


export type MutationUpdate_LabelArgs = {
  input: UpdateLabelInput;
};


export type MutationUpdate_Owned_AlbumArgs = {
  input: UpdateOwnedAlbumInput;
};


export type MutationUpdate_ProducerArgs = {
  input: UpdateProducerInput;
};


export type MutationUpdate_TrackArgs = {
  id: Scalars['Int']['input'];
  input: UpdateTrackInput;
};


export type MutationUpdate_Wishlist_AlbumArgs = {
  input: UpdateWishlistAlbumInput;
};

export type OwnedAlbum = {
  __typename?: 'OwnedAlbum';
  album: Maybe<Album>;
  condition: Maybe<Condition>;
  id: Scalars['Int']['output'];
};

export type Producer = {
  __typename?: 'Producer';
  albums: Maybe<Array<Album>>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type ProducerAlbumInput = {
  album_id: Scalars['Int']['input'];
  producer_id: Scalars['Int']['input'];
};

export type ProducerAlbumRelation = {
  __typename?: 'ProducerAlbumRelation';
  album_id: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  producer_id: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  artist: Maybe<Artist>;
  artists: Array<Artist>;
  genre: Maybe<Genre>;
  genres: Array<Genre>;
  label: Maybe<Label>;
  labels: Array<Label>;
  owned_album: Maybe<OwnedAlbum>;
  owned_albums: Array<OwnedAlbum>;
  producer: Maybe<Producer>;
  producers: Array<Producer>;
  wishlist_album: Maybe<WishlistAlbum>;
  wishlist_albums: Array<WishlistAlbum>;
};


export type QueryArtistArgs = {
  id: Scalars['Int']['input'];
  options: InputMaybe<QueryArtistOptions>;
};


export type QueryArtistsArgs = {
  with_albums: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGenreArgs = {
  id: Scalars['Int']['input'];
  options: InputMaybe<QueryGenreOptions>;
};


export type QueryGenresArgs = {
  options: InputMaybe<QueryGenreOptions>;
};


export type QueryLabelArgs = {
  id: Scalars['Int']['input'];
  options: InputMaybe<QueryLabelOptions>;
};


export type QueryLabelsArgs = {
  options: InputMaybe<QueryLabelOptions>;
};


export type QueryOwned_AlbumArgs = {
  id: Scalars['Int']['input'];
};


export type QueryProducerArgs = {
  id: Scalars['Int']['input'];
  options: InputMaybe<QueryProducerOptions>;
};


export type QueryProducersArgs = {
  options: InputMaybe<QueryProducerOptions>;
};


export type QueryWishlist_AlbumArgs = {
  id: Scalars['Int']['input'];
};

export type QueryArtistOptions = {
  with_albums: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryGenreOptions = {
  with_albums: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryLabelOptions = {
  with_albums: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryProducerOptions = {
  with_albums: InputMaybe<Scalars['Boolean']['input']>;
};

export type Track = {
  __typename?: 'Track';
  album_id: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  length: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  position: Scalars['Int']['output'];
  side: Maybe<Scalars['Int']['output']>;
};

export type UpdateAlbumInput = {
  artist_ids: InputMaybe<Array<Scalars['Int']['input']>>;
  description: InputMaybe<Scalars['String']['input']>;
  genre_ids: InputMaybe<Array<Scalars['Int']['input']>>;
  label_ids: InputMaybe<Array<Scalars['Int']['input']>>;
  length: InputMaybe<Scalars['Int']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  producer_ids: InputMaybe<Array<Scalars['Int']['input']>>;
  release_data: InputMaybe<Scalars['String']['input']>;
  tracks: InputMaybe<Array<UpdateTrackInput>>;
};

export type UpdateArtistInput = {
  description: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name: InputMaybe<Scalars['String']['input']>;
  origin: InputMaybe<Scalars['String']['input']>;
};

export type UpdateGenreInput = {
  id: Scalars['Int']['input'];
  name: InputMaybe<Scalars['String']['input']>;
};

export type UpdateLabelInput = {
  id: Scalars['Int']['input'];
  name: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOwnedAlbumInput = {
  album_input: InputMaybe<UpdateAlbumInput>;
  condition: InputMaybe<Condition>;
  id: Scalars['Int']['input'];
};

export type UpdateProducerInput = {
  id: Scalars['Int']['input'];
  name: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTrackInput = {
  album_id: InputMaybe<Scalars['Int']['input']>;
  length: InputMaybe<Scalars['Int']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  position: InputMaybe<Scalars['Int']['input']>;
  side: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateWishlistAlbumInput = {
  album_input: InputMaybe<UpdateAlbumInput>;
  id: Scalars['Int']['input'];
  listings: InputMaybe<Array<Scalars['String']['input']>>;
  ranking: InputMaybe<Scalars['Int']['input']>;
};

export type WishlistAlbum = {
  __typename?: 'WishlistAlbum';
  album: Maybe<Album>;
  id: Scalars['Int']['output'];
  listings: Maybe<Array<Scalars['String']['output']>>;
  ranking: Maybe<Scalars['Int']['output']>;
};

export type Owned_AlbumsQueryVariables = Exact<{ [key: string]: never; }>;


export type Owned_AlbumsQuery = { __typename?: 'Query', owned_albums: Array<{ __typename?: 'OwnedAlbum', id: number, condition: Condition | null, album: { __typename?: 'Album', id: number, name: string, description: string | null, length: number | null, artists: Array<{ __typename?: 'Artist', id: number, name: string, origin: string | null, description: string | null }> | null, producers: Array<{ __typename?: 'Producer', id: number, name: string }> | null, genres: Array<{ __typename?: 'Genre', id: number, name: string }> | null, labels: Array<{ __typename?: 'Label', id: number, name: string }> | null, tracks: Array<{ __typename?: 'Track', id: number, name: string, length: number | null, side: number | null, position: number }> | null } | null }> };

export type Wishlist_AlbumsQueryVariables = Exact<{ [key: string]: never; }>;


export type Wishlist_AlbumsQuery = { __typename?: 'Query', wishlist_albums: Array<{ __typename?: 'WishlistAlbum', id: number, listings: Array<string> | null, ranking: number | null, album: { __typename?: 'Album', id: number, name: string, description: string | null, length: number | null, artists: Array<{ __typename?: 'Artist', id: number, name: string, origin: string | null, description: string | null }> | null, producers: Array<{ __typename?: 'Producer', id: number, name: string }> | null, genres: Array<{ __typename?: 'Genre', id: number, name: string }> | null, labels: Array<{ __typename?: 'Label', id: number, name: string }> | null, tracks: Array<{ __typename?: 'Track', id: number, name: string, length: number | null, side: number | null, position: number }> | null } | null }> };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];
  private value: string;
  public __meta__?: Record<string, any> | undefined;

  constructor(value: string, __meta__?: Record<string, any> | undefined) {
    super(value);
    this.value = value;
    this.__meta__ = __meta__;
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const Owned_AlbumsDocument = new TypedDocumentString(`
    query owned_albums {
  owned_albums {
    id
    album {
      id
      name
      description
      artists {
        id
        name
        origin
        description
      }
      producers {
        id
        name
      }
      genres {
        id
        name
      }
      labels {
        id
        name
      }
      length
      tracks {
        id
        name
        length
        side
        position
      }
    }
    condition
  }
}
    `) as unknown as TypedDocumentString<Owned_AlbumsQuery, Owned_AlbumsQueryVariables>;
export const Wishlist_AlbumsDocument = new TypedDocumentString(`
    query wishlist_albums {
  wishlist_albums {
    id
    album {
      id
      name
      description
      artists {
        id
        name
        origin
        description
      }
      producers {
        id
        name
      }
      genres {
        id
        name
      }
      labels {
        id
        name
      }
      length
      tracks {
        id
        name
        length
        side
        position
      }
    }
    listings
    ranking
  }
}
    `) as unknown as TypedDocumentString<Wishlist_AlbumsQuery, Wishlist_AlbumsQueryVariables>;