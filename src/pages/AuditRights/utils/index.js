/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable prefer-const */
import _ from 'lodash';
// 获取用户权限树数据
export function getTreeData(dataPermissions) {
  // 深拷贝权限
  let permissions = _.cloneDeep(dataPermissions);
  // 获取顶层路由
  let treeData = permissions.filter(item => item.parentId === 0) || [];

  // 生成权限树
  const getPermissionsTree = (routes, data) => {
    if (routes.length === 0) return [];
    routes.map((item, index) => {
      item['title'] = item.permissionName;
      item['value'] = item.permissionId;
      item['key'] = item.permissionId;
      // item['checked'] = 'true';

      let children = data.filter(v => v.parentId === item.permissionId);
      if (children.length > 0) {
        item.children = children;
        getPermissionsTree(children, data);
      }
    });
  };

  getPermissionsTree(treeData, permissions);

  return treeData;
}