#!/usr/bin/env node
// 🤔 https://cnodejs.org/topic/50f18a44df9e9fcc5824ada5
// 🤔 https://www.cnblogs.com/litifeng/p/8550914.html
var program = require('commander');
var color = require('colors-cli/toxic')
var appInfo = require('./../package.json');
var resume = require('../lib/resume.js');
var info = require('./../lib/info.json');
var basicinfo = info.basicinfo;//基本信息数据：
var log = console.log;

program
    // .allowUnknownOption()//不报错误
    .version(appInfo.version)
    .usage('这里是我私人玩耍的命令哦！[options] <package>')
    .parse(process.argv);

program
    .command('resume [cmd]')
    .alias('rs')
    .description(' Ⓦ Ⓒ Ⓙ 这里是我的简历详情！'.x29)
    .option("-b, --basicinfo [type]", "基本信息")
    .option("-e, --education [type]", "教育经历")
    .option("-i, --itskill   [type]", "IT技能")
    .action(function(cmd, options){
        var nm = typeof options.name=='string'?options.name:""
        // log('resume "%s" 使用 %s 模式', cmd, nm);
        // log("test:",program);
        resume(cmd,options);

    }).on('--help', function() {

        // 图片文字 http://ascii.mastervb.net/text_to_ascii.php

        // log('█░░░█ █▀▀ ░░▀');
        // log('█▄█▄█ █░░ ░░█');
        // log('░▀░▀░ ▀▀▀ █▄█');

        // log('Ⓦ Ⓒ Ⓙ');


        log('            ╭╮'.x93);
        log('   ╭╮╭╮╭┳━━╮╰╯'.x93);
        log('   ┃╰╯╰╯┃╭━╯╭╮'.x93);
        log('   ╰╮╭╮╭┫╰━╮┃┃'.x93);
        log('    ╰╯╰╯╰━━╯┃┃'.x93);
        log('           ╭╯┃'.x93);
        log('           ╰━╯'.x93);

        // log(' __     __     ______       __    ');
        // log('/\\ \\  _ \\ \\   /\\  ___\\     /\\ \\   ');
        // log('\\ \\ \\/ ".\\ \\  \\ \\ \\____   _\\_\\ \\  ');
        // log(' \\ \\__/".~\\_\\  \\ \\_____\\ /\\_____\\ ');
        // log('  \\/_/   \\/_/   \\/_____/ \\/_____/ ');


        // log('  basicinfo 说明:');
        log();
        log('    rs  预览简历');
        log();
        log('    -b, --basicinfo 基本信息');
        for (var a in basicinfo.data) {
            log("       "+ a + ': ' + basicinfo.data[a].info)
        };
        log('    -e, --education 教育经历');
        log('    -i, --itskill 教育经历');
        // log('    $ wcj resume ss');
        log();
    });

//默认不传参数输出help
if (!process.argv[2]) {
    program.help();
    console.log();
}

program.parse(process.argv);
