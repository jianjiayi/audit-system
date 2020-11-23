/* eslint-disable prefer-const */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
// src/access.ts

/**
 *获取用户路由或按钮权限集合
 *
 * @param {*} [data=[]]
 * @param {number} [type=0]
 * @return {*} 
 */
const getRouteOrButtonPermissions = (data = [], type = 0, path=null) => {
  if(data.length === 0) return [];

  let dataArray = [];
  for(let i = data.length-1; i >= 0; i--){
    if(data[i].type === type){
      if(type === 0 && path) {
        dataArray.push(data[i])
      }else{
        dataArray.push(data[i].permissionUrl)
      }
    }
  }
  return dataArray;
}



export default function access(initialState) {
  const { currentUser } = initialState || {};
  const { permissions=[] } = currentUser || {};

  return {
    canAdmin: (routes) => {
      // console.log(routes.path, getRoutePath(permissions), getRoutePath(permissions).includes(routes.path))
      // 一步获取的路由集合包含正访问的路由返回true；否则返回false；
      return  getRouteOrButtonPermissions(permissions, 0).includes(routes.path);
    },
    canReadButton: (routes, perms) => {
      // console.log(routes, perms)
      let AllPath = getRouteOrButtonPermissions(permissions, 0, 'all');
      let nowRoute = AllPath.find(item => item.permissionUrl === routes);
      // console.log(nowRoute)

      // 获取当前路由下的所有按钮
      const btnPermission = permissions.filter(
        item => item.parentId === nowRoute.permissionId && item.perms === perms
      );
      return btnPermission.length;
    }
  };
}
