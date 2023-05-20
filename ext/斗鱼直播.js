
var rule = {
    title:'斗鱼直播',
    host:'https://www.douyu.com',
	//【/d_match"赛事】
    homeUrl:'/japi/weblist/apinc/recLabelList?',//网站的首页链接,用于分类获取和推荐获取
	url:'/gapi/rkc/directory/mixList/fyclass/fypage',
	filterable:0,
	
    class_name:'英雄联盟	&炉石传说	&LOL手游	&和平精英	&绝地求生	&JJ斗地主	一起看&	网游竞技&	单机热游&	手游休闲&	科技文化&	正能量&	趣生活&	数码科技&	文化&	科普&	纪录片&		CF手游&	DOTA2&	穿越火线&	CFHD&	DNF&	CS:GO&	逆战&	lol云顶之弈&	魔兽争霸&	魔兽怀旧服&	网易游戏&	守望先锋&	DOTA&	魔兽世界&	天涯明月刀&	三国杀&	主机游戏&	永劫无间&	生死狙击2&	迷失ARK&	艾尔登法环&	逃离塔科夫&	V Rising&	海上狼人杀&	怀旧游戏&	王者荣耀&	火影忍者&	金铲铲之战&	重返帝国&	COD手游&	哈利波特&	欢乐斗地主&	原神&	天刀手游&	棋牌娱乐&	欢乐麻将&	新游中心&	QQ飞车&	阴阳师&	热门手游',
    class_url: '2_1&		2_2&		2_1920&		2_350&		2_270&		2_454&		2_208&	1_1&		1_15&		1_9&		1_11&		1_13&	2_1097&	2_134&		2_195&	2_204&	2_514&		2_178&	2_3&	2_33&		2_1997&	2_40&	2_6&	2_46&	2_917&			2_55&		2_1055&		2_3567&		2_148&		2_217&	2_5&		2_59&		2_14&	2_19&		2_1227&		2_1781&		2_3528&		2_3406&		2_1024&		2_3684&		2_3556&		2_26&		2_181&		2_196&		2_2556&		2_2915&		2_767&		2_1192&		2_416&		2_1223&	2_911&		2_113&		2_451&		2_229&		2_331&	2_240&	2_30',
    
	detailUrl:'/fyid',//二级详情拼接链接(json格式用)
    searchUrl:'/japi/search/api/searchShow?kw=**&page=fypage&pageSize=20',
    searchable:0,
    quickSearch:0,
    headers:{
		'User-Agent':'PC_UA'
	},
    timeout:5000,
    limit:8,
    play_parse:true,
    lazy:'',
    double:true,
	推荐:'json:data.list;room;*;cover;*;*',
	一级:'json:data.rl;rn;rs16;nn;rid',
    二级:'*',
    搜索:'json:data.relateShow;roomName;roomSrc;nickName;*',
}