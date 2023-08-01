/**
 * 数组去重
 * @param arr - 数组
 */
export function wyUniqueArray<T>(arr: T[]): T[] {
    return Array.from(new Set(arr))
}
