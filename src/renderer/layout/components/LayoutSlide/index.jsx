import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import routes from 'renderer/router/config';

const appRouter = routes[0];
class LayoutSlide extends React.Component {
  constructor() {
    super();
    this.state = {
      currentSelectedMenu: '',
      currentOpenMenu: [],
      collapsed: false,
    };
  }

  componentDidMount() {
    this.setCurrentSelectedMenu();
    this.setCurrentOpenMenu();
    this.props.history.listen((e) => {
      this.setCurrentSelectedMenu(e);
      this.setCurrentOpenMenu(e);
    });
  }

  // 根据路由设置 当前选中的菜单项
  setCurrentSelectedMenu(location) {
    const { pathname } = location || this.props.location;
    this.setState({
      currentSelectedMenu: pathname,
    });
  }

  setCurrentOpenMenu(location) {
    const { pathname } = location || this.props.location;
    const currentRoute = this.getCurrentRoute(location);

    const base = appRouter.path + '/' + currentRoute.path;
    const currentOpenMenu = [];

    const deep = (list = [], parentPath = '') => {
      list.forEach((e) => {
        const currentPath = parentPath + '/' + e.path;
        if (
          pathname.indexOf(currentPath) > -1 &&
          e.children &&
          e.children.length
        ) {
          currentOpenMenu.push(currentPath);
        }
        if (e.children && e.children.length) {
          deep(e.children, currentPath);
        }
      });
    };
    deep(currentRoute.children, base);
    this.setState({ currentOpenMenu });
  }

  getCurrentRoute(location) {
    const { pathname } = location || this.props.location;

    const currentRoute =
      appRouter.children.find((e) => {
        return pathname.indexOf(e.path) > -1;
      }) || {};

    return currentRoute;
  }

  // 渲染菜单
  renderMenu(list, parentPath = '') {
    return list.map((e) => {
      const path = parentPath + '/' + e.path;
      return (
        <React.Fragment key={path}>
          {e.children ? (
            <Menu.SubMenu key={path} title={e.title}>
              {this.renderMenu(e.children, path)}
            </Menu.SubMenu>
          ) : (
            <Menu.Item key={path}>
              <Link to={path}>{e.title}</Link>
            </Menu.Item>
          )}
        </React.Fragment>
      );
    });
  }

  render() {
    const currentRoute = this.getCurrentRoute();
    const menuList = (currentRoute.children || []).filter((e) => !e.hidden);

    // 没有子节点不显示左侧菜单
    if (menuList.length === 0) {
      return null;
    }

    // 子节点只有一个,且子节点为组件时不显示左侧菜单
    if (
      menuList.length === 1 &&
      (!menuList[0].children || menuList[0].children.length === 0)
    ) {
      return null;
    }

    return (
      <div
        className="layout-slide"
        style={{ marginRight: 10, backgroundColor: '#fff', height: '100%' }}
      >
        <Menu
          selectedKeys={[this.state.currentSelectedMenu]}
          openKeys={this.state.currentOpenMenu}
          mode="inline"
          style={{ width: 200 }}
          inlineCollapsed={this.state.collapsed}
        >
          {this.renderMenu(menuList, appRouter.path + '/' + currentRoute.path)}
        </Menu>
      </div>
    );
  }
}
export default withRouter(LayoutSlide);
