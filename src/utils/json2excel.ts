/*
 * @Author: lifan
 * @Date: 2019-01-30 10:00:14
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-30 10:46:35
 */
import { utils, writeFile } from 'xlsx';

export default (data: any[], key: string[], filename: string) => {
  const wb = utils.book_new();
  const ws = utils.json_to_sheet(data, {header: key, skipHeader: true});
  utils.book_append_sheet(wb, ws, filename);
  writeFile(wb, filename + '.xlsx');
};
