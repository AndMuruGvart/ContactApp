/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\n// eslint-disable-next-line func-names\r\nmodule.exports = function (useSourceMap) {\r\n    var list = []; // return the list of modules as css string\r\n    list.toString = function toString() {\r\n        return this.map(function (item) {\r\n            var content = cssWithMappingToString(item, useSourceMap);\r\n            if (item[2]) {\r\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\r\n            }\r\n            return content;\r\n        }).join('');\r\n    }; // import a list of modules into the list\r\n    // eslint-disable-next-line func-names\r\n    list.i = function (modules, mediaQuery, dedupe) {\r\n        if (typeof modules === 'string') {\r\n            // eslint-disable-next-line no-param-reassign\r\n            modules = [[null, modules, '']];\r\n        }\r\n        var alreadyImportedModules = {};\r\n        if (dedupe) {\r\n            for (var i = 0; i < this.length; i++) {\r\n                // eslint-disable-next-line prefer-destructuring\r\n                var id = this[i][0];\r\n                if (id != null) {\r\n                    alreadyImportedModules[id] = true;\r\n                }\r\n            }\r\n        }\r\n        for (var _i = 0; _i < modules.length; _i++) {\r\n            var item = [].concat(modules[_i]);\r\n            if (dedupe && alreadyImportedModules[item[0]]) {\r\n                // eslint-disable-next-line no-continue\r\n                continue;\r\n            }\r\n            if (mediaQuery) {\r\n                if (!item[2]) {\r\n                    item[2] = mediaQuery;\r\n                }\r\n                else {\r\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\r\n                }\r\n            }\r\n            list.push(item);\r\n        }\r\n    };\r\n    return list;\r\n};\r\nfunction cssWithMappingToString(item, useSourceMap) {\r\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\r\n    var cssMapping = item[3];\r\n    if (!cssMapping) {\r\n        return content;\r\n    }\r\n    if (useSourceMap && typeof btoa === 'function') {\r\n        var sourceMapping = toComment(cssMapping);\r\n        var sourceURLs = cssMapping.sources.map(function (source) {\r\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\r\n        });\r\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\r\n    }\r\n    return [content].join('\\n');\r\n} // Adapted from convert-source-map (MIT)\r\nfunction toComment(sourceMap) {\r\n    // eslint-disable-next-line no-undef\r\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\r\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\r\n    return \"/*# \".concat(data, \" */\");\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nconst root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nconst Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nconst redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\r\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nconst Check_1 = __webpack_require__(/*! ./Check */ \"./src/Check.tsx\");\r\nconst Login_1 = __importDefault(__webpack_require__(/*! ./Authentification/Login */ \"./src/Authentification/Login.tsx\"));\r\nconst SignUp_1 = __importDefault(__webpack_require__(/*! ./Authentification/SignUp */ \"./src/Authentification/SignUp.tsx\"));\r\nconst store_1 = __webpack_require__(/*! ./store/store */ \"./src/store/store.ts\");\r\nconst Break_1 = __webpack_require__(/*! ./shared/Break */ \"./src/shared/Break/index.ts\");\r\nconst store = redux_1.createStore(store_1.rootReducer, redux_devtools_extension_1.composeWithDevTools());\r\nfunction AppComponent() {\r\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store },\r\n        react_1.default.createElement(react_router_dom_1.BrowserRouter, null,\r\n            react_1.default.createElement(Layout_1.Layout, null,\r\n                react_1.default.createElement(Break_1.Break, { size: 20, top: true }),\r\n                react_1.default.createElement(react_router_dom_1.Link, { to: '/login' }, \" Login Form \"),\r\n                react_1.default.createElement(Break_1.Break, { size: 20, top: true }),\r\n                react_1.default.createElement(react_router_dom_1.Link, { to: '/signup' }, \" SignUp Form \"),\r\n                react_1.default.createElement(react_router_dom_1.Switch, null,\r\n                    react_1.default.createElement(react_router_dom_1.Route, { path: '/login', exact: true, component: Login_1.default }),\r\n                    react_1.default.createElement(react_router_dom_1.Route, { path: '/signup', exact: true, component: SignUp_1.default })),\r\n                react_1.default.createElement(Break_1.Break, { size: 20, top: true }),\r\n                react_1.default.createElement(Check_1.Check, null)))));\r\n}\r\n;\r\nexports.App = root_1.hot(() => react_1.default.createElement(AppComponent, null));\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/AppList.tsx":
/*!*************************!*\
  !*** ./src/AppList.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nconst Home_1 = __importDefault(__webpack_require__(/*! ./components/Home */ \"./src/components/Home.tsx\"));\r\nconst Create_1 = __importDefault(__webpack_require__(/*! ./components/customer/Create */ \"./src/components/customer/Create.tsx\"));\r\nconst Edit_1 = __importDefault(__webpack_require__(/*! ./components/customer/Edit */ \"./src/components/customer/Edit.tsx\"));\r\nclass AppList extends React.Component {\r\n    render() {\r\n        return (React.createElement(\"div\", null,\r\n            React.createElement(\"nav\", null,\r\n                React.createElement(\"ul\", null,\r\n                    React.createElement(\"li\", null,\r\n                        React.createElement(react_router_dom_1.Link, { to: '/' }, \" List \")),\r\n                    React.createElement(\"li\", null,\r\n                        React.createElement(react_router_dom_1.Link, { to: '/create' }, \" Create Customer \")))),\r\n            React.createElement(react_router_dom_1.Switch, null,\r\n                React.createElement(react_router_dom_1.Route, { path: '/', exact: true, component: Home_1.default }),\r\n                React.createElement(react_router_dom_1.Route, { path: '/create', exact: true, component: Create_1.default }),\r\n                React.createElement(react_router_dom_1.Route, { path: '/edit/:id', exact: true, component: Edit_1.default }))));\r\n    }\r\n}\r\nexports.default = react_router_dom_1.withRouter(AppList);\r\n\n\n//# sourceURL=webpack:///./src/AppList.tsx?");

/***/ }),

/***/ "./src/Authentification/Login.tsx":
/*!****************************************!*\
  !*** ./src/Authentification/Login.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst react_2 = __webpack_require__(/*! react */ \"react\");\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst store_1 = __webpack_require__(/*! ../store/store */ \"./src/store/store.ts\");\r\nfunction Login() {\r\n    const [formData, setFormData] = react_2.useState({\r\n        email: '',\r\n        password: '' // required\r\n    });\r\n    const value = react_redux_1.useSelector(state => state.tokenText);\r\n    const dispatch = react_redux_1.useDispatch();\r\n    function handleSubmit(e) {\r\n        e.preventDefault();\r\n        fetch('http://localhost:5000/login', {\r\n            method: 'POST',\r\n            headers: { 'Content-Type': 'application/json' },\r\n            body: JSON.stringify(formData)\r\n        })\r\n            .then(res => res.json())\r\n            .then(data => { if (data.accessToken)\r\n            dispatch(store_1.setToken(data.accessToken)); console.log(data.accessToken); });\r\n    }\r\n    function handleChange(e) {\r\n        setFormData(Object.assign(Object.assign({}, formData), { [e.target.name]: e.target.value }));\r\n    }\r\n    return (react_1.default.createElement(\"div\", null,\r\n        react_1.default.createElement(\"h1\", { className: 'mt-3' }, \"Login Form\"),\r\n        react_1.default.createElement(\"form\", { className: 'login-form', onSubmit: e => handleSubmit(e) },\r\n            react_1.default.createElement(\"input\", { className: 'form-control mb-2', type: 'text', placeholder: 'Email', value: formData.email, name: 'email', onChange: e => handleChange(e) }),\r\n            react_1.default.createElement(\"input\", { className: 'form-control mb-3', type: 'text', placeholder: 'Password', value: formData.password, name: 'password', onChange: e => handleChange(e) }),\r\n            react_1.default.createElement(\"button\", { className: 'btn btn-primary', type: 'submit' }, \"Login\"))));\r\n}\r\nexports.default = Login;\r\n\n\n//# sourceURL=webpack:///./src/Authentification/Login.tsx?");

/***/ }),

/***/ "./src/Authentification/SignUp.tsx":
/*!*****************************************!*\
  !*** ./src/Authentification/SignUp.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst react_2 = __webpack_require__(/*! react */ \"react\");\r\nfunction SignUp() {\r\n    const [formData, setFormData] = react_2.useState({\r\n        email: '',\r\n        password: '',\r\n        username: '' // optional\r\n    });\r\n    function handleSubmit(e) {\r\n        e.preventDefault();\r\n        fetch('http://localhost:5000/users', {\r\n            method: 'POST',\r\n            headers: { 'Content-Type': 'application/json' },\r\n            body: JSON.stringify(formData)\r\n        })\r\n            .then(res => res.json())\r\n            .then(data => console.log(data));\r\n    }\r\n    function handleChange(e) {\r\n        setFormData(Object.assign(Object.assign({}, formData), { [e.target.name]: e.target.value }));\r\n    }\r\n    return (react_1.default.createElement(\"div\", null,\r\n        react_1.default.createElement(\"h1\", { className: 'mt-3' }, \"SignUp Form\"),\r\n        react_1.default.createElement(\"form\", { className: 'login-form', onSubmit: e => handleSubmit(e) },\r\n            react_1.default.createElement(\"input\", { className: 'form-control mb-2', type: 'text', placeholder: 'Username', value: formData.username, name: 'username', onChange: e => handleChange(e) }),\r\n            react_1.default.createElement(\"input\", { className: 'form-control mb-2', type: 'text', placeholder: 'Email', value: formData.email, name: 'email', onChange: e => handleChange(e) }),\r\n            react_1.default.createElement(\"input\", { className: 'form-control mb-3', type: 'text', placeholder: 'Password', value: formData.password, name: 'password', onChange: e => handleChange(e) }),\r\n            react_1.default.createElement(\"button\", { className: 'btn btn-primary', type: 'submit' }, \"Sign Up\"))));\r\n}\r\nexports.default = SignUp;\r\n\n\n//# sourceURL=webpack:///./src/Authentification/SignUp.tsx?");

/***/ }),

/***/ "./src/Check.tsx":
/*!***********************!*\
  !*** ./src/Check.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Check = void 0;\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst AppList_1 = __importDefault(__webpack_require__(/*! ./AppList */ \"./src/AppList.tsx\"));\r\nfunction Check() {\r\n    const [data, setData] = react_1.useState(false);\r\n    const token = react_redux_1.useSelector(state => state.tokenText);\r\n    react_1.useEffect(() => {\r\n        if (token) {\r\n            setData(true);\r\n        }\r\n    }, [token]);\r\n    return (react_1.default.createElement(\"div\", null, (data) && (react_1.default.createElement(AppList_1.default, null))));\r\n}\r\nexports.Check = Check;\r\n\n\n//# sourceURL=webpack:///./src/Check.tsx?");

/***/ }),

/***/ "./src/components/Home.tsx":
/*!*********************************!*\
  !*** ./src/components/Home.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nclass Home extends React.Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = { customers: [] };\r\n    }\r\n    componentDidMount() {\r\n        axios_1.default.get(`http://localhost:5000/customers`).then(data => {\r\n            this.setState({ customers: data.data });\r\n        });\r\n    }\r\n    deleteCustomer(id) {\r\n        axios_1.default.delete(`http://localhost:5000/customers/${id}`).then(data => {\r\n            const index = this.state.customers.findIndex(customer => customer.id === id);\r\n            this.state.customers.splice(index, 1);\r\n            this.props.history.push('/');\r\n        });\r\n    }\r\n    render() {\r\n        const customers = this.state.customers;\r\n        return (React.createElement(\"div\", null,\r\n            customers.length === 0 && (React.createElement(\"div\", { className: \"text-center\" },\r\n                React.createElement(\"h2\", null, \"No contact found at the moment\"))),\r\n            React.createElement(\"div\", { className: \"container\" },\r\n                React.createElement(\"div\", { className: \"row\" },\r\n                    React.createElement(\"table\", { className: \"table table-bordered\" },\r\n                        React.createElement(\"thead\", { className: \"thead-light\" },\r\n                            React.createElement(\"tr\", null,\r\n                                React.createElement(\"th\", { scope: \"col\" }, \"Firstname\"),\r\n                                React.createElement(\"th\", { scope: \"col\" }, \"Lastname\"),\r\n                                React.createElement(\"th\", { scope: \"col\" }, \"Email\"),\r\n                                React.createElement(\"th\", { scope: \"col\" }, \"Phone\"),\r\n                                React.createElement(\"th\", { scope: \"col\" }, \"Address\"),\r\n                                React.createElement(\"th\", { scope: \"col\" }, \"Description\"),\r\n                                React.createElement(\"th\", { scope: \"col\" }, \"Actions\"))),\r\n                        React.createElement(\"tbody\", null, customers && customers.map(customer => React.createElement(\"tr\", { key: customer.id },\r\n                            React.createElement(\"td\", null, customer.first_name),\r\n                            React.createElement(\"td\", null, customer.last_name),\r\n                            React.createElement(\"td\", null, customer.email),\r\n                            React.createElement(\"td\", null, customer.phone),\r\n                            React.createElement(\"td\", null, customer.address),\r\n                            React.createElement(\"td\", null, customer.description),\r\n                            React.createElement(\"td\", null,\r\n                                React.createElement(\"div\", { className: \"d-flex justify-content-between align-items-center\" },\r\n                                    React.createElement(\"div\", { className: \"btn-group\", style: { marginBottom: \"20px\" } },\r\n                                        React.createElement(react_router_dom_1.Link, { to: `edit/${customer.id}`, className: \"btn btn-sm btn-outline-secondary\" }, \"Edit Customer \"),\r\n                                        React.createElement(\"button\", { className: \"btn btn-sm btn-outline-secondary\", onClick: () => this.deleteCustomer(customer.id) }, \"Delete Customer\"))))))))))));\r\n    }\r\n}\r\nexports.default = Home;\r\n\n\n//# sourceURL=webpack:///./src/components/Home.tsx?");

/***/ }),

/***/ "./src/components/customer/Create.tsx":
/*!********************************************!*\
  !*** ./src/components/customer/Create.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nclass Create extends React.Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.processFormSubmission = (e) => {\r\n            e.preventDefault();\r\n            this.setState({ loading: true });\r\n            const formData = {\r\n                first_name: this.state.first_name,\r\n                last_name: this.state.last_name,\r\n                email: this.state.email,\r\n                phone: this.state.phone,\r\n                address: this.state.address,\r\n                description: this.state.description,\r\n            };\r\n            this.setState({ submitSuccess: true, values: [...this.state.values, formData], loading: false });\r\n            axios_1.default.post(`http://localhost:5000/customers`, formData).then(data => [\r\n                setTimeout(() => {\r\n                    this.props.history.push('/');\r\n                }, 1500)\r\n            ]);\r\n        };\r\n        this.handleInputChanges = (e) => {\r\n            e.preventDefault();\r\n            this.setState({\r\n                [e.currentTarget.name]: e.currentTarget.value,\r\n            });\r\n        };\r\n        this.state = {\r\n            first_name: '',\r\n            last_name: '',\r\n            email: '',\r\n            phone: '',\r\n            address: '',\r\n            description: '',\r\n            values: [],\r\n            loading: false,\r\n            submitSuccess: false,\r\n        };\r\n    }\r\n    render() {\r\n        const { submitSuccess, loading } = this.state;\r\n        return (React.createElement(\"div\", null,\r\n            React.createElement(\"div\", { className: \"col-md-12 form-wrapper\" },\r\n                !submitSuccess && (React.createElement(\"div\", { className: \"alert alert-info mt-4 mb-4\", role: \"alert\" }, \"Fill the form to create a new contact\")),\r\n                submitSuccess && (React.createElement(\"div\", { className: \"alert alert-info\", role: \"alert\" }, \"The form was successfully submitted!\")),\r\n                React.createElement(\"form\", { id: \"create-post-form\", onSubmit: this.processFormSubmission, noValidate: true },\r\n                    React.createElement(\"div\", { className: \"form-group col-md-12\" },\r\n                        React.createElement(\"label\", { htmlFor: \"first_name\" }, \" First Name \"),\r\n                        React.createElement(\"input\", { type: \"text\", id: \"first_name\", onChange: (e) => this.handleInputChanges(e), name: \"first_name\", className: \"form-control\", placeholder: \"first name\" })),\r\n                    React.createElement(\"div\", { className: \"form-group col-md-12\" },\r\n                        React.createElement(\"label\", { htmlFor: \"last_name\" }, \" Last Name \"),\r\n                        React.createElement(\"input\", { type: \"text\", id: \"last_name\", onChange: (e) => this.handleInputChanges(e), name: \"last_name\", className: \"form-control\", placeholder: \"last name\" })),\r\n                    React.createElement(\"div\", { className: \"form-group col-md-12\" },\r\n                        React.createElement(\"label\", { htmlFor: \"email\" }, \" Email \"),\r\n                        React.createElement(\"input\", { type: \"email\", id: \"email\", onChange: (e) => this.handleInputChanges(e), name: \"email\", className: \"form-control\", placeholder: \"email address\" })),\r\n                    React.createElement(\"div\", { className: \"form-group col-md-12\" },\r\n                        React.createElement(\"label\", { htmlFor: \"phone\" }, \" Phone \"),\r\n                        React.createElement(\"input\", { type: \"text\", id: \"phone\", onChange: (e) => this.handleInputChanges(e), name: \"phone\", className: \"form-control\", placeholder: \"phone number\" })),\r\n                    React.createElement(\"div\", { className: \"form-group col-md-12\" },\r\n                        React.createElement(\"label\", { htmlFor: \"address\" }, \" Address \"),\r\n                        React.createElement(\"input\", { type: \"text\", id: \"address\", onChange: (e) => this.handleInputChanges(e), name: \"address\", className: \"form-control\", placeholder: \"address\" })),\r\n                    React.createElement(\"div\", { className: \"form-group col-md-12\" },\r\n                        React.createElement(\"label\", { htmlFor: \"description\" }, \" Description \"),\r\n                        React.createElement(\"input\", { type: \"text\", id: \"description\", onChange: (e) => this.handleInputChanges(e), name: \"description\", className: \"form-control\", placeholder: \"Enter Description\" })),\r\n                    React.createElement(\"div\", { className: \"form-group col-md-4 pull-right\" },\r\n                        React.createElement(\"button\", { className: \"btn btn-primary\", type: \"submit\" }, \"Create contact\"),\r\n                        loading &&\r\n                            React.createElement(\"span\", { className: \"fa fa-circle-o-notch fa-spin\" }))))));\r\n    }\r\n}\r\nexports.default = react_router_dom_1.withRouter(Create);\r\n\n\n//# sourceURL=webpack:///./src/components/customer/Create.tsx?");

/***/ }),

/***/ "./src/components/customer/Edit.tsx":
/*!******************************************!*\
  !*** ./src/components/customer/Edit.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nclass EditCustomer extends React.Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.processFormSubmission = (e) => __awaiter(this, void 0, void 0, function* () {\r\n            e.preventDefault();\r\n            this.setState({ loading: true });\r\n            axios_1.default.patch(`http://localhost:5000/customers/${this.state.id}`, this.state.values).then(data => {\r\n                this.setState({ submitSuccess: true, loading: false });\r\n                setTimeout(() => {\r\n                    this.props.history.push('/');\r\n                }, 1500);\r\n            });\r\n        });\r\n        this.setValues = (values) => {\r\n            this.setState({ values: Object.assign(Object.assign({}, this.state.values), values) });\r\n        };\r\n        this.handleInputChanges = (e) => {\r\n            e.preventDefault();\r\n            this.setValues({ [e.currentTarget.id]: e.currentTarget.value });\r\n        };\r\n        this.state = {\r\n            id: this.props.match.params.id,\r\n            customer: {},\r\n            values: [],\r\n            loading: false,\r\n            submitSuccess: false,\r\n        };\r\n    }\r\n    componentDidMount() {\r\n        axios_1.default.get(`http://localhost:5000/customers/${this.state.id}`).then(data => {\r\n            this.setState({ customer: data.data });\r\n        });\r\n    }\r\n    render() {\r\n        const { submitSuccess, loading } = this.state;\r\n        return (React.createElement(\"div\", { className: \"App\" }, this.state.customer &&\r\n            React.createElement(\"div\", null,\r\n                React.createElement(\"h1\", null, \" Contact list\"),\r\n                React.createElement(\"div\", null,\r\n                    React.createElement(\"div\", { className: \"col-md-12 form-wrapper\" },\r\n                        React.createElement(\"h4\", null, \" Edit Customer \"),\r\n                        submitSuccess && (React.createElement(\"div\", { className: \"alert alert-info\", role: \"alert\" }, \"Customer's details has been edited successfully \")),\r\n                        React.createElement(\"form\", { id: \"create-post-form\", onSubmit: this.processFormSubmission, noValidate: true },\r\n                            React.createElement(\"div\", { className: \"form-group col-md-12\" },\r\n                                React.createElement(\"label\", { htmlFor: \"first_name\" }, \" First Name \"),\r\n                                React.createElement(\"input\", { type: \"text\", id: \"first_name\", defaultValue: this.state.customer.first_name, onChange: (e) => this.handleInputChanges(e), name: \"first_name\", className: \"form-control\", placeholder: \"Enter customer's first name\" })),\r\n                            React.createElement(\"div\", { className: \"form-group col-md-12\" },\r\n                                React.createElement(\"label\", { htmlFor: \"last_name\" }, \" Last Name \"),\r\n                                React.createElement(\"input\", { type: \"text\", id: \"last_name\", defaultValue: this.state.customer.last_name, onChange: (e) => this.handleInputChanges(e), name: \"last_name\", className: \"form-control\", placeholder: \"Enter customer's last name\" })),\r\n                            React.createElement(\"div\", { className: \"form-group col-md-12\" },\r\n                                React.createElement(\"label\", { htmlFor: \"email\" }, \" Email \"),\r\n                                React.createElement(\"input\", { type: \"email\", id: \"email\", defaultValue: this.state.customer.email, onChange: (e) => this.handleInputChanges(e), name: \"email\", className: \"form-control\", placeholder: \"Enter customer's email address\" })),\r\n                            React.createElement(\"div\", { className: \"form-group col-md-12\" },\r\n                                React.createElement(\"label\", { htmlFor: \"phone\" }, \" Phone \"),\r\n                                React.createElement(\"input\", { type: \"text\", id: \"phone\", defaultValue: this.state.customer.phone, onChange: (e) => this.handleInputChanges(e), name: \"phone\", className: \"form-control\", placeholder: \"Enter customer's phone number\" })),\r\n                            React.createElement(\"div\", { className: \"form-group col-md-12\" },\r\n                                React.createElement(\"label\", { htmlFor: \"address\" }, \" Address \"),\r\n                                React.createElement(\"input\", { type: \"text\", id: \"address\", defaultValue: this.state.customer.address, onChange: (e) => this.handleInputChanges(e), name: \"address\", className: \"form-control\", placeholder: \"Enter customer's address\" })),\r\n                            React.createElement(\"div\", { className: \"form-group col-md-12\" },\r\n                                React.createElement(\"label\", { htmlFor: \"description\" }, \" Description \"),\r\n                                React.createElement(\"input\", { type: \"text\", id: \"description\", defaultValue: this.state.customer.description, onChange: (e) => this.handleInputChanges(e), name: \"description\", className: \"form-control\", placeholder: \"Enter Description\" })),\r\n                            React.createElement(\"div\", { className: \"form-group col-md-4 pull-right\" },\r\n                                React.createElement(\"button\", { className: \"btn btn-success\", type: \"submit\" }, \"Edit Customer \"),\r\n                                loading &&\r\n                                    React.createElement(\"span\", { className: \"fa fa-circle-o-notch fa-spin\" }))))))));\r\n    }\r\n}\r\nexports.default = react_router_dom_1.withRouter(EditCustomer);\r\n\n\n//# sourceURL=webpack:///./src/components/customer/Edit.tsx?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css);\"]);\n// Module\nexports.push([module.i, \"\\r\\n:root {\\r\\n  --black:          #333333;\\r\\n  --orange:         #CC6633;\\r\\n  --green:          #A4CC33;\\r\\n  --whiteLightness: 100%;\\r\\n  --white:          hsl(0, 0%, var(--whiteLightness));\\r\\n  --grayF4:         hsl(0, 0%, calc(var(--whiteLightness) - 4%));\\r\\n  --greyF3:         hsl(0, 0%, calc(var(--whiteLightness) - 5%));\\r\\n  --greyEC:         hsl(0, 0%, calc(var(--whiteLightness) - 7%));\\r\\n  --greyD9:         hsl(0, 0%, calc(var(--whiteLightness) - 15%));\\r\\n  --greyC4:         hsl(0, 0%, calc(var(--whiteLightness) - 23%));\\r\\n  --grey99:         hsl(0, 0%, calc(var(--whiteLightness) - 40%));\\r\\n  --grey66:         hsl(0, 0%, calc(var(--whiteLightness) - 60%));\\r\\n}\\r\\n\\r\\n.form-wrapper {\\r\\n  width: 500px;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.App {\\r\\n  text-align: center;\\r\\n  margin-top: 30px;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  width: 300px;\\r\\n  margin: 0 auto;\\r\\n  background: #1C7CCC;\\r\\n  height: 70px;\\r\\n  line-height: 70px;\\r\\n}\\r\\n\\r\\nnav ul li {\\r\\n  display: inline;\\r\\n  list-style-type: none;\\r\\n  text-align: center;\\r\\n  padding: 30px;\\r\\n}\\r\\n\\r\\nnav ul li a {\\r\\n  margin: 50px 0;\\r\\n  font-weight: bold;\\r\\n  color: white;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nnav ul li a:hover {\\r\\n  color: white;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\ntable {\\r\\n  margin-top: 50px;\\r\\n}\\r\\n\\r\\n.App-link {\\r\\n  color: #61dafb;\\r\\n}\\r\\n\\r\\n@keyframes App-logo-spin {\\r\\n  from {\\r\\n    transform: rotate(0deg);\\r\\n  }\\r\\n  to {\\r\\n    transform: rotate(360deg);\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nconst indexTemplate = (content) => ` <!DOCTYPE html>\r\n    <html lang=\"en\">\r\n    <head>\r\n        <meta charset=\"UTF-8\">\r\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n        <title>Reddit</title>\r\n        <script src=\"/static/client.js\" type=\"application/javascript\"></script>\r\n    </script>\r\n    </head>\r\n    <body>\r\n        <div id=\"react_root\">${content}</div>\r\n        <div id=\"modal_root\"></div>\r\n    </body>\r\n    </html> `;\r\nexports.indexTemplate = indexTemplate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nconst App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nconst indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nconst compression_1 = __importDefault(__webpack_require__(/*! compression */ \"compression\"));\r\nconst PORT = process.env.PORT || 3000;\r\nconst IS_DEV = \"development\" !== 'production';\r\nconst app = express_1.default();\r\nif (!IS_DEV) {\r\n    app.use(compression_1.default());\r\n}\r\napp.use('/static', express_1.default.static('./dist/client'));\r\napp.get('*', (req, res) => {\r\n    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToNodeStream(App_1.App())));\r\n});\r\napp.listen(PORT, () => {\r\n    console.log(`Server started on http://localhost:${PORT}`);\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/Break/Break.tsx":
/*!************************************!*\
  !*** ./src/shared/Break/Break.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Break = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nconst break_css_1 = __importDefault(__webpack_require__(/*! ./break.css */ \"./src/shared/Break/break.css\"));\r\nfunction Break(props) {\r\n    const { inline = false, top = false, size, mobileSize, tabletSize, desktopSize, } = props;\r\n    return (react_1.default.createElement(\"div\", { className: classnames_1.default(break_css_1.default[`s${size}`], { [break_css_1.default[`mobile_s${mobileSize}`]]: mobileSize }, { [break_css_1.default[`tablet_s${tabletSize}`]]: tabletSize }, { [break_css_1.default[`desktop_s${desktopSize}`]]: desktopSize }, { [break_css_1.default.inline]: inline }, { [break_css_1.default.top]: top }) }));\r\n}\r\nexports.Break = Break;\r\n\n\n//# sourceURL=webpack:///./src/shared/Break/Break.tsx?");

/***/ }),

/***/ "./src/shared/Break/break.css":
/*!************************************!*\
  !*** ./src/shared/Break/break.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s4\": \"break__s4--rnbuA\",\n\t\"s8\": \"break__s8--2ubV4\",\n\t\"s12\": \"break__s12--3dSW2\",\n\t\"s16\": \"break__s16--2bop2\",\n\t\"s20\": \"break__s20--PBhCB\",\n\t\"inline\": \"break__inline--22pcx\",\n\t\"top\": \"break__top--25ISJ\",\n\t\"mobile_s4\": \"break__mobile_s4--LrEFY\",\n\t\"mobile_s8\": \"break__mobile_s8--1Tmgm\",\n\t\"mobile_s12\": \"break__mobile_s12--2En9X\",\n\t\"mobile_s16\": \"break__mobile_s16--2KmPq\",\n\t\"mobile_s20\": \"break__mobile_s20--1j8g5\",\n\t\"tablet_s4\": \"break__tablet_s4--2nTnL\",\n\t\"tablet_s8\": \"break__tablet_s8--7zEhs\",\n\t\"tablet_s12\": \"break__tablet_s12--3Y-kT\",\n\t\"tablet_s16\": \"break__tablet_s16--2rsLQ\",\n\t\"tablet_s20\": \"break__tablet_s20--V1f92\",\n\t\"desktop_s4\": \"break__desktop_s4--3mFLY\",\n\t\"desktop_s8\": \"break__desktop_s8--2uQYJ\",\n\t\"desktop_s12\": \"break__desktop_s12--1-0wy\",\n\t\"desktop_s16\": \"break__desktop_s16--2k7qE\",\n\t\"desktop_s20\": \"break__desktop_s20--AjVsi\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Break/break.css?");

/***/ }),

/***/ "./src/shared/Break/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Break/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Break */ \"./src/shared/Break/Break.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Break/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Layout = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst layout_css_1 = __importDefault(__webpack_require__(/*! ./layout.css */ \"./src/shared/Layout/layout.css\"));\r\nfunction Layout({ children }) {\r\n    return (react_1.default.createElement(\"div\", { className: layout_css_1.default.layout }, children));\r\n}\r\nexports.Layout = Layout;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/layout.css":
/*!**************************************!*\
  !*** ./src/shared/Layout/layout.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"layout__layout--2fANc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.css?");

/***/ }),

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReducer = exports.setToken = void 0;\r\nconst initialState = {\r\n    tokenText: ''\r\n};\r\nconst TOKEN = 'TOKEN';\r\nconst setToken = (text) => ({\r\n    type: TOKEN,\r\n    text,\r\n});\r\nexports.setToken = setToken;\r\nconst rootReducer = (state = initialState, action) => {\r\n    switch (action.type) {\r\n        case TOKEN:\r\n            return Object.assign(Object.assign({}, state), { tokenText: action.text });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.rootReducer = rootReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/store.ts?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ })

/******/ });