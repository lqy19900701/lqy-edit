/*
 Navicat Premium Data Transfer

 Source Server         : Yuan
 Source Server Type    : MySQL
 Source Server Version : 50717
 Source Host           : localhost:3306
 Source Schema         : yuaneditor

 Target Server Type    : MySQL
 Target Server Version : 50717
 File Encoding         : 65001

 Date: 28/04/2020 10:30:43
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `namePath` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (1, '阴天', 'E:\\Project\\WebEditor', '阴天-莫文蔚');
INSERT INTO `article` VALUES (2, '富士山下', 'E:\\Project\\WebEditor', '富士山下-陈奕迅');
INSERT INTO `article` VALUES (3, '勇气12', 'E:\\Project\\WebEditor', '<p>勇气-梁静茹1</p>');
INSERT INTO `article` VALUES (4, '我很好', 'E:ProjectYuanEditoryuan-editstatic', '<p>我很好——奋斗</p>');
INSERT INTO `article` VALUES (5, '怪你过分美丽', 'E://Project//YuanEditor//yuan-edit//static', '<p>怪你过分美丽——张国荣</p>');
INSERT INTO `article` VALUES (6, '凡人歌', 'E://Project//YuanEditor//yuan-edit//static', '<p>凡人歌——李宗盛</p>');
INSERT INTO `article` VALUES (7, '处处吻', 'E://Project//YuanEditor//yuan-edit//static', '<p>处处吻——杨千嬅</p>');
INSERT INTO `article` VALUES (9, '消愁', 'E://Project//YuanEditor//yuan-edit//static', '<p class=\"ql-align-center\">消愁 (Live) - 毛不易</p><p class=\"ql-align-center\">词：毛不易</p><p class=\"ql-align-center\">曲：毛不易</p><p class=\"ql-align-center\">编曲：赵兆</p><p class=\"ql-align-center\">制作人：赵兆</p><p class=\"ql-align-center\">声乐指导：梁古驰</p><p class=\"ql-align-center\">后期混音：林梦洋</p><p class=\"ql-align-center\">音响设计：何飚</p><p class=\"ql-align-center\">毛不易：</p><p class=\"ql-align-center\">当你走进这欢乐场</p><p class=\"ql-align-center\">背上所有的梦与想</p><p class=\"ql-align-center\">各色的脸上各色的妆</p><p class=\"ql-align-center\">没人记得你的模样</p><p class=\"ql-align-center\">合唱团：</p><p class=\"ql-align-center\">三巡酒过你在角落</p><p class=\"ql-align-center\">固执地唱着苦涩的歌</p><p class=\"ql-align-center\">听它在喧嚣里被淹没</p><p class=\"ql-align-center\">你拿起酒杯对自己说</p><p class=\"ql-align-center\">毛不易：</p><p class=\"ql-align-center\">一杯敬朝阳 一杯敬月光</p><p class=\"ql-align-center\">唤醒我的向往 温柔了寒窗</p><p class=\"ql-align-center\">于是可以不回头地逆风飞翔</p><p class=\"ql-align-center\">不怕心头有雨 眼底有霜</p><p class=\"ql-align-center\">合唱团：</p><p class=\"ql-align-center\">一杯敬故乡 一杯敬远方</p><p class=\"ql-align-center\">守着我的善良 催着我成长</p><p class=\"ql-align-center\">所以南北的路从此不再漫长</p><p class=\"ql-align-center\">合：</p><p class=\"ql-align-center\">灵魂不再无处</p><p class=\"ql-align-center\">毛不易：</p><p class=\"ql-align-center\">安放</p><p class=\"ql-align-center\">毛不易：</p><p class=\"ql-align-center\">躁动不安的座上客</p><p class=\"ql-align-center\">自以为是地表演着</p><p class=\"ql-align-center\">合唱团：</p><p class=\"ql-align-center\">伪装着 舞蹈着 疲惫着</p><p class=\"ql-align-center\">你拿起酒杯对自己说</p><p class=\"ql-align-center\">毛不易：</p><p class=\"ql-align-center\">一杯敬朝阳 一杯敬月光</p><p class=\"ql-align-center\">唤醒我的向往 温柔了寒窗</p><p class=\"ql-align-center\">于是可以不回头地逆风飞翔</p><p class=\"ql-align-center\">不怕心头有雨 眼底有霜</p><p class=\"ql-align-center\">合唱团：</p><p class=\"ql-align-center\">一杯敬故乡 一杯敬远方</p><p class=\"ql-align-center\">守着我的善良 催着我成长</p><p class=\"ql-align-center\">所以南北的路从此不再漫长</p><p class=\"ql-align-center\">毛不易：</p><p class=\"ql-align-center\">一杯敬故乡</p><p class=\"ql-align-center\">合：</p><p class=\"ql-align-center\">灵魂不再无处</p><p class=\"ql-align-center\">毛不易：</p><p class=\"ql-align-center\">安放</p><p class=\"ql-align-center\">一杯敬明天 一杯敬过往</p><p class=\"ql-align-center\">支撑我的身体 厚重了肩膀</p><p class=\"ql-align-center\">虽然从不相信所谓山高水长</p><p class=\"ql-align-center\">合：</p><p class=\"ql-align-center\">人生苦短何必念念不忘</p><p class=\"ql-align-center\">毛不易：</p><p class=\"ql-align-center\">一杯敬自由 一杯敬死亡</p><p class=\"ql-align-center\">宽恕我的平凡 驱散了迷惘</p><p class=\"ql-align-center\">好吧</p><p class=\"ql-align-center\">合唱团：</p><p class=\"ql-align-center\">一杯敬自由</p><p class=\"ql-align-center\">合：</p><p class=\"ql-align-center\">天亮之后总是潦草离场</p><p class=\"ql-align-center\">清醒的人最荒唐</p><p class=\"ql-align-center\">毛不易：</p><p class=\"ql-align-center\">清醒的人最荒唐</p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><br></p><p><br></p>');
INSERT INTO `article` VALUES (10, '勇气', 'E://Project//YuanEditor//yuan-edit//static', '<p>勇气——梁静茹</p>');
INSERT INTO `article` VALUES (11, '勇气', 'E://Project//YuanEditor//yuan-edit//static', '<p>勇气——梁静茹</p>');
INSERT INTO `article` VALUES (12, '那就这样吧', '.static/articles/那就这样吧.txt', '<p>那就这样吧——动力火车</p>');
INSERT INTO `article` VALUES (13, '当', '.static/articles/当.txt', '<p>当——动力火车</p>');
INSERT INTO `article` VALUES (14, '那么骄傲', '.static/articles/那么骄傲.txt', '<p class=\"ql-align-center\">那么骄傲 (《都是天使惹的祸》电视剧片头曲) - 金海心 (Hannah Kim)</p><p class=\"ql-align-center\">词：厉曼婷</p><p class=\"ql-align-center\">曲：刘大江</p><p class=\"ql-align-center\">编曲：孔宏伟</p><p class=\"ql-align-center\">整晚胡思乱想夜色真好</p><p class=\"ql-align-center\">让我睡不着</p><p class=\"ql-align-center\">为何你总是想要逃</p><p class=\"ql-align-center\">相思若好不了只能怪我</p><p class=\"ql-align-center\">找不到解药</p><p class=\"ql-align-center\">你从未给过我爱的讯号</p><p class=\"ql-align-center\">糟糕 我陷得比你早</p><p class=\"ql-align-center\">你爱得比我少注定要受煎熬</p><p class=\"ql-align-center\">不好 优雅都不见了</p><p class=\"ql-align-center\">不安份的心跳全世界都听到</p><p class=\"ql-align-center\">别那么骄傲</p><p class=\"ql-align-center\">我随时可能走掉</p><p class=\"ql-align-center\">我的手你还没有牵到</p><p class=\"ql-align-center\">夜太长 月光一定会冷掉</p><p class=\"ql-align-center\">如何是好</p><p class=\"ql-align-center\">你欠我一个拥抱</p><p class=\"ql-align-center\">而我却一再对你微笑</p><p class=\"ql-align-center\">怎么你还没看见我的好</p><p class=\"ql-align-center\">整晚胡思乱想夜色真好</p><p class=\"ql-align-center\">让我睡不着</p><p class=\"ql-align-center\">为何你总是想要逃</p><p class=\"ql-align-center\">相思若好不了只能怪我</p><p class=\"ql-align-center\">找不到解药</p><p class=\"ql-align-center\">你从未给过我爱的讯号</p><p class=\"ql-align-center\">糟糕 我陷得比你早</p><p class=\"ql-align-center\">你爱得比我少注定要受煎熬</p><p class=\"ql-align-center\">别那么骄傲</p><p class=\"ql-align-center\">我随时可能走掉</p><p class=\"ql-align-center\">我的手你还没有牵到</p><p class=\"ql-align-center\">夜太长月光一定会冷掉</p><p class=\"ql-align-center\">如何是好</p><p class=\"ql-align-center\">你欠我一个拥抱</p><p class=\"ql-align-center\">而我却一再 对你微笑</p><p class=\"ql-align-center\">怎么你还没看见我的好</p><p class=\"ql-align-center\">别那么骄傲</p><p class=\"ql-align-center\">我随时可能走掉</p><p class=\"ql-align-center\">我的手你还没有牵到</p><p class=\"ql-align-center\">夜太长月光一定会冷掉</p><p class=\"ql-align-center\">怎么办才好</p><p class=\"ql-align-center\">你欠我一个拥抱</p><p class=\"ql-align-center\">而我却一再对你微笑</p><p class=\"ql-align-center\">抱着我的苦恼睡着了觉</p><p class=\"ql-align-center\">整晚胡思乱想夜色真好</p><p class=\"ql-align-center\">让我睡不着</p><p class=\"ql-align-center\">为何你总是想要逃</p><p><br></p>');
INSERT INTO `article` VALUES (15, '左手指月', '.static/articles/左手指月.txt', '<p>左手指月——萨顶顶</p><p>左手握大地右手握着天</p><p>掌纹裂出了十方的闪电</p><p>把时光匆匆兑换成了年</p><p>三千世如所不见</p><p>左手拈着花右手舞着剑</p><p>眉间落下了一万年的雪</p><p>一滴泪啊啊啊</p><p>那是我啊啊啊</p><p>左手一弹指右手弹着弦</p><p>舟楫摆渡在忘川的水间</p><p>当烦恼能开出一朵红莲</p><p>莫停歇给我杂念</p><p>左手指着月右手取红线</p><p>赐予你和我如愿的情缘</p><p>月光中啊啊啊</p><p>你和我啊啊啊</p><p>左手化成羽右手成鳞片</p><p>某世在云上某世在林间</p><p>愿随你用一粒微尘的模样</p><p>在所有尘世浮现</p><p>我左手拿起你右手放下你</p><p>合掌时你全部被收回心间</p><p>一炷香啊啊啊</p><p>你是我无二无别</p><p><br></p>');

SET FOREIGN_KEY_CHECKS = 1;
