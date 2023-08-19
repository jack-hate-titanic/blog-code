/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2023-07-16 16:31:14
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2023-07-16 16:32:09
 * @FilePath: /jest/src/basic.test.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { findMax, twoSum } from './basic'

// 期望findMax([2, 6, 3])执行后结果为6
test('findMax([2, 6, 3])', () => {
    expect(findMax([2, 6, 3])).toBe(6)
})

// 期望twoSum([2, 3, 4, 6], 10)执行后结果为true
test('twoSum([2, 3, 4, 6], 10)', () => {
    expect(twoSum([2, 3, 4, 6], 10)).toBe(true)
})
