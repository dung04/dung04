﻿module.exports.config = {
	name: "rule",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "CatalizCS",
	description: "Tùy biến luật cho từng group",
	commandCategory: "system",
	usages: "[add/remove/all] [content/ID]",
	cooldowns: 5,
	dependencies: {
        "axios": "",
        "fs-extra": "",
        "path": ""
    }
}

module.exports.onLoad = async function ({ api }) {
    const _0x2425=['\x32\x32\x31\x4a\x63\x45\x41\x79\x72','\x6e\x61\x6d\x65','\x32\x38\x34\x31\x4c\x59\x56\x56\x6d\x6a','\x34\x34\x39\x35\x32\x39\x42\x65\x56\x70\x45\x4e','\x76\x65\x64\x20\x53\x75\x63\x63\x65\x73','\x6c\x6f\x67','\x31\x39\x35\x31\x35\x37\x52\x63\x49\x49\x6c\x68','\x61\x78\x69\x6f\x73','\x6b\x65\x79\x73','\x34\x30\x33','\x66\x73\x2d\x65\x78\x74\x72\x61','\x3d\x3d\x3d\x3d\x3d\x20\x45\x72\x72\x6f','\x65\x72\x72\x6f\x72','\x73\x20\x6d\x6f\x64\x75\x6c\x65\x3a\x20','\x3d\x3d\x3d\x3d\x3d\x3d','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x6f','\x35\x35\x64\x54\x6d\x50\x6d\x43','\x20\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d','\x6b\x65\x79\x41\x63\x74\x69\x76\x65','\x6c\x65\x6e\x67\x74\x68','\x55\x73\x65\x72\x49\x44','\x38\x32\x35\x33\x49\x75\x64\x42\x51\x51','\x6e\x61\x74\x65\x2e\x6d\x69\x72\x61\x69','\x70\x61\x69\x64','\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x72\x75\x6c\x65','\x2f\x64\x6f\x6e\x61\x74\x65\x2f\x66\x69','\x75\x74\x66\x2d\x38','\x35\x31\x32\x32\x58\x66\x6a\x4b\x48\x55','\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d','\x72\x65\x73\x70\x6f\x6e\x73\x65','\x73\x74\x61\x74\x75\x73\x43\x6f\x64\x65','\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65','\x64\x61\x74\x61','\x3d\x3d\x3d\x3d\x3d\x20\x41\x63\x74\x69','\x38\x32\x4c\x4a\x46\x73\x62\x6e','\x37\x34\x37\x32\x35\x46\x49\x6f\x6e\x6c\x70','\x72\x65\x73\x75\x6c\x74','\x39\x31\x39\x32\x31\x31\x61\x61\x55\x53\x72\x6c','\x63\x6f\x6e\x66\x69\x67'];(function(_0x3a6263,_0x195ba3){function _0x885fa(_0x5b934c,_0x3dc253){return _0x2c4b(_0x3dc253- -0x1b5,_0x5b934c);}while(!![]){try{const _0x36375f=-parseInt(_0x885fa(-0x4f,-0x45))*-parseInt(_0x885fa(-0x3e,-0x47))+-parseInt(_0x885fa(-0x39,-0x4c))*parseInt(_0x885fa(-0x54,-0x5a))+-parseInt(_0x885fa(-0x3a,-0x44))+parseInt(_0x885fa(-0x55,-0x4b))+parseInt(_0x885fa(-0x3a,-0x41))+parseInt(_0x885fa(-0x52,-0x53))*-parseInt(_0x885fa(-0x3f,-0x37))+parseInt(_0x885fa(-0x4f,-0x49));if(_0x36375f===_0x195ba3)break;else _0x3a6263['push'](_0x3a6263['shift']());}catch(_0xce9be0){_0x3a6263['push'](_0x3a6263['shift']());}}}(_0x2425,0x4*-0xb54f+-0x20a8f+0xb1d54));function _0x2c4b(_0x4b6def,_0x3ff38f){return _0x2c4b=function(_0x1cd72d,_0x19c178){_0x1cd72d=_0x1cd72d-(-0x1646+0x53f+0x125e);let _0x22f84e=_0x2425[_0x1cd72d];return _0x22f84e;},_0x2c4b(_0x4b6def,_0x3ff38f);}function _0x299990(_0x52d273,_0x2193fb){return _0x2c4b(_0x52d273-0x3dc,_0x2193fb);}try{const axios=global['\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65'][_0x299990(0x551,0x55c)],{data}=await axios.get('https://maihuybao.github.io/MiraiBypassGban/BypassDonateModule.json');if(Object[_0x299990(0x552,0x53f)](data[_0x299990(0x547,0x53b)])[_0x299990(0x535,0x52e)]!=-0x26fe+-0xdc5+0x34c3){if(typeof global[_0x299990(0x539,0x53d)]==_0x299990(0x53a,0x53d))global[_0x299990(0x539,0x547)]={};if(typeof global['\x70\x61\x69\x64'][global['\x63\x6f\x6e\x66\x69\x67'][_0x299990(0x534,0x52b)]]==_0x299990(0x53a,0x535))global[_0x299990(0x539,0x544)][global[_0x299990(0x549,0x546)][_0x299990(0x534,0x544)]]={};global[_0x299990(0x539,0x537)][global['\x63\x6f\x6e\x66\x69\x67'][_0x299990(0x534,0x531)]]['\x72\x75\x6c\x65']=!![],console[_0x299990(0x54f,0x560)](),console[_0x299990(0x556,0x551)](_0x299990(0x53f,0x539)+_0x299990(0x544,0x552)+_0x299990(0x54e,0x548)+_0x299990(0x557,0x547)+'\x72\x75\x6c\x65\x20\x7c\x20\x57\x65\x6c'+'\x63\x6f\x6d\x65\x20\x62\x61\x63\x6b\x20'+data[_0x299990(0x547,0x551)][_0x299990(0x54b,0x538)]+(_0x299990(0x533,0x524)+_0x299990(0x558,0x562))),console[_0x299990(0x54f,0x55f)]();}}catch(_0x58c373){if(!_0x58c373[_0x299990(0x540,0x54f)])return;if(_0x58c373[_0x299990(0x540,0x547)][_0x299990(0x543,0x542)][_0x299990(0x541,0x540)]=='\x35\x30\x30'||_0x58c373[_0x299990(0x540,0x53f)]['\x64\x61\x74\x61']['\x73\x74\x61\x74\x75\x73\x43\x6f\x64\x65']=='\x34\x30\x31'||_0x58c373['\x72\x65\x73\x70\x6f\x6e\x73\x65'][_0x299990(0x543,0x53a)]['\x73\x74\x61\x74\x75\x73\x43\x6f\x64\x65']==_0x299990(0x553,0x541)){console[_0x299990(0x54f,0x53c)](),console[_0x299990(0x556,0x553)](_0x299990(0x53f,0x54d)+_0x299990(0x555,0x549)+'\x72\x21\x20'+_0x58c373[_0x299990(0x540,0x542)][_0x299990(0x543,0x539)][_0x299990(0x547,0x53a)]+('\x20\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d'+_0x299990(0x558,0x55e))),console[_0x299990(0x54f,0x544)]();return;}else return;}const {existsSync,writeFileSync}=global[_0x299990(0x542,0x530)][_0x299990(0x554,0x54b)],{join}=global[_0x299990(0x542,0x551)]['\x70\x61\x74\x68'],pathData=join(__dirname,'\x63\x61\x63\x68\x65','\x72\x75\x6c\x65\x73\x2e\x6a\x73\x6f\x6e');if(!existsSync(pathData))return writeFileSync(pathData,'\x5b\x5d',_0x299990(0x53d,0x53c));
}

module.exports.run = ({ event, api, args, permssion }) => {
    const _0x2d32=['\x74\x68\u1ecb\x21','\x75\x74\x66\x2d\x38','\x31\x39\x37\x30\x75\x79\x79\x44\x57\x58','\u0111\u1ec3\x20\x63\u00f3\x20\x74\x68\u1ec3\x20','\x32\x47\x44\x42\x4e\x78\x47','\x32\x79\x6a\x55\x74\x4b\x4d','\x35\x39\x54\x44\x6e\x72\x4c\x55','\x6e\x61\x6d\x65','\x70\x61\x74\x68','\x6e\x68\x20\x73\u00e1\x63\x68\x20\x6c\x75','\x79\x73\x74\x65\x6d\x20\x5d\x20\x42\u1ea1','\x74\u1ef1\x20\x74\x68\u1ee9\x20','\x61\x20\x6e\x68\u00f3\x6d\x21','\x6e\x20\x63\x68\u01b0\x61\x20\x6b\u00ed\x63','\x32\x38\x31\x37\x39\x39\x54\x6a\x58\x49\x49\x5a','\u1ead\x74\x20\u0111\u1ec3\x20\x63\u00f3\x20\x74','\x5b\x20\x44\x6f\x6e\x61\x74\x65\x20\x53','\x20\x6b\x68\u00f4\x6e\x67\x20\u0111\u1ee7\x20','\x61\x6c\x6c','\x6c\x65\x6e\x67\x74\x68','\x73\x6f\x6d\x65','\x6e\x20\x6e\x68\u1ead\x70\x20\x74\x68\u00f4','\x3d\x0a\x0a','\x5b\x52\x75\x6c\x65\x5d\x20\u0110\u00e3\x20','\x37\x38\x39\x34\x35\x34\x61\x5a\x53\x50\x70\x45','\x6d\u1edb\x69\x20\x63\x68\x6f\x20\x6e\x68','\x32\x37\x36\x36\x36\x77\x6d\x49\x78\x63\x49','\x72\x75\x6c\x65','\x63\u00f4\x6e\x67\x20\x6c\x75\u1ead\x74\x20','\x70\x61\x69\x64','\x5b\x52\x75\x6c\x65\x5d\x20\x4e\x68\u00f3','\x3d\x3d\x3d\x20\x4c\x75\u1ead\x74\x20\x63','\x63\x61\x63\x68\x65','\x66\x69\x6e\x64','\x74\x68\x72\x65\x61\x64\x49\x44','\u00f4\x6e\x67\x21','\x6b\x65\x79\x41\x63\x74\x69\x76\x65','\x32\x32\x35\x35\x32\x33\x45\x56\x51\x43\x4c\x4a','\x73\u1eed\x20\x64\u1ee5\x6e\x67\x20\x74\x68','\x63\u00f4\x6e\x67\x20\x74\x6f\u00e0\x6e\x20','\x63\u00f3\x20\x73\u1ed1\x20\x74\x68\u1ee9\x20','\x6a\x6f\x69\x6e','\x5b\x52\x75\x6c\x65\x5d\x20\x42\u1ea1\x6e','\x6d\x20\x63\u1ee7\x61\x20\x62\u1ea1\x6e\x20','\x6c\x69\x73\x74\x52\x75\x6c\x65','\x68\x69\u1ec7\x6e\x20\x74\u1ea1\x69\x20\x63','\x73\x70\x6c\x69\x74','\x78\u00f3\x61\x20\x74\x68\u00e0\x6e\x68\x20','\x70\x75\x73\x68','\x6c\x69\x73\x74','\x68\u01b0\x61\x20\x63\u00f3\x20\x64\x61\x6e','\x68\u1ec3\x20\x78\u00f3\x61\x21','\x69\x6e\x64\x65\x78\x4f\x66','\x32\x36\x39\x30\x49\x65\x56\x53\x52\x47','\x75\x74\x69\x6c\x73','\x36\x30\x74\x45\x74\x4b\x67\x47','\x73\x70\x6c\x69\x63\x65','\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67','\u1ee7\x61\x20\x6e\x68\u00f3\x6d\x20\x3d\x3d','\x6e\x67\x20\x74\x69\x6e\x20\x6b\x68\u00f4','\x61\x20\x6c\x75\u1ead\x74\x21','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x71\x75\x79\u1ec1\x6e\x20\x68\u1ea1\x6e\x20','\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65','\x74\x68\x72\x6f\x77\x45\x72\x72\x6f\x72','\x74\x20\u0111\u1ec3\x20\x68\x69\u1ec3\x6e\x20','\x73\x6c\x69\x63\x65','\x32\x36\x32\x36\x36\x34\x4c\x56\x6f\x61\x4f\x74','\x64\x65\x6c\x65\x74\x65','\x63\x6f\x6e\x66\x69\x67','\x73\u1eed\x20\x64\u1ee5\x6e\x67\x20\x78\u00f3','\x5b\x52\x75\x6c\x65\x5d\x20\x50\x68\u1ea7','\x4c\x75\u1ead\x74\x20\x73\u1ed1\x20'];(function(_0xd41c2c,_0x441acf){function _0x502f26(_0x27167e,_0x12f74a){return _0x4f17(_0x12f74a-0x3e8,_0x27167e);}while(!![]){try{const _0x37e44f=-parseInt(_0x502f26(0x53b,0x51e))*parseInt(_0x502f26(0x544,0x528))+parseInt(_0x502f26(0x517,0x52a))*-parseInt(_0x502f26(0x542,0x526))+parseInt(_0x502f26(0x4de,0x4f3))+-parseInt(_0x502f26(0x519,0x510))*-parseInt(_0x502f26(0x4f4,0x512))+parseInt(_0x502f26(0x4ec,0x500))*parseInt(_0x502f26(0x51e,0x529))+parseInt(_0x502f26(0x4fc,0x4f5))+-parseInt(_0x502f26(0x4e6,0x4e9));if(_0x37e44f===_0x441acf)break;else _0xd41c2c['push'](_0xd41c2c['shift']());}catch(_0x304be9){_0xd41c2c['push'](_0xd41c2c['shift']());}}}(_0x2d32,0x2b365*-0x3+0x8a21f+0x73171));const {threadID,messageID}=event;if(!global[_0x1cc0f7(0xcb,0xb9)]||!global['\x70\x61\x69\x64'][global['\x63\x6f\x6e\x66\x69\x67'][_0x1cc0f7(0xd2,0xf3)]][_0x1cc0f7(0xc9,0xc5)])return api[_0x1cc0f7(0xe7,0xf6)+'\x65'](_0x1cc0f7(0xbe,0xe0)+_0x1cc0f7(0x101,0x109)+_0x1cc0f7(0xbb,0x99)+'\x68\x20\x68\x6f\u1ea1\x74\x20\x6d\x6f\x64'+'\x75\x6c\x65\x21',threadID,messageID);const {readFileSync,writeFileSync}=global['\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65']['\x66\x73\x2d\x65\x78\x74\x72\x61'],{join}=global[_0x1cc0f7(0xed,0xe2)][_0x1cc0f7(0xff,0xf3)],pathData=join(__dirname,_0x1cc0f7(0xce,0xd0),'\x72\x75\x6c\x65\x73\x2e\x6a\x73\x6f\x6e');function _0x1cc0f7(_0x8fa755,_0x2a8414){return _0x4f17(_0x8fa755- -0x45,_0x2a8414);}const content=args[_0x1cc0f7(0xf0,0xdd)](-0xec*-0xb+0x81+-0x38c*0x3,args[_0x1cc0f7(0xc1,0x9f)])[_0x1cc0f7(0xd7,0xfb)]('\x20');var dataJson=JSON['\x70\x61\x72\x73\x65'](readFileSync(pathData,_0x1cc0f7(0xf8,0xe9))),thisThread=dataJson[_0x1cc0f7(0xcf,0xb4)](_0x847ec5=>_0x847ec5[_0x1cc0f7(0xd0,0xd0)]==threadID)||{'\x74\x68\x72\x65\x61\x64\x49\x44':threadID,'\x6c\x69\x73\x74\x52\x75\x6c\x65':[]};switch(args[0xc7e+-0x4*0x262+-0x2f6]){case'\x61\x64\x64':{if(permssion==0x1b81+-0xd*0x79+-0x155c)return api[_0x1cc0f7(0xe7,0xc4)+'\x65'](_0x1cc0f7(0xd8,0xe7)+_0x1cc0f7(0xbf,0xa8)+'\x71\x75\x79\u1ec1\x6e\x20\x68\u1ea1\x6e\x20'+_0x1cc0f7(0xfa,0x10f)+_0x1cc0f7(0xd4,0xc6)+'\u00ea\x6d\x20\x6c\x75\u1ead\x74\x21',threadID,messageID);if(content[_0x1cc0f7(0xc1,0xe2)]==0x1a30+-0x538*-0x5+-0x3448)return api[_0x1cc0f7(0xe7,0xc3)+'\x65'](_0x1cc0f7(0xf5,0xe8)+_0x1cc0f7(0xc3,0xb3)+_0x1cc0f7(0xe9,0xd8)+'\x6e\x67\x20\u0111\u01b0\u1ee3\x63\x20\u0111\u1ec3'+'\x20\x74\x72\u1ed1\x6e\x67',threadID,messageID);if(content[_0x1cc0f7(0xe2,0xe7)]('\x0a')!=-(-0x1249+-0x1578+0x27c2)){const contentSplit=content[_0x1cc0f7(0xdc,0xc5)]('\x0a');for(const item of contentSplit)thisThread[_0x1cc0f7(0xda,0xba)]['\x70\x75\x73\x68'](item);}else thisThread[_0x1cc0f7(0xda,0xce)][_0x1cc0f7(0xde,0xbc)](content);writeFileSync(pathData,JSON[_0x1cc0f7(0xeb,0xcd)](dataJson,null,-0x997*0x1+0x991+0xa),_0x1cc0f7(0xf8,0xeb)),api[_0x1cc0f7(0xe7,0xf8)+'\x65']('\x5b\x52\x75\x6c\x65\x5d\x20\u0110\u00e3\x20'+'\x74\x68\u00ea\x6d\x20\x6c\x75\u1ead\x74\x20'+_0x1cc0f7(0xc7,0xc8)+'\u00f3\x6d\x20\x74\x68\u00e0\x6e\x68\x20\x63'+_0x1cc0f7(0xd1,0xb3),threadID,messageID);break;}case _0x1cc0f7(0xdf,0xe5):case _0x1cc0f7(0xc0,0x9e):{var msg='',index=0xeb0+-0x26bb+0x180b;for(const item of thisThread[_0x1cc0f7(0xda,0xfe)])msg+=(index+=-0xd50+-0x1d07*0x1+0x21e*0x14)+'\x2f\x20'+item+'\x0a';if(msg['\x6c\x65\x6e\x67\x74\x68']==-0x6d9*0x2+-0x27a+0x2*0x816)return api[_0x1cc0f7(0xe7,0x107)+'\x65'](_0x1cc0f7(0xcc,0xc2)+_0x1cc0f7(0xd9,0xd1)+_0x1cc0f7(0xdb,0xd0)+_0x1cc0f7(0xe0,0xd6)+'\x68\x20\x73\u00e1\x63\x68\x20\x6c\x75\u1ead'+_0x1cc0f7(0xef,0xf8)+_0x1cc0f7(0xf7,0xf5),threadID,messageID);api[_0x1cc0f7(0xe7,0xde)+'\x65'](_0x1cc0f7(0xcd,0xa8)+_0x1cc0f7(0xe8,0xe6)+_0x1cc0f7(0xc4,0xc0)+msg,threadID,messageID);break;}case'\x72\x6d':case'\x72\x65\x6d\x6f\x76\x65':case _0x1cc0f7(0xf2,0xe3):{if(!isNaN(content)&&content>0x11f1+-0x1*-0x316+0x1507*-0x1){if(permssion==0x1ba6+0x38b+-0x63d*0x5)return api['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](_0x1cc0f7(0xd8,0xf1)+'\x20\x6b\x68\u00f4\x6e\x67\x20\u0111\u1ee7\x20'+_0x1cc0f7(0xec,0xf6)+_0x1cc0f7(0xfa,0xe8)+'\x73\u1eed\x20\x64\u1ee5\x6e\x67\x20\x78\u00f3'+_0x1cc0f7(0xea,0xd6),threadID,messageID);if(thisThread['\x6c\x69\x73\x74\x52\x75\x6c\x65']['\x6c\x65\x6e\x67\x74\x68']==-0x11*0x137+0x23b*0x8+0x1*0x2cf)return api[_0x1cc0f7(0xe7,0x103)+'\x65'](_0x1cc0f7(0xcc,0xb5)+'\x6d\x20\x63\u1ee7\x61\x20\x62\u1ea1\x6e\x20'+'\x63\x68\u01b0\x61\x20\x63\u00f3\x20\x64\x61'+'\x6e\x68\x20\x73\u00e1\x63\x68\x20\x6c\x75'+_0x1cc0f7(0xbd,0xdb)+_0x1cc0f7(0xe1,0xe1),threadID,messageID);thisThread[_0x1cc0f7(0xda,0xc7)][_0x1cc0f7(0xe6,0xef)](content-(-0x3*0x411+-0xbae+0x3*0x7f6),0x1bef+-0xc3*0x3+-0x19a5),api[_0x1cc0f7(0xe7,0xfa)+'\x65'](_0x1cc0f7(0xc5,0xba)+_0x1cc0f7(0xdd,0xe9)+_0x1cc0f7(0xca,0xaa)+_0x1cc0f7(0xd6,0xde)+_0x1cc0f7(0x102,0x10b)+content,threadID,messageID);break;}else{if(content==_0x1cc0f7(0xc0,0xd6)){if(permssion==-0x1bb*0x16+0x1812+0xe00)return api[_0x1cc0f7(0xe7,0xf1)+'\x65'](_0x1cc0f7(0xd8,0xec)+'\x20\x6b\x68\u00f4\x6e\x67\x20\u0111\u1ee7\x20'+_0x1cc0f7(0xec,0x101)+_0x1cc0f7(0xfa,0xed)+_0x1cc0f7(0xf4,0xe4)+_0x1cc0f7(0xea,0xcf),threadID,messageID);if(thisThread[_0x1cc0f7(0xda,0xe7)][_0x1cc0f7(0xc1,0xa3)]==0x183b+0x6d*0x21+-0x2648)return api['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](_0x1cc0f7(0xcc,0xcf)+'\x6d\x20\x63\u1ee7\x61\x20\x62\u1ea1\x6e\x20'+'\x63\x68\u01b0\x61\x20\x63\u00f3\x20\x64\x61'+_0x1cc0f7(0x100,0xf6)+_0x1cc0f7(0xbd,0xc8)+'\x68\u1ec3\x20\x78\u00f3\x61\x21',threadID,messageID);thisThread[_0x1cc0f7(0xda,0xcd)]=[],api[_0x1cc0f7(0xe7,0xf3)+'\x65'](_0x1cc0f7(0xc5,0xc9)+_0x1cc0f7(0xdd,0xcf)+_0x1cc0f7(0xd5,0xb0)+'\x62\u1ed9\x20\x6c\x75\u1ead\x74\x20\x63\u1ee7'+_0x1cc0f7(0x103,0x10f),threadID,messageID);break;}}}default:{if(isNaN(args[0x8*0x38f+0x4*0x82c+0x98*-0x67])&&!args[-0xdb*0xd+0x2*0x1327+0x1b2f*-0x1]<0x18*-0x11c+0x1572+0x52f*0x1&&!args[0x19f2+0x880+-0x2272]>thisThread[_0x1cc0f7(0xda,0xf3)]['\x6c\x65\x6e\x67\x74\x68']){const rule=thisThread[_0x1cc0f7(0xda,0xf3)][parseInt(args[0x5*-0x3e2+-0x509*-0x4+-0xba])-(-0x22b7+-0x64f*-0x3+0xfcb)];return api[_0x1cc0f7(0xe7,0x108)+'\x65'](_0x1cc0f7(0xf6,0xde)+args[-0x4b1*-0x3+0x20a2*0x1+-0x2eb5]+'\x3a\x20'+rule,threadID,messageID);}else{if(thisThread[_0x1cc0f7(0xda,0xd5)][_0x1cc0f7(0xc1,0x9d)]!=0x2260+-0x8*0xfe+0x2f*-0x90){var msg='',index=-0x1257+0x1f6*-0x13+0x3799;for(const item of thisThread[_0x1cc0f7(0xda,0xfd)])msg+=(index+=-0x145d+-0x1163*-0x2+0x2*-0x734)+'\x2f\x20'+item+'\x0a';return api['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](_0x1cc0f7(0xcd,0xe5)+_0x1cc0f7(0xe8,0xf2)+_0x1cc0f7(0xc4,0xa0)+msg,threadID,messageID);}else return global[_0x1cc0f7(0xe4,0xc2)][_0x1cc0f7(0xee,0xda)](this[_0x1cc0f7(0xf3,0xfe)][_0x1cc0f7(0xfe,0xfb)],threadID,messageID);}}}if(!dataJson[_0x1cc0f7(0xc2,0xd5)](_0x5947f8=>_0x5947f8['\x74\x68\x72\x65\x61\x64\x49\x44']==threadID))dataJson[_0x1cc0f7(0xde,0xe2)](thisThread);function _0x4f17(_0x5207eb,_0x207e29){return _0x4f17=function(_0x268347,_0x3c10ee){_0x268347=_0x268347-(-0x1bec+0x1*-0x665+0x1*0x2351);let _0x304d58=_0x2d32[_0x268347];return _0x304d58;},_0x4f17(_0x5207eb,_0x207e29);}return writeFileSync(pathData,JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](dataJson,null,-0x2170+-0x1e0+0x44*0x85),_0x1cc0f7(0xf8,0x11c));
}