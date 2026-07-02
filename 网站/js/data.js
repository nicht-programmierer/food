/* ============================================================
   深圳小众烟火美食打卡 - 数据文件
   包含所有美食店铺的原始数据
   数据结构说明：
   - id: 唯一标识
   - name: 店铺名称
   - district: 所属区域（福田/南山/宝安/龙华）
   - area: 详细区域描述
   - price: 人均价格（元）
   - tags: 特色标签数组
   - thumbnail: 缩略图CSS类名
   - images: 详情页多图CSS类名数组
   - signature: 招牌菜品数组
   - hours: 营业时间
   - address: 精确地址
   - tips: 探店避坑小贴士数组
   - emoji: 代表食物的emoji图标
   - intro: 简短介绍
   ============================================================ */

const foodShops = [
    /* ===== 福田区 ===== */
    {
        id: 1,
        name: '阿婆牛杂',
        district: '福田',
        area: '福田区·水围村',
        price: 25,
        tags: ['牛杂', '老字号', '街坊推荐'],
        thumbnail: 'img-grad-1',
        images: ['img-grad-1', 'img-grad-2', 'img-grad-3'],
        signature: ['招牌萝卜牛杂', '秘制牛腩', '咖喱鱼蛋'],
        hours: '11:00 - 23:00（周一休息）',
        address: '深圳市福田区水围村水围街28号',
        tips: [
            '下午4点后人最多，建议错峰去',
            '萝卜比牛杂还抢手，经常提前卖完',
            '辣椒酱是阿婆自制的，记得问她要'
        ],
        emoji: '🍲',
        intro: '水围村开了20多年的老店，阿婆每天亲自熬煮牛骨汤底，汤头浓郁回甘，是福田人的深夜食堂首选。'
    },
    {
        id: 2,
        name: '潮香煲仔饭',
        district: '福田',
        area: '福田区·华强北',
        price: 35,
        tags: ['煲仔饭', '潮汕风味', '锅巴'],
        thumbnail: 'img-grad-2',
        images: ['img-grad-2', 'img-grad-4', 'img-grad-5'],
        signature: ['腊味双拼煲仔饭', '排骨煲仔饭', '窝蛋牛肉饭'],
        hours: '10:30 - 21:00',
        address: '深圳市福田区华强北路1019号新华强电子世界旁巷内',
        tips: [
            '锅巴是灵魂，上桌先别急着拌',
            '加一份窝蛋口感直接起飞',
            '中午12点前到不用排队'
        ],
        emoji: '🍚',
        intro: '藏在华强北电子城旁边的小巷里，现点现煲，揭开锅盖那股焦香能飘三条街。锅巴金黄酥脆，是煲仔饭爱好者的朝圣地。'
    },
    {
        id: 3,
        name: '老街肠粉王',
        district: '福田',
        area: '福田区·园岭',
        price: 15,
        tags: ['肠粉', '早餐', '布拉肠'],
        thumbnail: 'img-grad-3',
        images: ['img-grad-3', 'img-grad-6', 'img-grad-1'],
        signature: ['鲜虾肠粉', '猪肉蛋肠', '叉烧肠粉'],
        hours: '06:30 - 13:00（卖完即止）',
        address: '深圳市福田区园岭新村园岭六街15号',
        tips: [
            '只做早市，去晚了就没有了',
            '肠粉皮薄如蝉翼，是布拉肠工艺',
            '酱油是独家调配的，别处吃不到'
        ],
        emoji: '🥟',
        intro: '深圳为数不多还在坚持布拉肠的老店，每天凌晨4点开始磨米浆，肠粉皮薄滑嫩，配上秘制甜酱油，让人心甘情愿早起排队。'
    },
    {
        id: 4,
        name: '福民糖水铺',
        district: '福田',
        area: '福田区·福民新村',
        price: 12,
        tags: ['糖水', '甜品', '消暑'],
        thumbnail: 'img-grad-4',
        images: ['img-grad-4', 'img-grad-5', 'img-grad-2'],
        signature: ['杨枝甘露', '双皮奶', '红豆沙', '芝麻糊'],
        hours: '12:00 - 23:30',
        address: '深圳市福田区福民新村福强路56号',
        tips: [
            '杨枝甘露用料很足，芒果大块',
            '双皮奶是水牛奶做的，奶味超浓',
            '夏天芝麻糊有时候不做，怕上火'
        ],
        emoji: '🍧',
        intro: '藏在福民新村里的老式糖水铺，没有花里胡哨的装修，靠一碗碗真材实料的糖水征服了周边街坊二十多年。'
    },

    /* ===== 南山区 ===== */
    {
        id: 5,
        name: '蛇口鱼蛋粉',
        district: '南山',
        area: '南山区·蛇口老街',
        price: 20,
        tags: ['鱼蛋粉', '港式', '海鲜'],
        thumbnail: 'img-grad-5',
        images: ['img-grad-5', 'img-grad-1', 'img-grad-3'],
        signature: ['招牌鱼蛋粉', '炸鱼皮', '鲜虾云吞'],
        hours: '07:00 - 20:00',
        address: '深圳市南山区蛇口老街128号',
        tips: [
            '鱼皮一定要点，脆到掉渣',
            '汤底是大地鱼熬的，鲜到不行',
            '周末蛇口市场买完菜顺路吃最合适'
        ],
        emoji: '🍜',
        intro: '蛇口老街上的港式小店，老板是香港过来的老师傅，鱼蛋弹牙爽口，汤底用大地鱼和猪骨慢熬，鲜香浓郁。'
    },
    {
        id: 6,
        name: '海岸城煎饼果子',
        district: '南山',
        area: '南山区·海岸城',
        price: 18,
        tags: ['煎饼果子', '天津味', '网红'],
        thumbnail: 'img-grad-6',
        images: ['img-grad-6', 'img-grad-2', 'img-grad-4'],
        signature: ['经典煎饼果子', '双蛋煎饼', '薄脆加量版'],
        hours: '06:00 - 14:00 / 17:00 - 21:00',
        address: '深圳市南山区文心三路海岸大厦东座一楼',
        tips: [
            '绿豆面糊才是正宗天津做法',
            '可以要求多加薄脆，免费！',
            '早高峰排队约15分钟'
        ],
        emoji: '🥞',
        intro: '海岸城打工人早餐之光！天津师傅现摊绿豆面糊，加上现炸薄脆，刷上甜面酱和腐乳，一口咬下去，酥脆咸香。'
    },
    {
        id: 7,
        name: '科技园麻辣烫',
        district: '南山',
        area: '南山区·科技园',
        price: 28,
        tags: ['麻辣烫', '川味', '深夜食堂'],
        thumbnail: 'img-grad-1',
        images: ['img-grad-1', 'img-grad-3', 'img-grad-5'],
        signature: ['骨汤麻辣烫', '红油抄手', '酸辣粉'],
        hours: '11:00 - 凌晨02:00',
        address: '深圳市南山区粤海街道高新南一道飞亚达大厦后巷',
        tips: [
            '微辣就已经很辣了！慎点中辣以上',
            '推荐加一份油条，吸满汤汁超绝',
            '凌晨1点后有些菜会卖完'
        ],
        emoji: '🔥',
        intro: '科技园程序员们的深夜救赎，凌晨两点还在冒热气。骨汤底是每天现熬的，配菜新鲜自选，辣度分五级，微辣就够刺激了。'
    },

    /* ===== 宝安区 ===== */
    {
        id: 8,
        name: '西乡烧鹅濑粉',
        district: '宝安',
        area: '宝安区·西乡',
        price: 30,
        tags: ['烧鹅', '濑粉', '粤式'],
        thumbnail: 'img-grad-2',
        images: ['img-grad-2', 'img-grad-4', 'img-grad-6'],
        signature: ['烧鹅濑粉', '烧鹅腿饭', '蜜汁叉烧'],
        hours: '10:00 - 20:30',
        address: '深圳市宝安区西乡街道宝民二路168号',
        tips: [
            '鹅腿限量，最好11点前到',
            '烧鹅皮脆肉嫩，蘸酸梅酱一绝',
            '濑粉是手工做的，口感特别滑'
        ],
        emoji: '🦆',
        intro: '西乡开了三代人的烧鹅店，每天新鲜出炉的烧鹅挂满橱窗，油亮金黄的脆皮让人挪不开眼，配上手工濑粉，是宝安人的乡愁味道。'
    },
    {
        id: 9,
        name: '沙井蚝烙',
        district: '宝安',
        area: '宝安区·沙井',
        price: 22,
        tags: ['蚝烙', '海鲜', '潮汕小吃'],
        thumbnail: 'img-grad-3',
        images: ['img-grad-3', 'img-grad-5', 'img-grad-1'],
        signature: ['招牌蚝烙', '蚝仔粥', '炒薄壳'],
        hours: '17:00 - 凌晨01:00',
        address: '深圳市宝安区沙井街道蚝乡路沙井老街72号',
        tips: [
            '沙井蚝是深圳特产，个头大肉饱满',
            '蚝烙一定要趁热吃，凉了会腥',
            '配一碟鱼露胡椒粉，鲜上加鲜'
        ],
        emoji: '🦪',
        intro: '沙井是深圳养蚝之乡，这家店直接拿当天现开的沙井蚝来做蚝烙，外酥里嫩，蚝肉饱满多汁，是潮汕人来深圳必吃的一家。'
    },
    {
        id: 10,
        name: '宝安中心猪脚饭',
        district: '宝安',
        area: '宝安区·宝安中心',
        price: 25,
        tags: ['猪脚饭', '潮汕', '快餐'],
        thumbnail: 'img-grad-4',
        images: ['img-grad-4', 'img-grad-6', 'img-grad-2'],
        signature: ['隆江猪脚饭', '卤水拼盘', '酸菜猪肚汤'],
        hours: '10:30 - 21:00',
        address: '深圳市宝安区新安街道创业一路1008号',
        tips: [
            '猪脚有肥瘦可选，推荐半肥瘦',
            '卤汁浇饭超下饭，可以让老板多加一勺',
            '免费的酸菜也很好吃'
        ],
        emoji: '🍖',
        intro: '正宗的隆江猪脚饭，猪脚卤得软糯入味，胶质满满，配上酸菜解腻，是宝安打工人最实在的一顿饱饭。'
    },

    /* ===== 龙华区 ===== */
    {
        id: 11,
        name: '民治炒米粉',
        district: '龙华',
        area: '龙华区·民治',
        price: 15,
        tags: ['炒米粉', '夜宵', '镬气'],
        thumbnail: 'img-grad-5',
        images: ['img-grad-5', 'img-grad-1', 'img-grad-3'],
        signature: ['鸡蛋炒米粉', '牛肉炒河粉', '干炒牛河'],
        hours: '18:00 - 凌晨03:00',
        address: '深圳市龙华区民治大道民乐村口夜市摊',
        tips: [
            '镬气十足，老板炒粉时火光冲天',
            '加辣加蛋是最佳吃法',
            '路边摊没有座位，只能打包带走'
        ],
        emoji: '🍝',
        intro: '民治夜市传奇摊位，老板一手颠锅绝技，米粉在火光中翻飞，炒出来的米粉根根分明、镬气十足，是龙华人的深夜碳水快乐。'
    },
    {
        id: 12,
        name: '龙华老街豆腐花',
        district: '龙华',
        area: '龙华区·龙华老街',
        price: 10,
        tags: ['豆腐花', '甜品', '传统'],
        thumbnail: 'img-grad-6',
        images: ['img-grad-6', 'img-grad-2', 'img-grad-4'],
        signature: ['甜豆花', '咸豆花', '姜汁豆花', '红豆豆花'],
        hours: '07:00 - 18:00',
        address: '深圳市龙华区龙华老街人民路42号',
        tips: [
            '建议点甜豆花，红糖姜汁是灵魂',
            '豆花是石磨现做的，每天限量',
            '下午三四点基本就卖完了'
        ],
        emoji: '🥣',
        intro: '龙华老街的石磨豆腐花，坚持用传统石磨手工磨豆浆，豆花嫩滑如凝脂，浇上一勺红糖姜汁，暖心又暖胃，十块钱一碗吃的是情怀。'
    },
    {
        id: 13,
        name: '观澜云吞面',
        district: '龙华',
        area: '龙华区·观澜',
        price: 18,
        tags: ['云吞面', '竹升面', '老广味'],
        thumbnail: 'img-grad-1',
        images: ['img-grad-1', 'img-grad-3', 'img-grad-5'],
        signature: ['鲜虾云吞面', '牛腩捞面', '虾子捞面'],
        hours: '07:30 - 14:00 / 17:00 - 20:30',
        address: '深圳市龙华区观澜街道桂花路39号',
        tips: [
            '竹升面是师傅每天用竹竿压的',
            '云吞里有一整只鲜虾，很实在',
            '下午2点到5点休息，别跑空了'
        ],
        emoji: '🍜',
        intro: '观澜老字号面馆，竹升面爽滑弹牙，每一粒云吞都包着一整只大虾，汤头鲜甜清澈，是老广味道在深圳的坚守。'
    }
];

/* ============ 工具函数：获取所有区域 ============ */
function getAllDistricts() {
    // 使用 Set 去重，获取所有不重复的区域名称
    return [...new Set(foodShops.map(shop => shop.district))];
}

/* ============ 工具函数：按区域筛选店铺 ============ */
function filterShopsByDistrict(district) {
    // 如果传入 '全部' 或空值，返回所有店铺
    if (!district || district === '全部') {
        return [...foodShops];
    }
    return foodShops.filter(shop => shop.district === district);
}

/* ============ 工具函数：根据ID获取单个店铺 ============ */
function getShopById(id) {
    return foodShops.find(shop => shop.id === parseInt(id));
}
