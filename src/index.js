const chalk = require('chalk');
var color_set = {
	normal: "#94ffa4",
	error: "#ff7878",
	warn: "#fffb78"
};

const setNormalColor = (color) => color_set.normal = color;
const setErrorColor = (color) => color_set.error = color;
const setWarnColor = (color) => color_set.warn = color;

const normal = (msg) => {
	let date = new Date();
	let date_time = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " | " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
	let log_msg = `[${date_time}] : ${msg}`;
	return chalk.hex(color_set.normal)(log_msg);
};

const error = (msg) => {
	let date = new Date();
	let date_time = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " | " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
	let log_msg = `[${date_time}] : ${msg}`;
	return chalk.hex(color_set.error)(log_msg);
};

const warn = (msg) => {
	let date = new Date();
	let date_time = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " | " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
	let log_msg = `[${date_time}] : ${msg}`;
	return chalk.hex(color_set.warn)(log_msg);
};

module.exports = {
	setNormalColor,
	setErrorColor,
	setWarnColor,
	normal,
	error,
	warn
};