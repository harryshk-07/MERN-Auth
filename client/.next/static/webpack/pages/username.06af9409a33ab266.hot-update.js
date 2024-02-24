"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/username",{

/***/ "./pages/username.tsx":
/*!****************************!*\
  !*** ./pages/username.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"./node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! zod */ \"./node_modules/zod/lib/index.mjs\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"./components/ui/button.tsx\");\n/* harmony import */ var _components_ui_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/avatar */ \"./components/ui/avatar.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var _helper_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helper/validate */ \"./helper/validate.tsx\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/store/store */ \"./store/store.tsx\");\n/* harmony import */ var _components_ui_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/ui/form */ \"./components/ui/form.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/ui/input */ \"./components/ui/input.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst formSchema = zod__WEBPACK_IMPORTED_MODULE_11__.z.object({\n    username: zod__WEBPACK_IMPORTED_MODULE_11__.z.string().min(2, {\n        message: \"Username must be at least 2 characters.\"\n    })\n});\nconst username = ()=>{\n    _s();\n    // 1. Define your form.\n    const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_12__.useForm)({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_1__.zodResolver)(formSchema),\n        defaultValues: {\n            username: \"\"\n        }\n    });\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const setUsername = (0,_store_store__WEBPACK_IMPORTED_MODULE_8__.useAuthStore)((state)=>state.setUsername);\n    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_13__.useFormik)({\n        initialValues: {\n            username: \"\"\n        },\n        validate: _helper_validate__WEBPACK_IMPORTED_MODULE_5__.usernameValidate,\n        validateOnBlur: false,\n        validateOnChange: false,\n        onSubmit: async (values)=>{\n            setUsername(values.username);\n            router.push(\"/password\");\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.Toaster, {\n                position: \"top-center\",\n                reverseOrder: false\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\haris.nadeem\\\\Desktop\\\\Auth-Project\\\\client\\\\pages\\\\username.tsx\",\n                lineNumber: 59,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center h-screen\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-gray-100 py-8 px-16 rounded-lg shadow-xl\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"font-mono font-bold text-3xl text-center\",\n                                    children: \"HELLO AGAIN!\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\haris.nadeem\\\\Desktop\\\\Auth-Project\\\\client\\\\pages\\\\username.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-center pt-2 pb-4\",\n                                    children: \"Explore by connecting with us...\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\haris.nadeem\\\\Desktop\\\\Auth-Project\\\\client\\\\pages\\\\username.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\haris.nadeem\\\\Desktop\\\\Auth-Project\\\\client\\\\pages\\\\username.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_9__.Form, {\n                                ...form,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    onSubmit: formik.handleSubmit,\n                                    className: \"space-y-8\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_9__.FormField, {\n                                            control: form.control,\n                                            name: \"username\",\n                                            render: (param)=>{\n                                                let { field } = param;\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_9__.FormItem, {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_3__.Avatar, {\n                                                            className: \"mx-auto w-40 h-40\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_3__.AvatarImage, {\n                                                                src: \"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg\"\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\haris.nadeem\\\\Desktop\\\\Auth-Project\\\\client\\\\pages\\\\username.tsx\",\n                                                                lineNumber: 78,\n                                                                columnNumber: 25\n                                                            }, void 0)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\haris.nadeem\\\\Desktop\\\\Auth-Project\\\\client\\\\pages\\\\username.tsx\",\n                                                            lineNumber: 77,\n                                                            columnNumber: 23\n                                                        }, void 0),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_9__.FormLabel, {\n                                                            children: \"Username\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\haris.nadeem\\\\Desktop\\\\Auth-Project\\\\client\\\\pages\\\\username.tsx\",\n                                                            lineNumber: 82,\n                                                            columnNumber: 23\n                                                        }, void 0),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_9__.FormControl, {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_10__.Input, {\n                                                                placeholder: \"Enter Username\",\n                                                                ...formik.getFieldProps(\"username\")\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\haris.nadeem\\\\Desktop\\\\Auth-Project\\\\client\\\\pages\\\\username.tsx\",\n                                                                lineNumber: 84,\n                                                                columnNumber: 25\n                                                            }, void 0)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\haris.nadeem\\\\Desktop\\\\Auth-Project\\\\client\\\\pages\\\\username.tsx\",\n                                                            lineNumber: 83,\n                                                            columnNumber: 23\n                                                        }, void 0),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_9__.FormMessage, {}, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\haris.nadeem\\\\Desktop\\\\Auth-Project\\\\client\\\\pages\\\\username.tsx\",\n                                                            lineNumber: 86,\n                                                            columnNumber: 23\n                                                        }, void 0)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\haris.nadeem\\\\Desktop\\\\Auth-Project\\\\client\\\\pages\\\\username.tsx\",\n                                                    lineNumber: 76,\n                                                    columnNumber: 21\n                                                }, void 0);\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\haris.nadeem\\\\Desktop\\\\Auth-Project\\\\client\\\\pages\\\\username.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                            className: \"\",\n                                            type: \"submit\",\n                                            children: \"Let's Go\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\haris.nadeem\\\\Desktop\\\\Auth-Project\\\\client\\\\pages\\\\username.tsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"text-center text-base\",\n                                            children: [\n                                                \"Not a Member \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                    href: \"/register\",\n                                                    className: \"text-red-500\",\n                                                    children: \"Register Now\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\haris.nadeem\\\\Desktop\\\\Auth-Project\\\\client\\\\pages\\\\username.tsx\",\n                                                    lineNumber: 91,\n                                                    columnNumber: 68\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\haris.nadeem\\\\Desktop\\\\Auth-Project\\\\client\\\\pages\\\\username.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\haris.nadeem\\\\Desktop\\\\Auth-Project\\\\client\\\\pages\\\\username.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\haris.nadeem\\\\Desktop\\\\Auth-Project\\\\client\\\\pages\\\\username.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\haris.nadeem\\\\Desktop\\\\Auth-Project\\\\client\\\\pages\\\\username.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\haris.nadeem\\\\Desktop\\\\Auth-Project\\\\client\\\\pages\\\\username.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\haris.nadeem\\\\Desktop\\\\Auth-Project\\\\client\\\\pages\\\\username.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\haris.nadeem\\\\Desktop\\\\Auth-Project\\\\client\\\\pages\\\\username.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, undefined);\n};\n_s(username, \"M3GBnjhUi7ZgSGF67nP6HdKT1U0=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_12__.useForm,\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter,\n        _store_store__WEBPACK_IMPORTED_MODULE_8__.useAuthStore,\n        formik__WEBPACK_IMPORTED_MODULE_13__.useFormik\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (username);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VybmFtZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFc0Q7QUFDWjtBQUNiO0FBRW1CO0FBQzZCO0FBQ2hEO0FBQ007QUFDa0I7QUFDWDtBQUNGO0FBQ0s7QUFTZjtBQUNnQjtBQUU5QyxNQUFNbUIsYUFBYWpCLG1DQUFDQSxDQUFDa0IsTUFBTSxDQUFDO0lBQzFCQyxVQUFVbkIsbUNBQUNBLENBQUNvQixNQUFNLEdBQUdDLEdBQUcsQ0FBQyxHQUFHO1FBQzFCQyxTQUFTO0lBQ1g7QUFDRjtBQUVBLE1BQU1ILFdBQVc7O0lBQ2YsdUJBQXVCO0lBQ3ZCLE1BQU1JLE9BQU94Qix5REFBT0EsQ0FBNkI7UUFDL0N5QixVQUFVMUIsb0VBQVdBLENBQUNtQjtRQUN0QlEsZUFBZTtZQUNiTixVQUFVO1FBQ1o7SUFDRjtJQUVBLE1BQU1PLFNBQVNsQixzREFBU0E7SUFDeEIsTUFBTW1CLGNBQWNsQiwwREFBWUEsQ0FBQyxDQUFDbUIsUUFBY0EsTUFBTUQsV0FBVztJQUVqRSxNQUFNRSxTQUFTeEIsa0RBQVNBLENBQUM7UUFDdkJ5QixlQUFnQjtZQUNkWCxVQUFXO1FBQ2I7UUFDQVksVUFBV3pCLDhEQUFnQkE7UUFDM0IwQixnQkFBZ0I7UUFDaEJDLGtCQUFrQjtRQUNsQkMsVUFBVyxPQUFNQztZQUNmUixZQUFZUSxPQUFPaEIsUUFBUTtZQUMzQk8sT0FBT1UsSUFBSSxDQUFDO1FBQ2Q7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDZiw4REFBQy9CLG9EQUFPQTtnQkFBQ2dDLFVBQVM7Z0JBQWFDLGNBQWM7Ozs7OzswQkFDM0MsOERBQUNIO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzs4Q0FDQyw4REFBQ0k7b0NBQUdILFdBQVU7OENBQTJDOzs7Ozs7OENBQ3pELDhEQUFDSTtvQ0FBR0osV0FBVTs4Q0FBd0I7Ozs7Ozs7Ozs7OztzQ0FFeEMsOERBQUNEO3NDQUNDLDRFQUFDM0IscURBQUlBO2dDQUFFLEdBQUdhLElBQUk7MENBQ1osNEVBQUNBO29DQUNDVyxVQUFVTCxPQUFPYyxZQUFZO29DQUM3QkwsV0FBVTs7c0RBRVYsOERBQUMxQiwwREFBU0E7NENBQ1JnQyxTQUFTckIsS0FBS3FCLE9BQU87NENBQ3JCQyxNQUFLOzRDQUNMQyxRQUFRO29EQUFDLEVBQUVDLEtBQUssRUFBRTtxRUFDaEIsOERBQUNsQyx5REFBUUE7O3NFQUNQLDhEQUFDWCx5REFBTUE7NERBQUNvQyxXQUFVO3NFQUNoQiw0RUFBQ25DLDhEQUFXQTtnRUFBQzZDLEtBQUk7Ozs7Ozs7Ozs7O3NFQUluQiw4REFBQ2xDLDBEQUFTQTtzRUFBQzs7Ozs7O3NFQUNYLDhEQUFDSCw0REFBV0E7c0VBQ1YsNEVBQUNLLHdEQUFLQTtnRUFBQ2lDLGFBQVk7Z0VBQWtCLEdBQUdwQixPQUFPcUIsYUFBYSxDQUFDLFdBQVc7Ozs7Ozs7Ozs7O3NFQUUxRSw4REFBQ25DLDREQUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBSWxCLDhEQUFDZCx5REFBTUE7NENBQUNxQyxXQUFVOzRDQUFHYSxNQUFLO3NEQUFTOzs7Ozs7c0RBQ25DLDhEQUFDVDs0Q0FBR0osV0FBVTs7Z0RBQXdCOzhEQUFhLDhEQUFDbEMsa0RBQUlBO29EQUFDZ0QsTUFBSztvREFBWWQsV0FBVTs4REFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUW5IO0dBbkVNbkI7O1FBRVNwQixxREFBT0E7UUFPTFMsa0RBQVNBO1FBQ0pDLHNEQUFZQTtRQUVqQkosOENBQVNBOzs7QUF5RDFCLCtEQUFlYyxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXJuYW1lLnRzeD9iZGRmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgem9kUmVzb2x2ZXIgfSBmcm9tIFwiQGhvb2tmb3JtL3Jlc29sdmVycy96b2RcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IHsgYW55LCB6IH0gZnJvbSBcInpvZFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcclxuaW1wb3J0IHsgQXZhdGFyLCBBdmF0YXJGYWxsYmFjaywgQXZhdGFySW1hZ2UgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2F2YXRhclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IHsgdXNlcm5hbWVWYWxpZGF0ZSB9IGZyb20gJy4uL2hlbHBlci92YWxpZGF0ZSdcclxuaW1wb3J0IHsgVG9hc3RlciB9IGZyb20gJ3JlYWN0LWhvdC10b2FzdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VBdXRoU3RvcmUgfSBmcm9tIFwiQC9zdG9yZS9zdG9yZVwiO1xyXG5pbXBvcnQge1xyXG4gIEZvcm0sXHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgRm9ybURlc2NyaXB0aW9uLFxyXG4gIEZvcm1GaWVsZCxcclxuICBGb3JtSXRlbSxcclxuICBGb3JtTGFiZWwsXHJcbiAgRm9ybU1lc3NhZ2UsXHJcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9mb3JtXCI7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiO1xyXG5cclxuY29uc3QgZm9ybVNjaGVtYSA9IHoub2JqZWN0KHtcclxuICB1c2VybmFtZTogei5zdHJpbmcoKS5taW4oMiwge1xyXG4gICAgbWVzc2FnZTogXCJVc2VybmFtZSBtdXN0IGJlIGF0IGxlYXN0IDIgY2hhcmFjdGVycy5cIixcclxuICB9KSxcclxufSk7XHJcblxyXG5jb25zdCB1c2VybmFtZSA9ICgpID0+IHtcclxuICAvLyAxLiBEZWZpbmUgeW91ciBmb3JtLlxyXG4gIGNvbnN0IGZvcm0gPSB1c2VGb3JtPHouaW5mZXI8dHlwZW9mIGZvcm1TY2hlbWE+Pih7XHJcbiAgICByZXNvbHZlcjogem9kUmVzb2x2ZXIoZm9ybVNjaGVtYSksXHJcbiAgICBkZWZhdWx0VmFsdWVzOiB7XHJcbiAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHNldFVzZXJuYW1lID0gdXNlQXV0aFN0b3JlKChzdGF0ZTphbnkpID0+IHN0YXRlLnNldFVzZXJuYW1lKTtcclxuXHJcbiAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcclxuICAgIGluaXRpYWxWYWx1ZXMgOiB7XHJcbiAgICAgIHVzZXJuYW1lIDogJydcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0ZSA6IHVzZXJuYW1lVmFsaWRhdGUsXHJcbiAgICB2YWxpZGF0ZU9uQmx1cjogZmFsc2UsXHJcbiAgICB2YWxpZGF0ZU9uQ2hhbmdlOiBmYWxzZSxcclxuICAgIG9uU3VibWl0IDogYXN5bmMgdmFsdWVzID0+IHtcclxuICAgICAgc2V0VXNlcm5hbWUodmFsdWVzLnVzZXJuYW1lKTtcclxuICAgICAgcm91dGVyLnB1c2goJy9wYXNzd29yZCcpXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG9cIj5cclxuICAgIDxUb2FzdGVyIHBvc2l0aW9uPSd0b3AtY2VudGVyJyByZXZlcnNlT3JkZXI9e2ZhbHNlfT48L1RvYXN0ZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1zY3JlZW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIHB5LTggcHgtMTYgcm91bmRlZC1sZyBzaGFkb3cteGxcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LW1vbm8gZm9udC1ib2xkIHRleHQtM3hsIHRleHQtY2VudGVyXCI+SEVMTE8gQUdBSU4hPC9oMT5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB0LTIgcGItNFwiPkV4cGxvcmUgYnkgY29ubmVjdGluZyB3aXRoIHVzLi4uPC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEZvcm0gey4uLmZvcm19PlxyXG4gICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNwYWNlLXktOFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1GaWVsZFxyXG4gICAgICAgICAgICAgICAgICBjb250cm9sPXtmb3JtLmNvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPVwibXgtYXV0byB3LTQwIGgtNDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhckltYWdlIHNyYz1cImh0dHBzOi8vaWNvbi1saWJyYXJ5LmNvbS9pbWFnZXMvYW5vbnltb3VzLWF2YXRhci1pY29uL2Fub255bW91cy1hdmF0YXItaWNvbi0yNS5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPEF2YXRhckZhbGxiYWNrPkNOPC9BdmF0YXJGYWxsYmFjaz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPlVzZXJuYW1lPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIkVudGVyIFVzZXJuYW1lXCIgey4uLmZvcm1pay5nZXRGaWVsZFByb3BzKCd1c2VybmFtZScpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTWVzc2FnZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJcIiB0eXBlPVwic3VibWl0XCI+TGV0J3MgR288L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWJhc2VcIj5Ob3QgYSBNZW1iZXIgPExpbmsgaHJlZj1cIi9yZWdpc3RlclwiIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPlJlZ2lzdGVyIE5vdzwvTGluaz48L2gzPlxyXG4gICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJuYW1lO1xyXG4iXSwibmFtZXMiOlsiem9kUmVzb2x2ZXIiLCJ1c2VGb3JtIiwieiIsIkJ1dHRvbiIsIkF2YXRhciIsIkF2YXRhckltYWdlIiwiTGluayIsInVzZUZvcm1payIsInVzZXJuYW1lVmFsaWRhdGUiLCJUb2FzdGVyIiwidXNlUm91dGVyIiwidXNlQXV0aFN0b3JlIiwiRm9ybSIsIkZvcm1Db250cm9sIiwiRm9ybUZpZWxkIiwiRm9ybUl0ZW0iLCJGb3JtTGFiZWwiLCJGb3JtTWVzc2FnZSIsIklucHV0IiwiZm9ybVNjaGVtYSIsIm9iamVjdCIsInVzZXJuYW1lIiwic3RyaW5nIiwibWluIiwibWVzc2FnZSIsImZvcm0iLCJyZXNvbHZlciIsImRlZmF1bHRWYWx1ZXMiLCJyb3V0ZXIiLCJzZXRVc2VybmFtZSIsInN0YXRlIiwiZm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsInZhbGlkYXRlIiwidmFsaWRhdGVPbkJsdXIiLCJ2YWxpZGF0ZU9uQ2hhbmdlIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwicG9zaXRpb24iLCJyZXZlcnNlT3JkZXIiLCJoMSIsImgzIiwiaGFuZGxlU3VibWl0IiwiY29udHJvbCIsIm5hbWUiLCJyZW5kZXIiLCJmaWVsZCIsInNyYyIsInBsYWNlaG9sZGVyIiwiZ2V0RmllbGRQcm9wcyIsInR5cGUiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/username.tsx\n"));

/***/ })

});