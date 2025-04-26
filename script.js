// 模拟章节内容
const chapterContents = {
    1: `《狗·猫·鼠》——在这篇文章里，鲁迅先生清算猫的罪行：第一，猫对自己捉到的猎物，总是尽情玩弄够了，才吃下去；第二，它与狮虎同族，却天生一副媚态；第三，它老在配合时嗥叫，令人心烦；第四，它吃了我小时候心爱的一只小隐鼠。虽然后来证实并非猫所害，但我对猫是不会产生好感的，何况它后来确实吃了小兔子！这篇文章取了“猫”这样一个类型，尖锐而又形象地讽刺了生活中与猫相似的人。`,
    2: `《阿长与〈山海经〉》——阿长是鲁迅小时候的保姆。记述儿时与阿长相处的情景，描写了长妈妈善良、朴实而又迷信、唠叨、“满肚子是麻烦的礼节”的性格；对她寻购赠送自己渴求已久的绘图《山海经》之情，充满了尊敬和感激。文章用深情的语言，表达了对这位劳动妇女的真诚的怀念。`,
    3: `《二十四孝图》——所谓《二十四孝图》是一本讲中国古代二十四个孝子故事的书，配有图画，主要目的是宣扬封建的孝道。鲁迅先生从自己小时阅读《二十四孝图》的感受入手，重点描写了在阅读“老莱娱亲”和“郭巨埋儿”两个故事时所引起的强烈反感，形象地揭露了封建孝道的虚伪和残酷，揭示了旧中国儿童的可怜。`,
    4: `《五猖会》——五猖会是一个迎神赛会，在童年的“我”的心目中是一个节日。记述儿时盼望观看迎神赛会的急切，兴奋的心情，和被父亲强迫背诵《鉴略》的扫兴而痛苦的感受。指出强制的封建教育对儿童天性的压制和摧残。`,
    5: `《无常》——无常是个具有人情味的鬼，去勾魂的时候，看到母亲哭死去的儿子那么悲伤，决定放儿子“还阳半刻”，结果被顶头上司阎罗王打了四十大棒。文章在回忆无常的时候，时不时加进几句对现实所谓正人君子的讽刺，虚幻的无常给予当时鲁迅寂寞悲凉的心些许的安慰。`,
    6: `《从百草园到三味书屋》——描述了色调不同，情韵各异的两大景片：百草园和三味书屋。作者写百草园，以“乐”为中心，采用白描手法，以简约生动的文字，描绘了一个奇趣无穷的儿童乐园，其间穿插“美女蛇”的传说和冬天雪地捕鸟的故事，动静结合，详略得当，趣味无穷。三味书屋则是一个充全不同的世界，作者逼真地写出了三味书屋的陈腐味，说它是“全城中称为最严厉的书塾”，儿童在那里受到规矩的束缚。但作者并末将三味书屋写得死气沉沉，而是通过课间学生溜到后园嬉耍，老私塾先生在课堂上入神读书学生乘机偷乐两个小故事的叙述，使三味书屋充满了谐趣，表现了儿童不可压抑的快乐天性。`,
    7: `《父亲的病》——父亲被江湖庸医耽误，死去了，一直是埋在鲁迅心中的痛苦。文章重点回忆儿时为父亲延医治病的情景，描述了几位“名医”的行医态度、作风、开方等种种表现，揭示了这些人巫医不分、故弄玄虚、勒索钱财、草菅人命的实质。`,
    8: `《琐记》——鲁迅在这篇文章里主要回忆了自己离开绍兴去南京求学的过程。作品描述了当时的江南水师学堂和矿务铁路学堂的种种弊端和求知的艰难，批评了洋务派办学的“乌烟瘴气”。作者记述了最初接触进化论的兴奋心情和不顾老辈反对，如饥如渴地阅读《天演论》的情景，表现出探求真理的强烈欲望。`,
    9: `《藤野先生》——记录作者在日本留学时期的学习生活，叙述在仙台医专受日本学生歧视、侮辱和决定弃医从文的经过。作者突出地记述了日本老师藤野先生的严谨、正直、热诚、没有民族偏见的高尚品格，表达了对藤野先生深情的怀念。`,
    10: `《范爱农》——追叙作者在日留学时和回国后与范爱农接触的几个生活片段，描述了范爱农在革命前不满黑暗社会、追求革命，辛亥革命后又备受打击迫害的遭遇，表现了对旧民主革命的失望和对这位正直倔强的爱国者的同情和悼念。`
};

const chapterList = document.getElementById('chapter-list');
const chapterContent = document.getElementById('chapter-content');
const navigation = document.getElementById('navigation');
const prevChapter = document.getElementById('prev-chapter');
const nextChapter = document.getElementById('next-chapter');
let currentChapter = null;

chapterList.addEventListener('click', function (event) {
    event.preventDefault();
    if (event.target.tagName === 'A') {
        currentChapter = parseInt(event.target.dataset.chapter);
        showChapter(currentChapter);
    }
});

prevChapter.addEventListener('click', function () {
    if (currentChapter > 1) {
        currentChapter--;
        showChapter(currentChapter);
    }
});

nextChapter.addEventListener('click', function () {
    if (currentChapter < 10) {
        currentChapter++;
        showChapter(currentChapter);
    }
});

function showChapter(chapterNumber) {
    const content = chapterContents[chapterNumber];
    if (content) {
        chapterContent.innerHTML = `<h3>${getChapterTitle(chapterNumber)}</h3><p>${content}</p>`;
        navigation.style.display = 'block';
    }
}

function getChapterTitle(chapterNumber) {
    const links = chapterList.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
        if (parseInt(links[i].dataset.chapter) === chapterNumber) {
            return links[i].textContent;
        }
    }
    return '';
}    