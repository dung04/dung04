const axios = require("axios");
const fetch = require("node-fetch");
const streamBuffers = require("stream-buffers");
const { random, round } = kb2abot.helpers;
let cap = ["cùng tịnh tâm nào", "con đường đi thỉnh kinh còn tiếp", "nhạc tịnh tâm giúp tăng cường trí tuệ", "nam mô a a a...", "cục sì lầu ông pay lắc", "nhạc tịnh tâm chất lượng cao"];

module.exports = {
	
	name: "nhạc tịnh tâm",
	// Tên thân thiện của plugin (hiển thị trong danh sách câu lệnh)

	keywords: ["tinhtam", "tt"],
	description: "cùng tịnh tâm để giữ cho tâm hồn thanh thản",
	// Nội dung của plugin (hiển thị trong hướng dẫn chi tiết)

	guide: "",
	
	hookType: "*",
	childs: [],

	permission: {
		'*': '*'
	},
	datastoreDesign: {
		account: {
			global: {},
			local: {}
		},
		thread: {
			global: {},
			local: {}
		}
	},

	async onLoad() {
		// Được gọi ngay sau khi load xong plugin
		// Chủ yếu dùng để log thôi không quan trọng
		// (Hoặc cũng có thể chuẩn bị các async function bằng await)
	},

	async onMessage(message, reply) {
		// Được gọi mỗi khi có message nhắn tới (kể cả khi dùng lệnh)
		// Chủ yếu dùng để làm mấy plugin kiểu gián điệp hoặc game
		// Xử lí mọi tin nhắn mà không cần prefix
	},

	async onCall(message, reply) {
		fca.sendMessage("đang tải xuống", message.threadID, message.messageID);		

		let r = await fetch(`https://drive.google.com/u/0/uc?id=1WrGXwkA2U0u7w002euiEHAbTeYaJSYTo&export=download`);

		if (r.status == 200) {
			let buf = await r.buffer();
			let music = new streamBuffers.ReadableStreamBuffer({frequency: 10, chunkSize: 2048});
			music.path = "tinhtam.mp3", music.put(buf), music.stop();
			fca.sendMessage({body: cap[round(random(0,5), 0)], attachment: music}, message.threadID, message.messageID)
		}else {
			fca.sendMessage("không thể tải nhạc!", message.threadID, message.messageID);
			console.newLogger.error(`không thể tải nhạc! status: ${r.status}`)
		}
		// Được gọi khi có member xài lệnh của mình
		// Là cốt lõi của plugin không có phần này thì có nghĩa sẽ không có chuyện
		// gì xảy ra khi gọi plugin (để hideFromHelp true nữa là plugin như batman)
	}
};
