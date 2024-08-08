import AssetManager from "../../assetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "玻璃罐子_Luzi",
    Random: false,
    /** @type {AssetGender} */
    Gender: "F",
    Top: -110,
    Left: 0,
    AllowLock: true,
    Difficulty: 50,
    Hide: ["Mouth", "Glasses", "TailStraps"],
    AllowActivePose: ["BackBoxTie", "BackCuffs", "BackElbowTouch", "LegsClosed"],
    Extended: true,
    DefaultColor: [
        "#151515",
        "#151515",
        "#FFFFFF",
        "#FFFFFF",
        "#2A2A2A",
        "#404040",
        "#2A2A2A",
        "#404040",
        "#EE168E",
        "#EE168E",
        "#9E2184",
        "#6D0B4A",
        "#4A4242",
        "#FF3CC3",
        "#E17070",
    ],
    Layer: [
        { Name: "舌头", AllowColorize: false, Priority: 7 },
        { Name: "身体衔接", Priority: 30 },
        { Name: "管道衔接", Priority: 40, AllowTypes: { gz: 1 } },
        { Name: "管道", Priority: 38, AllowTypes: { gz: 1 } },
        { Name: "管道2", Priority: 5, AllowTypes: { gz: 1 } },
        { Name: "上1", Priority: 56 },
        { Name: "上2", Priority: 4 },
        { Name: "下1", Priority: 56 },
        { Name: "下2", Priority: 4 },
        { Name: "面板", Priority: 56 },
        { Name: "液体", Priority: 39, AllowTypes: { yt: 1 } },
        { Name: "液体2", Priority: 6, AllowTypes: { yt: 1 } },
        { Name: "玻璃罐液体前", Priority: 56, AllowTypes: { yt: 1 } },
        { Name: "玻璃罐液体后", Priority: 4, AllowTypes: { yt: 1 } },
        { Name: "玻璃外层", Priority: 57, AllowTypes: { c: 0 } },
        { Name: "发光", Priority: 31 },
        { Name: "玻璃关闭", Priority: 57, AllowTypes: { c: 1 } },
        { Name: "手臂拘束", Priority: 35, AllowTypes: { s: 1 } },
        { Name: "腿部拘束", Priority: 35, AllowTypes: { t: 1 } },
        { Name: "吊顶链", Priority: 5, AllowTypes: { s: 1 } },
    ],
};

/** @type {AssetArchetypeConfig} */
const extended = {
    Archetype: ExtendedArchetype.MODULAR,
    Modules: [
        {
            Name: "窗户",
            Key: "c",
            DrawImages: false,
            Options: [{}, { Property: { Difficulty: 52, Effect: ["BlindHeavy", "GagLight", "Freeze", "Enclose"] } }],
        },
        {
            Name: "腿部拘束",
            Key: "t",
            DrawImages: false,
            Options: [{}, { Property: { Difficulty: 22, SetPose: ["LegsClosed"], Effect: ["Freeze", "Mounted"] } }],
        },
        {
            Name: "手臂拘束",
            Key: "s",
            DrawImages: false,
            Options: [
                {},
                {
                    Property: {
                        Difficulty: 18,
                        SetPose: ["BackElbowTouch"],
                        Effect: ["Freeze", "Block", "Mounted"],
                        OverrideHeight: { Height: 0, Priority: 60 },
                    },
                },
            ],
        },
        {
            Name: "管道",
            Key: "gz",
            DrawImages: false,
            Options: [{}, {}],
        },
        {
            Name: "液体",
            Key: "yt",
            DrawImages: false,
            Options: [{}, {}],
        },
        {
            Name: "快感模块",
            Key: "k",
            DrawImages: false,
            Options: [
                { Property: { Intensity: -1, Effect: ["Egged"] } },
                { Property: { Intensity: 0, Effect: ["Egged", "Vibrating"] } },
                { Property: { Intensity: 1, Effect: ["Egged", "Vibrating"] } },
                { Property: { Intensity: 2, Effect: ["Egged", "Vibrating"] } },
                { Property: { Intensity: 3, Effect: ["Egged", "Vibrating"] } },
            ],
        },
        {
            Name: "电击模块",
            Key: "d",
            DrawImages: false,
            Options: [
                { Property: { ShockLevel: 0 } },
                { Property: { ShockLevel: 0 } },
                { Property: { ShockLevel: 1 } },
                { Property: { ShockLevel: 2 } },
            ],
        },
        {
            Name: "高潮锁",
            Key: "g",
            DrawImages: false,
            Options: [
                {},
                { Property: { Effect: ["DenialMode"] } },
                { Property: { Effect: ["DenialMode", "RuinOrgasms"] } },
            ],
        },
    ],
    ChangeWhenLocked: false,
};

/** @type {TranslationCustomDialog} */
const customDialog = {
    CN: {
        ItemDevices玻璃罐子_LuziSetc0: "SourceCharacter打开了DestinationCharacter的罐子",
        ItemDevices玻璃罐子_LuziSetc1: "SourceCharacter封上了DestinationCharacter的罐子",
        ItemDevices玻璃罐子_LuziSett0: "SourceCharacter移除了DestinationCharacter双腿的拘束",
        ItemDevices玻璃罐子_LuziSett1: "SourceCharacter将DestinationCharacter的双腿束缚在一起",
        ItemDevices玻璃罐子_LuziSets0: "SourceCharacter移除了DestinationCharacter手腕和手肘的拘束",
        ItemDevices玻璃罐子_LuziSets1: "SourceCharacter将DestinationCharacter的手腕和手肘束缚到她的身后",
        ItemDevices玻璃罐子_LuziSetgz0: "SourceCharacter移除了连接DestinationCharacter的身体的管子",
        ItemDevices玻璃罐子_LuziSetgz1: "SourceCharacter将管子连接进了DestinationCharacter的身体",
        ItemDevices玻璃罐子_LuziSetyt0: "SourceCharacter排空了DestinationCharacter身体和罐子里的液体",
        ItemDevices玻璃罐子_LuziSetyt1: "DestinationCharacter的身体和罐子充满了液体",
        ItemDevices玻璃罐子_LuziSetk0: "插在DestinationCharacter体内的振动装置停止振动",
        ItemDevices玻璃罐子_LuziSetk1: "插在DestinationCharacter体内的振动装置轻微逗弄起来",
        ItemDevices玻璃罐子_LuziSetk2: "插在DestinationCharacter体内的振动装置带温和嗡鸣着",
        ItemDevices玻璃罐子_LuziSetk3: "插在DestinationCharacter体内的振动装置猛烈地颤动",
        ItemDevices玻璃罐子_LuziSetk4: "插在DestinationCharacter体内的振动装置以最大速度振动着",
        ItemDevices玻璃罐子_LuziSetd0: "SourceCharacter关闭了插在DestinationCharacter体内的振动装置关闭了",
        ItemDevices玻璃罐子_LuziSetd1: "SourceCharacter将插在DestinationCharacter体内的电击装置设置为等级1",
        ItemDevices玻璃罐子_LuziSetd2: "SourceCharacter将插在DestinationCharacter体内的电击装置设置为等级2",
        ItemDevices玻璃罐子_LuziSetd3: "SourceCharacter将插在DestinationCharacter体内的电击装置设置为等级3",
        ItemDevices玻璃罐子_LuziSetg0: "SourceCharacter关闭了插在DestinationCharacter体内的振动装置设置为允许高潮",
        ItemDevices玻璃罐子_LuziSetg1: "SourceCharacter将插在DestinationCharacter体内的振动装置设置为寸止模式",
        ItemDevices玻璃罐子_LuziSetg2: "SourceCharacter将插在DestinationCharacter体内的振动装置设置为拒绝模式",

        ItemDevices玻璃罐子_LuziSelectBase: "选择罐子配置",
        ItemDevices玻璃罐子_LuziSelect窗户: "设置窗户",
        ItemDevices玻璃罐子_LuziModule窗户: "窗户",
        ItemDevices玻璃罐子_LuziOptionc0: "无",
        ItemDevices玻璃罐子_LuziOptionc1: "密封",
        ItemDevices玻璃罐子_LuziSelect腿部拘束: "设置腿部拘束",
        ItemDevices玻璃罐子_LuziModule腿部拘束: "腿部拘束",
        ItemDevices玻璃罐子_LuziOptiont0: "无",
        ItemDevices玻璃罐子_LuziOptiont1: "腿拘束",
        ItemDevices玻璃罐子_LuziSelect手臂拘束: "设置手臂拘束",
        ItemDevices玻璃罐子_LuziModule手臂拘束: "手臂拘束",
        ItemDevices玻璃罐子_LuziOptions0: "无",
        ItemDevices玻璃罐子_LuziOptions1: "手臂拘束",
        ItemDevices玻璃罐子_LuziSelect管道: "设置管道",
        ItemDevices玻璃罐子_LuziModule管道: "管道",
        ItemDevices玻璃罐子_LuziOptiongz0: "无",
        ItemDevices玻璃罐子_LuziOptiongz1: "连接身体",
        ItemDevices玻璃罐子_LuziSelect液体: "设置液体",
        ItemDevices玻璃罐子_LuziModule液体: "液体",
        ItemDevices玻璃罐子_LuziOptionyt0: "无",
        ItemDevices玻璃罐子_LuziOptionyt1: "注入液体",
        ItemDevices玻璃罐子_LuziSelect快感模块: "设置快感模块",
        ItemDevices玻璃罐子_LuziModule快感模块: "快感模块",
        ItemDevices玻璃罐子_LuziOptionk0: "关闭",
        ItemDevices玻璃罐子_LuziOptionk1: "低",
        ItemDevices玻璃罐子_LuziOptionk2: "一般",
        ItemDevices玻璃罐子_LuziOptionk3: "高",
        ItemDevices玻璃罐子_LuziOptionk4: "最多",
        ItemDevices玻璃罐子_LuziSelect电击模块: "设置电击模块",
        ItemDevices玻璃罐子_LuziModule电击模块: "电击模块",
        ItemDevices玻璃罐子_LuziOptiond0: "关闭",
        ItemDevices玻璃罐子_LuziOptiond1: "低",
        ItemDevices玻璃罐子_LuziOptiond2: "一般",
        ItemDevices玻璃罐子_LuziOptiond3: "高",
        ItemDevices玻璃罐子_LuziSelect高潮锁: "设置高潮锁",
        ItemDevices玻璃罐子_LuziModule高潮锁: "高潮锁",
        ItemDevices玻璃罐子_LuziOptiong0: "允许",
        ItemDevices玻璃罐子_LuziOptiong1: "寸止",
        ItemDevices玻璃罐子_LuziOptiong2: "拒绝",
    },
    EN: {
        ItemDevices玻璃罐子_LuziSetc0: "SourceCharacter opens DestinationCharacter's jar.",
        ItemDevices玻璃罐子_LuziSetc1: "SourceCharacter seals DestinationCharacter's jar.",
        ItemDevices玻璃罐子_LuziSett0: "SourceCharacter removes the restraints from DestinationCharacter's legs.",
        ItemDevices玻璃罐子_LuziSett1: "SourceCharacter binds DestinationCharacter's legs together.",
        ItemDevices玻璃罐子_LuziSets0:
            "SourceCharacter removes the restraints from DestinationCharacter's wrists and elbows.",
        ItemDevices玻璃罐子_LuziSets1:
            "SourceCharacter binds DestinationCharacter's wrists and elbows behind her back.",
        ItemDevices玻璃罐子_LuziSetgz0: "SourceCharacter removes the tube connected to DestinationCharacter's body.",
        ItemDevices玻璃罐子_LuziSetgz1: "SourceCharacter connects the tube into DestinationCharacter's body.",
        ItemDevices玻璃罐子_LuziSetyt0:
            "SourceCharacter drains the liquid from DestinationCharacter's body and the jar.",
        ItemDevices玻璃罐子_LuziSetyt1: "DestinationCharacter's body and the jar are filled with liquid.",
        ItemDevices玻璃罐子_LuziSetk0: "The vibrating device inside DestinationCharacter stops vibrating.",
        ItemDevices玻璃罐子_LuziSetk1: "The vibrating device inside DestinationCharacter teases gently.",
        ItemDevices玻璃罐子_LuziSetk2: "The vibrating device inside DestinationCharacter hums softly.",
        ItemDevices玻璃罐子_LuziSetk3: "The vibrating device inside DestinationCharacter vibrates fiercely.",
        ItemDevices玻璃罐子_LuziSetk4: "The vibrating device inside DestinationCharacter vibrates at maximum speed.",
        ItemDevices玻璃罐子_LuziSetd0: "SourceCharacter turns off the vibrating device inside DestinationCharacter.",
        ItemDevices玻璃罐子_LuziSetd1:
            "SourceCharacter sets the electric shock device inside DestinationCharacter to level 1.",
        ItemDevices玻璃罐子_LuziSetd2:
            "SourceCharacter sets the electric shock device inside DestinationCharacter to level 2.",
        ItemDevices玻璃罐子_LuziSetd3:
            "SourceCharacter sets the electric shock device inside DestinationCharacter to level 3.",
        ItemDevices玻璃罐子_LuziSetg0:
            "SourceCharacter turns off the orgasm allowance setting of the vibrating device inside DestinationCharacter.",
        ItemDevices玻璃罐子_LuziSetg1:
            "SourceCharacter sets the vibrating device inside DestinationCharacter to edge play mode.",
        ItemDevices玻璃罐子_LuziSetg2:
            "SourceCharacter sets the vibrating device inside DestinationCharacter to denial mode.",

        ItemDevices玻璃罐子_LuziSelectBase: "Select Container Configuration",
        ItemDevices玻璃罐子_LuziSelect窗户: "Set Window",
        ItemDevices玻璃罐子_LuziModule窗户: "Window",
        ItemDevices玻璃罐子_LuziOptionc0: "None",
        ItemDevices玻璃罐子_LuziOptionc1: "Sealed",
        ItemDevices玻璃罐子_LuziSelect腿部拘束: "Set Leg Restraint",
        ItemDevices玻璃罐子_LuziModule腿部拘束: "Leg Restraint",
        ItemDevices玻璃罐子_LuziOptiont0: "None",
        ItemDevices玻璃罐子_LuziOptiont1: "Leg Restraint",
        ItemDevices玻璃罐子_LuziSelect手臂拘束: "Set Arm Restraint",
        ItemDevices玻璃罐子_LuziModule手臂拘束: "Arm Restraint",
        ItemDevices玻璃罐子_LuziOptions0: "None",
        ItemDevices玻璃罐子_LuziOptions1: "Arm Restraint",
        ItemDevices玻璃罐子_LuziSelect管道: "Set Tube",
        ItemDevices玻璃罐子_LuziModule管道: "Tube",
        ItemDevices玻璃罐子_LuziOptiongz0: "None",
        ItemDevices玻璃罐子_LuziOptiongz1: "Connect to Body",
        ItemDevices玻璃罐子_LuziSelect液体: "Set Liquid",
        ItemDevices玻璃罐子_LuziModule液体: "Liquid",
        ItemDevices玻璃罐子_LuziOptionyt0: "None",
        ItemDevices玻璃罐子_LuziOptionyt1: "Inject Liquid",
        ItemDevices玻璃罐子_LuziSelect快感模块: "Set Pleasure Module",
        ItemDevices玻璃罐子_LuziModule快感模块: "Pleasure Module",
        ItemDevices玻璃罐子_LuziOptionk0: "Off",
        ItemDevices玻璃罐子_LuziOptionk1: "Low",
        ItemDevices玻璃罐子_LuziOptionk2: "Moderate",
        ItemDevices玻璃罐子_LuziOptionk3: "High",
        ItemDevices玻璃罐子_LuziSelect声音模块: "Set Sound Module",
        ItemDevices玻璃罐子_LuziModule声音模块: "Sound Module",
        ItemDevices玻璃罐子_LuziOptionsd0: "Silent",
        ItemDevices玻璃罐子_LuziOptionsd1: "Ambient Sounds",
        ItemDevices玻璃罐子_LuziOptionsd2: "Music",
        ItemDevices玻璃罐子_LuziSelect温度模块: "Set Temperature Module",
        ItemDevices玻璃罐子_LuziModule温度模块: "Temperature Module",
        ItemDevices玻璃罐子_LuziOptiontm0: "Room Temperature",
        ItemDevices玻璃罐子_LuziOptiontm1: "Warm",
        ItemDevices玻璃罐子_LuziOptiontm2: "Hot",
        ItemDevices玻璃罐子_LuziOptiontm3: "Cold",
        ItemDevices玻璃罐子_LuziSelect电击模块: "Set Electro Module",
        ItemDevices玻璃罐子_LuziModule电击模块: "Electro Module",
        ItemDevices玻璃罐子_LuziOptiond0: "Off",
        ItemDevices玻璃罐子_LuziOptiond1: "Low",
        ItemDevices玻璃罐子_LuziOptiond2: "Medium",
        ItemDevices玻璃罐子_LuziOptiond3: "High",
        ItemDevices玻璃罐子_LuziSelect高潮锁: "Set Orgasm Lock",
        ItemDevices玻璃罐子_LuziModule高潮锁: "Orgasm Lock",
        ItemDevices玻璃罐子_LuziOptiong0: "Allow",
        ItemDevices玻璃罐子_LuziOptiong1: "Edge",
        ItemDevices玻璃罐子_LuziOptiong2: "Deny",
    },
};

const translations = {
    CN: "玻璃罐子",
    EN: "Glass Jar",
};

export default function () {
    AssetManager.addAsset("ItemDevices", asset, extended, translations);
    AssetManager.addCustomDialog(customDialog);
}
