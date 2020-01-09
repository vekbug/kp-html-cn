var lottery_initial_datas = [
    {
        "nameen": "avatar1",
        "namezh": "陈培衡",
        "wish": "一年四季春为首，十二生肖鼠为先，衷心祝福大家鼠年身体健康！"
    },
    {
        "nameen": "avatar2",
        "namezh": "刘小娜",
        "wish": "祝大家在新的一年里财源广进 日进斗金 身体健康。"
    },
    {
        "nameen": "avatar3",
        "namezh": "沈文鑫",
        "wish": "六六大顺"
    },
    {
        "nameen": "avatar4",
        "namezh": "崔兵",
        "wish": "祝福公司的家人们，大吉大利"
    },
    {
        "nameen": "avatar5",
        "namezh": "梁鹏飞",
        "wish": "世间美好环环与你相扣"
    },
    {
        "nameen": "avatar6",
        "namezh": "魏伦红",
        "wish": "南阿弥陀佛好运属于我，一等大奖必中"
    },
    // {
    //     "nameen": "avatar7",
    //     "namezh": "李维昊",
    //     "wish": "祝福2020年大家多拿提成，多签新客户"
    // },
    // {
    //     "nameen": "avatar8",
    //     "namezh": "赵乐晨",
    //     "wish": "祝公司：来年硕果累累 每日节节高升"
    // },
    {
        "nameen": "avatar7",
        "namezh": "冀忆轩",
        "wish": "岁岁常欢愉，年年皆胜意"
    },
    {
        "nameen": "avatar8",
        "namezh": "白易蒙",
        "wish": "2020  2亿完成"
    },
    {
        "nameen": "avatar9",
        "namezh": "刘孟勤",
        "wish": "愿大家得岁月优待，无畏前行，展鲲鹏之志。"
    },
    {
        "nameen": "avatar10",
        "namezh": "刘墁",
        "wish": "祝鲲鹏鹏程万里，尽显华宇雄风"
    },
    {
        "nameen": "avatar11",
        "namezh": "王永建",
        "wish": "立足新的起点，迈上新的征程，开创新的辉煌。"
    },
    {
        "nameen": "avatar12",
        "namezh": "丁梅雪",
        "wish": "活在当下，2020又一个新的出发点"
    },
    {
        "nameen": "avatar13",
        "namezh": "闫晖",
        "wish": "欲似鲲鹏翔千里 拼搏奋进争朝夕"
    },
    {
        "nameen": "avatar14",
        "namezh": "齐仕强",
        "wish": "运气鼠你最旺 ，身体鼠你最棒！"
    },
    {
        "nameen": "avatar15",
        "namezh": "侯建兵",
        "wish": "2020心想事成"
    },
    {
        "nameen": "avatar16",
        "namezh": "赵芳芳",
        "wish": "2020祝福大家平安喜乐，更上一层楼"
    },
    {
        "nameen": "avatar17",
        "namezh": "许恩楼",
        "wish": "祝大家新年快乐！"
    },
    {
        "nameen": "avatar18",
        "namezh": "郑建邦",
        "wish": "祝大家新年快乐！"
    },
    {
        "nameen": "avatar19",
        "namezh": "侯建新",
        "wish": "祝大家新年快乐！"
    },
    {
        "nameen": "avatar20",
        "namezh": "李志朋",
        "wish": "祝大家新年快乐！"
    },
    {
        "nameen": "avatar21",
        "namezh": "彭康康",
        "wish": "祝大家新年快乐！"
    }
];

var award_config = {
    "award00": 1,
    "award01": 1,
    "award02": 1,
    "award03": 1,
    "award04": 3
};

// 初始化数据
if (!localStorage.getItem('lottery_initial')) {
    var data_str = JSON.stringify(lottery_initial_datas);
    localStorage.setItem('lottery_initial', data_str);
}
if (!localStorage.getItem('award_initial')) {
    var award_str = JSON.stringify(award_config);
    localStorage.setItem('award_initial', award_str);
}