//微信request方法封装

class Request {
	constructor(parms) {
		this.parms = parms;
	}
	get(url, data) {
		return this.request("GET", url, data);
	}
	post(url, data) {
		return this.request("POST", url, data);
	}
	request(method, url, data) {
		return new Promise((resolve, reject) => {
			wx.request({
				url: url,
				data: data,
				header: { "content-type": "application/json" },
				method: method,
				dataType: "json",
				responseType: "text",
				success: result => {
					resolve(result);
				},
				fail: () => {
					reject("网络错误");
				},
			});
		});
	}
	form(url, data) {
		return new Promise((resolve, reject) => {
			wx.request({
				url: url,
				data: data,
				header: { "content-type": "application/x-www-form-urlencoded" },
				method: "POST",
				dataType: "json",
				responseType: "text",
				success: result => {
					resolve(result);
				},
				fail: () => {
					reject("网络错误");
				},
			});
		});
	}

	fileUpload(params) {
		return new Promise((resolve, reject) => {
			wx.uploadFile({
				...params,
				success: r => {
					resolve(r);
				},
				fail: e => {
					reject(e);
				},
			});
		});
	}
}

module.exports = new Request();
