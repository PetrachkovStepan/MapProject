export interface UsersState{
    userName: string,
    userId: string,
    userNotes: any[],
  }
  export  interface UsersAction{
    type: string,
    userInfo: any,
  }

  // export  interface MapItemInfo{
  //   name: string,
  //   osm: string,
  //   xid: string,
  //   wikidata: string,
  //   kind: string,
  //   point: {
  //     lon: number,
  //     lat: number,
  //   }
  // }
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
        dist: 5254.09188935,
        rate: 1,
        osm: string,
        kinds: string
    }
}
  export  interface MapAction{
    type: string,
    items: MapItemInfo[],
  }
  