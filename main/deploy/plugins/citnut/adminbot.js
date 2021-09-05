let ad = `admin của bot này là Nguyễn Thanh Chính\r\n---\r\ncontact: https://fb.com/nguyen.thanh.chinhs\r\n---\r\nđây là kb2abot :))`;

module.exports = {
	name: "xem ad bot",
	// tên thân thiện của plugin (để hiển thị trong danh sách câu lệnh)
	keywords:["adbot", "adminbot"],
	// Là các từ khóa để gọi plugin adbot (có thể có nhiều cái)

	description: "plugin này dùng để xem thông tin của admin bot",
	// Là nội dung của plugin (dùng để hiển thị trong hướng dẫn chi tiết)

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
		//let now = new Date();
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
		fca.sendMessage(ad, message.threadID, message.messageID)
		// Được gọi khi có member xài lệnh của mình
		// Là cốt lõi của plugin không có phần này thì có nghĩa sẽ không có chuyện
		// gì xảy ra khi gọi plugin (để hideFromHelp true nữa là plugin như batman)
	}
}
