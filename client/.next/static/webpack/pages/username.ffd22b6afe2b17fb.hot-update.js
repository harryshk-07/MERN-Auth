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

/***/ "./components/ui/use-toast.ts":
/*!************************************!*\
  !*** ./components/ui/use-toast.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   reducer: function() { return /* binding */ reducer; },\n/* harmony export */   toast: function() { return /* binding */ toast; },\n/* harmony export */   useToast: function() { return /* binding */ useToast; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n// Inspired by react-hot-toast library\n\nconst TOAST_LIMIT = 1;\nconst TOAST_REMOVE_DELAY = 1000000;\nconst actionTypes = {\n    ADD_TOAST: \"ADD_TOAST\",\n    UPDATE_TOAST: \"UPDATE_TOAST\",\n    DISMISS_TOAST: \"DISMISS_TOAST\",\n    REMOVE_TOAST: \"REMOVE_TOAST\"\n};\nlet count = 0;\nfunction genId() {\n    count = (count + 1) % Number.MAX_SAFE_INTEGER;\n    return count.toString();\n}\nconst toastTimeouts = new Map();\nconst addToRemoveQueue = (toastId)=>{\n    if (toastTimeouts.has(toastId)) {\n        return;\n    }\n    const timeout = setTimeout(()=>{\n        toastTimeouts.delete(toastId);\n        dispatch({\n            type: \"REMOVE_TOAST\",\n            toastId: toastId\n        });\n    }, TOAST_REMOVE_DELAY);\n    toastTimeouts.set(toastId, timeout);\n};\nconst reducer = (state, action)=>{\n    switch(action.type){\n        case \"ADD_TOAST\":\n            return {\n                ...state,\n                toasts: [\n                    action.toast,\n                    ...state.toasts\n                ].slice(0, TOAST_LIMIT)\n            };\n        case \"UPDATE_TOAST\":\n            return {\n                ...state,\n                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {\n                        ...t,\n                        ...action.toast\n                    } : t)\n            };\n        case \"DISMISS_TOAST\":\n            {\n                const { toastId } = action;\n                // ! Side effects ! - This could be extracted into a dismissToast() action,\n                // but I'll keep it here for simplicity\n                if (toastId) {\n                    addToRemoveQueue(toastId);\n                } else {\n                    state.toasts.forEach((toast)=>{\n                        addToRemoveQueue(toast.id);\n                    });\n                }\n                return {\n                    ...state,\n                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {\n                            ...t,\n                            open: false\n                        } : t)\n                };\n            }\n        case \"REMOVE_TOAST\":\n            if (action.toastId === undefined) {\n                return {\n                    ...state,\n                    toasts: []\n                };\n            }\n            return {\n                ...state,\n                toasts: state.toasts.filter((t)=>t.id !== action.toastId)\n            };\n    }\n};\nconst listeners = [];\nlet memoryState = {\n    toasts: []\n};\nfunction dispatch(action) {\n    memoryState = reducer(memoryState, action);\n    listeners.forEach((listener)=>{\n        listener(memoryState);\n    });\n}\nfunction toast(param) {\n    let { ...props } = param;\n    const id = genId();\n    const update = (props)=>dispatch({\n            type: \"UPDATE_TOAST\",\n            toast: {\n                ...props,\n                id\n            }\n        });\n    const dismiss = ()=>dispatch({\n            type: \"DISMISS_TOAST\",\n            toastId: id\n        });\n    dispatch({\n        type: \"ADD_TOAST\",\n        toast: {\n            ...props,\n            id,\n            open: true,\n            onOpenChange: (open)=>{\n                if (!open) dismiss();\n            }\n        }\n    });\n    return {\n        id: id,\n        dismiss,\n        update\n    };\n}\nfunction useToast() {\n    const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(memoryState);\n    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{\n        listeners.push(setState);\n        return ()=>{\n            const index = listeners.indexOf(setState);\n            if (index > -1) {\n                listeners.splice(index, 1);\n            }\n        };\n    }, [\n        state\n    ]);\n    return {\n        ...state,\n        toast,\n        dismiss: (toastId)=>dispatch({\n                type: \"DISMISS_TOAST\",\n                toastId\n            })\n    };\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN4QjtJQUNGLE1BQU1VLFVBQVUsSUFBTXJCLFNBQVM7WUFBRUMsTUFBTTtZQUFpQk4sU0FBU2dCO1FBQUc7SUFFcEVYLFNBQVM7UUFDUEMsTUFBTTtRQUNOTSxPQUFPO1lBQ0wsR0FBR1ksS0FBSztZQUNSUjtZQUNBRyxNQUFNO1lBQ05RLGNBQWMsQ0FBQ1I7Z0JBQ2IsSUFBSSxDQUFDQSxNQUFNTztZQUNiO1FBQ0Y7SUFDRjtJQUVBLE9BQU87UUFDTFYsSUFBSUE7UUFDSlU7UUFDQUQ7SUFDRjtBQUNGO0FBRUEsU0FBU0c7SUFDUCxNQUFNLENBQUNuQixPQUFPb0IsU0FBUyxHQUFHN0MsMkNBQWMsQ0FBUXNDO0lBRWhEdEMsNENBQWUsQ0FBQztRQUNkcUMsVUFBVVcsSUFBSSxDQUFDSDtRQUNmLE9BQU87WUFDTCxNQUFNSSxRQUFRWixVQUFVYSxPQUFPLENBQUNMO1lBQ2hDLElBQUlJLFFBQVEsQ0FBQyxHQUFHO2dCQUNkWixVQUFVYyxNQUFNLENBQUNGLE9BQU87WUFDMUI7UUFDRjtJQUNGLEdBQUc7UUFBQ3hCO0tBQU07SUFFVixPQUFPO1FBQ0wsR0FBR0EsS0FBSztRQUNSRztRQUNBYyxTQUFTLENBQUMxQixVQUFxQkssU0FBUztnQkFBRUMsTUFBTTtnQkFBaUJOO1lBQVE7SUFDM0U7QUFDRjtBQUUwQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VpL3VzZS10b2FzdC50cz84MDVlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEluc3BpcmVkIGJ5IHJlYWN0LWhvdC10b2FzdCBsaWJyYXJ5XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5pbXBvcnQgdHlwZSB7XG4gIFRvYXN0QWN0aW9uRWxlbWVudCxcbiAgVG9hc3RQcm9wcyxcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90b2FzdFwiXG5cbmNvbnN0IFRPQVNUX0xJTUlUID0gMVxuY29uc3QgVE9BU1RfUkVNT1ZFX0RFTEFZID0gMTAwMDAwMFxuXG50eXBlIFRvYXN0ZXJUb2FzdCA9IFRvYXN0UHJvcHMgJiB7XG4gIGlkOiBzdHJpbmdcbiAgdGl0bGU/OiBSZWFjdC5SZWFjdE5vZGVcbiAgZGVzY3JpcHRpb24/OiBSZWFjdC5SZWFjdE5vZGVcbiAgYWN0aW9uPzogVG9hc3RBY3Rpb25FbGVtZW50XG59XG5cbmNvbnN0IGFjdGlvblR5cGVzID0ge1xuICBBRERfVE9BU1Q6IFwiQUREX1RPQVNUXCIsXG4gIFVQREFURV9UT0FTVDogXCJVUERBVEVfVE9BU1RcIixcbiAgRElTTUlTU19UT0FTVDogXCJESVNNSVNTX1RPQVNUXCIsXG4gIFJFTU9WRV9UT0FTVDogXCJSRU1PVkVfVE9BU1RcIixcbn0gYXMgY29uc3RcblxubGV0IGNvdW50ID0gMFxuXG5mdW5jdGlvbiBnZW5JZCgpIHtcbiAgY291bnQgPSAoY291bnQgKyAxKSAlIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG4gIHJldHVybiBjb3VudC50b1N0cmluZygpXG59XG5cbnR5cGUgQWN0aW9uVHlwZSA9IHR5cGVvZiBhY3Rpb25UeXBlc1xuXG50eXBlIEFjdGlvbiA9XG4gIHwge1xuICAgICAgdHlwZTogQWN0aW9uVHlwZVtcIkFERF9UT0FTVFwiXVxuICAgICAgdG9hc3Q6IFRvYXN0ZXJUb2FzdFxuICAgIH1cbiAgfCB7XG4gICAgICB0eXBlOiBBY3Rpb25UeXBlW1wiVVBEQVRFX1RPQVNUXCJdXG4gICAgICB0b2FzdDogUGFydGlhbDxUb2FzdGVyVG9hc3Q+XG4gICAgfVxuICB8IHtcbiAgICAgIHR5cGU6IEFjdGlvblR5cGVbXCJESVNNSVNTX1RPQVNUXCJdXG4gICAgICB0b2FzdElkPzogVG9hc3RlclRvYXN0W1wiaWRcIl1cbiAgICB9XG4gIHwge1xuICAgICAgdHlwZTogQWN0aW9uVHlwZVtcIlJFTU9WRV9UT0FTVFwiXVxuICAgICAgdG9hc3RJZD86IFRvYXN0ZXJUb2FzdFtcImlkXCJdXG4gICAgfVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICB0b2FzdHM6IFRvYXN0ZXJUb2FzdFtdXG59XG5cbmNvbnN0IHRvYXN0VGltZW91dHMgPSBuZXcgTWFwPHN0cmluZywgUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4+KClcblxuY29uc3QgYWRkVG9SZW1vdmVRdWV1ZSA9ICh0b2FzdElkOiBzdHJpbmcpID0+IHtcbiAgaWYgKHRvYXN0VGltZW91dHMuaGFzKHRvYXN0SWQpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdG9hc3RUaW1lb3V0cy5kZWxldGUodG9hc3RJZClcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBcIlJFTU9WRV9UT0FTVFwiLFxuICAgICAgdG9hc3RJZDogdG9hc3RJZCxcbiAgICB9KVxuICB9LCBUT0FTVF9SRU1PVkVfREVMQVkpXG5cbiAgdG9hc3RUaW1lb3V0cy5zZXQodG9hc3RJZCwgdGltZW91dClcbn1cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXIgPSAoc3RhdGU6IFN0YXRlLCBhY3Rpb246IEFjdGlvbik6IFN0YXRlID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJBRERfVE9BU1RcIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB0b2FzdHM6IFthY3Rpb24udG9hc3QsIC4uLnN0YXRlLnRvYXN0c10uc2xpY2UoMCwgVE9BU1RfTElNSVQpLFxuICAgICAgfVxuXG4gICAgY2FzZSBcIlVQREFURV9UT0FTVFwiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHRvYXN0czogc3RhdGUudG9hc3RzLm1hcCgodCkgPT5cbiAgICAgICAgICB0LmlkID09PSBhY3Rpb24udG9hc3QuaWQgPyB7IC4uLnQsIC4uLmFjdGlvbi50b2FzdCB9IDogdFxuICAgICAgICApLFxuICAgICAgfVxuXG4gICAgY2FzZSBcIkRJU01JU1NfVE9BU1RcIjoge1xuICAgICAgY29uc3QgeyB0b2FzdElkIH0gPSBhY3Rpb25cblxuICAgICAgLy8gISBTaWRlIGVmZmVjdHMgISAtIFRoaXMgY291bGQgYmUgZXh0cmFjdGVkIGludG8gYSBkaXNtaXNzVG9hc3QoKSBhY3Rpb24sXG4gICAgICAvLyBidXQgSSdsbCBrZWVwIGl0IGhlcmUgZm9yIHNpbXBsaWNpdHlcbiAgICAgIGlmICh0b2FzdElkKSB7XG4gICAgICAgIGFkZFRvUmVtb3ZlUXVldWUodG9hc3RJZClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLnRvYXN0cy5mb3JFYWNoKCh0b2FzdCkgPT4ge1xuICAgICAgICAgIGFkZFRvUmVtb3ZlUXVldWUodG9hc3QuaWQpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB0b2FzdHM6IHN0YXRlLnRvYXN0cy5tYXAoKHQpID0+XG4gICAgICAgICAgdC5pZCA9PT0gdG9hc3RJZCB8fCB0b2FzdElkID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIC4uLnQsXG4gICAgICAgICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogdFxuICAgICAgICApLFxuICAgICAgfVxuICAgIH1cbiAgICBjYXNlIFwiUkVNT1ZFX1RPQVNUXCI6XG4gICAgICBpZiAoYWN0aW9uLnRvYXN0SWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIHRvYXN0czogW10sXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB0b2FzdHM6IHN0YXRlLnRvYXN0cy5maWx0ZXIoKHQpID0+IHQuaWQgIT09IGFjdGlvbi50b2FzdElkKSxcbiAgICAgIH1cbiAgfVxufVxuXG5jb25zdCBsaXN0ZW5lcnM6IEFycmF5PChzdGF0ZTogU3RhdGUpID0+IHZvaWQ+ID0gW11cblxubGV0IG1lbW9yeVN0YXRlOiBTdGF0ZSA9IHsgdG9hc3RzOiBbXSB9XG5cbmZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbjogQWN0aW9uKSB7XG4gIG1lbW9yeVN0YXRlID0gcmVkdWNlcihtZW1vcnlTdGF0ZSwgYWN0aW9uKVxuICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICBsaXN0ZW5lcihtZW1vcnlTdGF0ZSlcbiAgfSlcbn1cblxudHlwZSBUb2FzdCA9IE9taXQ8VG9hc3RlclRvYXN0LCBcImlkXCI+XG5cbmZ1bmN0aW9uIHRvYXN0KHsgLi4ucHJvcHMgfTogVG9hc3QpIHtcbiAgY29uc3QgaWQgPSBnZW5JZCgpXG5cbiAgY29uc3QgdXBkYXRlID0gKHByb3BzOiBUb2FzdGVyVG9hc3QpID0+XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogXCJVUERBVEVfVE9BU1RcIixcbiAgICAgIHRvYXN0OiB7IC4uLnByb3BzLCBpZCB9LFxuICAgIH0pXG4gIGNvbnN0IGRpc21pc3MgPSAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFwiRElTTUlTU19UT0FTVFwiLCB0b2FzdElkOiBpZCB9KVxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBcIkFERF9UT0FTVFwiLFxuICAgIHRvYXN0OiB7XG4gICAgICAuLi5wcm9wcyxcbiAgICAgIGlkLFxuICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgIG9uT3BlbkNoYW5nZTogKG9wZW4pID0+IHtcbiAgICAgICAgaWYgKCFvcGVuKSBkaXNtaXNzKClcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIGlkOiBpZCxcbiAgICBkaXNtaXNzLFxuICAgIHVwZGF0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiB1c2VUb2FzdCgpIHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZTxTdGF0ZT4obWVtb3J5U3RhdGUpXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBsaXN0ZW5lcnMucHVzaChzZXRTdGF0ZSlcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBsaXN0ZW5lcnMuaW5kZXhPZihzZXRTdGF0ZSlcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICB9XG4gICAgfVxuICB9LCBbc3RhdGVdKVxuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgdG9hc3QsXG4gICAgZGlzbWlzczogKHRvYXN0SWQ/OiBzdHJpbmcpID0+IGRpc3BhdGNoKHsgdHlwZTogXCJESVNNSVNTX1RPQVNUXCIsIHRvYXN0SWQgfSksXG4gIH1cbn1cblxuZXhwb3J0IHsgdXNlVG9hc3QsIHRvYXN0IH1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlRPQVNUX0xJTUlUIiwiVE9BU1RfUkVNT1ZFX0RFTEFZIiwiYWN0aW9uVHlwZXMiLCJBRERfVE9BU1QiLCJVUERBVEVfVE9BU1QiLCJESVNNSVNTX1RPQVNUIiwiUkVNT1ZFX1RPQVNUIiwiY291bnQiLCJnZW5JZCIsIk51bWJlciIsIk1BWF9TQUZFX0lOVEVHRVIiLCJ0b1N0cmluZyIsInRvYXN0VGltZW91dHMiLCJNYXAiLCJhZGRUb1JlbW92ZVF1ZXVlIiwidG9hc3RJZCIsImhhcyIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZGVsZXRlIiwiZGlzcGF0Y2giLCJ0eXBlIiwic2V0IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidG9hc3RzIiwidG9hc3QiLCJzbGljZSIsIm1hcCIsInQiLCJpZCIsImZvckVhY2giLCJ1bmRlZmluZWQiLCJvcGVuIiwiZmlsdGVyIiwibGlzdGVuZXJzIiwibWVtb3J5U3RhdGUiLCJsaXN0ZW5lciIsInByb3BzIiwidXBkYXRlIiwiZGlzbWlzcyIsIm9uT3BlbkNoYW5nZSIsInVzZVRvYXN0Iiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInB1c2giLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ui/use-toast.ts\n"));

/***/ })

});