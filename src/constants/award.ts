/*
 * @Author: lifan
 * @Date: 2019-01-27 14:18:57
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-28 15:44:24
 */
import Img_0 from '../assets/images/award_0.jpg';
import Img_1 from '../assets/images/award_1.jpg';
import Img_2 from '../assets/images/award_2.jpg';
import Img_3 from '../assets/images/award_3.jpg';
import Img_4 from '../assets/images/award_4.jpg';

export type IAwardId = 0 | 1 | 2 | 3 | 4;

export interface IAward {
  title: string;
  name: string;
  id: IAwardId;
  sum: number;
  image: string;
}

const awards: IAward[] = [
  {
    id: 0,
    image: Img_0,
    name: '电子相册',
    sum: 2,
    title: '一等奖',
  },
  {
    id: 1,
    image: Img_1,
    name: '智能眼罩',
    sum: 2,
    title: '二等奖',
  },
  {
    id: 2,
    image: Img_2,
    name: '天猫精灵',
    sum: 10,
    title: '三等奖',
  },
  {
    id: 3,
    image: Img_3,
    name: '阿尔卑斯糖',
    sum: 20,
    title: '四等奖',
  },
  {
    id: 4,
    image: Img_4,
    name: '幸运奖',
    sum: 15,
    title: '幸运奖',
  },
];

export default awards;
