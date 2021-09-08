import React from 'react';
import { Menu } from 'antd';
import routes from 'renderer/router/config';
import { withRouter } from 'react-router-dom';
import Icon from 'renderer/components/Icon';

const appRouter = routes[0];
class LayoutHeaderMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      currentMenu: '',
    };
  }

  componentDidMount() {
    const { history } = this.props;
    this.setCurrentMenu();
    history.listen(() => {
      this.setCurrentMenu();
    });
  }

  handleClick = (e) => {
    const currentRoute = appRouter.children.find((item) => item.path === e.key);
    const { history } = this.props;

    function deep(route, parentPath = '') {
      let path = parentPath + '/' + route.path;
      if (route.component) {
        return path;
      }
      const list = (route.children || []).filter((e) => !e.hidden);
      if (list.length) {
        path += deep(list[0]);
      }

      return path;
    }
    const path = deep(currentRoute, appRouter.path);
    history.push(path);
  };

  setCurrentMenu() {
    const { history } = this.props;
    const { currentMenu } = this.state;
    const { pathname } = history.location;
    const current = appRouter.children.find((e) => {
      return pathname.indexOf(e.path) > -1;
    });
    if (current && currentMenu !== current.path) {
      this.setState({ currentMenu: current.path });
    }
  }

  renderMenuItem() {}

  render() {
    const { currentMenu } = this.state;
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[currentMenu]}
          mode="horizontal"
        >
          {appRouter.children.map((e) => {
            return (
              <Menu.Item
                icon={<Icon icon={e.icon} />}
                key={e.path}
                title={e.title}
              >
                {e.title}
              </Menu.Item>
            );
          })}
        </Menu>
      </div>
    );
  }
}
export default withRouter(LayoutHeaderMenu);
