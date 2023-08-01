"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wyUniqueArray = void 0;
/**
 * 数组去重
 * @param arr - 数组
 */
function wyUniqueArray(arr) {
    return Array.from(new Set(arr));
}
exports.wyUniqueArray = wyUniqueArray;
