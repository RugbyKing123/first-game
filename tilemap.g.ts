// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000100b120b120b120b120b120b120b120e0c0605010101010101010101010605020c0403010101010101010101010403020c0101010101010101010101010101020c0101010101010101010101010101020c01010101070a0a0a0a0101010101020c01010101070a08080a0101010101020c01010101070a0a0a0a0101010101020c01010101010a09090a0101010101020c01010101010a09090a0101010101020c01010101010a0a0a0a0101010101020c01010101010a0a0a0a0101010101020c0101010101010101010101010101020c0605010101010101010101010605020c0403010101010101010101010403020f11111111111111111111111111110d`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . 2 2 . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.darkGroundCenter,sprites.dungeon.chestClosed,sprites.dungeon.collectibleInsignia,sprites.dungeon.floorLight2,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterNorth0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
