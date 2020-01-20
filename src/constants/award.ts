/*
 * @Author: lifan
 * @Date: 2019-01-27 14:18:57
 * @Last Modified by: lifan
 * @Last Modified time: 2020-01-20 10:23:59
 */
const Img0 = `${process.env.PUBLIC_URL}/assets/images/award_0.jpg`;
const Img1 = `${process.env.PUBLIC_URL}/assets/images/award_1.jpg`;
const Img2 = `${process.env.PUBLIC_URL}/assets/images/award_2.jpg`;
const Img3 = `${process.env.PUBLIC_URL}/assets/images/award_3.jpg`;
const Img4 = `${process.env.PUBLIC_URL}/assets/images/award_4.jpg`;

export type AwardId = 0 | 1 | 2 | 3 | 4;

export interface Award {
  title: string;
  name: string;
  id: AwardId;
  sum: number;
  image: string;
  [propName: string]: any;
}

const awards: Award[] = [
  {
    id: 0,
    image: Img0,
    name: "电子相册",
    sum: 2,
    title: "一等奖",
  },
  {
    id: 1,
    image: Img1,
    name: "智能眼罩",
    sum: 2,
    title: "二等奖",
  },
  {
    id: 2,
    image: Img2,
    name: "天猫精灵",
    sum: 10,
    title: "三等奖",
  },
  {
    id: 3,
    image: Img3,
    name: "糖果礼盒",
    sum: 20,
    title: "四等奖",
  },
  {
    id: 4,
    image: Img4,
    name: "幸运奖",
    sum: 15,
    title: "幸运奖",
  },
];

export default awards;
