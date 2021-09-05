const axios = require("axios");
module.exports = {
	name: "lịch Việt Nam",
	// Tên thân thiện của plugin (hiển thị trong danh sách câu lệnh)

	keywords: ["calendar"],

	guide: '',

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
		const res = await axios.get(`https://api.vangbanlanhat.tk/other?type=calendar`);
		const data = res.data.data.solar;

		let weekday = null;
		if (data.weekday == 1){
			weekday = `thứ 2`
		};

		if (data.weekday == 2){
			weekday = `thứ 3`
		};

		if (data.weekday == 3){
			weekday = `thứ 4`
		};

		if (data.weekday == 4){
			weekday = `thứ 5`
		};

		if (data.weekday == 5){
			weekday = `thứ 6`
		};

		if (data.weekday == 6){
			weekday = `thứ 7`
		};

		if (data.weekday == 7){
			weekday = "chủ nhật"
		};
		//let weekday = data.weekday;
		let day = data.day;
		let month = data.month;
		let year = data.year;

		fca.sendMessage(`hôm nay là:\n\r${weekday} ngày ${day} tháng ${month} năm ${year}`, message.threadID, message.messageID)
		// Được gọi khi có member xài lệnh của mình
		// Là cốt lõi của plugin không có phần này thì có nghĩa sẽ không có chuyện
		// gì xảy ra khi gọi plugin (để hideFromHelp true nữa là plugin như batman)
	}
};
