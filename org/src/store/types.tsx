export interface UsersState{
    userName: string,
    userPassword: string,
    userId: string,
    userPosition: [{
      lat: number,
      lng: number
  }],
    userNotes: any[],
  }
  export  interface UsersAction{
    type: string,
    userInfo: any,
  }
  export interface MapItems{
    items: MapItemInfo[],
  }
  export  interface MapItemInfo{
    id: string,
    geometry: {
        type: string,
        coordinates: [
          lon: number,
          lat: number,
        ]
    },
    properties: {
        xid: string,
        name: string,
        dist: number,
        rate: 1,
        osm: string,
        kinds: string
    }
}
export  interface MapAction{
  type: string,
  items: MapItemInfo[],
}

export  interface PlaceAction{
  type: string,
  item: PlaceInfo,
}
export  interface PlaceInfoItem{
  item: PlaceInfo,
}
export  interface PlaceInfo{
    xid: string,
    name: string,
    address: {
      city: string,
      road: string,
      house: string,
      suburb: string,
      country: string,
      postcode: string,
      country_code: string,
      house_number: string,
      city_district: string
    },
      wikidata: string,
      kinds: string,
    preview: {
      source: string,
    },
    wikipedia_extracts: {
      title: string,
      text: string,
    },
    point: {
      lon: number,
      lat: number,
    }
}
export interface NoteItems{
  items: NoteType[]
}
export interface NoteType{
  created?: string,
  id?: string,
  user_id?: string,
  xid?: string,
}
