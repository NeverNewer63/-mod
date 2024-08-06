import AssetManager from "../../assetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "拳击袋_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    AllowLock: true,
    Extended: true,
    MinOpacity: 0,
    Opacity: 0,
    SetPose: ["BackElbowTouch", "Kneel"],
    Layer: [
        { Name: "链条前", Priority: 67, Top: -800 },
        { Name: "带子", Priority: 66 },
        { Name: "链条环", Priority: 66 },
        {
            Name: "沙袋前",
            Priority: 64,
            AllowTypes: { typed: 0 },
            Alpha: [
                {
                    Group: [
                        "HairFront",
                        "HairBack",
                        "Bracelet",
                        "Cloth",
                        "ClothAccessory",
                        "ClothLower",
                        "Corset",
                        "Fluids",
                        "Garters",
                        "Gloves",
                        "HairAccessory",
                        "Hat",
                        "ItemArms",
                        "ItemBrest",
                        "ItemButt",
                        "ItemHandheld",
                        "ItemHead",
                        "ItemHood",
                        "ItemLegs",
                        "ItemMisc",
                        "ItemNeck",
                        "ItemNose",
                        "ItemPelvis",
                        "ItemTorso",
                        "LeftAnKlet",
                        "LeftHand",
                        "Mask",
                        "Mouth",
                        "Nipples",
                        "Panties",
                        "RightAnklet",
                        "RightHand",
                        "Shoes",
                        "Socks",
                        "SocksLeft",
                        "SocksRight",
                        "Suit",
                        "SuitLower",
                        "TailStraps",
                        "Wings",
                        "Bra",
                        "HairAccessory1",
                        "HairAccessory2",
                        "HairAccessory3",
                        "Cloth_笨笨笨蛋Luzi2",
                        "Cloth_笨笨蛋Luzi",
                        "ClothLower_笨笨笨蛋Luzi2",
                        "ClothLower_笨笨蛋Luzi",
                    ],
                    Masks: [
                        [0, -100, 500, 135], //上
                        [0, 717, 500, 120], //下
                        [0, 0, 130, 1000], //左
                        [370, 200, 135, 1000], //右
                    ],
                },
            ],
        },
        { Name: "沙袋后", Priority: 1, MinOpacity: 1 },
        { Name: "链条后", Priority: 0, Top: -800, MinOpacity: 1 },
        {
            Name: "沙袋前框",
            Priority: 65,
            AllowTypes: { typed: 1 },
            Alpha: [
                {
                    Group: [
                        "HairFront",
                        "HairBack",
                        "Bracelet",
                        "Cloth",
                        "ClothAccessory",
                        "ClothLower",
                        "Corset",
                        "Fluids",
                        "Garters",
                        "Gloves",
                        "HairAccessory",
                        "Hat",
                        "ItemArms",
                        "ItemBrest",
                        "ItemButt",
                        "ItemHandheld",
                        "ItemHead",
                        "ItemHood",
                        "ItemLegs",
                        "ItemMisc",
                        "ItemNeck",
                        "ItemNose",
                        "ItemPelvis",
                        "ItemTorso",
                        "LeftAnKlet",
                        "LeftHand",
                        "Mask",
                        "Mouth",
                        "Nipples",
                        "Panties",
                        "RightAnklet",
                        "RightHand",
                        "Shoes",
                        "Socks",
                        "SocksLeft",
                        "SocksRight",
                        "Suit",
                        "SuitLower",
                        "TailStraps",
                        "Wings",
                        "Bra",
                        "HairAccessory1",
                        "HairAccessory2",
                        "HairAccessory3",
                        "Cloth_笨笨笨蛋Luzi2",
                        "Cloth_笨笨蛋Luzi",
                        "ClothLower_笨笨笨蛋Luzi2",
                        "ClothLower_笨笨蛋Luzi",
                    ],
                    Masks: [
                        [0, -100, 500, 135],
                        [0, 717, 500, 120],
                        [0, 0, 130, 1000],
                        [370, 200, 135, 1000],
                    ],
                },
            ],
        },
        { Name: "照片框", Priority: 65, AllowTypes: { typed: 1 } },
        { Name: "胶带", Priority: 65, AllowTypes: { typed: 1 } },
    ],
    OverrideHeight: {
        Height: -100,
        Priority: 41,
        HeightRatioProportion: 0,
    },
};

const extended = {
    Archetype: ExtendedArchetype.TYPED,
    DrawImages: false,
    Options: [{ Name: "无照片" }, { Name: "有照片" }],
    BaselineProperty: { Opacity: 1 },
    ScriptHooks: {
        Init: PropertyOpacityInit,
        Load: PropertyOpacityLoad,
        Draw: PropertyOpacityDraw,
        Exit: PropertyOpacityExit,
    },
};

export default function () {
    AssetManager.addAsset("ItemDevices", asset, extended);
}
