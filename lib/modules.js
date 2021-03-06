/*------------------------------------*\
	NODE MODULES
\*------------------------------------*/
/* jslint node: true */

/**
 * Require all native modules from Node.js API required by NodeAtlas and set them into `NA#modules`.
 * @publics
 * @function initNodeModules
 * @memberOf NA#
 * @this NA
 */
exports.initNodeModules = function () {
	var NA = this;

	/**
	 * All node.js native modules required by NodeAtlas.
	 * @namespace modules
	 * @type {Object}
	 * @alias modules
	 * @memberOf NA#
	 */
	NA.modules = {};

	/**
	 * Allow you to manage read/write on files.
	 * @alias fs
	 * @type {Object}
	 * @memberOf NA#modules
	 * @see {@link http://nodejs.org/api/fs.html File System}
	 */
	NA.modules.fs = require("fs");

	/**
	 * Allow you to use many features of the HTTP protocol.
	 * @alias http
	 * @type {Object}
	 * @memberOf NA#modules
	 * @see {@link http://nodejs.org/api/http.html HTTP}
	 */
	NA.modules.http = require("http");

	/**
	 * Allow you to use many features of the HTTPs protocol.
	 * @alias https
	 * @type {Object}
	 * @memberOf NA#modules
	 * @see {@link http://nodejs.org/api/https.html HTTPs}
	 */
	NA.modules.https = require("https");

	/**
	 * Allow you to handle and to transform url paths.
	 * @alias url
	 * @type {Object}
	 * @memberOf NA#modules
	 * @see {@link http://nodejs.org/api/url.html URL}
	 */
	NA.modules.url = require("url");

	/**
	 * Allow you to handle and to transform file paths.
	 * @alias path
	 * @type {Object}
	 * @memberOf NA#modules
	 * @see {@link http://nodejs.org/api/path.html Path}
	 */
	NA.modules.path = require("path");
};

/**
 * Load all NPM modules to run a Web Server.
 * @private
 * @function loadServerModules
 * @memberOf NA~
 * @param {NA} NA NodeAtlas instance.
 */
function loadServerModules(NA) {

	/**
	 * An advanced web server.
	 * @function express
	 * @memberOf NA#modules
	 * @external express
	 * @see {@link http://expressjs.com/ Express.js}
	 */
	NA.modules.express = require("express");

	/**
	 * Parse HTML for POST methods.
	 * @function bodyParser
	 * @memberOf NA#modules
	 * @external body-parser
	 * @see {@link https://github.com/expressjs/body-parser body-parser}
	 */
	NA.modules.bodyParser = require("body-parser");

	/**
	 * Manage session of the server.
	 * @function express-session
	 * @memberOf NA#modules
	 * @external express-session
	 * @see {@link https://github.com/expressjs/session express-session}
	 */
	NA.modules.session = require("express-session");

	/**
	 * Parse Cookies for keep connection.
	 * @function cookieParser
	 * @memberOf NA#modules
	 * @external cookie-parser
	 * @see {@link https://github.com/expressjs/cookie-parser cookie-parser}
	 */
	NA.modules.cookieParser = require("cookie-parser");

	/**
	 * Compress code before send it to the client.
	 * @function compress
	 * @memberOf NA#modules
	 * @external compression
	 * @see {@link https://github.com/expressjs/compression compression}
	 */
	NA.modules.compress = require("compression");

	/**
	 * A command tool for run NodeAtlas as CLI.
	 * @alias commander
	 * @type {Object}
	 * @memberOf NA#modules
	 * @external commander
	 * @see {@link https://github.com/tj/commander.js commander.js}
	 */
	NA.modules.commander = require("commander");

	/**
	 * node.js realtime framework server.
	 * @function socketio
	 * @memberOf NA#modules
	 * @external socketio
	 * @see {@link https://www.npmjs.org/package/socket.io Socket.io}
	 */
	NA.modules.socketio = require("socket.io");
}

/**
 * Load all NPM modules for manipulate HTML render.
 * @private
 * @function loadHtmlModules
 * @memberOf NA~
 * @param {NA} NA NodeAtlas instance.
 */
function loadHtmlModules(NA) {

	/**
	 * EJS cleans the HTML out of your JavaScript with client side templates.
	 * @alias ejs
	 * @type {Object}
	 * @memberOf NA#modules
	 * @external ejs
	 * @see {@link http://www.embeddedjs.com/ EJS}
	 */
	NA.modules.ejs = require("ejs");

	/**
	 * A clean, whitespace-sensitive template language for writing HTML.
	 * @alias pug
	 * @type {Object}
	 * @memberOf NA#modules
	 * @external pug
	 * @see {@link https://pugjs.org/ PUG}
	 */
	NA.modules.pug = require("pug");

	/**
	 * Tiny, fast, and elegant implementation of core jQuery designed specifically for the server.
	 * @function cheerio
	 * @memberOf NA#modules
	 * @external cheerio
	 * @see {@link https://www.npmjs.org/package/cheerio cheerio}
	 */
	NA.modules.cheerio = require("cheerio");
}

/**
 * Load all NPM modules to enhance NodeAtlas.
 * @private
 * @function loadUtilsModules
 * @memberOf NA~
 * @param {NA} NA NodeAtlas instance.
 */
function loadUtilsModules(NA) {

	/**
	 * Higher-order functions and common patterns for asynchronous code.
	 * @alias async
	 * @type {Object}
	 * @memberOf NA#modules
	 * @external async
	 * @see {@link https://www.npmjs.com/package/async async}
	 */
	NA.modules.async = require("async");

	/**
	 * An implementation of heritage.
	 * @function extend
	 * @memberOf NA#modules
	 * @external extend
	 * @see {@link https://www.npmjs.org/package/extend extend}
	 */
	NA.modules.extend = require("extend");

	/**
	 * Open a file or url in the user's preferred application.
	 * @function open
	 * @memberOf NA#modules
	 * @external open
	 * @see {@link https://www.npmjs.org/package/open open}
	 */
	NA.modules.open = require("open");

	/**
	 * Make all directories in a path, like mkdir -p.
	 * @function mkpath
	 * @memberOf NA#modules
	 * @external mkpath
	 * @see {@link https://www.npmjs.org/package/mkpath mkpath}
	 */
	NA.modules.mkpath = require("mkpath");

	/**
	 * Easy used "copy-dir" method, even use a filter, copy a file or directory to another path.
	 * @function copyDir
	 * @memberOf NA#modules
	 * @external copy-dir
	 * @see {@link https://www.npmjs.com/package/copy-dir}
	 */
	NA.modules.copyDir = require("copy-dir");
}

/**
 * Load all NPM modules for preproccessing, minification, obfuscation and optimization.
 * @private
 * @function loadOptimizationsModules
 * @memberOf NA#
 * @param {NA} NA NodeAtlas instance.
 */
 function loadOptimizationsModules(NA) {

	/**
	 * Minify GIF, JPEG and PNG images.
	 * @function imagemin
	 * @memberOf NA#modules
	 * @external imagemin
	 * @see {@link https://www.npmjs.com/package/imagemin imagemin}
	 */
	NA.modules.imagemin = require("imagemin");
	NA.modules.jpegtran = require("imagemin-jpegtran");
	NA.modules.optipng = require("imagemin-optipng");
	NA.modules.gifsicle = require("imagemin-gifsicle");
	NA.modules.svgo = require("imagemin-svgo");

	/**
	 * CSS parser.
	 * @function cssParse
	 * @memberOf NA#modules
	 * @external css-parse
	 * @see {@link https://www.npmjs.com/package/css-parse css-parse}
	 */
	NA.modules.cssParse = require("css-parse");

	/**
	 * A fast, efficient, and well tested CSS minifier for node.js.
	 * @function cleanCss
	 * @memberOf NA#modules
	 * @external clean-css
	 * @see {@link https://github.com/jakubpawlowicz/clean-css clean-css}
	 */
	NA.modules.cleanCss = require("clean-css");

	/**
	 * uglify-es is an ECMAScript 2015 parser, minifier, compressor and beautifier toolkit.
	 * @alias uglifyEs
	 * @type {Object}
	 * @memberOf NA#modules
	 * @external uglify-es
	 * @see {@link https://github.com/mishoo/UglifyJS2/tree/harmony UglifyES}
	 */
	NA.modules.uglifyEs = require("uglify-es");

	/**
	 * An autoprefixer plugin for stylus.
	 * @function prefixStylus
	 * @memberOf NA#modules
	 * @external prefixStylus
	 * @see {@link https://www.npmjs.com/package/autoprefixer-stylus prefixStylus}
	 */
	NA.modules.prefixStylus = require("autoprefixer-stylus");

	/**
	 * Robust, expressive, and feature-rich CSS superset
	 * @function stylus
	 * @memberOf NA#modules
	 * @external stylus
	 * @see {@link https://www.npmjs.com/package/stylus stylus}
	 */
	NA.modules.stylus = require("stylus");

	/**
	 * Uses autoprefixer to add prefixes to css after conversion from less.
	 * @alias prefixLess
	 * @type {Object}
	 * @memberOf NA#modules
	 * @external prefixLess
	 * @see {@link https://www.npmjs.com/package/less-plugin-autoprefix prefixLess}
	 */
	NA.modules.prefixLess = require("less-plugin-autoprefix");

	/**
	 * The dynamic stylesheet language. http://lesscss.org.
	 * @alias less
	 * @type {Object}
	 * @memberOf NA#modules
	 * @external less
	 * @see {@link https://www.npmjs.com/package/less less}
	 */
	NA.modules.less = require("less");

	/**
	 * LESS.js middleware for connect.
	 * @alias lessMiddleware
	 * @type {Object}
	 * @memberOf NA#modules
	 * @external less-middleware
	 * @see {@link https://www.npmjs.com/package/less-middleware less-middleware}
	 */
	NA.modules.lessMiddleware = require("less-middleware");
	NA.modules.lessMiddlewareUtilities = require("less-middleware/lib/utilities");
}

/**
 * Require all NPM modules required by NodeAtlas and set them into `NA#modules`.
 * @public
 * @function initNpmModules
 * @memberOf NA#
 * @this NA
 */
exports.initNpmModules = function () {
	var NA = this;

	/* Load all modules. */
	loadServerModules(NA);
	loadHtmlModules(NA);
	loadUtilsModules(NA);
	loadOptimizationsModules(NA);
};