var GLOBAL_DEBUG = true;//是否本地调试，true本地调试,false生产环境
var GLOBAL_IMGS_URL = '/images/';//图片路径
//项目跳转地址管理
var GLOBAL_ADDR_URL = {
    index: '/index.html'//登录成功后，跳转的后台首页
}
//后台ajax请求地址
var GLOBAL_AJAX_URL = {
    login: '',//登录
    treatmentOutcome: '',//治疗结果统计接口
    workefficiency:'',//工作效率统计接口
    hospitalizedCostPer:'',//住院均次费用同比、环比统计
    hospitalizedCostConstitute:'',//住院均次费用构成比例
    bigdepartmentFeesTop10:'',//大项目各科室均次费用Top10
    hospitalizeddepartmentFeesTop10:'',//住院均次费用各科室排名Top10
    hospitalizeddepartmentItemFeesTop10:'',//科室住院均次费用项目贡献度排行Top10
    hospitalDetails:'',//场均住院项目明细
    expertAttendance:'',//专家门诊出勤率
    wellKnownExpertNumber:'',//知名专家号
    chiefPhysicianNumber:'',//主任医师挂号数
    deputyChiefPhysicianNumber:'',//副主任医师挂号数
    ordinaryPhysicianRegistrationNumber:'',//普通医师挂号数
    specialOutpatientVisits:'',//特需门诊人次
    emergencyAccessDoor:'',//门急诊挂号人次
    hospitalizedCost:'',//住院均次费用
    emergencyCostDepartment:'',//门急诊均次费用
    hospitalization:'',//住院人次
    courtyardTimes:'',//在院人次
    dischargedNumber:'',//出院人次
    checkInspection:'',//医技检查检验
    dischargeIncome:'',//出院收入
    emergencyIncome:'',//门急诊收入
    numberOfSenses:''//院感例数、同比及环比统计
};
//模拟的JSON数据
var GLOBAL_JSON = {
    treatmentOutcome: [
        {
            "name": "好转",
            "value": 564
        },
        {
            "name": "其他",
            "value": 12
        },
        {
            "name": "死亡",
            "value": 3
        },
        {
            "name": "未治",
            "value": 67
        },
        {
            "name": "无效",
            "value": 7
        },
        {
            "name": "治愈",
            "value": 2234
        }
    ],
    workefficiency:{
        "xaxis": ["全院医师日均门诊人次","日均门诊人次","日均出诊医师数","日均出诊医师门诊人次"],
        "yaxis": [33,21,43,15]
    },
    hospitalizedCostConstitute:[
        {
            "name":"检查费",
            "value":123
        },
        {
            "name":"检验费",
            "value":21
        },
        {
            "name":"治疗费",
            "value":3232
        },
        {
            "name":"其他费",
            "value":121
        },
        {
            "name":"麻醉费",
            "value":195
        },
        {
            "name":"手术费",
            "value":333
        },
        {
            "name":"材料费",
            "value":546
        },
        {
            "name":"药费",
            "value":789
        }
    ],
    emergencyAccessDoor: {
        "xaxis": ["01月","02月","03月","04月"],
        "yaxis": [6122,3232,214,568]
    },
    hospitalizedCost: {
        "xaxis": ["01月","02月","03月","04月"],
        "yaxis": [211,123,222,138]
    },
    emergencyCostDepartment:{
        "xaxis": ["01月","02月","03月","04月"],
        "yaxis": [21,44,21,11]
    },
    hospitalization:{
        "xaxis": ["01月","02月","03月","04月"],
        "yaxis": [323,122,754,456]
    },
    courtyardTimes:{
        "xaxis": ["01月","02月","03月","04月"],
        "yaxis": [111,222,18,100]
    },
    dischargedNumber:{
        "xaxis": ["01月","02月","03月","04月"],
        "yaxis": [333,454,211,654]
    },
    checkInspection:{
        "xaxis": ["病理","超声","放射","核医学","检验","输血"],
        "yaxis": [6122,3232,325,333,898,124]
    },
    dischargeIncome:{
        "xaxis": ["01月","02月","03月","04月"],
        "yaxis": [6122,3232,2121,1244]
    },
    emergencyIncome:{
        "xaxis": ["01月","02月","03月","04月"],
        "yaxis": [6122,3232,2121,1244]
    }
};