# wangyong-utils

## Intro

A lib provides many methods to handle data

## Quick Start

### wyUniqueArray()

```tsx
import { wyUniqueArray } from "wangyong-utils"

console.log(wyUniqueArray([1,2,5,2,6,3,3,6,4])); // [1,2,3,4,5,6]
```

### wyDeepClone()

```tsx
import { wyDeepClone } from "wangyong-utils"

interface Obj {
    id: string
    name: string 
    age: number 
    sex: "male" | "female" | "trans" | "other"
    hobby: string[]
}

const obj:Obj = {
    id: "001",
    name: "wangyong",
    age: 23,
    sex: "male",
    hobby: ["basketball", "swim"]
}

const newObj:Obj = wyDeepClone(obj)

console.log(newObj === obj) // false
```

### wyArraySort()

```tsx
import { wyArraySort } from "wangyong-utils"

interface City {
    id: string
    name: string
    gdpPerCapita: number // unit: USD
}

const arr:City[] = [
    {
        id: "001",
        name: "Los Angeles",
        gdpPerCapita: 570000
    },
    {
        id: "004",
        name: "Hong Kong",
        gdpPerCapita: 49800
    },
    {
        id: "002",
        name: "Shanghai",
        gdpPerCapita: 176000
    },
    {
        id: "003",
        name: "Tronto",
        gdpPerCapita: 75000
    },
    {
        id: "005",
        name: "Tokyo",
        gdpPerCapita: 82800
    }
]

console.log(wyArraySort(arr, (a:City, b:City) => {
    return a.gdpPerCapita - b.gdpPerCapita
}))
// [
//     {
//         id: "004",
//         name: "Hong Kong",
//         gdpPerCapita: 49800
//     },
//     {
//         id: "003",
//         name: "Tronto",
//         gdpPerCapita: 75000
//     },
//     {
//         id: "005",
//         name: "Tokyo",
//         gdpPerCapita: 82800
//     },
//     {
//         id: "002",
//         name: "Shanghai",
//         gdpPerCapita: 176000
//     },
//     {
//         id: "001",
//         name: "Los Angeles",
//         gdpPerCapita: 570000
//     }
// ]
```
