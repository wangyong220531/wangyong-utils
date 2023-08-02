/**
 * 数组去重
 * @param arr - 数组
 */
export function wyUniqueArray<T>(arr: T[]): T[] {
    return Array.from(new Set(arr))
}

/**
 * 深拷贝
 * @param obj - 对象
 */
export function wyDeepClone<T>(obj: T): T {
    if (typeof obj !== "object" || obj === null) {
        return obj
    }
    if (obj instanceof Date) {
        return new Date(obj.getTime()) as any
    }
    if (obj instanceof Array) {
        return obj.reduce((arr, cur) => {
            arr.push(wyDeepClone(cur))
            return arr
        }, []) as any
    }
    let newObj = {} as { [key: string]: any }
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = wyDeepClone(obj[key])
        }
    }
    return newObj as T
}

/**
 * 数组排序
 * @param arr - 数组，compareFunction - 排序方法
 */
export function wyArraySort<T>(arr: T[], compareFunction?: (a: T, b: T) => number) {
    const newArr = wyDeepClone(arr)
    if (newArr instanceof Array) {
        newArr.sort(compareFunction)
        return newArr
    }
    return
}
